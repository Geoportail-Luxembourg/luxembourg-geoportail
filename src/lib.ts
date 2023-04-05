import { createApp, defineCustomElement, h, getCurrentInstance } from 'vue'
import { createPinia } from 'pinia'
import VueDOMPurifyHTML from 'vue-dompurify-html'

import { initProjections } from '@/services/projection.utils'

initProjections()

import './assets/main.css'
import DropdownList from '@/components/common/dropdown-list.vue'
import CatalogTree from '@/components/catalog/catalog-tree.vue'

import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

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

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)

const createElementInstance = (component = null) => {
  return defineCustomElement({
    setup() {
      const inst = getCurrentInstance();
      Object.assign(inst.appContext, app._context);
      Object.assign(inst.provides, app._context.provides);

      // return () => h(component)
    },
    render: () => h(component)
  })
}

export { app, i18next, createElementInstance, createPinia, VueDOMPurifyHTML, backend, I18NextVue, DropdownList, CatalogTree }
