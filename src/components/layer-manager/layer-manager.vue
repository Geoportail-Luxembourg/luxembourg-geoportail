<script setup lang="ts">
import { computed, onMounted, ShallowRef, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import Sortable, { SortableEvent } from 'sortablejs'

import { useMapStore } from '@/stores/map.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'

import LayerManagerItemBackground from './layer-item/layer-item-background.vue'
import LayerManagerItem from './layer-item/layer-item.vue'
import SimpleStyleSelector from '../style-selector/simple-style-selector.vue'
import { useMetadataStore } from '@/stores/metadata.store'
import { useTranslation } from 'i18next-vue'
import { useAppStore } from '@/stores/app.store'

const { t } = useTranslation()
const ROAD_MAP_ID = 556

const { setMetadataId } = useMetadataStore()
const mapStore = useMapStore()
const { bgLayer } = storeToRefs(mapStore)

const layers = computed(() => [...mapStore.layers].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const isStyleEditorOpen: ShallowRef<boolean> = shallowRef(false)
const draggableClassName = 'drag-handle'

const emit = defineEmits(['displayCatalog'])
const { setRemoteLayersOpen } = useAppStore()

onMounted(() => {
  const sortableLayers = document.getElementById('sortable-layers')
  if (sortableLayers) {
    Sortable.create(sortableLayers, {
      dataIdAttr: 'data-id',
      dragClass: 'lux-sortable-drag',
      ghostClass: 'lux-sortable-ghost',
      sort: true,
      handle: `.${draggableClassName}`,
      onSort: sortMethod,
    })
  }
})

function sortMethod(event: SortableEvent) {
  const items = event.to.children
  mapStore.reorderLayers([...items].map(val => Number(val.id)).reverse())
}

function changeOpacityLayer(layer: Layer, opacity: number) {
  mapStore.setLayerOpacity(layer.id as number, opacity / 100) // TODO: replace "as number"
}

function removeLayer(layer: Layer) {
  mapStore.removeLayers(layer.id)
}

function toggleAccordionItem(layer: Layer) {
  isLayerOpenId.value = isLayerOpenId.value !== layer.id ? layer.id : undefined
}

function toggleEditionLayer() {
  isStyleEditorOpen.value = !isStyleEditorOpen.value
}
</script>

<template>
  <ul id="sortable-layers">
    <li
      v-for="layer in layers"
      :key="layer.id"
      :id="(layer.id as string)"
      data-cy="myLayer"
    >
      <layer-manager-item
        :draggableClassName="draggableClassName"
        :layer="layer"
        :isOpen="isLayerOpenId === layer.id"
        @clickRemove="removeLayer"
        @clickToggle="toggleAccordionItem"
        @clickInfo="setMetadataId(layer.id)"
        @changeOpacity="changeOpacityLayer"
      >
      </layer-manager-item>
    </li>
    <li>
      <layer-manager-item-background
        :layer="bgLayer || BLANK_BACKGROUNDLAYER"
        :showEditButton="bgLayer?.id === ROAD_MAP_ID"
        @clickInfo="() => bgLayer && setMetadataId(bgLayer.id)"
        @clickEdit="toggleEditionLayer"
      >
      </layer-manager-item-background>
      <div class="flex flex-row justify-center space-x-1 my-2">
        <button
          data-cy="addLayer"
          class="bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          @click="emit('displayCatalog')"
        >
          {{ t('+ Add layers', { ns: 'client' }) }}
        </button>
        <button
          data-cy="addRemoteLayer"
          class="bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
          @click="setRemoteLayersOpen(true)"
        >
          {{ t('+ Add external Wms', { ns: 'client' }) }}
        </button>
      </div>

      <!-- TODO: add medium and advanced style editors -->
      <simple-style-selector
        :is-open="isStyleEditorOpen && bgLayer?.id === ROAD_MAP_ID"
      >
      </simple-style-selector>
    </li>
  </ul>
</template>
