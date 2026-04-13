#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const DEFAULT_LANGS = ['fr', 'de', 'en', 'lb']
const ROOT = path.resolve(__dirname, '..', '..')
const SOURCE_DIR = path.join(ROOT, 'src')
const LOCALES_DIR = path.join(ROOT, 'public', 'assets', 'locales')
const DOWNLOAD_DIR = path.join(ROOT, 'tools', 'translations', 'downloads')
const DEFAULT_URL_TEMPLATE =
  'https://map.geoportail.lu/static/NO_CACHE/{lang}.json'

function printHelp() {
  console.log(
    `\nUsage:\n  node tools/translations/sync-v3-to-app.cjs [options]\n\nOptions:\n  --langs=fr,de,en,lb      Languages to process (default: fr,de,en,lb)\n  --url-template=...       Download URL template (use {lang})\n  --skip-download          Reuse JSON files already downloaded\n  --dry-run                Compute changes without writing locale files\n  --prune-client           Remove migrated used keys from client.xx.json\n  --help                   Show this help\n\nBehavior:\n  1) Extract i18n keys from source files in src/\n  2) Download latest v3 dictionaries from map.geoportail.lu\n  3) For each language, inject values into app.xx.json with priority:\n     v3 download > client.xx.json > keep existing app.xx.json\n  4) Optionally remove migrated keys from client.xx.json (--prune-client)\n`
  )
}

function parseArgs(argv) {
  const options = {
    langs: [...DEFAULT_LANGS],
    urlTemplate: DEFAULT_URL_TEMPLATE,
    skipDownload: false,
    dryRun: false,
    pruneClient: false,
    help: false,
  }

  for (const arg of argv) {
    if (arg === '--help') options.help = true
    else if (arg === '--skip-download') options.skipDownload = true
    else if (arg === '--dry-run') options.dryRun = true
    else if (arg === '--prune-client') options.pruneClient = true
    else if (arg.startsWith('--langs=')) {
      const langs = arg
        .slice('--langs='.length)
        .split(',')
        .map(item => item.trim())
        .filter(Boolean)
      if (langs.length > 0) options.langs = langs
    } else if (arg.startsWith('--url-template=')) {
      options.urlTemplate = arg.slice('--url-template='.length).trim()
    }
  }

  return options
}

function walkFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (
        entry.name === 'node_modules' ||
        entry.name === 'dist' ||
        entry.name === 'bundle' ||
        entry.name === '__fixtures__'
      ) {
        continue
      }
      files.push(...walkFiles(absolutePath))
      continue
    }

    const isWantedExtension = /\.(vue|ts|js)$/.test(entry.name)
    const isTestFile = /\.(spec|test)\.(ts|js|vue)$/.test(entry.name)

    if (isWantedExtension && !isTestFile) {
      files.push(absolutePath)
    }
  }

  return files
}

