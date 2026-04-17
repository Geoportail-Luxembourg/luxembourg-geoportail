#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..', '..')
const DEFAULT_LANGS = ['fr', 'de', 'en', 'lb']
const DEFAULT_SRC_DIR = path.join(ROOT, 'src')
const DEFAULT_LOCALES_DIR = path.join(ROOT, 'public', 'assets', 'locales')
const DEFAULT_PO_DIR = path.join(
  ROOT,
  'tools',
  'translations',
  'transifex',
  'v3-po'
)

function printHelp() {
  console.log(`
Usage:
  node tools/translations/separate-ui-and-layers-keys.cjs [options]

Options:
  --langs=fr,de,en,lb        Languages to process (default: fr,de,en,lb)
  --src-dir=PATH             Source directory to scan for literal t()/$t() keys
  --locales-dir=PATH         Locales directory containing app.<lang>.json and layers.<lang>.json
  --po-dir=PATH              Directory containing layers.pot and layers.<lang>.po
  --dry-run                  Print report without writing files
  --help                     Show this help

Behavior:
  - Collects literal translation keys from source code: t('...'), t("..."), $t('...'), $t("...")
  - Moves matching UI keys from layers.<lang>.json into app.<lang>.json
  - Adds missing UI keys to app.<lang>.json when absent in both (untranslated: value=key)
  - Removes UI keys from layers.pot and layers.<lang>.po by msgid
`)
}

function parseArgs(argv) {
  const options = {
    langs: [...DEFAULT_LANGS],
    srcDir: DEFAULT_SRC_DIR,
    localesDir: DEFAULT_LOCALES_DIR,
    poDir: DEFAULT_PO_DIR,
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

    if (arg.startsWith('--src-dir=')) {
      options.srcDir = path.resolve(arg.slice('--src-dir='.length))
      continue
    }

    if (arg.startsWith('--locales-dir=')) {
      options.localesDir = path.resolve(arg.slice('--locales-dir='.length))
      continue
    }

    if (arg.startsWith('--po-dir=')) {
      options.poDir = path.resolve(arg.slice('--po-dir='.length))
    }
  }

  return options
}

function ensureFileExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`${label} not found: ${filePath}`)
  }
}

function walkFiles(dir, extensions, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(absolutePath, extensions, out)
      continue
    }
    if (extensions.some(extension => entry.name.endsWith(extension))) {
      out.push(absolutePath)
    }
  }
  return out
}

function decodeQuotedJsString(raw, quote) {
  if (quote === "'") {
    return Function(`return '${raw}'`)()
  }

  return Function(`return "${raw}"`)()
}

function extractLiteralTranslationKeys(srcDir) {
  const files = walkFiles(srcDir, ['.ts', '.vue'])
  const keys = new Set()
  const explicitLayersNsKeys = new Set()
  const patterns = [
    /(?:\b|\$)t\(\s*'((?:\\.|[^'\\])*)'\s*[,)\n]/g,
    /(?:\b|\$)t\(\s*"((?:\\.|[^"\\])*)"\s*[,)\n]/g,
  ]
  const explicitNsPatterns = [
    /(?:\b|\$)t\(\s*'((?:\\.|[^'\\])*)'\s*,\s*\{[\s\S]*?\bns\s*:\s*['"]layers['"][\s\S]*?\}\s*\)/g,
    /(?:\b|\$)t\(\s*"((?:\\.|[^"\\])*)"\s*,\s*\{[\s\S]*?\bns\s*:\s*['"]layers['"][\s\S]*?\}\s*\)/g,
  ]

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8')
    for (const pattern of patterns) {
      let match = pattern.exec(content)
      while (match !== null) {
        const quote = pattern === patterns[0] ? "'" : '"'
        const decoded = decodeQuotedJsString(match[1], quote)
        keys.add(decoded)
        match = pattern.exec(content)
      }
    }

    for (const pattern of explicitNsPatterns) {
      let match = pattern.exec(content)
      while (match !== null) {
        const quote = pattern === explicitNsPatterns[0] ? "'" : '"'
        const decoded = decodeQuotedJsString(match[1], quote)
        explicitLayersNsKeys.add(decoded)
        match = pattern.exec(content)
      }
    }
  }

  for (const key of explicitLayersNsKeys) {
    keys.delete(key)
  }

  return keys
}

