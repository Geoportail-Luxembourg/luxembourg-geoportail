#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const DEFAULT_LANGS = ['fr', 'de', 'en', 'lb']
const DEFAULT_NAMESPACES = ['server', 'legends', 'tooltips', 'layers']
const ROOT = path.resolve(__dirname, '..', '..')
const DEFAULT_INPUT_DIR = path.join(
  ROOT,
  'tools',
  'translations',
  'transifex',
  'v3-po'
)
const DEFAULT_OUTPUT_DIR = path.join(ROOT, 'public', 'assets', 'locales')

function printHelp() {
  console.log(
    `\nUsage:\n  node tools/translations/transform-tx-v3-po-to-v4-json.cjs [options]\n\nOptions:\n  --langs=fr,de,en,lb                 Languages to process (default: fr,de,en,lb)\n  --namespaces=server,legends,...     Namespaces to transform (default: server,legends,tooltips,layers)\n  --input-dir=...                     Directory containing pulled .po files\n  --output-dir=...                    Directory containing v4 locale JSON files\n  --dry-run                           Compute changes without writing JSON files\n  --help                              Show this help\n\nExpected input files:\n  <input-dir>/<namespace>.<lang>.po\n\nOutput files:\n  <output-dir>/<namespace>.<lang>.json\n`
  )
}

function parseArgs(argv) {
  const options = {
    langs: [...DEFAULT_LANGS],
    namespaces: [...DEFAULT_NAMESPACES],
    inputDir: DEFAULT_INPUT_DIR,
    outputDir: DEFAULT_OUTPUT_DIR,
    dryRun: false,
    help: false,
  }

  for (const arg of argv) {
    if (arg === '--help') options.help = true
    else if (arg === '--dry-run') options.dryRun = true
    else if (arg.startsWith('--langs=')) {
      const langs = arg
        .slice('--langs='.length)
        .split(',')
        .map(v => v.trim())
        .filter(Boolean)
      if (langs.length > 0) options.langs = langs
    } else if (arg.startsWith('--namespaces=')) {
      const namespaces = arg
        .slice('--namespaces='.length)
        .split(',')
        .map(v => v.trim())
        .filter(Boolean)
      if (namespaces.length > 0) options.namespaces = namespaces
    } else if (arg.startsWith('--input-dir=')) {
      options.inputDir = path.resolve(
        ROOT,
        arg.slice('--input-dir='.length).trim()
      )
    } else if (arg.startsWith('--output-dir=')) {
      options.outputDir = path.resolve(
        ROOT,
        arg.slice('--output-dir='.length).trim()
      )
    }
  }

  return options
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true })
}

function decodePoString(quoted) {
  return JSON.parse(quoted)
}

function parsePoFile(content) {
  const entries = {}
  const lines = content.split(/\r?\n/)
  let current = null
  let activeField = null

  function newEntry() {
    return {
      msgid: [],
      msgstr: {},
      msgctxt: [],
    }
  }

  function finalizeEntry() {
    if (!current) return
    const msgid = current.msgid.join('')
    if (msgid === '') {
      current = null
      activeField = null
      return
    }

    const msgstr =
      current.msgstr[0] !== undefined
        ? current.msgstr[0].join('')
        : current.msgstr.default !== undefined
          ? current.msgstr.default.join('')
          : ''

    entries[msgid] = msgstr || msgid
    current = null
    activeField = null
  }

  for (const line of lines) {
    if (line.trim() === '') {
      finalizeEntry()
      continue
    }

    if (line.startsWith('#')) {
      continue
    }

    if (!current) {
      current = newEntry()
    }

    let match = line.match(/^msgctxt\s+(".*")$/)
    if (match) {
      activeField = { type: 'msgctxt' }
      current.msgctxt.push(decodePoString(match[1]))
      continue
    }

    match = line.match(/^msgid\s+(".*")$/)
    if (match) {
      activeField = { type: 'msgid' }
      current.msgid.push(decodePoString(match[1]))
      continue
    }

    match = line.match(/^msgid_plural\s+(".*")$/)
    if (match) {
      activeField = { type: 'msgid_plural' }
      continue
    }

    match = line.match(/^msgstr\s+(".*")$/)
    if (match) {
      activeField = { type: 'msgstr', index: 'default' }
      current.msgstr.default = [decodePoString(match[1])]
      continue
    }

    match = line.match(/^msgstr\[(\d+)\]\s+(".*")$/)
    if (match) {
      activeField = { type: 'msgstr', index: Number(match[1]) }
      current.msgstr[Number(match[1])] = [decodePoString(match[2])]
      continue
    }

    match = line.match(/^(".*")$/)
    if (match && activeField) {
      const decoded = decodePoString(match[1])
      if (activeField.type === 'msgid') {
        current.msgid.push(decoded)
      } else if (activeField.type === 'msgctxt') {
        current.msgctxt.push(decoded)
      } else if (activeField.type === 'msgstr') {
        current.msgstr[activeField.index].push(decoded)
      }
    }
  }

  finalizeEntry()
  return entries
}

