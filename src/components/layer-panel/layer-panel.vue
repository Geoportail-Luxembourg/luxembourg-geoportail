<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import useOffline from '@/composables/offline/offline.composable'

const { t } = useTranslation()
const appStore = useAppStore()
const { setLayersOpen } = appStore
const { myLayersTabOpen } = storeToRefs(appStore)
const { layers } = storeToRefs(useMapStore())
const showCatalogButton = computed(() => !useOffline().isOffLine.value)
const showMyLayersTab = computed(() => (myLayersTabOpen.value || useOffline().isOffLine.value))

function onClickMyLayers() {
  appStore.setMyLayersTabOpen(true)
}

function onDisplayCatalog() {
  appStore.setMyLayersTabOpen(false)
}
</script>

<template>
  <div data-cy="layerPanel" class="flex flex-col h-full pt-1.5">
    <!-- Panel title and close button -->
    <div class="h-16 shrink-0 flex justify-between lux-panel-title">
      <h1>
        {{ t('layers', { ns: 'client' }) }}
      </h1>
      <span
        ><button
          @click="() => setLayersOpen(false)"
          :aria-label="t('Close', { ns: 'client' })"
          class="fa-sharp fa-solid fa-close"
        ></button
      ></span>
    </div>

    <!-- My Layers and Catalog tab labels -->
    <div class="flex flex-row gap-2 h-10 text-2xl">
      <button
        data-cy="myLayersButton"
        @click="onClickMyLayers"
        class="text-white px-4 hover:bg-primary cursor-pointer text-center uppercase"
        :class="showMyLayersTab ? 'bg-primary' : 'bg-tertiary'"
        :aria-expanded="showMyLayersTab"
      >
        {{ t('my_layers', { ns: 'client' }) }}
        <span v-if="layers.length">({{ layers.length }})</span>
      </button>
      <button
        v-if="showCatalogButton"
        data-cy="catalogButton"
        @click="onDisplayCatalog"
        class="text-white px-4 hover:bg-primary cursor-pointer text-center uppercase"
        :class="showMyLayersTab ? 'bg-tertiary' : 'bg-primary'"
        :aria-expanded="!showMyLayersTab"
      >
        {{ t('Catalog', { ns: 'client' }) }}
      </button>
    </div>

    <!-- Panel content (MyLayers and Catalog) -->
    <div class="relative grow p-2.5 bg-primary overflow-auto">
      <layer-manager
        data-cy="myLayers"
        v-if="showMyLayersTab"
        @display-catalog="onDisplayCatalog"
      ></layer-manager>
      <catalog-tab v-if="!showMyLayersTab"></catalog-tab>
    </div>
  </div>
</template>
