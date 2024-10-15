import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import { createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import { createPinia } from 'pinia'

import { initProjections } from '@/services/projection.utils'
import { useThemeStore } from './stores/config.store'
import { themesApiFixture } from './__fixtures__/themes.api.fixture'
import formatDistanceDirective from '@/directives/format-distance.directive'

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
  nsSeparator: '|', // ! force separator to '|' instead of ':' because some i18n keys have ':' (otherwise, i18next doesn't find the key)
})

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)
app.use(formatDistanceDirective)

app.mount('#app')

useThemeStore().setThemes(themesApiFixture())
