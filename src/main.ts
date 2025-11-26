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

initProjections()

i18next.use(backend)
i18next.init({
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

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)
app.use(formatMeasureDirective)

app.mount('#app')

useThemeStore().setThemes(themesApiFixture())

// Register Service Worker for offline Vector Tiles caching (production only)
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}service-worker.js`)
      .then(registration => {
        // eslint-disable-next-line no-console
        console.log('[SW] ✅ Registered successfully:', registration.scope)
        // eslint-disable-next-line no-console
        console.log('[SW] State:', registration.active?.state)

        // Check for updates periodically
        setInterval(() => {
          registration.update()
        }, 60 * 60 * 1000) // Check every hour

        // Handle service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                // New service worker available
                // eslint-disable-next-line no-console
                // eslint-disable-next-line no-console
                console.log('[SW] New version available')
                // Optional: notify user to reload
                // dispatchEvent(new CustomEvent('sw-update-available'))
              }
            })
          }
        })
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('[SW] ❌ Registration failed:', error)
        // eslint-disable-next-line no-console
        console.error('[SW] Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
        })
      })
  })
} else if (import.meta.env.PROD) {
  // eslint-disable-next-line no-console
  console.warn('[SW] ⚠️ Service Worker not supported in this browser')
}