function readJson(filePath) {
  ensureFileExists(filePath, 'JSON file')
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function writeJson(filePath, value, dryRun) {
  const content = `${JSON.stringify(value, null, 2)}\n`
  if (!dryRun) {
    fs.writeFileSync(filePath, content, 'utf8')
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
  if (!lines[startIndex].startsWith(`${keyword} `)) {
    throw new Error(`Expected ${keyword} at line ${startIndex + 1}`)
  }

  let index = startIndex
  let value = parseQuotedString(lines[index])
  index += 1

  while (index < lines.length && lines[index].startsWith('"')) {
    value += parseQuotedString(lines[index])
    index += 1
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

function writePoFile(filePath, entries, dryRun) {
  const content = formatPo(entries)
  if (!dryRun) {
    fs.writeFileSync(filePath, content, 'utf8')
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2))

  if (options.langs.length === 0) {
    throw new Error('No languages provided. Use --langs=fr,de,en,lb')
  }

  ensureFileExists(options.srcDir, 'Source directory')
  ensureFileExists(options.localesDir, 'Locales directory')
  ensureFileExists(options.poDir, 'PO directory')

  const uiKeys = extractLiteralTranslationKeys(options.srcDir)

  const report = {
    totalUiKeys: uiKeys.size,
    json: {},
    po: {},
  }

  for (const lang of options.langs) {
    const appPath = path.join(options.localesDir, `app.${lang}.json`)
    const layersPath = path.join(options.localesDir, `layers.${lang}.json`)

    const appJson = readJson(appPath)
    const layersJson = readJson(layersPath)

    let movedFromLayersToApp = 0
    let removedFromLayers = 0
    let addedMissingToApp = 0

    for (const key of uiKeys) {
      const hasInApp = Object.prototype.hasOwnProperty.call(appJson, key)
      const hasInLayers = Object.prototype.hasOwnProperty.call(layersJson, key)

      if (!hasInApp && hasInLayers) {
        appJson[key] = layersJson[key]
        movedFromLayersToApp += 1
      }

      if (!hasInApp && !hasInLayers) {
        appJson[key] = key
        addedMissingToApp += 1
      }

      if (hasInLayers) {
        delete layersJson[key]
        removedFromLayers += 1
      }
    }

    writeJson(appPath, appJson, options.dryRun)
    writeJson(layersPath, layersJson, options.dryRun)

    report.json[lang] = {
      movedFromLayersToApp,
      addedMissingToApp,
      removedFromLayers,
      appCount: Object.keys(appJson).length,
      layersCount: Object.keys(layersJson).length,
    }

    const poPath = path.join(options.poDir, `layers.${lang}.po`)
    ensureFileExists(poPath, 'PO file')
    const poEntries = parsePo(fs.readFileSync(poPath, 'utf8'))
    const filteredPoEntries = poEntries.filter(
      entry => entry.msgid === '' || !uiKeys.has(entry.msgid)
    )
    report.po[`layers.${lang}.po`] = {
      removedEntries: poEntries.length - filteredPoEntries.length,
      remainingEntries: filteredPoEntries.length,
    }
    writePoFile(poPath, filteredPoEntries, options.dryRun)
  }

  const potPath = path.join(options.poDir, 'layers.pot')
  ensureFileExists(potPath, 'POT file')
  const potEntries = parsePo(fs.readFileSync(potPath, 'utf8'))
  const filteredPotEntries = potEntries.filter(
    entry => entry.msgid === '' || !uiKeys.has(entry.msgid)
  )
  report.po['layers.pot'] = {
    removedEntries: potEntries.length - filteredPotEntries.length,
    remainingEntries: filteredPotEntries.length,
  }
  writePoFile(potPath, filteredPotEntries, options.dryRun)

  console.log(JSON.stringify(report, null, 2))
}

main()
