<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { storeToRefs } from 'pinia'

const { t } = useTranslation()
const myLayersOpen = ref(false)
const { setLayersOpen } = useAppStore()
const { layers } = storeToRefs(useMapStore())
</script>

<template>
  <div data-cy="layerPanel" class="flex flex-col h-full">
    <div class="h-20 shrink-0 flex justify-between lux-panel-title">
      <span>
        {{ t('Layers', { ns: 'client' }) }}
      </span>
      <span
        ><button
          @click="() => setLayersOpen(false)"
          :aria-label="t('Close', { ns: 'client' })"
          class="fa-sharp fa-solid fa-close"
        ></button
      ></span>
    </div>
    <!--selector tab-->
    <div class="flex flex-row gap-2 h-10 text-2xl">
      <button
        data-cy="myLayersButton"
        @click="() => (myLayersOpen = true)"
        class="text-white basis-1/2 hover:bg-primary cursor-pointer text-center uppercase"
        :class="myLayersOpen ? 'bg-primary' : 'bg-tertiary'"
      >
        {{ t('my_layers', { ns: 'client' }) }} ({{ layers.length }})
      </button>
      <button
        data-cy="catalogButton"
        @click="myLayersOpen = false"
        class="text-white basis-1/2 hover:bg-primary cursor-pointer text-center uppercase"
        :class="myLayersOpen ? 'bg-tertiary' : 'bg-primary'"
      >
        {{ t('Catalog', { ns: 'client' }) }}
      </button>
    </div>
    <!--catalog tab-->
    <div class="relative grow p-2.5 bg-primary overflow-auto">
      <catalog-tab v-if="!myLayersOpen"></catalog-tab>
      <layer-manager
        data-cy="myLayers"
        v-if="myLayersOpen"
        @display-catalog="() => (myLayersOpen = false)"
      ></layer-manager>
    </div>
  </div>
</template>
