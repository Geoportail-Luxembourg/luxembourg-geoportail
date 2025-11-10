/**
 * Service Worker for Luxembourg Geoportail v4
 *
 * Purpose: Cache vector tiles, styles, and related resources for offline use
 *
 * Cache Strategy:
 * - Vector Tiles (.pbf): Cache-First (long-term storage)
 * - Styles (.json): Network-First with fallback (may update)
 * - Sprites/Glyphs: Cache-First (static resources)
 *
 * Architecture Notes:
 * - Only caches vectortiles.geoportail.lu and vectortiles-staging.geoportail.lu
 * - Does NOT cache user style uploads/downloads (disabled in offline mode)
 * - Does NOT cache print/layer metadata (disabled in offline mode)
 * - Works alongside existing localforage_v3 for raster tiles (WMTS)
 */

const CACHE_VERSION = 'lux-geoportail-v4-vt-v1'
const CACHE_NAMES = {
  APP_SHELL: `${CACHE_VERSION}-app-shell`, // Core app files (HTML, CSS, JS)
  VT_TILES: `${CACHE_VERSION}-vt-tiles`, // Vector tile PBF files
  VT_STYLES: `${CACHE_VERSION}-vt-styles`, // style.json files
  VT_SPRITES: `${CACHE_VERSION}-vt-sprites`, // Sprite images and JSON
  VT_GLYPHS: `${CACHE_VERSION}-vt-glyphs`, // Font glyphs (PBF)
}

const ALL_CACHES = Object.values(CACHE_NAMES)

// App Shell: Critical resources needed for the app to load
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  // Note: Vite generates hashed filenames, so we'll cache these on first load
  // '/assets/index-[hash].js',
  // '/assets/index-[hash].css',
]

// URLs to cache
const VT_HOSTS = [
  'vectortiles.geoportail.lu',
  'vectortiles-staging.geoportail.lu',
]

// Default styles to precache
const DEFAULT_STYLES = ['roadmap', 'topomap', 'topomap_gray']

/**
 * Check if URL is an app shell resource (HTML, CSS, JS, fonts, images)
 */
function isAppShellResource(url) {
  try {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname

    // HTML
    if (pathname === '/' || pathname.endsWith('.html')) {
      return CACHE_NAMES.APP_SHELL
    }

    // CSS, JS (including hashed Vite bundles)
    if (pathname.match(/\/assets\/.*\.(js|css)$/)) {
      return CACHE_NAMES.APP_SHELL
    }

    // Fonts
    if (pathname.match(/\.(woff2?|ttf|eot|otf)$/)) {
      return CACHE_NAMES.APP_SHELL
    }

    // Images (favicon, logos, icons)
    if (
      pathname.match(/\/(favicon\.ico|.*\.(png|jpg|jpeg|svg|gif))$/) &&
      !pathname.includes('/styles/') && // Exclude VT sprite images
      !pathname.includes('vectortiles')
    ) {
      return CACHE_NAMES.APP_SHELL
    }

    // Translation files
    if (pathname.match(/\/assets\/locales\/.*\.json$/)) {
      return CACHE_NAMES.APP_SHELL
    }

    return null
  } catch (e) {
    return null
  }
}

/**
 * Check if URL is a vector tiles resource we should cache
 */
function isVectorTileResource(url) {
  try {
    const urlObj = new URL(url)

    // Only cache from our VT hosts
    if (!VT_HOSTS.some(host => urlObj.hostname === host)) {
      return null
    }

    // Determine cache type
    if (urlObj.pathname.endsWith('.pbf')) {
      // Could be tile or glyph
      if (urlObj.pathname.includes('/fonts/')) {
        return CACHE_NAMES.VT_GLYPHS
      }
      return CACHE_NAMES.VT_TILES
    }

    // TileJSON metadata files (critical for MapLibre initialization!)
    // These are in /data/ and define tile sources
    if (
      urlObj.pathname.includes('/data/') &&
      urlObj.pathname.endsWith('.json')
    ) {
      return CACHE_NAMES.VT_STYLES
    }

    // Style JSON files in /styles/
    if (
      urlObj.pathname.includes('/styles/') &&
      urlObj.pathname.endsWith('style.json')
    ) {
      return CACHE_NAMES.VT_STYLES
    }

    // Sprite files (both .json metadata and .png images)
    if (
      urlObj.pathname.includes('/styles/') &&
      (urlObj.pathname.includes('/sprite') ||
        urlObj.pathname.endsWith('.png') ||
        urlObj.pathname.endsWith('.json'))
    ) {
      return CACHE_NAMES.VT_SPRITES
    }

    return null
  } catch (e) {
    return null
  }
}

