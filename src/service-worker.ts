/// <reference lib="webworker" />
export {}
declare const self: ServiceWorkerGlobalScope

import { createLogger } from '@/lib/logging/namespacedLogger'

/**
 * Service Worker for Luxembourg Geoportail v4
 *
 * VERSION 7.0.3 (+ app-shell precache enhancements)
 *
 * Responsibilities
 * - Cache the full application shell (HTML, JS, CSS, fonts, icons, translations)
 * - Pre-cache default MapLibre styles, TileJSON metadata, and critical glyph ranges
 * - Cache tiles/sprites/glyphs on demand and gracefully degrade offline
 * - Provide cache statistics & maintenance hooks used by the UI
 */

const SW_VERSION = '7.0.3'
const CACHE_VERSION = 'lux-geoportail-v4-v20'

const CACHE_NAMES = {
  APP_SHELL: `${CACHE_VERSION}-app-shell`,
  VT_TILES: `${CACHE_VERSION}-vt-tiles`,
  VT_STYLES: `${CACHE_VERSION}-vt-styles`,
  VT_SPRITES: `${CACHE_VERSION}-vt-sprites`,
  VT_GLYPHS: `${CACHE_VERSION}-vt-glyphs`,
}

const ALL_CACHES = Object.values(CACHE_NAMES)

const REG_SCOPE = self.registration?.scope ?? `${self.location.origin}/`
const APP_BASE_URL = new URL('.', REG_SCOPE).href
const APP_BASE_PATH = new URL(APP_BASE_URL).pathname
const ROOT_URL = `${self.location.origin}/`
const ROOT_INDEX_URL = `${self.location.origin}/index.html`
const ENTRY_URL = APP_BASE_URL
const INDEX_HTML_URL = new URL('index.html', APP_BASE_URL).href
const MANIFEST_CANDIDATE_URLS = Array.from(
  new Set([
    new URL('manifest.json', APP_BASE_URL).href,
    new URL('manifest.json', REG_SCOPE).href,
    new URL('manifest.json', self.location.href).href,
  ])
)

const ENTRYPOINT_URLS = Array.from(
  new Set([ENTRY_URL, INDEX_HTML_URL, ROOT_URL, ROOT_INDEX_URL])
)

const TRANSLATION_FILES = [
  '/assets/locales/app.de.json',
  '/assets/locales/app.en.json',
  '/assets/locales/app.fr.json',
  '/assets/locales/app.lb.json',
  '/assets/locales/client.de.json',
  '/assets/locales/client.en.json',
  '/assets/locales/client.fr.json',
  '/assets/locales/client.lb.json',
  '/assets/locales/legends.de.json',
  '/assets/locales/legends.en.json',
  '/assets/locales/legends.fr.json',
  '/assets/locales/legends.lb.json',
  '/assets/locales/server.de.json',
  '/assets/locales/server.en.json',
  '/assets/locales/server.fr.json',
  '/assets/locales/server.lb.json',
  '/assets/locales/tooltips.de.json',
  '/assets/locales/tooltips.en.json',
  '/assets/locales/tooltips.fr.json',
  '/assets/locales/tooltips.lb.json',
]

const STATIC_APP_SHELL_PATHS = [
  '/favicon.ico',
  '/offline-ui-reference.html',
  '/offline-test.html',
]
const CDN_APP_SHELL_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
]

const TRANSLATION_URLS = TRANSLATION_FILES.map(
  path => new URL(path, self.location.origin).href
)
const STATIC_APP_SHELL_URLS = STATIC_APP_SHELL_PATHS.map(
  path => new URL(path, self.location.origin).href
)
const PRECACHE_APP_SHELL_URLS = Array.from(
  new Set([
    ...ENTRYPOINT_URLS,
    ...TRANSLATION_URLS,
    ...STATIC_APP_SHELL_URLS,
    ...CDN_APP_SHELL_URLS,
  ])
)

