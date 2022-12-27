<script setup lang="ts">
import { computed, onMounted, ShallowRef, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import Sortable, { SortableEvent } from 'sortablejs'

import { useMapStore } from '@/stores/map.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import { BLANK_BACKGROUNDLAYER } from '@/services/background-layer/background-layer.model'

import LayerManagerItemBackground from './layer-item/layer-item-background.vue'
import LayerManagerItem from './layer-item/layer-item.vue'

const mapStore = useMapStore()
const { layers: layersContext, bgLayer } = storeToRefs(mapStore)
const layers = computed(() => [...layersContext.value].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const draggableClassName = 'drag-handle'

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

function toggleInfoLayer() {
  console.info('clickInfo to implement')
}

function toggleEditionLayer() {
  console.info('clickEdit to implement')
}
</script>

<template>
  <ul id="sortable-layers">
    <li v-for="layer in layers" :key="layer.id" :id="(layer.id as string)">
      <layer-manager-item
        :draggableClassName="draggableClassName"
        :layer="layer"
        :isOpen="isLayerOpenId === layer.id"
        @clickRemove="removeLayer"
        @clickToggle="toggleAccordionItem"
        @clickInfo="toggleInfoLayer"
        @changeOpacity="changeOpacityLayer"
      >
      </layer-manager-item>
    </li>
    <li>
      <layer-manager-item-background
        :layer="bgLayer || BLANK_BACKGROUNDLAYER"
        :showEditButton="!!bgLayer"
        @clickInfo="toggleInfoLayer"
        @clickEdit="toggleEditionLayer"
      >
      </layer-manager-item-background>
    </li>
  </ul>
</template>
