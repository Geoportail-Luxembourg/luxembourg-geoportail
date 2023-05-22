import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initProjections } from '@/services/projection.utils'
import App from './App.vue'

import '../node_modules/ol/ol.css'
import './assets/main.css'

import VueDOMPurifyHTML from 'vue-dompurify-html'
import { useThemeStore } from './stores/config.store'
import { themesApiFixture } from './__fixtures__/themes.api.fixture'

initProjections()

i18next.use(backend)
i18next.init({
  lng: 'fr',
  debug: false,
  defaultNS: 'client',
  supportedLngs: ['de', 'en', 'fr', 'lb'],
  ns: ['client', 'legends', 'server', 'tooltips'],
  fallbackLng: 'fr',
  backend: {
    loadPath: `${import.meta.env.BASE_URL}assets/locales/{{ns}}.{{lng}}.json`, // ! use assets instead of ./assets because of theme path in url
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)

app.mount('#app')

useThemeStore().setThemes(themesApiFixture())