const VT_HOSTS = [
  'vectortiles.geoportail.lu',
  'vectortiles-staging.geoportail.lu',
]
const DEFAULT_STYLES = ['roadmap', 'topomap', 'topomap_gray']
const DEFAULT_FONT_FAMILIES = [
  'Noto Sans Regular',
  'Noto Sans Bold',
  'Noto Sans Italic',
]
const CRITICAL_GLYPH_RANGE = '0-255'
const APP_SHELL_CDN_HOSTS = ['cdnjs.cloudflare.com', 'map.geoportail.lu']

type CacheName = (typeof CACHE_NAMES)[keyof typeof CACHE_NAMES]
type PutUrlOptions = {
  parseCss?: boolean
}
type StyleSourceConfig = {
  url?: string
}
type StyleJson = {
  sources?: Record<string, StyleSourceConfig>
}
type ViteManifest = Record<string, ViteManifestEntry>
type ViteManifestEntry = {
  file?: string
  css?: string[]
  assets?: string[]
  imports?: string[]
  dynamicImports?: string[]
  isEntry?: boolean
}

const { log: swLog, warn: swWarn } = createLogger('SW')

swLog(`Bootstrapping service worker v${SW_VERSION} / cache ${CACHE_VERSION}`)

self.addEventListener('install', (event: ExtendableEvent) => {
  const installWork = (async () => {
    await precacheEntrypoint()
    await Promise.all([
      precacheStaticAppShell(),
      precacheViteManifestAssets(),
      precacheDefaultStyles(),
      precacheDefaultGlyphs(),
    ])
  })()

  event.waitUntil(
    installWork
      .catch(error => {
        swWarn('Install failed', error)
      })
      .finally(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event: ExtendableEvent) => {
  const cleanup = caches.keys().then(cacheNames => {
    const deletions = cacheNames.map(cacheName => {
      if (
        cacheName.startsWith('lux-geoportail-v4-') &&
        !ALL_CACHES.includes(cacheName)
      ) {
        swLog('Deleting legacy cache', cacheName)
        return caches.delete(cacheName)
      }
      return undefined
    })

    return Promise.all(deletions)
  })

  event.waitUntil(
    cleanup
      .catch(error => swWarn('Cache cleanup failed', error))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event

  if (request.method !== 'GET') {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigate(request))
    return
  }

  const cacheNameForAppShell = isAppShellResource(request.url)
  if (cacheNameForAppShell) {
    event.respondWith(
      cacheFirstWithNetworkUpdate(request, cacheNameForAppShell)
    )
    return
  }

  const cacheNameForVector = isVectorTileResource(request.url)
  if (cacheNameForVector) {
    if (cacheNameForVector === CACHE_NAMES.VT_STYLES) {
      event.respondWith(networkFirstStrategy(request, cacheNameForVector))
    } else {
      event.respondWith(cacheFirstStrategy(request, cacheNameForVector))
    }
  }
})

self.addEventListener('message', (event: ExtendableMessageEvent) => {
  const { data, ports } = event
  if (!data) {
    return
  }

  if (data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      Promise.all(ALL_CACHES.map(cacheName => caches.delete(cacheName)))
        .then(() => ports?.[0]?.postMessage({ success: true }))
        .catch(error => {
          swWarn('Failed to clear caches', error)
          ports?.[0]?.postMessage({ success: false, error: error.message })
        })
    )
    return
  }

  if (data.type === 'GET_CACHE_SIZE') {
    event.waitUntil(
      getCacheSize().then(size => ports?.[0]?.postMessage({ size }))
    )
    return
  }

  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting()
    return
  }

  if (data.type === 'GET_SW_META') {
    ports?.[0]?.postMessage({
      version: SW_VERSION,
      cacheVersion: CACHE_VERSION,
    })
  }
})

