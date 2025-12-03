import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import { createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import { createPinia } from 'pinia'

import formatMeasureDirective from '@/directives/format-measure.directive'
import { initProjections } from '@/services/projection.utils'
import { useThemeStore } from '@/stores/config.store'
import { themesApiFixture } from './__fixtures__/themes.api.fixture'

import App from './App.vue'

import './assets/main.css'
import './assets/ol.css'

import { createLogger } from '@/lib/logging/namespacedLogger'
const { log: swLog, error: swError, warn: swWarn } = createLogger('SW')

initProjections()

// Initialize i18next and wait for translations to load before mounting app
// This prevents race conditions in Firefox where components try to render
// before translations are available
i18next.use(backend)
i18next
  .init({
    lng: 'fr',
    debug: false,
    defaultNS: 'client',
    returnEmptyString: false,
    supportedLngs: ['de', 'en', 'fr', 'lb'],
    ns: ['app', 'client', 'legends', 'server', 'tooltips'],
    fallbackLng: 'en',
    backend: {
      loadPath: `${import.meta.env.BASE_URL}assets/locales/{{ns}}.{{lng}}.json`, // ! use assets instead of ./assets because of theme path in url
    },
    nsSeparator: false, // ! force separator off because some i18n keys have ':' (otherwise, i18next doesn't find the key)
    keySeparator: false,
  })
  .then(() => {
    // Mount Vue app only after i18next is fully initialized
    const app = createApp(App)

    app.use(createPinia())
    app.use(I18NextVue, { i18next })
    app.use(VueDOMPurifyHTML)
    app.use(formatMeasureDirective)

    app.mount('#app')

    useThemeStore().setThemes(themesApiFixture())
  })

async function registerServiceWorker(swUrl: string) {
  const moduleOptions: RegistrationOptions = {
    type: 'module',
  }

  try {
    swLog('Registering service worker as module:', swUrl)
    return await navigator.serviceWorker.register(swUrl, moduleOptions)
  } catch (error) {
    swWarn(
      'Module service worker registration failed, retrying as classic script',
      error
    )
    return navigator.serviceWorker.register(swUrl)
  }
}

function setupPeriodicSwUpdate(
  registration: ServiceWorkerRegistration
): () => void {
  const intervalId = window.setInterval(() => {
    registration.update()
  }, 60 * 60 * 1000) // Check every hour

  const cleanup = () => {
    window.clearInterval(intervalId)
    window.removeEventListener('pagehide', cleanup)
    window.removeEventListener('beforeunload', cleanup)
  }

  window.addEventListener('pagehide', cleanup)
  window.addEventListener('beforeunload', cleanup)

  return cleanup
}

// Register Service Worker for offline Vector Tiles caching (production only)
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}service-worker.js`
    registerServiceWorker(swUrl)
      .then(registration => {
        swLog('[SW] ✅ Registered successfully:', registration.scope)
        swLog('[SW] State:', registration.active?.state)

        // Check for updates periodically with cleanup to avoid leaks
        const cleanupPeriodicUpdate = setupPeriodicSwUpdate(registration)

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                swLog('[SW] New version available')
                cleanupPeriodicUpdate()
              }
            })
          }
        })
      })
      .catch(error => {
        swError('[SW] ❌ Registration failed:', error)
        swError('[SW] Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
        })
      })
  })
} else if (import.meta.env.PROD) {
  swWarn('[SW] ⚠️ Service Worker not supported in this browser')
}
