/// <reference lib="webworker" />
/* eslint-disable no-console */
export {}
declare const self: ServiceWorkerGlobalScope

/**
 * Service Worker for Luxembourg Geoportail v4
 *
 * Strategy:
 * - Navigation requests: network-first, fallback to cached index.html when offline (SPA shell)
 * - App assets (JS, CSS, fonts, images, locales): stale-while-revalidate
 * - Vector tile styles (style.json): network-first with cache fallback
 * - Vector tiles, sprites, glyphs: cache-first
 *
 * No backend route lists to maintain: navigation always goes to network first,
 * so backend routes are never intercepted when online.
 */

const SW_VERSION = '9.0.0'
const CACHE_VERSION = `lux-geoportail-v4-v${SW_VERSION}`

const CACHE_NAMES = {
  APP_SHELL: `${CACHE_VERSION}-app-shell`,
  VT_TILES: `${CACHE_VERSION}-vt-tiles`,
  VT_STYLES: `${CACHE_VERSION}-vt-styles`,
  VT_SPRITES: `${CACHE_VERSION}-vt-sprites`,
  VT_GLYPHS: `${CACHE_VERSION}-vt-glyphs`,
}

const ALL_CACHES = Object.values(CACHE_NAMES)

type CacheName = (typeof CACHE_NAMES)[keyof typeof CACHE_NAMES]

const REG_SCOPE = self.registration?.scope ?? `${self.location.origin}/`
const APP_BASE_URL = new URL('.', REG_SCOPE).href

const INDEX_HTML_URL = new URL('index.html', APP_BASE_URL).href

const VT_HOSTS = ['vectortiles.geoportail.lu']
const DEFAULT_STYLES = ['roadmap', 'topomap', 'topomap_gray']
const DEFAULT_FONT_FAMILIES = [
  'Noto Sans Regular',
  'Noto Sans Bold',
  'Noto Sans Italic',
]
const CRITICAL_GLYPH_RANGE = '0-255'

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

console.log(
  `[SW] Bootstrapping service worker v${SW_VERSION} / cache ${CACHE_VERSION}`
)

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    Promise.allSettled([
      precacheIndexHtml(),
      precacheTranslations(),
      precacheDefaultStyles(),
      precacheDefaultGlyphs(),
    ])
      .catch(err => console.warn('[SW] Install error', err))
      .finally(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .keys()
      .then(names =>
        Promise.all(
          names.map(name => {
            if (
              name.startsWith('lux-geoportail-v4-') &&
              !ALL_CACHES.includes(name)
            ) {
              console.log('[SW] Deleting old cache', name)
              return caches.delete(name)
            }
          })
        )
      )
      .then(() => self.clients.claim())
  )
})

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event

  if (request.method !== 'GET') return

  // Navigation requests: network-first, fallback to cached index.html (SPA offline)
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigate(request))
    return
  }

  // Vector tile resources (vectortiles.geoportail.lu)
  const vtCache = getVectorTileCacheName(request.url)
  if (vtCache) {
    if (vtCache === CACHE_NAMES.VT_STYLES) {
      event.respondWith(networkFirstStrategy(request, vtCache))
    } else {
      event.respondWith(cacheFirstStrategy(request, vtCache))
    }
    return
  }

  // /themes: network-first with cache fallback (app cannot start without it)
  if (new URL(request.url).pathname.startsWith('/themes')) {
    event.respondWith(networkFirstStrategy(request, CACHE_NAMES.APP_SHELL))
    return
  }

  // Same-origin app assets: JS, CSS, fonts, images, locales → stale-while-revalidate
  if (isAppAsset(request.url)) {
    event.respondWith(staleWhileRevalidate(request, CACHE_NAMES.APP_SHELL))
  }
})

// ---------------------------------------------------------------------------
// Message
// ---------------------------------------------------------------------------

