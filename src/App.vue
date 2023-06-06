<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import MapLibreLayer from '@geoblocks/ol-maplibre-layer'
import { MapLibreLayerType } from './composables/map/map.model'
import HeaderBar from './components/header/header-bar.vue'
import FooterBar from './components/footer/footer-bar.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import StyleSelector from '@/components/style-selector/style-selector.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '@/components/layer-metadata/layer-metadata.vue'
import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { statePersistorLayersOpenService } from '@/services/state-persistor/state-persistor-layersopen.service'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { useAppStore } from '@/stores/app.store'
import useMap from './composables/map/map.composable'

statePersistorLayersService.bootstrap()
statePersistorThemeService.bootstrap()
statePersistorLayersOpenService.bootstrapLayersOpen()
statePersistorStyleService.bootstrapStyle()

const { layersOpen, styleEditorOpen } = storeToRefs(useAppStore())

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
  map.getAllLayers().forEach(layer => {
    if (layer instanceof MapLibreLayer) {
      ;(layer as MapLibreLayerType).maplibreMap.resize()
    }
  })

  // TODO: Add slide effect and do this update after slide animation ends
}
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header-bar></header-bar>
    <main class="flex grow">
      <!--side bar-->
      <div v-if="layersOpen" class="w-full sm:w-80 bg-secondary z-10">
        <layer-panel></layer-panel>
      </div>
      <div v-if="styleEditorOpen" class="w-80 bg-primary">
        <style-selector />
      </div>
      <div class="grow bg-blue-100">
        <map-container></map-container>
        <remote-layers></remote-layers>
        <layer-metadata></layer-metadata>
      </div>
      <div class="absolute right-1 top-16">
        <background-selector></background-selector>
      </div>
    </main>
    <footer-bar class="fixed bottom-5 sm:relative sm:bottom-0"> </footer-bar>
  </div>
</template>