function sortObjectByKey(input) {
  return Object.fromEntries(
    Object.entries(input).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  )
}

function writeJsonFile(filePath, data) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(
    filePath,
    `${JSON.stringify(sortObjectByKey(data), null, 2)}\n`,
    'utf8'
  )
}

function writeWrappedJsonFile(filePath, lang, data) {
  ensureDir(path.dirname(filePath))
  const wrapped = { [lang]: sortObjectByKey(data) }
  fs.writeFileSync(filePath, `${JSON.stringify(wrapped, null, 2)}\n`, 'utf8')
}

function transformNamespace(options, namespace, lang) {
  const poPath = path.join(options.inputDir, `${namespace}.${lang}.po`)
  const jsonPath = path.join(options.outputDir, `${namespace}.${lang}.json`)

  if (!fs.existsSync(poPath)) {
    return {
      namespace,
      lang,
      skipped: true,
      reason: `missing ${path.relative(ROOT, poPath)}`,
    }
  }

  const poContent = fs.readFileSync(poPath, 'utf8')
  const dictionary = parsePoFile(poContent)
  const entryCount = Object.keys(dictionary).length

  const results = []

  if (!options.dryRun) {
    writeJsonFile(jsonPath, dictionary)
  }

  results.push({
    namespace,
    lang,
    skipped: false,
    entryCount,
    output: path.relative(ROOT, jsonPath),
  })

  if (namespace === 'layers') {
    const wrappedJsonPath = path.join(
      options.outputDir,
      `${namespace}-${lang}.json`
    )
    if (!options.dryRun) {
      writeWrappedJsonFile(wrappedJsonPath, lang, dictionary)
    }
    results.push({
      namespace,
      lang,
      skipped: false,
      entryCount,
      output: path.relative(ROOT, wrappedJsonPath),
    })
  }

  return results
}

function run() {
  const options = parseArgs(process.argv.slice(2))

  if (options.help) {
    printHelp()
    return
  }

  console.log(`Input directory: ${path.relative(ROOT, options.inputDir)}`)
  console.log(`Output directory: ${path.relative(ROOT, options.outputDir)}`)
  console.log(`Namespaces: ${options.namespaces.join(', ')}`)
  console.log(`Languages: ${options.langs.join(', ')}`)

  const results = []
  for (const namespace of options.namespaces) {
    for (const lang of options.langs) {
      const result = transformNamespace(options, namespace, lang)
      if (Array.isArray(result)) {
        results.push(...result)
      } else {
        results.push(result)
      }
    }
  }

  const written = results.filter(result => !result.skipped)
  const skipped = results.filter(result => result.skipped)

  console.log(`\nConverted ${written.length} namespace/language files`)
  for (const result of written) {
    console.log(
      `  ${result.namespace}.${result.lang}: ${result.entryCount} entries -> ${result.output}${options.dryRun ? ' (dry-run)' : ''}`
    )
  }

  if (skipped.length > 0) {
    console.log(`\nSkipped ${skipped.length} files`)
    for (const result of skipped) {
      console.log(`  ${result.namespace}.${result.lang}: ${result.reason}`)
    }
  }
}

run()