self.addEventListener('message', (event: ExtendableMessageEvent) => {
  const { data, ports } = event
  if (!data) return

  if (data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      Promise.allSettled(ALL_CACHES.map(name => caches.delete(name))).then(
        results => {
          const failed = results.some(r => r.status === 'rejected')
          ports?.[0]?.postMessage({ success: !failed })
        }
      )
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
    return
  }
})

// ---------------------------------------------------------------------------
// Strategies
// ---------------------------------------------------------------------------

async function handleNavigate(request: Request): Promise<Response> {
  try {
    const response = await fetch(request)
    if (response.ok) {
      // Cache index.html responses for offline SPA fallback
      const contentType = response.headers.get('content-type') ?? ''
      if (contentType.includes('text/html')) {
        const cache = await caches.open(CACHE_NAMES.APP_SHELL)
        await cache.put(new Request(INDEX_HTML_URL), response.clone())
      }
      return response
    }
    return response
  } catch {
    // Offline: serve cached index.html to keep the SPA working
    const cache = await caches.open(CACHE_NAMES.APP_SHELL)
    const cached =
      (await cache.match(new Request(INDEX_HTML_URL))) ??
      (await cache.match(new Request(APP_BASE_URL)))
    if (cached) return cached

    return new Response(
      '<!doctype html><html><head><title>Offline</title></head><body><h1>You are offline</h1><p>Please reload when connected.</p></body></html>',
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    )
  }
}

async function staleWhileRevalidate(
  request: Request,
  cacheName: CacheName
): Promise<Response> {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)

  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => undefined)

  return cached ?? ((await fetchPromise) as Response)
}

async function networkFirstStrategy(
  request: Request,
  cacheName: CacheName
): Promise<Response> {
  const cache = await caches.open(cacheName)
  try {
    const response = await fetch(request)
    if (response.ok) await cache.put(request, response.clone())
    return response
  } catch {
    const cached = await cache.match(request)
    if (cached) return cached
    throw new Error(`[SW] Network failed and no cache for ${request.url}`)
  }
}

async function cacheFirstStrategy(
  request: Request,
  cacheName: CacheName
): Promise<Response> {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  if (cached) return cached

  try {
    const response = await fetch(request)
    if (response.ok) await cache.put(request, response.clone())
    return response
  } catch (error) {
    if (cacheName === CACHE_NAMES.VT_GLYPHS) {
      return handleGlyphFetchFailure(request, error)
    }
    throw error
  }
}

// ---------------------------------------------------------------------------
// Resource classification
// ---------------------------------------------------------------------------

function isAppAsset(url: string): boolean {
  try {
    const { origin, pathname } = new URL(url)
    if (origin !== self.location.origin) return false

    // Translation files
    if (pathname.startsWith('/assets/locales/')) return true

    // Static assets by extension
    return /\.(js|css|woff2?|ttf|otf|eot|svg|png|jpg|jpeg|gif|webp|ico)$/.test(
      pathname
    )
  } catch {
    return false
  }
}

