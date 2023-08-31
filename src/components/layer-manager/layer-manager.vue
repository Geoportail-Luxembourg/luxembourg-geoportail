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
import { useSliderComparatorStore } from '@/stores/slider-comparator.store'

import LayerItemBackground from './layer-item/layer-item-background.vue'
import LayerItem from './layer-item/layer-item.vue'

const { t } = useTranslation()

const { setMetadataId } = useMetadataStore()
const mapStore = useMapStore()
const appStore = useAppStore()
const styles = useMvtStyles()
const sliderStore = useSliderComparatorStore()
const { bgLayer } = storeToRefs(mapStore)
const { sliderActive } = storeToRefs(sliderStore)

const layers = computed(() => [...mapStore.layers].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const draggableClassName = 'drag-handle'
const bgLayerIsEditable = computed(() =>
  styles.isLayerStyleEditable(bgLayer.value)
)

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

function changeTime(layer: Layer, dateStart?: string, dateEnd?: string) {
  mapStore.setLayerTime(layer.id as number, dateStart, dateEnd)
}

function removeLayer(layer: Layer) {
  mapStore.removeLayers(layer.id)
}

function toggleAccordionItem(layer: Layer) {
  isLayerOpenId.value = isLayerOpenId.value !== layer.id ? layer.id : undefined
}

function openEditionLayer() {
  appStore.openStyleEditorPanel()
}

function toggleLayerComparator() {
  sliderStore.toggleSlider()
}
</script>

<template>
  <div>
    <ul id="sortable-layers">
      <li
        v-for="(layer, index) in layers"
        :key="layer.id"
        :id="(layer.id as string)"
        data-cy="myLayer"
      >
        <layer-item
          :draggableClassName="draggableClassName"
          :layer="layer"
          :isOpen="isLayerOpenId === layer.id"
          :isLayerComparatorOpen="sliderActive"
          :displayLayerComparatorOpen="index === 0"
          @clickRemove="removeLayer"
          @clickToggle="toggleAccordionItem"
          @clickToggleLayerComparator="toggleLayerComparator"
          @clickInfo="setMetadataId(layer.id)"
          @changeOpacity="changeOpacityLayer"
          @changeTime="
            (dateStart, dateEnd) => changeTime(layer, dateStart, dateEnd)
          "
        >
        </layer-item>
      </li>
    </ul>

    <layer-item-background
      :layer="bgLayer || BLANK_BACKGROUNDLAYER"
      :showEditButton="bgLayerIsEditable"
      @clickInfo="() => bgLayer && setMetadataId(bgLayer.id)"
      @clickEdit="openEditionLayer"
    >
    </layer-item-background>
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
  </div>
</template>
