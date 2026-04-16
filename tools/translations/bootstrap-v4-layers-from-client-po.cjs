#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const DEFAULT_LANGS = ['fr', 'de', 'en', 'lb']
const ROOT = path.resolve(__dirname, '..', '..')
const DEFAULT_CLIENT_DIR = path.join(
  ROOT,
  'tools',
  'translations',
  'transifex',
  'v3-po'
)
const DEFAULT_TARGET_ROOT = path.join(
  ROOT,
  'geoportal',
  'geoportailv3_geoportal',
  'locale'
)
const DEFAULT_RESOURCE_NAME = 'geoportailv4_geoportal-layers'
const DEFAULT_BOOTSTRAP_LANG = 'fr'

function printHelp() {
  console.log(`
Usage:
  node tools/translations/bootstrap-v4-layers-from-client-po.cjs [options]

Options:
  --langs=fr,de,en,lb              Languages to process (default: fr,de,en,lb)
  --client-dir=PATH                Directory containing client.<lang>.po files
  --target-root=PATH               Root locale directory for the new resource
  --resource-name=NAME             Target resource basename (default: geoportailv4_geoportal-layers)
  --source-pot=PATH                Use an existing POT file as key source
  --bootstrap-lang=fr              Language file used to bootstrap the POT when --source-pot is absent
  --dry-run                        Preview generated files without writing them
  --help                           Show this help

Behavior:
  - If --source-pot exists, its msgids define the target key set.
  - Otherwise, the script bootstraps the POT from client.<bootstrap-lang>.po.
  - For each target language, msgstr values are copied from client.<lang>.po by matching msgid.
`)
}

function parseArgs(argv) {
  const options = {
    langs: [...DEFAULT_LANGS],
    clientDir: DEFAULT_CLIENT_DIR,
    targetRoot: DEFAULT_TARGET_ROOT,
    resourceName: DEFAULT_RESOURCE_NAME,
    sourcePot: '',
    bootstrapLang: DEFAULT_BOOTSTRAP_LANG,
    dryRun: false,
  }

  for (const arg of argv) {
    if (arg === '--help') {
      printHelp()
      process.exit(0)
    }

    if (arg === '--dry-run') {
      options.dryRun = true
      continue
    }

    if (arg.startsWith('--langs=')) {
      options.langs = arg
        .slice('--langs='.length)
        .split(',')
        .map(value => value.trim())
        .filter(Boolean)
      continue
    }

    if (arg.startsWith('--client-dir=')) {
      options.clientDir = path.resolve(arg.slice('--client-dir='.length))
      continue
    }

    if (arg.startsWith('--target-root=')) {
      options.targetRoot = path.resolve(arg.slice('--target-root='.length))
      continue
    }

    if (arg.startsWith('--resource-name=')) {
      options.resourceName = arg.slice('--resource-name='.length).trim()
      continue
    }

    if (arg.startsWith('--source-pot=')) {
      options.sourcePot = path.resolve(arg.slice('--source-pot='.length))
      continue
    }

    if (arg.startsWith('--bootstrap-lang=')) {
      options.bootstrapLang = arg.slice('--bootstrap-lang='.length).trim()
    }
  }

  return options
}

function ensureFileExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`${label} not found: ${filePath}`)
  }
}

function parseQuotedString(line) {
  const quoteIndex = line.indexOf('"')
  if (quoteIndex < 0) {
    return ''
  }

  return JSON.parse(line.slice(quoteIndex))
}

function readPoField(lines, startIndex, keyword) {
  let index = startIndex
  let value = parseQuotedString(lines[index])

  index += 1
  while (index < lines.length && lines[index].startsWith('"')) {
    value += parseQuotedString(lines[index])
    index += 1
  }

  if (!lines[startIndex].startsWith(`${keyword} `)) {
    throw new Error(`Expected ${keyword} at line ${startIndex + 1}`)
  }

  return { value, nextIndex: index }
}

function parsePo(content) {
  const lines = content.split(/\r?\n/)
  const entries = []
  let pendingComments = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (!line || line.trim() === '') {
      pendingComments = []
      index += 1
      continue
    }

    if (line.startsWith('#')) {
      pendingComments.push(line)
      index += 1
      continue
    }

    if (!line.startsWith('msgid ')) {
      index += 1
      continue
    }

    const comments = [...pendingComments]
    pendingComments = []

    const msgidField = readPoField(lines, index, 'msgid')
    index = msgidField.nextIndex

    if (index >= lines.length || !lines[index].startsWith('msgstr ')) {
      throw new Error(`Missing msgstr after msgid '${msgidField.value}'`)
    }

    const msgstrField = readPoField(lines, index, 'msgstr')
    index = msgstrField.nextIndex

    entries.push({
      comments,
      msgid: msgidField.value,
      msgstr: msgstrField.value,
    })
  }

  return entries
}

function poStringLiteral(value) {
  return JSON.stringify(value)
}