function getVectorTileCacheName(url: string): CacheName | null {
  try {
    const { hostname, pathname } = new URL(url)
    if (!VT_HOSTS.includes(hostname)) return null

    if (pathname.endsWith('.pbf')) {
      return pathname.includes('/fonts/')
        ? CACHE_NAMES.VT_GLYPHS
        : CACHE_NAMES.VT_TILES
    }
    if (
      pathname.includes('/data/') &&
      (pathname.endsWith('.png') || pathname.endsWith('.json'))
    ) {
      return CACHE_NAMES.VT_TILES
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
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// Precache helpers
// ---------------------------------------------------------------------------

async function precacheIndexHtml() {
  const cache = await caches.open(CACHE_NAMES.APP_SHELL)
  try {
    const response = await fetch(
      new Request(INDEX_HTML_URL, { credentials: 'same-origin' })
    )
    if (response.ok) {
      await cache.put(new Request(INDEX_HTML_URL), response)
      console.log('[SW] Precached index.html')
    }
  } catch (err) {
    console.warn('[SW] Failed to precache index.html', err)
  }
}

async function precacheTranslations() {
  const cache = await caches.open(CACHE_NAMES.APP_SHELL)
  await Promise.allSettled(
    TRANSLATION_FILES.map(async path => {
      const url = new URL(path.replace(/^\//, ''), APP_BASE_URL).href
      try {
        const response = await fetch(
          new Request(url, { credentials: 'same-origin' })
        )
        if (response.ok) await cache.put(new Request(url), response)
      } catch (err) {
        console.warn('[SW] Failed to precache translation', url, err)
      }
    })
  )
  console.log('[SW] Precached translations')
}

async function precacheDefaultStyles() {
  const cache = await caches.open(CACHE_NAMES.VT_STYLES)
  await Promise.allSettled(
    VT_HOSTS.flatMap(host =>
      DEFAULT_STYLES.map(async style => {
        const url = `https://${host}/styles/${style}/style.json`
        try {
          const response = await fetch(new Request(url, { mode: 'cors' }))
          if (!response.ok) throw new Error(`HTTP ${response.status}`)
          await cache.put(new Request(url, { mode: 'cors' }), response.clone())

          // Also cache TileJSON metadata referenced by the style
          const data = await response.clone().json()
          const sources: Record<string, { url?: string }> = data.sources ?? {}
          const tileJsonUrls = Object.values(sources)
            .map(s =>
              typeof s.url === 'string' ? new URL(s.url, url).href : null
            )
            .filter((u): u is string => Boolean(u))

          await Promise.allSettled(
            tileJsonUrls.map(async tileUrl => {
              try {
                const r = await fetch(new Request(tileUrl, { mode: 'cors' }))
                if (r.ok)
                  await cache.put(new Request(tileUrl, { mode: 'cors' }), r)
              } catch {
                // non-critical
              }
            })
          )
          console.log('[SW] Precached style:', style)
        } catch (err) {
          console.warn('[SW] Failed to precache style', style, err)
        }
      })
    )
  )
}

async function precacheDefaultGlyphs() {
  const cache = await caches.open(CACHE_NAMES.VT_GLYPHS)
  await Promise.allSettled(
    VT_HOSTS.flatMap(host =>
      DEFAULT_FONT_FAMILIES.map(async font => {
        const url = `https://${host}/fonts/${encodeURIComponent(font)}/${CRITICAL_GLYPH_RANGE}.pbf`
        try {
          const response = await fetch(new Request(url, { mode: 'cors' }))
          if (!response.ok) throw new Error(`HTTP ${response.status}`)
          await cache.put(new Request(url, { mode: 'cors' }), response)
          console.log('[SW] Precached glyphs:', font)
        } catch (err) {
          console.warn('[SW] Failed to precache glyphs', font, err)
        }
      })
    )
  )
}

// ---------------------------------------------------------------------------
// Glyph fallback
// ---------------------------------------------------------------------------

function handleGlyphFetchFailure(request: Request, error: unknown): Response {
  const match = request.url.match(/\/(\d+-\d+)\.pbf$/)
  const range = match?.[1] ?? null
  if (!range || range === CRITICAL_GLYPH_RANGE) {
    console.warn('[SW] Critical glyph missing:', request.url)
    throw error
  }
  // Non-critical glyph range missing offline → return empty response instead of breaking the map
  return new Response(null, {
    status: 404,
    headers: { 'Content-Type': 'application/x-protobuf' },
  })
}

// ---------------------------------------------------------------------------
// Cache stats
// ---------------------------------------------------------------------------

async function getCacheSize() {
  let entries = 0
  for (const name of ALL_CACHES) {
    const cache = await caches.open(name)
    entries += (await cache.keys()).length
  }
  return { entries, caches: ALL_CACHES.length }
}
