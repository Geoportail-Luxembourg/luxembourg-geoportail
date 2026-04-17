#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const DEFAULT_LANGS = ['fr', 'de', 'en', 'lb']
const ROOT = path.resolve(__dirname, '..', '..')
const LOCALES_DIR = path.join(ROOT, 'public', 'assets', 'locales')

// Clés métier à migrer de client vers app
const BUSINESS_KEYS_TO_MIGRATE = [
  'my_maps',
  'infos',
  'lidar',
  'itineraire',
  'layers',
  'my_layers',
  'Catalog',
  'basemap_2015_global',
  'topogr_global',
  'topo_bw_jpeg',
  'informations_parcelles',
  'adresses',
  'cadastre',
  'baticom',
  // Ajoutez d'autres clés métier selon le besoin
]

function printHelp() {
  console.log(
    `\nUsage:\n  node tools/translations/merge-client-keys-to-app.cjs [options]\n\nOptions:\n  --langs=fr,de,en,lb                 Languages to process (default: fr,de,en,lb)\n  --dry-run                           Show what would be changed without writing files\n  --help                              Show this help\n\nThis script merges business keys from client.xx.json into app.xx.json\n`
  )
}

function parseArgs(argv) {
  const options = {
    langs: [...DEFAULT_LANGS],
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
    }
  }

  return options
}

function loadJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(content)
  } catch (err) {
    console.warn(`⚠️  Could not load ${filePath}: ${err.message}`)
    return {}
  }
}

function sortObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      result[key] = obj[key]
      return result
    }, {})
}

function mergeKeysToApp(langs, dryRun) {
  console.log(
    `\n🔄 Merging business keys from client.xx.json into app.xx.json...\n`
  )

  let totalMerged = 0
  let filesModified = 0

  for (const lang of langs) {
    const clientPath = path.join(LOCALES_DIR, `client.${lang}.json`)
    const appPath = path.join(LOCALES_DIR, `app.${lang}.json`)

    if (!fs.existsSync(clientPath)) {
      console.warn(`⚠️  Skipping ${lang}: client.${lang}.json not found`)
      continue
    }

    if (!fs.existsSync(appPath)) {
      console.warn(`⚠️  Skipping ${lang}: app.${lang}.json not found`)
      continue
    }

    const clientData = loadJson(clientPath)
    const appData = loadJson(appPath)

    let mergedCount = 0

    // Fusion des clés métier
    for (const key of BUSINESS_KEYS_TO_MIGRATE) {
      if (key in clientData && !(key in appData)) {
        appData[key] = clientData[key]
        mergedCount++
      } else if (key in clientData && key in appData) {
        // Clé déjà présente dans app, on garde la valeur de app (pas de surcharge)
        console.log(
          `   ℹ️  Key "${key}" already in app.${lang}.json, keeping existing value`
        )
      }
    }

    if (mergedCount > 0) {
      filesModified++
      totalMerged += mergedCount

      // Trier les clés
      const sortedAppData = sortObjectKeys(appData)

      if (!dryRun) {
        fs.writeFileSync(appPath, JSON.stringify(sortedAppData, null, 2) + '\n')
        console.log(`✓ app.${lang}.json: merged ${mergedCount} keys`)
      } else {
        console.log(
          `[DRY-RUN] app.${lang}.json: would merge ${mergedCount} keys`
        )
      }
    } else {
      console.log(`✓ app.${lang}.json: no keys to merge`)
    }
  }

  console.log(
    `\n📊 Summary: ${totalMerged} keys merged across ${filesModified} file(s)`
  )

  if (dryRun) {
    console.log(
      '(No files were modified - use without --dry-run to apply changes)'
    )
  }
}

// Main
const args = process.argv.slice(2)
const options = parseArgs(args)

if (options.help) {
  printHelp()
  process.exit(0)
}

console.log(`📝 Business keys to migrate:`)
BUSINESS_KEYS_TO_MIGRATE.forEach(key => console.log(`   - ${key}`))

mergeKeysToApp(options.langs, options.dryRun)
