<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
// for the time moment legacy mapbox is used instead of maplibre, but the naming "maplibre" is kept
import MapLibreLayer from '@/lib/ol-mapbox-layer'

import HeaderBar from './components/header/header-bar.vue'
import FooterBar from './components/footer/footer-bar.vue'

import AlertNotifications from '@/components/alert-notifications/alert-notifications.vue'
import StyleSelector from '@/components/style-selector/style-selector.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import SliderComparator from '@/components/slider/slider-comparator.vue'

import { statePersistorBgLayerService } from '@/services/state-persistor/state-persistor-layer-background.service'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { statePersistorLayersOpenService } from '@/services/state-persistor/state-persistor-layersopen.service'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { statePersistorMyMapService } from '@/services/state-persistor/state-persistor-mymap.service'

import { useAppStore } from '@/stores/app.store'
import useMap from '@/composables/map/map.composable'
import traverseLayer from '@/lib/tools.js'

const appStore = useAppStore()

// Important, keep order!
statePersistorMyMapService.bootstrap()
statePersistorLayersService.bootstrap()
statePersistorThemeService.bootstrap()
statePersistorLayersOpenService.bootstrapLayersOpen()
statePersistorStyleService.bootstrapStyle()
statePersistorBgLayerService.bootstrap()

const { layersOpen, styleEditorOpen } = storeToRefs(appStore)

watch(layersOpen, () =>
  setTimeout(() => {
    resizeMap()
  }, 50)
)

onMounted(() => window.addEventListener('resize', resizeMap))
onUnmounted(() => window.removeEventListener('resize', resizeMap))

function resizeMap() {
  // Update all canvas size when layer panel is opened/closed
  const map = useMap().getOlMap()

  // Update ol layers' canvas size
  map.updateSize()

  // And trigger update MapLibre layers' canvas size
  // the utility function traverseLayer is used as a workaround until OL is updated to 6.15
  // then the function getAllLayers below (added in OL v.6.10.0) can be used
  // map.getAllLayers().forEach(layer => {
  traverseLayer(map.getLayerGroup(), [], (layer: any) => {
    if (layer instanceof MapLibreLayer) {
      ;(layer as MapLibreLayer).getMapLibreMap().resize()
    }
    return true
  })

  // TODO: Add slide effect and do this update after slide animation ends
}
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header-bar />

    <main class="flex grow">
      <!-- Layer panel -->
      <div v-if="layersOpen" class="w-full sm:w-80 bg-secondary z-10">
        <layer-panel />
      </div>

      <!-- Style editor -->
      <div v-if="styleEditorOpen" class="w-80 bg-primary">
        <style-selector />
      </div>

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

    <footer-bar class="fixed bottom-5 sm:static z-20" />
    <alert-notifications />
  </div>
</template>
