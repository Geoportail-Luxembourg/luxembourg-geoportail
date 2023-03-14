<script setup lang="ts">
import '../node_modules/ol/ol.css'

import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import HeaderBar from './components/header/header-bar.vue'
import FooterBar from './components/footer/footer-bar.vue'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'

import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import StyleSelector from '@/components/style-selector/style-selector.vue'

import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { statePersistorLayersOpenService } from '@/services/state-persistor/state-persistor-layersopen.service'
import { useAppStore } from '@/stores/app.store'
import useMap from './composables/map/map.composable'

statePersistorLayersService.bootstrap()
statePersistorThemeService.bootstrap()
statePersistorLayersOpenService.bootstrapLayersOpen()

const { layersOpen } = storeToRefs(useAppStore())

watch(layersOpen, () =>
  setTimeout(() => {
    useMap().getOlMap().updateSize()
  }, 50)
)
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
      </div>
      <div class="absolute right-1 top-16">
        <background-selector></background-selector>
      </div>
    </main>
    <footer-bar class="fixed bottom-5 sm:relative sm:bottom-0"> </footer-bar>
  </div>
</template>
