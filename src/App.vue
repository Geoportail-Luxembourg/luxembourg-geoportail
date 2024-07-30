<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

import HeaderBar from './components/header/header-bar.vue'
import FooterBar from './components/footer/footer-bar.vue'

import AlertNotifications from '@/components/alert-notifications/alert-notifications.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import StylePanel from '@/components/style-selector/style-panel.vue'
import MyMapsPanel from '@/components/my-maps/my-maps-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import SliderComparator from '@/components/slider/slider-comparator.vue'

import { statePersistorBgLayerService } from '@/services/state-persistor/state-persistor-layer-background.service'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { statePersistorAppService } from '@/services/state-persistor/state-persistor-app.service'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { statePersistorMyMapService } from '@/services/state-persistor/state-persistor-mymap.service'

import { useAppStore } from '@/stores/app.store'
import useMap from '@/composables/map/map.composable'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

const appStore = useAppStore()
const mvtStyleService = useMvtStyles()
const map = useMap()

// Important, keep order!
statePersistorMyMapService.bootstrap()
statePersistorLayersService.bootstrap()
statePersistorThemeService.bootstrap()
statePersistorAppService.bootstrap()
statePersistorStyleService.bootstrap()
statePersistorBgLayerService.bootstrap()
mvtStyleService.initBackgroundsConfigs()

const { embedded, layersOpen, myMapsOpen, styleEditorOpen } =
  storeToRefs(appStore)

watch(layersOpen, timeoutResizeMap)
watch(styleEditorOpen, timeoutResizeMap)
watch(myMapsOpen, timeoutResizeMap)

function timeoutResizeMap() {
  setTimeout(() => map.resize(), 50)
}

onMounted(() => window.addEventListener('resize', map.resize))
onUnmounted(() => window.removeEventListener('resize', map.resize))
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header-bar v-if="!embedded" />

    <main class="flex grow">
      <template v-if="!embedded">
        <!-- Layer panel -->
        <div
          v-if="layersOpen && !styleEditorOpen"
          class="w-full sm:w-80 bg-secondary z-10"
        >
          <layer-panel />
        </div>

        <!-- Style editor -->
        <div v-if="styleEditorOpen" class="w-full sm:w-80 bg-secondary z-10">
          <style-panel />
        </div>

        <!-- MyMaps panel -->
        <div v-if="myMapsOpen" class="w-full sm:w-80 bg-secondary z-10">
          <my-maps-panel />
        </div>
      </template>

      <!-- Map container and slider comparator -->
      <div class="map-wrapper grow bg-blue-100 relative">
        <map-container :v4_standalone="true" />
        <template v-if="!embedded">
          <slider-comparator class="absolute top-0" />
          <remote-layers />
          <layer-metadata />
        </template>
      </div>

      <!-- Background selector -->
      <div class="absolute right-1" :class="embedded ? 'top-2' : 'top-16'">
        <background-selector />
      </div>
    </main>

    <template v-if="!embedded">
      <footer-bar class="fixed bottom-5 sm:static z-20" />
      <alert-notifications />
    </template>
  </div>
</template>
