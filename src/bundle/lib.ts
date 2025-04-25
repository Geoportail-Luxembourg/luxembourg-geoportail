// @ts-nocheck
import { defineCustomElement } from '@/bundle/runtime-dom/apiCustomElement'
import { initProjections } from '@/services/projection.utils'
import { createPinia, storeToRefs } from 'pinia'
import { createApp, getCurrentInstance, h, watch } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'

initProjections()

import './lib.css' // Tell Vite to build the css
import '../assets/main.css' // Tell Vite to build the css

import AlertNotifications from '@/components/alert-notifications/alert-notifications.vue'
import AuthForm from '@/components/auth/auth-form.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import FooterBar from '@/components/footer/footer-bar.vue'
import ToolbarDraw from '@/components/footer/toolbar-draw.vue'
import HeaderBar from '@/components/header-bar/header-bar.vue'
import LocationInfoPanel from '@/components/info/location-info.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import LegendsPanel from '@/components/legends/legends-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import SliderComparator from '@/components/slider/slider-comparator.vue'
import StylePanel from '@/components/style-selector/style-panel.vue'
import { themeSelectorService } from '@/components/theme-selector/theme-selector.service'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'
import useLayers from '@/composables/layers/layers.composable'
import useMap from '@/composables/map/map.composable'
import useOpenLayers from '@/composables/map/ol.composable'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import useOfflineLayers from '@/composables/offline/offline-layers.composable'
import useOffline from '@/composables/offline/offline.composable'
import useThemes from '@/composables/themes/themes.composable'
import formatMeasureDirective from '@/directives/format-measure.directive'
import MapLibreLayer from '@/lib/ol-mapbox-layer'
import { Mask as MaskLayer } from '@/lib/ol-mask-layer'
import { layerMetadataService } from '@/services/layer-metadata/layer-metadata.service'
import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'
import { statePersistorAppService } from '@/services/state-persistor/state-persistor-app.service'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { statePersistorBgLayerService } from '@/services/state-persistor/state-persistor-layer-background.service'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorMyMapService } from '@/services/state-persistor/state-persistor-mymap.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { storageHelper } from '@/services/state-persistor/storage/storage.helper'
import {
  UrlStorage,
  urlStorage,
} from '@/services/state-persistor/storage/url-storage'
import { styleUrlHelper } from '@/services/styleurl/styleurl.helper'
import { useAppStore } from '@/stores/app.store'
import { useThemeStore } from '@/stores/config.store'
import { useDrawStore } from '@/stores/draw.store'
import { clearLayersCache } from '@/stores/layers.cache'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { useMapStore } from '@/stores/map.store'
import { useStyleStore } from '@/stores/style.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import i18next, { InitOptions } from 'i18next'
import backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'
import App from '../App.vue'
import ProfileDraw from './components/profile_v3/profile-draw_v3.vue'
import ProfileInfos from './components/profile_v3/profile-infos_v3.vue'
import ProfileMeasures from './components/profile_v3/profile-measures_v3.vue'
import ProfileRouting from './components/profile_v3/profile-routing_v3.vue'
import { useProfileDrawv3Store } from './stores/profile-draw_v3.store'
import { useProfileInfosv3Store } from './stores/profile-infos_v3.store'
import { useProfileMeasuresv3Store } from './stores/profile-measures_v3.store'
import { useProfileRoutingv3Store } from './stores/profile-routing_v3.store'

type LuxLibOptions = {
  i18nextConfig?: InitOptions
}

export default function useLuxLib(options: LuxLibOptions) {
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
    nsSeparator: false, // ! force separator off because some i18n keys have ':' (otherwise, i18next doesn't find the key)
    keySeparator: false,
  }

  i18next.use(backend)
  i18next.init(i18nextConfig)

  const app = createApp(App)

  app.use(createPinia())
  app.use(I18NextVue, { i18next })
  app.use(VueDOMPurifyHTML)
  app.use(formatMeasureDirective)

  const createElementInstanceProp = (component, app = null) => {
    return defineCustomElement(
      {
        props: component.props || {},
        setup: props => {
          const inst = getCurrentInstance()!
          if (app) {
            if (inst) {
              Object.assign(inst.appContext, app._context)
              Object.assign(inst.provides, app._context.provides)
            }
          }
          if (inst) {
            const vueEmit = inst.emit // Sauvegarder la fonction emit originale de Vue
            inst.emit = (event, ...args) => {
              vueEmit(event, ...args) // Émettre l'événement dans Vue
              const ceEvent = new CustomEvent(event, { detail: args }) // Créer un CustomEvent
              inst.vnode.el?.dispatchEvent(ceEvent) // Dispatch l'événement sur le web component
            }
          }
          return () => h(component, props) // Passer les props au composant
        },
        render() {
          return null // Le rendu est géré dans setup
        },
      },
      { shadowRoot: false }
    )
  }

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
    createElementInstanceProp,
  }
}

export {
  AlertNotifications,
  App,
  AuthForm,
  backend,
  BackgroundSelector,
  clearLayersCache,
  createApp,
  createPinia,
  defineCustomElement,
  DropdownList,
  FooterBar,
  getCurrentInstance,
  h,
  HeaderBar,
  i18next,
  I18NextVue,
  LayerMetadata,
  layerMetadataService,
  LayerPanel,
  LegendsPanel,
  LocationInfoPanel,
  MapContainer,
  MapLibreLayer,
  MaskLayer,
  ProfileDraw,
  ProfileInfos,
  ProfileMeasures,
  ProfileRouting,
  proxyUrlHelper,
  RemoteLayers,
  SliderComparator,
  statePersistorAppService,
  statePersistorBgLayerService,
  statePersistorLayersService,
  statePersistorMyMapService,
  statePersistorStyleService,
  statePersistorThemeService,
  storageHelper,
  storeToRefs,
  StylePanel,
  urlStorage,
  UrlStorage,
  styleUrlHelper,
  themeSelectorService,
  ToolbarDraw,
  useAppStore,
  useBackgroundLayer,
  useDrawStore,
  useLayers,
  useLocationInfoStore,
  useMap,
  useMapStore,
  useMvtStyles,
  useOffline,
  useOfflineLayers,
  useOpenLayers,
  useProfileDrawv3Store,
  useProfileInfosv3Store,
  useProfileMeasuresv3Store,
  useProfileRoutingv3Store,
  useStyleStore,
  useThemes,
  useThemeStore,
  useUserManagerStore,
  VueDOMPurifyHTML,
  watch,
}
