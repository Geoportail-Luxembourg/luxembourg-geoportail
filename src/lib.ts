import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDOMPurifyHTML from 'vue-dompurify-html'

import { initProjections } from '@/services/projection.utils'

initProjections()

import './assets/main.css'
import DropdownList from '@/components/common/dropdown-list.vue'
import Catalog from '@/components/catalog/catalog-tree.vue'

const app = createApp({})

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)

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

export { app, i18next, DropdownList, Catalog }