/**
 * Install event - precache critical resources
 */
self.addEventListener('install', event => {
  // eslint-disable-next-line no-console
  console.log('[SW] Installing service worker...')

  const precachePromises = []

  // 1. Precache app shell (HTML)
  const appShellPromise = caches.open(CACHE_NAMES.APP_SHELL).then(cache => {
    // eslint-disable-next-line no-console
    console.log('[SW] Precaching app shell:', APP_SHELL_URLS.length, 'files')
    return cache.addAll(APP_SHELL_URLS).catch(err => {
      // eslint-disable-next-line no-console
      console.warn('[SW] Failed to precache app shell:', err)
      // Continue even if app shell precache fails
    })
  })
  precachePromises.push(appShellPromise)

  // 2. Precache default VT styles
  const vtStylesPromise = caches.open(CACHE_NAMES.VT_STYLES).then(cache => {
    const styleUrls = VT_HOSTS.flatMap(host =>
      DEFAULT_STYLES.map(style => `https://${host}/styles/${style}/style.json`)
    )
    // eslint-disable-next-line no-console
    console.log('[SW] Precaching default VT styles:', styleUrls.length, 'files')

    // Fetch and cache, but don't fail install if precache fails
    return Promise.allSettled(
      styleUrls.map(url =>
        fetch(url)
          .then(response => {
            if (response.ok) {
              return cache.put(url, response)
            }
          })
          .catch(err =>
            // eslint-disable-next-line no-console
            console.warn('[SW] Failed to precache VT style:', url, err)
          )
      )
    )
  })
  precachePromises.push(vtStylesPromise)

  event.waitUntil(
    Promise.all(precachePromises).then(() => {
      // eslint-disable-next-line no-console
      console.log('[SW] Service worker installed successfully')
      // Skip waiting to activate immediately
      return self.skipWaiting()
    })
  )
})

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', event => {
  // eslint-disable-next-line no-console
  console.log('[SW] Activating service worker...')

  const cleanupPromise = caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        // Delete caches that don't match current version
        if (
          cacheName.startsWith('lux-geoportail-v4-vt-') &&
          !ALL_CACHES.includes(cacheName)
        ) {
          // eslint-disable-next-line no-console
          console.log('[SW] Deleting old cache:', cacheName)
          return caches.delete(cacheName)
        }
      })
    )
  })

  event.waitUntil(
    cleanupPromise.then(() => {
      // eslint-disable-next-line no-console
      console.log('[SW] Service worker activated')
      // Take control of all pages immediately (don't wait for reload)
      return self.clients.claim()
    })
  )
})

/**
 * Fetch event - implement caching strategies
 */
self.addEventListener('fetch', event => {
  const url = event.request.url
  const request = event.request

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip Vite dev server HMR requests (won't exist in production)
  if (
    url.includes('@vite/client') ||
    url.includes('?t=') ||
    url.includes('.ts?')
  ) {
    return // Let browser handle (will fail silently when offline)
  }

  // Handle navigation requests (page loads) specially
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigate(request))
    return
  }

  // Check if it's an app shell resource
  const appShellCache = isAppShellResource(url)
  if (appShellCache) {
    // App shell: Cache-First with network update (works offline, updates when online)
    event.respondWith(cacheFirstWithNetworkUpdate(request, appShellCache))
    return
  }

  // Check if it's a VT resource
  const vtCacheName = isVectorTileResource(url)
  if (vtCacheName) {
    // Use different strategies based on resource type
    if (vtCacheName === CACHE_NAMES.VT_STYLES) {
      // Styles: Network-First (they may update)
      event.respondWith(networkFirstStrategy(request, vtCacheName))
    } else {
      // Tiles, Sprites, Glyphs: Cache-First (static resources)
      event.respondWith(cacheFirstStrategy(request, vtCacheName))
    }
    return
  }

  // Everything else: let browser handle normally
})

/**
 * Handle navigation requests (page loads)
 * Always returns cached index.html or fetches it
 */
