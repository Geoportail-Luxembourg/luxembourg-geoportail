<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'
import RemoteLayers from '@/components/remote-layers/remote-layers.vue'
import LayerMetadata from '../layer-metadata/layer-metadata.vue'

const { t } = useTranslation()
const myLayersOpen = ref(true)
</script>

<template>
  <div data-cy="layerPanel" class="flex flex-col h-full">
    <div class="h-20 shrink-0">
      <div class="lux-panel-title">
        {{ t('Layers', { ns: 'client' }) }}
      </div>
    </div>
    <!--selector tab-->
    <div class="flex flex-row gap-2 h-10 text-2xl">
      <button
        data-cy="myLayersButton"
        @click="() => (myLayersOpen = true)"
        class="text-white basis-1/2 hover:bg-primary cursor-pointer text-center uppercase"
        :class="myLayersOpen ? 'bg-primary' : 'bg-tertiary'"
      >
        {{ t('my_layers', { ns: 'client' }) }}
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
      <layer-manager data-cy="myLayers" v-if="myLayersOpen"></layer-manager>
    </div>
    <remote-layers></remote-layers>
    <layer-metadata></layer-metadata>
  </div>
</template>
