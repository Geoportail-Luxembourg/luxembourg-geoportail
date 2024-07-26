import { h, getCurrentInstance, createApp, watch } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import { createPinia, storeToRefs } from 'pinia'

import { initProjections } from '@/services/projection.utils'
import { defineCustomElement } from '@/bundle/runtime-dom/apiCustomElement'

initProjections()

import './lib.css' // Tell Vite to build the css
import '../assets/main.css' // Tell Vite to build the css

import AlertNotifications from '@/components/alert-notifications/alert-notifications.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import MapContainer from '@/components/map/map-container.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import HeaderBar from '@/components/header/header-bar.vue'
import FooterBar from '@/components/footer/footer-bar.vue'
import ToolbarDraw from '@/components/footer/toolbar-draw.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import SliderComparator from '@/components/slider/slider-comparator.vue'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'
import useLayers from '@/composables/layers/layers.composable'
import useMap from '@/composables/map/map.composable'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import useOpenLayers from '@/composables/map/ol.composable'
import useThemes from '@/composables/themes/themes.composable'
import useOffline from '@/composables/offline/offline.composable'
import useOfflineLayers from '@/composables/offline/offline-layers.composable'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import { useThemeStore } from '@/stores/config.store'
import { statePersistorBgLayerService } from '@/services/state-persistor/state-persistor-layer-background.service'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { statePersistorLayersOpenService } from '@/services/state-persistor/state-persistor-layersopen.service'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { statePersistorMyMapService } from '@/services/state-persistor/state-persistor-mymap.service'
import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'
import { styleUrlHelper } from '@/services/styleurl/styleurl.helper'
import { themeSelectorService } from '@/components/theme-selector/theme-selector.service'
import MapLibreLayer from '@/lib/ol-mapbox-layer'
import StyleSelector from '@/components/style-selector/style-selector.vue'
import { clearLayersCache } from '@/stores/layers.cache'

import i18next from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'

import App from '../App.vue'

export default function useLuxLib(options: any) {
  const i18nextConfig = options.i18nextConfig ?? {
    lng: 'fr',
    debug: false,
    defaultNS: 'client',
    supportedLngs: ['de', 'en', 'fr', 'lb'],
    ns: ['client', 'legends', 'server', 'tooltips'],
    fallbackLng: 'fr',
    backend: {
      loadPath: `/static-ngeo/web-components/assets/locales/{{ns}}.{{lng}}.json`,
    },
    nsSeparator: '|', // ! force separator to '|' instead of ':' because some i18n keys have ':' (otherwise, i18next doesn't find the key)
  }

  i18next.use(backend)
  i18next.init(i18nextConfig)

  const app = createApp(App)

  app.use(createPinia())
  app.use(I18NextVue, { i18next })
  app.use(VueDOMPurifyHTML)

  const createElementInstance = (component = {}, app = null) => {
    return defineCustomElement(
      {
        setup: () => {
          const inst = getCurrentInstance()!

          Object.assign(inst.appContext, app._context)
          Object.assign(inst.provides, app._context.provides)
        },
        render: () => h(component),
      },
      { shadowRoot: false }
    )
  }

  return {
    app,
    createElementInstance,
  }
}

export {
  createApp,
  h,
  App,
  i18next,
  getCurrentInstance,
  defineCustomElement,
  createPinia,
  storeToRefs,
  watch,
  backend,
  VueDOMPurifyHTML,
  I18NextVue,
  AlertNotifications,
  DropdownList,
  MapContainer,
  BackgroundSelector,
  RemoteLayers,
  LayerMetadata,
  HeaderBar,
  FooterBar,
  ToolbarDraw,
  LayerPanel,
  SliderComparator,
  proxyUrlHelper,
  styleUrlHelper,
  useLayers,
  useMap,
  useMvtStyles,
  useOpenLayers,
  useThemes,
  useOffline,
  useOfflineLayers,
  useAppStore,
  useBackgroundLayer,
  useMapStore,
  useStyleStore,
  useThemeStore,
  statePersistorBgLayerService,
  statePersistorLayersService,
  statePersistorThemeService,
  statePersistorLayersOpenService,
  statePersistorStyleService,
  statePersistorMyMapService,
  themeSelectorService,
  MapLibreLayer,
  StyleSelector,
  clearLayersCache,
}
