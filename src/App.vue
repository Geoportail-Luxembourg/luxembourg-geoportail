<script setup lang="ts">
import '../node_modules/ol/ol.css'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import BackgroundSelector from '@/components/background-selector/background-selector.vue'
import LanguageSelector from '@/components/nav-bars/language-selector.vue'
import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import MapContainer from '@/components/map/map-container.vue'
import { themeSelectorService } from '@/components/theme-selector/theme-selector.service'

import { statePersistorLayersService } from '@/services/state-persistor/state-persistor-layers.service'
import { statePersistorThemeService } from '@/services/state-persistor/state-persistor-theme.service'
import { useThemeStore } from '@/stores/config.store'

statePersistorLayersService.bootstrapLayers()
statePersistorThemeService.bootstrap()

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

watch(
  theme,
  theme => {
    if (theme) {
      themeSelectorService.setCurrentThemeColors(theme)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <header
      class="lux-navbar w-full h-14 flex bg-white shadow-header z-10 shrink-0"
    >
      <div class="flex-2 p-[5px]">
        <img src="./assets/header/gov-light.8b5db4.png" />
      </div>
      <div class="grow text-center">search</div>
      <div>
        <ul class="h-full">
          <li class="border-l-[1px] border-stone-300 h-full">
            <language-selector
              data-cy="langSelect"
              class="flex-none h-full"
            ></language-selector>
          </li>
        </ul>
      </div>
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
