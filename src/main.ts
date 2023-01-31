import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { projectionService } from '@/services/projection.service'
import App from './App.vue'

import './assets/main.css'
import VueDOMPurifyHTML from 'vue-dompurify-html'

projectionService.initProjections()

i18next.use(backend)
i18next.init({
  lng: 'fr',
  debug: false,
  defaultNS: 'client',
  supportedLngs: ['de', 'en', 'fr', 'lb'],
  ns: ['client', 'legends', 'server', 'tooltips'],
  fallbackLng: 'fr',
  backend: {
    loadPath: './assets/locales/{{ns}}.{{lng}}.json',
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)

app.mount('#app')