function extractTranslationKeys(content) {
  const keys = new Set()
  const regex =
    /(?:\$?t|i18next\.t)\(\s*(?:'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"|`([^`\\]*(?:\\.[^`\\]*)*)`)\s*(?:,|\))/g

  let match
  while ((match = regex.exec(content)) !== null) {
    const key = match[1] ?? match[2] ?? match[3] ?? ''
    if (!key) continue
    if (key.includes('${')) continue
    keys.add(key)
  }

  return keys
}

function collectAppKeys() {
  const sourceFiles = walkFiles(SOURCE_DIR)
  const keySet = new Set()

  for (const filePath of sourceFiles) {
    const content = fs.readFileSync(filePath, 'utf8')
    const fileKeys = extractTranslationKeys(content)
    for (const key of fileKeys) {
      keySet.add(key)
    }
  }

  return {
    sourceFilesCount: sourceFiles.length,
    keys: keySet,
  }
}

async function downloadJson(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} while downloading ${url}`)
  }

  const payload = await response.json()
  if (!payload || Array.isArray(payload) || typeof payload !== 'object') {
    throw new Error(`Invalid JSON object from ${url}`)
  }

  return payload
}

function normalizeDictionary(payload, lang) {
  let dictionary = payload

  if (
    payload &&
    typeof payload === 'object' &&
    !Array.isArray(payload) &&
    payload[lang] &&
    typeof payload[lang] === 'object' &&
    !Array.isArray(payload[lang])
  ) {
    dictionary = payload[lang]
  }

  if (
    !dictionary ||
    typeof dictionary !== 'object' ||
    Array.isArray(dictionary)
  ) {
    throw new Error(`Unexpected dictionary format for lang '${lang}'`)
  }

  const normalized = {}

  for (const [key, rawValue] of Object.entries(dictionary)) {
    if (typeof rawValue === 'string') {
      normalized[key] = rawValue
      continue
    }

    if (Array.isArray(rawValue)) {
      const firstString = rawValue.find(item => typeof item === 'string')
      if (firstString) {
        normalized[key] = firstString
      }
    }
  }

  return normalized
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true })
}

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {}
  }
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw)
}

function sortObjectByKey(input) {
  return Object.fromEntries(
    Object.entries(input).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  )
}

function writeJsonFile(filePath, data) {
  const sorted = sortObjectByKey(data)
  fs.writeFileSync(filePath, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8')
}

function buildDownloadPath(lang) {
  return path.join(DOWNLOAD_DIR, `${lang}.json`)
}

async function getLatestV3Translations(lang, options) {
  const localFilePath = buildDownloadPath(lang)

  if (!options.skipDownload) {
    ensureDir(DOWNLOAD_DIR)
    const url = options.urlTemplate.replace('{lang}', lang)
    const data = await downloadJson(url)
    fs.writeFileSync(
      localFilePath,
      `${JSON.stringify(data, null, 2)}\n`,
      'utf8'
    )
    return normalizeDictionary(data, lang)
  }

  if (!fs.existsSync(localFilePath)) {
    throw new Error(
      `Missing downloaded file for lang '${lang}': ${path.relative(ROOT, localFilePath)}`
    )
  }

  return normalizeDictionary(readJsonFile(localFilePath), lang)
}

async function run() {
  const options = parseArgs(process.argv.slice(2))

  if (options.help) {
    printHelp()
    return
  }

  const { sourceFilesCount, keys } = collectAppKeys()

  console.log(`Scanned ${sourceFilesCount} source files`)
  console.log(`Detected ${keys.size} unique translation keys in code`)

  for (const lang of options.langs) {
    const latestV3 = await getLatestV3Translations(lang, options)
    const appLocalePath = path.join(LOCALES_DIR, `app.${lang}.json`)
    const clientLocalePath = path.join(LOCALES_DIR, `client.${lang}.json`)
    const appCurrent = readJsonFile(appLocalePath)
    const clientCurrent = readJsonFile(clientLocalePath)

    let matchedInV3 = 0
    let matchedInClient = 0
    let updated = 0
    let removedFromClient = 0
    const missingKeys = []

    for (const key of keys) {
      let newValue

      if (Object.prototype.hasOwnProperty.call(latestV3, key)) {
        newValue = latestV3[key]
        matchedInV3 += 1
      } else if (Object.prototype.hasOwnProperty.call(clientCurrent, key)) {
        newValue = clientCurrent[key]
        matchedInClient += 1
      } else {
        missingKeys.push(key)
        continue
      }

      if (appCurrent[key] !== newValue) {
        appCurrent[key] = newValue
        updated += 1
      }

      if (
        options.pruneClient &&
        Object.prototype.hasOwnProperty.call(clientCurrent, key)
      ) {
        delete clientCurrent[key]
        removedFromClient += 1
      }
    }

    if (!options.dryRun) {
      writeJsonFile(appLocalePath, appCurrent)
      if (options.pruneClient) {
        writeJsonFile(clientLocalePath, clientCurrent)
      }
    }

    console.log(`\n[${lang}]`)
    console.log(`  matched in v3 source: ${matchedInV3}`)
    console.log(`  matched in client fallback: ${matchedInClient}`)
    console.log(`  missing in v3+client sources: ${missingKeys.length}`)
    console.log(`  updated in app.${lang}.json: ${updated}`)
    if (options.pruneClient) {
      console.log(`  removed from client.${lang}.json: ${removedFromClient}`)
    }
    if (missingKeys.length > 0) {
      const preview = missingKeys.slice(0, 8).join(' | ')
      console.log(`  missing sample: ${preview}`)
    }
    if (options.dryRun) {
      console.log('  dry-run: no file written')
    }
  }
}

run().catch(error => {
  console.error('Translation sync failed:', error)
  process.exitCode = 1
})
