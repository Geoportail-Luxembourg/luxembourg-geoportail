<script setup lang="ts">
import { computed, onMounted, ShallowRef, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import Sortable, { SortableEvent } from 'sortablejs'

import { useMapStore } from '@/stores/map.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'

import LayerManagerItemBackground from './layer-item/layer-item-background.vue'
import LayerManagerItem from './layer-item/layer-item.vue'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { useTranslation } from 'i18next-vue'
import LayerMetadata from '../layer-metadata/layer-metadata.vue'
import { layerMetadataService } from '@/composables/layer-metadata/layer-metadata.service'
import { LayerMetadataModel } from '@/composables/layer-metadata/layer-metadata.model'

const mapStore = useMapStore()
const { bgLayer } = storeToRefs(mapStore)
const layers = computed(() => [...mapStore.layers].reverse())
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

const { i18next } = useTranslation()
const metadata: ShallowRef<LayerMetadataModel | undefined> = shallowRef()
const displayedMetadataNode: ShallowRef<LayerTreeNodeModel | undefined> =
  shallowRef()

async function displayLayerMetadata(node: LayerTreeNodeModel) {
  metadata.value = await layerMetadataService.getLayerMetadata(node, i18next)
  displayedMetadataNode.value = node
}

onMounted(() => {
  i18next.on('languageChanged', () => {
    if (displayedMetadataNode.value)
      displayLayerMetadata(displayedMetadataNode.value)
  })
})

function closeLayerMetadata() {
  metadata.value = undefined
}

function toggleEditionLayer() {
  console.info('clickEdit to implement')
}
</script>

<template>
  <layer-metadata
    v-if="metadata"
    :layer-metadata="metadata"
    @close-layer-metadata="closeLayerMetadata"
  ></layer-metadata>
  <ul id="sortable-layers">
    <li v-for="layer in layers" :key="layer.id" :id="(layer.id as string)">
      <layer-manager-item
        :draggableClassName="draggableClassName"
        :layer="layer"
        :isOpen="isLayerOpenId === layer.id"
        @clickRemove="removeLayer"
        @clickToggle="toggleAccordionItem"
        @clickInfo="displayLayerMetadata"
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
