<script setup lang="ts">
import '../node_modules/ol/ol.css'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import LanguageSelector from '@/components/nav-bars/language-selector.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import { statePersistorService } from '@/services/state-persistor/state-persistor.service'

statePersistorService.bootstrapLayers()
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header class="h-14 flex bg-white shadow-header z-10 shrink-0">
      <div class="p-[5px]">
        <img src="./assets/header/gov-light.8b5db4.png" />
      </div>
      <language-selector></language-selector>
    </header>
    <main class="flex grow">
      <!--side bar-->
      <div class="w-80 bg-secondary">
        <layer-panel></layer-panel>
      </div>
      <div class="grow bg-blue-100">
        <map-container></map-container>
      </div>
      <div class="absolute right-1 top-16">
        <background-selector></background-selector>
      </div>
    </main>
  </div>
</template>
