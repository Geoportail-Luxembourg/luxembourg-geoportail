#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const LOCALES_DIR = path.join(
  __dirname,
  '..',
  '..',
  'public',
  'assets',
  'locales'
)

// Charge un fichier JSON
function loadJson(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

// Trie les clés
function sortObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      result[key] = obj[key]
      return result
    }, {})
}

const appEnPath = path.join(LOCALES_DIR, 'app.en.json')
const appFrPath = path.join(LOCALES_DIR, 'app.fr.json')
const clientFrPath = path.join(LOCALES_DIR, 'client.fr.json')

const appEn = loadJson(appEnPath)
const appFr = loadJson(appFrPath)
const clientFr = loadJson(clientFrPath)

let added = 0

console.log('🔄 Synchronizing missing keys from app.en to app.fr...\n')

for (const key of Object.keys(appEn)) {
  if (!(key in appFr)) {
    // Essaie de trouver la traduction FR
    if (key in clientFr) {
      appFr[key] = clientFr[key]
      console.log(`  ✓ ${key}: copied from client.fr.json`)
      added++
    } else {
      // Fallback: utilise la valeur EN comme placeholder
      appFr[key] = appEn[key]
      console.log(`  ⚠️  ${key}: used app.en value (no FR translation found)`)
      added++
    }
  }
}

const sortedAppFr = sortObjectKeys(appFr)
fs.writeFileSync(appFrPath, JSON.stringify(sortedAppFr, null, 2) + '\n')

console.log(`\n📊 Added ${added} missing keys to app.fr.json`)