function formatPoField(keyword, value) {
  if (!value.includes('\n')) {
    return `${keyword} ${poStringLiteral(value)}`
  }

  const parts = value.endsWith('\n')
    ? value.slice(0, -1).split('\n')
    : value.split('\n')
  const rendered = parts.map(part => poStringLiteral(`${part}\n`))

  return `${keyword} ""\n${rendered.join('\n')}`
}

function formatPo(entries) {
  return `${entries
    .map(entry => {
      const comments =
        entry.comments.length > 0 ? `${entry.comments.join('\n')}\n` : ''

      return `${comments}${formatPoField('msgid', entry.msgid)}\n${formatPoField('msgstr', entry.msgstr)}`
    })
    .join('\n\n')}\n`
}

function buildPotHeader() {
  const now = new Date()
  const year = now.getUTCFullYear()
  const month = String(now.getUTCMonth() + 1).padStart(2, '0')
  const day = String(now.getUTCDate()).padStart(2, '0')
  const hours = String(now.getUTCHours()).padStart(2, '0')
  const minutes = String(now.getUTCMinutes()).padStart(2, '0')

  return (
    [
      'Project-Id-Version: portail',
      `POT-Creation-Date: ${year}-${month}-${day} ${hours}:${minutes}+0000`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      'Generated-By: bootstrap-v4-layers-from-client-po.cjs',
      'Language: frp',
    ].join('\n') + '\n'
  )
}

function buildPotEntriesFromReference(referenceEntries) {
  return referenceEntries.map((entry, index) => {
    if (index === 0 && entry.msgid === '') {
      return {
        comments:
          entry.comments.length > 0
            ? entry.comments
            : ['# SOME DESCRIPTIVE TITLE'],
        msgid: '',
        msgstr: buildPotHeader(),
      }
    }

    return {
      comments: entry.comments,
      msgid: entry.msgid,
      msgstr: '',
    }
  })
}

function cloneEntriesWithTranslations(templateEntries, translatedEntries) {
  const translationsByMsgid = new Map(
    translatedEntries.map(entry => [entry.msgid, entry.msgstr])
  )

  return templateEntries.map((entry, index) => {
    if (index === 0 && entry.msgid === '') {
      const translatedHeader =
        translatedEntries[0] && translatedEntries[0].msgid === ''
          ? translatedEntries[0].msgstr
          : entry.msgstr

      return {
        comments: entry.comments,
        msgid: '',
        msgstr: translatedHeader,
      }
    }

    return {
      comments: entry.comments,
      msgid: entry.msgid,
      msgstr: translationsByMsgid.get(entry.msgid) ?? '',
    }
  })
}

function countFilledEntries(entries) {
  return entries.filter((entry, index) => index > 0 && entry.msgstr !== '')
    .length
}

function writeFile(filePath, content, dryRun) {
  if (dryRun) {
    console.log(`[DRY-RUN] Would write ${filePath}`)
    return
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const sourcePotPath =
    options.sourcePot ||
    path.join(options.targetRoot, `${options.resourceName}.pot`)

  let templateEntries
  if (options.sourcePot && fs.existsSync(options.sourcePot)) {
    templateEntries = parsePo(fs.readFileSync(options.sourcePot, 'utf-8'))
    console.log(`📥 Using existing POT as source: ${options.sourcePot}`)
  } else if (fs.existsSync(sourcePotPath)) {
    templateEntries = parsePo(fs.readFileSync(sourcePotPath, 'utf-8'))
    console.log(`📥 Using existing POT as source: ${sourcePotPath}`)
  } else {
    const bootstrapPoPath = path.join(
      options.clientDir,
      `client.${options.bootstrapLang}.po`
    )
    ensureFileExists(bootstrapPoPath, 'Bootstrap PO file')
    const bootstrapEntries = parsePo(fs.readFileSync(bootstrapPoPath, 'utf-8'))
    templateEntries = buildPotEntriesFromReference(bootstrapEntries)
    console.log(`🧱 Bootstrapping POT from ${bootstrapPoPath}`)
  }

  const potFilePath = path.join(
    options.targetRoot,
    `${options.resourceName}.pot`
  )
  writeFile(potFilePath, formatPo(templateEntries), options.dryRun)

  const totalKeys = Math.max(templateEntries.length - 1, 0)
  console.log(`📝 Target POT contains ${totalKeys} keys`)

  for (const lang of options.langs) {
    const clientPoPath = path.join(options.clientDir, `client.${lang}.po`)
    ensureFileExists(clientPoPath, `Client PO file for ${lang}`)

    const clientEntries = parsePo(fs.readFileSync(clientPoPath, 'utf-8'))
    const localizedEntries = cloneEntriesWithTranslations(
      templateEntries,
      clientEntries
    )
    const outputPath = path.join(
      options.targetRoot,
      `${options.resourceName}.${lang}.po`
    )

    writeFile(outputPath, formatPo(localizedEntries), options.dryRun)
    console.log(
      `✓ ${lang}: ${countFilledEntries(localizedEntries)}/${totalKeys} translations copied to ${outputPath}`
    )
  }
}

try {
  main()
} catch (error) {
  console.error(`❌ ${error.message}`)
  process.exit(1)
}
