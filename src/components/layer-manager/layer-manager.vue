<script setup lang="ts">
import { computed, onMounted, ShallowRef, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import Sortable, { SortableEvent } from 'sortablejs'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useMetadataStore } from '@/stores/metadata.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'

import LayerManagerItemBackground from './layer-item/layer-item-background.vue'
import LayerManagerItem from './layer-item/layer-item.vue'

import { statePersistorLayerComparatorService } from '@/services/state-persistor/state-persistor-layer-comparator.service'
import SimpleStyleSelector from '../style-selector/simple-style-selector.vue'

const { t } = useTranslation()

const { setMetadataId } = useMetadataStore()
const mapStore = useMapStore()
const appStore = useAppStore()
const { bgLayer } = storeToRefs(mapStore)
const styles = useMvtStyles()

const layers = computed(() => [...mapStore.layers].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const draggableClassName = 'drag-handle'
const bgLayerIsEditable = computed(() =>
  styles.isLayerStyleEditable(bgLayer.value)
)

const emit = defineEmits(['displayCatalog'])
const { setRemoteLayersOpen } = useAppStore()

statePersistorLayerComparatorService.bootstrap()

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
  appStore.toggleStyleEditorPanel()
}

function toggleLayerComparator() {
  appStore.toggleLayerComparator()
}
</script>

<template>
  <ul id="sortable-layers">
    <li
      v-for="(layer, index) in layers"
      :key="layer.id"
      :id="(layer.id as string)"
      data-cy="myLayer"
    >
      <layer-manager-item
        :draggableClassName="draggableClassName"
        :layer="layer"
        :isOpen="isLayerOpenId === layer.id"
        :isLayerComporatorOpen="appStore.layerComparatorOpen"
        :displayLayerComporatorOpen="index === 0"
        @clickRemove="removeLayer"
        @clickToggle="toggleAccordionItem"
        @clickToggleLayerComparator="toggleLayerComparator"
        @clickInfo="setMetadataId(layer.id)"
        @changeOpacity="changeOpacityLayer"
      >
      </layer-manager-item>
    </li>
    <li>
      <layer-manager-item-background
        :layer="bgLayer || BLANK_BACKGROUNDLAYER"
        :showEditButton="bgLayerIsEditable"
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
    </li>
  </ul>
</template>