async function handleNavigate(request) {
  const cache = await caches.open(CACHE_NAMES.APP_SHELL)

  try {
    // Try network first for navigation
    const networkResponse = await fetch(request)

    if (networkResponse.ok) {
      // Cache the response
      cache.put(request, networkResponse.clone())
      // Also cache it as '/' for offline use
      cache.put('/', networkResponse.clone())
      return networkResponse
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('[SW] Network failed for navigation, using cache')
  }

  // If network fails, try cached responses in order
  const cachedResponse =
    (await cache.match(request)) ||
    (await cache.match('/')) ||
    (await cache.match('/index.html'))

  if (cachedResponse) {
    // eslint-disable-next-line no-console
    console.log('[SW] Serving navigation from cache')
    return cachedResponse
  }

  // Ultimate fallback: offline page
  return new Response(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Offline - Luxembourg Geoportail</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 20px;
        }
        .container {
          max-width: 500px;
        }
        h1 {
          font-size: 3em;
          margin: 0 0 20px 0;
        }
        p {
          font-size: 1.2em;
          line-height: 1.6;
        }
        .icon {
          font-size: 5em;
          margin-bottom: 20px;
        }
        button {
          background: white;
          color: #667eea;
          border: none;
          padding: 12px 30px;
          font-size: 1em;
          border-radius: 25px;
          cursor: pointer;
          margin-top: 20px;
          font-weight: bold;
        }
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">📡</div>
        <h1>You're Offline</h1>
        <p>This page hasn't been cached yet. Please check your internet connection and try again.</p>
        <button onclick="window.location.reload()">Retry</button>
      </div>
    </body>
    </html>`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    }
  )
}

/**
 * Cache-First Strategy: Check cache, fallback to network
 * Best for: Vector tiles, sprites, glyphs (immutable resources)
 */
async function cacheFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)

    // Only cache successful responses
    if (networkResponse.ok) {
      // Clone before caching (response can only be read once)
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('[SW] Fetch failed for:', request.url, error)

    // For tiles, return a transparent 1x1 image to prevent broken map
    if (cacheName === CACHE_NAMES.VT_TILES && request.url.endsWith('.pbf')) {
      // Return empty response for missing tiles
      return new Response(new ArrayBuffer(0), {
        headers: { 'Content-Type': 'application/x-protobuf' },
      })
    }

    throw error
  }
}

/**
 * Cache-First with Network Update: Serve from cache immediately, update in background
 * Best for: App shell (instant offline, auto-updates)
 */
async function cacheFirstWithNetworkUpdate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cachedResponse = await cache.match(request)

  // Always try to fetch and update cache in background
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        cache.put(request, response.clone())
      }
      return response
    })
    .catch(err => {
      // Only log if not offline (avoid spam when offline)
      if (!err.message.includes('Failed to fetch')) {
        // eslint-disable-next-line no-console
        console.warn('[SW] Background update failed for:', request.url, err)
      }
    })

  // Return cached version immediately if available
  if (cachedResponse) {
    // Update cache in background
    fetchPromise.catch(() => {}) // Ignore background errors
    return cachedResponse
  }

  // If not in cache, wait for network
  try {
    const networkResponse = await fetchPromise
    if (networkResponse && networkResponse.ok) {
      return networkResponse
    }
    throw new Error('Network response not ok')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SW] Failed to fetch:', request.url, error)

    // Return offline page or error for HTML
    if (request.mode === 'navigate') {
      return new Response(
        `<!DOCTYPE html>
        <html>
        <head><title>Offline</title></head>
        <body>
          <h1>You are offline</h1>
          <p>This page is not cached. Please check your connection.</p>
        </body>
        </html>`,
        { headers: { 'Content-Type': 'text/html' } }
      )
    }

    throw error
  }
}

/**
 * Network-First Strategy: Try network, fallback to cache
 * Best for: Style files that may change
 */
async function networkFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName)

  try {
    const networkResponse = await fetch(request)

    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }

    return networkResponse
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('[SW] Network failed, trying cache for:', request.url)

    const cachedResponse = await cache.match(request)

    if (cachedResponse) {
      return cachedResponse
    }

    throw error
  }
}

/**
 * Message handler for commands from the app
 */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      Promise.all(ALL_CACHES.map(cacheName => caches.delete(cacheName)))
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('[SW] All caches cleared')
          event.ports[0].postMessage({ success: true })
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error('[SW] Failed to clear caches:', error)
          event.ports[0].postMessage({ success: false, error: error.message })
        })
    )
  } else if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    event.waitUntil(
      getCacheSize().then(size => {
        event.ports[0].postMessage({ size })
      })
    )
  } else if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

/**
 * Calculate total cache size (approximate)
 */
async function getCacheSize() {
  let totalEntries = 0

  for (const cacheName of ALL_CACHES) {
    const cache = await caches.open(cacheName)
    const keys = await cache.keys()
    totalEntries += keys.length

    // Note: Can't get exact size without reading all responses
    // This is an approximation based on entry count
  }

  return {
    entries: totalEntries,
    caches: ALL_CACHES.length,
  }
}
