import { h, getCurrentInstance, createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import { createPinia } from 'pinia'

import { initProjections } from '@/services/projection.utils'
import { defineCustomElement } from '@/bundle/runtime-dom/apiCustomElement'

initProjections()

import '../assets/main.css' // Tell Vite to build the css
import DropdownList from '@/components/common/dropdown-list.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'
import CatalogTree from '@/components/catalog/catalog-tree.vue'
import ThemeSelector from '@/components/theme-selector/theme-selector.vue'
import MapContainer from '@/components/map/map-container.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import HeaderBar from '@/components/header/header-bar.vue'
import FooterBar from '@/components/footer/footer-bar.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import useMap from '@/composables/map/map.composable'
import { useThemeStore } from '@/stores/config.store'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { themeSelectorService } from '@/components/theme-selector/theme-selector.service'

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
    loadPath: `/static-ngeo/web-components/assets/locales/{{ns}}.{{lng}}.json`,
  },
})

import App from '../App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(I18NextVue, { i18next })
app.use(VueDOMPurifyHTML)

const createElementInstance = (component = {}, app: typeof App) => {
  return defineCustomElement(
    {
      setup: () => {
        const inst = getCurrentInstance()!

        Object.assign(inst.appContext, app._context)
        // Object.assign(inst.provides, app!._context.provides)  /* removed internal: provides */
      },
      render: () => h(component),
    },
    { shadowRoot: false }
  )
}

export {
  app,
  App,
  i18next,
  createElementInstance,
  defineCustomElement,
  createPinia,
  backend,
  VueDOMPurifyHTML,
  I18NextVue,
  DropdownList,
  LayerManager,
  CatalogTree,
  ThemeSelector,
  MapContainer,
  BackgroundSelector,
  RemoteLayers,
  LayerMetadata,
  HeaderBar,
  FooterBar,
  LayerPanel,
  useMap,
  useThemeStore,
  statePersistorLayersService,
  statePersistorThemeService,
  themeSelectorService,
}