async function precacheEntrypoint() {
  const cache = await caches.open(CACHE_NAMES.APP_SHELL)

  for (const url of ENTRYPOINT_URLS) {
    try {
      const request = new Request(url, { credentials: 'same-origin' })
      const response = await fetch(request)
      if (
        !response.ok ||
        !response.headers.get('content-type')?.includes('text/html')
      ) {
        continue
      }

      await cache.put(request, response.clone())

      const html = await response.clone().text()
      await precacheLinkedAssetsFromHtml(html, url, cache)

      await Promise.all(
        ENTRYPOINT_URLS.filter(alias => alias !== url).map(alias =>
          cache.put(
            new Request(alias, { credentials: 'same-origin' }),
            response.clone()
          )
        )
      )

      swLog('Precaching entrypoint + linked assets succeeded via', url)
      return
    } catch (error) {
      swWarn('Failed to precache entrypoint', url, error)
    }
  }

  swWarn('Unable to precache entry HTML – all attempts failed')
}

async function precacheStaticAppShell() {
  const cache = await caches.open(CACHE_NAMES.APP_SHELL)
  const tasks = PRECACHE_APP_SHELL_URLS.map(url =>
    putUrlInCache(cache, url, { parseCss: true })
  )
  await Promise.allSettled(tasks)
}

async function precacheViteManifestAssets() {
  for (const url of MANIFEST_CANDIDATE_URLS) {
    const request = new Request(url, { credentials: 'same-origin' })
    try {
      const response = await fetch(request)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const cache = await caches.open(CACHE_NAMES.APP_SHELL)
      await cache.put(request, response.clone())

      const manifest = (await response.json()) as ViteManifest
      const assetUrls = collectManifestAssetUrls(manifest)

      if (!assetUrls.size) {
        swWarn('No manifest assets detected to precache from', url)
        return
      }

      swLog('Precaching manifest assets from', url, 'count:', assetUrls.size)
      await Promise.allSettled(
        Array.from(assetUrls).map(assetUrl => putUrlInCache(cache, assetUrl))
      )
      return
    } catch (error) {
      swWarn('Failed to precache build manifest assets via', url, error)
    }
  }
}

function collectManifestAssetUrls(manifest: ViteManifest) {
  const visited = new Set<string>()
  const urls = new Set<string>()

  const addAssetPath = (path: string | undefined) => {
    if (!path) {
      return
    }
    try {
      urls.add(new URL(path, APP_BASE_URL).href)
    } catch (error) {
      swWarn('Failed to resolve manifest asset URL:', path, error)
    }
  }

  const visitEntry = (key: string | undefined) => {
    if (!key || visited.has(key)) {
      return
    }
    visited.add(key)
    const entry = manifest[key]
    if (!entry) {
      return
    }

    addAssetPath(entry.file)
    entry.css?.forEach(addAssetPath)
    entry.assets?.forEach(addAssetPath)

    entry.imports?.forEach(visitEntry)
    entry.dynamicImports?.forEach(visitEntry)
  }

  Object.entries(manifest).forEach(([key, entry]) => {
    if (entry?.isEntry || key.endsWith('.html')) {
      visitEntry(key)
    }
  })

  return urls
}

async function precacheLinkedAssetsFromHtml(
  html: string,
  baseUrl: string,
  cache: Cache
) {
  const assets = Array.from(extractLinkedAssetUrls(html, baseUrl))
  if (!assets.length) {
    return
  }

  swLog('Precaching linked HTML assets:', assets.length)
  await Promise.allSettled(
    assets.map(url => putUrlInCache(cache, url, { parseCss: true }))
  )
}

