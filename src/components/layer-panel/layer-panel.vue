<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'
import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import useOffline from '@/composables/offline/offline.composable'

const { t } = useTranslation()
const appStore = useAppStore()
const { setLayersOpen } = appStore
const { myLayersTabOpen } = storeToRefs(appStore)
const { layers } = storeToRefs(useMapStore())
const showCatalogButton = computed(() => !useOffline().isOffLine.value)
const showMyLayersTab = computed(
  () => myLayersTabOpen.value || useOffline().isOffLine.value
)

function onClickMyLayers() {
  appStore.setMyLayersTabOpen(true)
}

function onDisplayCatalog() {
  appStore.setMyLayersTabOpen(false)
}
</script>

<template>
  <side-panel-layout
    :data-cy-value="'layerPanel'"
    :close-fn="() => setLayersOpen(false)"
  >
    <!-- Panel title and close button -->
    <template v-slot:header>
      <h1>
        {{ t('layers', { ns: 'client' }) }}
      </h1>
    </template>

    <!-- My Layers and Catalog tab labels -->
    <template v-slot:tabs>
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
    </template>

    <!-- Panel content (MyLayers and Catalog) -->
    <template v-slot:content>
      <layer-manager
        data-cy="myLayers"
        v-if="showMyLayersTab"
        @display-catalog="onDisplayCatalog"
      ></layer-manager>
      <catalog-tab v-if="!showMyLayersTab"></catalog-tab>
    </template>
  </side-panel-layout>
</template>
