#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const DEFAULT_LANGS = ['fr', 'de', 'en', 'lb']
const ROOT = path.resolve(__dirname, '..', '..')
const DEFAULT_LOCALE_DIR = path.join(ROOT, 'public', 'assets', 'locales')

function printHelp() {
  console.log(`
Usage:
  node tools/translations/dedup-client-from-layers.cjs [options]

Options:
  --langs=fr,de,en,lb              Languages to process (default: fr,de,en,lb)
  --locale-dir=PATH                Directory containing locale JSON files
  --dry-run                        Preview changes without writing files
  --help                           Show this help

Behavior:
  - Loads layers.<lang>.json to get the set of keys to remove
  - Loads client.<lang>.json
  - Removes all keys that exist in layers.<lang>.json
  - Writes the deduplicated client.<lang>.json
`)
}

function parseArgs(argv) {
  const options = {
    langs: [...DEFAULT_LANGS],
    localeDir: DEFAULT_LOCALE_DIR,
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
        .map(v => v.trim())
        .filter(Boolean)
      continue
    }

    if (arg.startsWith('--locale-dir=')) {
      options.localeDir = path.resolve(arg.slice('--locale-dir='.length))
      continue
    }
  }

  return options
}

function ensureFileExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`${label} not found: ${filePath}`)
  }
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

function main() {
  const options = parseArgs(process.argv.slice(2))

  console.log(`Locale directory: ${path.relative(ROOT, options.localeDir)}`)
  console.log(`Languages: ${options.langs.join(', ')}`)
  console.log()

  for (const lang of options.langs) {
    const layersPath = path.join(options.localeDir, `layers.${lang}.json`)
    const clientPath = path.join(options.localeDir, `client.${lang}.json`)

    ensureFileExists(layersPath, `Layers file for ${lang}`)
    ensureFileExists(clientPath, `Client file for ${lang}`)

    const layers = loadJson(layersPath)
    const client = loadJson(clientPath)

    const layerKeys = new Set(Object.keys(layers))
    const originalClientSize = Object.keys(client).length

    const dedupedClient = Object.fromEntries(
      Object.entries(client).filter(([key]) => !layerKeys.has(key))
    )

    const removedCount = originalClientSize - Object.keys(dedupedClient).length

    if (!options.dryRun) {
      writeJson(clientPath, dedupedClient)
    }

    console.log(
      `${lang}: removed ${removedCount}/${originalClientSize} keys (${((removedCount / originalClientSize) * 100).toFixed(1)}%)${options.dryRun ? ' [DRY-RUN]' : ''}`
    )
  }

  console.log()
  console.log('✓ Deduplication complete')
}

try {
  main()
} catch (error) {
  console.error(`❌ ${error.message}`)
  process.exit(1)
}
