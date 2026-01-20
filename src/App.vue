<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import HeaderBar from '@/components/header-bar/header-bar.vue'
import HeaderBarOffline from '@/components/header-bar/header-bar-offline.vue'
import FooterBar from '@/components/footer/footer-bar.vue'
import LidarGraphPanel from '@/components/lidar/lidar-graph-panel.vue'

import AlertNotifications from '@/components/alert-notifications/alert-notifications.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import SidePanel from '@/components/side-panel/side-panel.vue'

import MapContainer from '@/components/map/map-container.vue'
import SliderComparator from '@/components/slider/slider-comparator.vue'

import { statePersistorBgLayerService } from '@/services/state-persistor/state-persistor-layer-background.service'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { statePersistorAppService } from '@/services/state-persistor/state-persistor-app.service'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { statePersistorMyMapService } from '@/services/state-persistor/state-persistor-mymap.service'
import { statePersistorFeatureInfoService } from '@/services/state-persistor/state-persistor-featureinfo.service'
import useNetwork from '@/composables/network/network.composable'
import { createLogger } from '@/lib/logging/namespacedLogger'
import useMap from '@/composables/map/map.composable'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import useMyMaps from '@/composables/my-maps/my-maps.composable'
import { useAppStore } from '@/stores/app.store'
const { t } = useTranslation()
const appStore = useAppStore()
const mvtStyleService = useMvtStyles()
const map = useMap()

// Initialize network detection FIRST to set offline state before template renders
const network = useNetwork()
const { log: swLog } = createLogger('SW')
swLog(
  '[App.vue] After useNetwork() - appStore.isOffLine:',
  appStore.isOffLine,
  'navigator.onLine:',
  navigator.onLine
)

// Important, keep order!
statePersistorMyMapService.bootstrap()
statePersistorLayersService.bootstrap()
statePersistorThemeService.bootstrap()
statePersistorAppService.bootstrap()
statePersistorStyleService.bootstrap()
statePersistorBgLayerService.bootstrap()
mvtStyleService.initBackgroundsConfigs()
statePersistorFeatureInfoService.bootstrap()

onMounted(() => {
  useMyMaps().init()
})

const {
  embedded,
  layersOpen,
  legendsOpen,
  myMapsOpen,
  infoOpen,
  styleEditorOpen,
  lidarOpen,
  isOffLine,
} = storeToRefs(appStore)

watch(layersOpen, timeoutResizeMap)
watch(legendsOpen, timeoutResizeMap)
watch(styleEditorOpen, timeoutResizeMap)
watch(myMapsOpen, timeoutResizeMap)
watch(infoOpen, timeoutResizeMap)
watch(lidarOpen, timeoutResizeMap)

function timeoutResizeMap() {
  setTimeout(() => map.resize(), 50)
}
onMounted(() => {
  network.initialize()
  window.addEventListener('resize', map.resize)
})
onUnmounted(() => {
  network.cleanup()
  window.removeEventListener('resize', map.resize)
})
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <!-- Accessibility: Announce offline status changes to screen readers -->
    <div role="status" aria-live="polite" aria-atomic="true" class="sr-only">
      <span v-if="isOffLine">
        {{
          t(
            'You are offline. The following features are unavailable: Info panel, Legends, Routing, Measure tools, Print, Share, and external links.'
          )
        }}
      </span>
    </div>

    <!-- ----------------------------- -->
    <!-- Template for full app display -->
    <!-- ----------------------------- -->
    <template v-if="!embedded">
      <!-- Show offline header when disconnected, normal header when online -->
      <header-bar-offline v-if="isOffLine" />
      <header-bar v-else />

      <main class="flex grow min-h-0">
        <!-- Side panel containing, Layers catalog, MyMaps, Legends, ... -->
        <side-panel />

        <!-- Map container and slider comparator -->
        <div class="map-wrapper grow bg-blue-100 relative">
          <map-container :v4_standalone="true" />
          <slider-comparator class="absolute top-0" />
          <remote-layers />
          <layer-metadata />
        </div>

        <!-- Background selector -->
        <div class="absolute right-1 top-16">
          <background-selector />
        </div>
      </main>
      <transition name="fade">
        <div
          v-if="lidarOpen"
          class="w-full flex-shrink-0"
          style="height: 25rem"
        >
          <lidar-graph-panel class="w-full h-full" />
        </div>
      </transition>
      <footer-bar
        class="sm:w-full flex-shrink-0 md:h-14 fixed bottom-5 sm:static"
      />
      <alert-notifications />
    </template>

    <!-- ----------------------------- -->
    <!-- Template for embedded mode    -->
    <!-- ----------------------------- -->
    <template v-else>
      <main class="flex grow">
        <!-- Map container and slider comparator -->
        <div class="map-wrapper grow bg-blue-100 relative">
          <map-container :v4_standalone="true" />
        </div>

        <!-- Background selector -->
        <div class="absolute right-1 top-2">
          <background-selector />
        </div>
      </main>
    </template>
  </div>
</template>
