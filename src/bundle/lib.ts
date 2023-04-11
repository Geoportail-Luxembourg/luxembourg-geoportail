import { h, getCurrentInstance } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import { createPinia } from 'pinia'

import { initProjections } from '@/services/projection.utils'
import { defineCustomElement } from '@/bundle/runtime-dom/apiCustomElement'

initProjections()

import '../assets/main.css' // Tell Vite to build the css
import DropdownList from '@/components/common/dropdown-list.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'
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

import App from '../App.vue'

// const app = createApp(App)

// app.use(createPinia())
// app.use(I18NextVue, { i18next })
// app.use(VueDOMPurifyHTML)

const createElementInstance = (component = {}, app = null) => {
  return defineCustomElement({
    setup: () => {
      const inst = getCurrentInstance()!

      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
    render: () => h(component)
  }, { shadowRoot: false })
}

export { App, i18next, createElementInstance, defineCustomElement, createPinia, backend, VueDOMPurifyHTML, I18NextVue, DropdownList, LayerManager, CatalogTree }