function extractLinkedAssetUrls(html: string, baseUrl: string) {
  const urls = new Set<string>()
  const patterns = [
    /<script[^>]+src=["']([^"']+)["'][^>]*>/gi,
    /<link[^>]+rel=["'](?:modulepreload|preload|stylesheet)["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
    /<link[^>]+rel=["'](?:icon|apple-touch-icon)["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
    /<img[^>]+src=["']([^"']+)["'][^>]*>/gi,
  ]

  patterns.forEach(regex => {
    let match
    while ((match = regex.exec(html)) !== null) {
      const href = match[1]
      if (!href || href.startsWith('data:') || href.startsWith('mailto:')) {
        continue
      }
      try {
        const absolute = new URL(href, baseUrl).href
        urls.add(absolute)
      } catch (error) {
        swWarn('Failed to resolve linked asset URL:', href, error)
      }
    }
  })

  return urls
}

async function putUrlInCache(
  cache: Cache,
  url: string,
  options: PutUrlOptions = {}
) {
  try {
    const sameOrigin = url.startsWith(self.location.origin)
    const isAllowedExternal = APP_SHELL_CDN_HOSTS.includes(
      new URL(url).hostname
    )
    const requestInit: RequestInit = {
      credentials: sameOrigin ? 'same-origin' : 'omit',
      mode: sameOrigin ? 'same-origin' : 'cors',
    }

    let response
    try {
      const request = new Request(url, requestInit)
      response = await fetch(request)
    } catch (error) {
      if (!sameOrigin && isAllowedExternal && requestInit.mode === 'cors') {
        swWarn('CORS fetch failed, retrying without CORS for asset:', url)
        const fallbackRequest = new Request(url, {
          credentials: 'omit',
          mode: 'no-cors',
        })
        response = await fetch(fallbackRequest)
      } else {
        throw error
      }
    }

    const isOpaqueResponse = response.type === 'opaque'

    if (!isOpaqueResponse && !response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const cacheRequestInit: RequestInit = {
      credentials: sameOrigin ? 'same-origin' : 'omit',
      mode: sameOrigin ? 'same-origin' : isOpaqueResponse ? 'no-cors' : 'cors',
    }

    const cacheRequest = new Request(url, cacheRequestInit)

    await cache.put(cacheRequest, response.clone())

    const canParseCss =
      !isOpaqueResponse &&
      (sameOrigin || isAllowedExternal) &&
      response.headers.get('content-type')?.includes('text/css')

    const shouldParseCss = Boolean(options.parseCss && canParseCss)

    if (shouldParseCss) {
      const cssText = await response.clone().text()
      await precacheCssEmbeddedAssets(cssText, url, cache)
    }
  } catch (error) {
    swWarn('Failed to precache asset:', url, error)
  }
}

async function precacheCssEmbeddedAssets(
  cssText: string,
  baseUrl: string,
  cache: Cache
) {
  const assetUrls = Array.from(extractCssAssetUrls(cssText, baseUrl))
  if (!assetUrls.length) {
    return
  }

  swLog('Precaching CSS-referenced assets:', assetUrls.length)
  await Promise.allSettled(
    assetUrls.map(assetUrl => putUrlInCache(cache, assetUrl))
  )
}

function extractCssAssetUrls(cssText: string, baseUrl: string) {
  const regex = /url\(([^)]+)\)/gi
  const urls = new Set<string>()
  let match

  while ((match = regex.exec(cssText)) !== null) {
    const raw = match[1].trim().replace(/^['"]|['"]$/g, '')
    if (!raw || raw.startsWith('data:') || raw.startsWith('mailto:')) {
      continue
    }

    try {
      const absolute = new URL(raw, baseUrl).href
      const hostname = new URL(absolute).hostname
      if (
        absolute.startsWith(self.location.origin) ||
        APP_SHELL_CDN_HOSTS.includes(hostname)
      ) {
        urls.add(absolute)
      }
    } catch (error) {
      swWarn('Failed to resolve CSS asset URL:', raw, error)
    }
  }

  return urls
}

async function precacheDefaultStyles() {
  const cache = await caches.open(CACHE_NAMES.VT_STYLES)
  const styleUrls = VT_HOSTS.flatMap(host =>
    DEFAULT_STYLES.map(style => `https://${host}/styles/${style}/style.json`)
  )

  swLog(
    'Precaching default vector styles + TileJSON metadata:',
    styleUrls.length,
    'files'
  )

  const tasks = styleUrls.map(url => precacheStyleAndTileJson(cache, url))
  await Promise.allSettled(tasks)
}

async function precacheStyleAndTileJson(cache: Cache, url: string) {
  try {
    const request = new Request(url, { mode: 'cors' })
    const response = await fetch(request)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    await cache.put(request, response.clone())

    const tileJsonUrls = await extractTileJsonUrls(response.clone(), url)
    await Promise.allSettled(
      tileJsonUrls.map(tileUrl => fetchAndPut(cache, tileUrl))
    )

    swLog('Precached style + metadata:', url)
  } catch (error) {
    swWarn('Failed to precache style:', url, error)
  }
}

async function extractTileJsonUrls(response: Response, baseUrl: string) {
  try {
    const data = (await response.json()) as StyleJson
    const sources: Record<string, StyleSourceConfig> = data.sources ?? {}

    return Object.values(sources)
      .map(source =>
        typeof source.url === 'string'
          ? new URL(source.url, baseUrl).href
          : null
      )
      .filter((url): url is string => Boolean(url))
  } catch (error) {
    swWarn('Failed to parse style JSON for TileJSON references', error)
    return []
  }
}

async function fetchAndPut(cache: Cache, url: string) {
  try {
    const request = new Request(url, { mode: 'cors' })
    const response = await fetch(request)
    if (response.ok) {
      await cache.put(request, response.clone())
      swLog('Precached metadata:', url)
    } else {
      throw new Error(`HTTP ${response.status}`)
    }
  } catch (error) {
    swWarn('Failed to precache metadata:', url, error)
  }
}

async function precacheDefaultGlyphs() {
  const cache = await caches.open(CACHE_NAMES.VT_GLYPHS)
  const fontUrls = VT_HOSTS.flatMap(host =>
    DEFAULT_FONT_FAMILIES.map(
      font =>
        `https://${host}/fonts/${encodeURIComponent(
          font
        )}/${CRITICAL_GLYPH_RANGE}.pbf`
    )
  )

  swLog('Precaching critical glyph ranges:', fontUrls.length, 'files')

  const tasks = fontUrls.map(async url => {
    try {
      const request = new Request(url, { mode: 'cors' })
      const response = await fetch(request)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      await cache.put(request, response.clone())
      swLog('Precached glyphs:', url)
    } catch (error) {
      swWarn('Failed to precache glyphs:', url, error)
    }
  })

  await Promise.allSettled(tasks)
}

function isAppShellResource(url: string) {
  try {
    const urlObj = new URL(url)

    if (APP_SHELL_CDN_HOSTS.includes(urlObj.hostname)) {
      return CACHE_NAMES.APP_SHELL
    }

    if (urlObj.origin !== self.location.origin) {
      return null
    }

    const pathname = urlObj.pathname

    if (ENTRYPOINT_URLS.includes(urlObj.href)) {
      return CACHE_NAMES.APP_SHELL
    }

    if (
      pathname === APP_BASE_PATH ||
      pathname === '/' ||
      pathname.endsWith('.html')
    ) {
      return CACHE_NAMES.APP_SHELL
    }

    if (pathname.startsWith('/assets/locales/')) {
      return CACHE_NAMES.APP_SHELL
    }

    if (pathname.match(/\/assets\/.*\.(js|css|svg|png|jpg|jpeg|gif|webp)$/)) {
      return CACHE_NAMES.APP_SHELL
    }

    if (pathname.match(/\.(woff2?|ttf|otf|eot)$/)) {
      return CACHE_NAMES.APP_SHELL
    }

    if (
      pathname.match(/\/(favicon\.ico|.*\.(png|jpg|jpeg|svg|gif|webp))$/) &&
      !pathname.includes('/styles/')
    ) {
      return CACHE_NAMES.APP_SHELL
    }

    return null
  } catch (error) {
    swWarn('Failed to classify app shell resource:', url, error)
    return null
  }
}

function isVectorTileResource(url: string) {
  try {
    const urlObj = new URL(url)
    if (!VT_HOSTS.includes(urlObj.hostname)) {
      return null
    }

    const pathname = urlObj.pathname

    if (pathname.endsWith('.pbf')) {
      if (pathname.includes('/fonts/')) {
        return CACHE_NAMES.VT_GLYPHS
      }
      return CACHE_NAMES.VT_TILES
    }

    if (pathname.includes('/data/') && pathname.endsWith('.png')) {
      return CACHE_NAMES.VT_TILES
    }

    if (pathname.includes('/data/') && pathname.endsWith('.json')) {
      return CACHE_NAMES.VT_STYLES
    }

    if (pathname.includes('/styles/') && pathname.endsWith('style.json')) {
      return CACHE_NAMES.VT_STYLES
    }

    if (
      pathname.includes('/styles/') &&
      (pathname.includes('/sprite') ||
        pathname.endsWith('.png') ||
        pathname.endsWith('.json'))
    ) {
      return CACHE_NAMES.VT_SPRITES
    }

    return null
  } catch (error) {
    swWarn('Failed to classify vector resource:', url, error)
    return null
  }
}

async function handleNavigate(request: Request) {
  const cache = await caches.open(CACHE_NAMES.APP_SHELL)

  try {
    const response = await fetch(request)
    if (response.ok) {
      await cache.put(request, response.clone())
      await Promise.all(
        ENTRYPOINT_URLS.map(url =>
          cache.put(
            new Request(url, { credentials: 'same-origin' }),
            response.clone()
          )
        )
      )
      return response
    }
  } catch (error) {
    swWarn('Navigation failed, attempting cache fallback', error)
  }

  for (const url of ENTRYPOINT_URLS) {
    const cached = await cache.match(new Request(url))
    if (cached) {
      return cached
    }
  }

  const fallback = await cache.match(new Request(ENTRY_URL))
  if (fallback) {
    return fallback
  }

  return new Response(
    '<!doctype html><html><head><title>Offline</title></head><body><h1>You are offline</h1><p>This page has not been cached yet.</p></body></html>',
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  )
}

async function cacheFirstStrategy(request: Request, cacheName: CacheName) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(request)
    if (response.ok) {
      await cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    if (cacheName === CACHE_NAMES.VT_GLYPHS && isGlyphRequest(request.url)) {
      return handleGlyphFetchFailure(request, error)
    }

    if (
      cacheName === CACHE_NAMES.VT_TILES &&
      isVectorTileRequest(request.url)
    ) {
      swWarn(
        'Tile not available offline, allowing MapLibre to reuse previously rendered tiles:',
        request.url
      )
    }

    throw error
  }
}

async function cacheFirstWithNetworkUpdate(
  request: Request,
  cacheName: CacheName
) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  const fetchPromise = fetch(request)
    .then(response => {
      if (response && response.ok) {
        cache.put(request, response.clone())
      }
      return response
    })
    .catch(error => {
      if (!(error instanceof TypeError)) {
        swWarn('Background update failed for', request.url, error)
      }
      return undefined
    })

  if (cachedResponse) {
    fetchPromise.catch(() => {})
    return cachedResponse
  }

  const networkResponse = await fetchPromise
  if (networkResponse) {
    return networkResponse
  }

  throw new Error('Network response not available')
}

async function networkFirstStrategy(request: Request, cacheName: CacheName) {
  const cache = await caches.open(cacheName)

  try {
    const response = await fetch(request)
    if (response.ok) {
      await cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    swWarn('Network failed, falling back to cache for', request.url)
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    throw error
  }
}

function isGlyphRequest(url: string) {
  return /\/fonts\/.*\.pbf$/.test(url)
}

function getGlyphRange(url: string) {
  const match = url.match(/\/(\d+-\d+)\.pbf$/)
  return match ? match[1] : null
}

function isCriticalGlyphRange(range: string | null) {
  return range === CRITICAL_GLYPH_RANGE
}

function handleGlyphFetchFailure(request: Request, error: unknown) {
  const range = getGlyphRange(request.url)
  if (!range || isCriticalGlyphRange(range)) {
    swWarn('Critical glyph missing:', request.url, error)
    throw error
  }

  swLog('Optional glyph not cached (offline):', request.url)
  return new Response(null, {
    status: 404,
    headers: { 'Content-Type': 'application/x-protobuf' },
  })
}

function isVectorTileRequest(url: string) {
  return /\/data\/.*\.(pbf|png)$/.test(url)
}

async function getCacheSize() {
  const size = { entries: 0, caches: ALL_CACHES.length }

  for (const cacheName of ALL_CACHES) {
    const cache = await caches.open(cacheName)
    const keys = await cache.keys()
    size.entries += keys.length
  }

  return size
}
