<script setup lang="ts">
import { computed, onMounted, ShallowRef, shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useMetadataStore } from '@/stores/metadata.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import useSortable from '@/composables/sortable'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import { useSliderComparatorStore } from '@/stores/slider-comparator.store'

import LayerItemBackground from './layer-item/layer-item-background.vue'
import LayerItem from './layer-item/layer-item.vue'

const { t } = useTranslation()

const { setMetadataLayer } = useMetadataStore()
const mapStore = useMapStore()
const appStore = useAppStore()
const styles = useMvtStyles()
const sliderStore = useSliderComparatorStore()
const { bgLayer } = storeToRefs(mapStore)
const { sliderActive } = storeToRefs(sliderStore)
const { isOffLine } = storeToRefs(appStore)
const { setRemoteLayersOpen } = appStore

const layers = computed(() => [...mapStore.layers].reverse())
const layers3d = computed(() => [...mapStore.layers3d].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const dragHandleClassName = 'drag-handle'
const bgLayerIsEditable = computed(() =>
  styles.isLayerStyleEditable(bgLayer.value)
)
const showAddLayerButton = computed(() => !isOffLine.value)

const emit = defineEmits(['displayCatalog'])

onMounted(() => {
  const sortableLayersDOM = <HTMLElement>(
    document.querySelector('.sortable-layers')
  )
  const sortableLayers3dDOM = <HTMLElement>(
    document.querySelector('.sortable-layers-3d')
  )

  useSortable(sortableLayersDOM, { onSort: sortMethod })
  useSortable(sortableLayers3dDOM, { onSort: sort3dMethod })
})

function sortMethod(elements: HTMLCollection, is3d?: boolean) {
  const layersIds = [...elements].map(val => Number(val.id)).reverse()
  mapStore.reorderLayers(layersIds, is3d)
}

function sort3dMethod(elements: HTMLCollection) {
  sortMethod(elements, true)
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
    <div v-if="isOffLine && layers.length === 0" class="text-black">
      {{ t('No layer selected', { ns: 'client' }) }}
    </div>
    <ul class="mb-4 sortable-layers-3d" v-if="layers3d.length > 0">
      <li
        v-for="(layer, index) in layers3d"
        :key="layer.id"
        :id="layer.id as string"
        data-cy="myLayer"
      >
        <layer-item
          :is3d="true"
          :dragHandleClassName="dragHandleClassName"
          :layer="layer"
          :isOpen="isLayerOpenId === layer.id"
          :isLayerComparatorOpen="sliderActive"
          :displayLayerComparatorOpen="index === 0"
          @clickRemove="removeLayer"
          @clickToggle="toggleAccordionItem"
          @clickToggleLayerComparator="toggleLayerComparator"
          @clickInfo="setMetadataLayer(layer)"
          @changeOpacity="changeOpacityLayer"
          @changeTime="
            (dateStart, dateEnd) => changeTime(layer, dateStart, dateEnd)
          "
        >
        </layer-item>
      </li>
    </ul>

    <ul class="sortable-layers">
      <li
        v-for="(layer, index) in layers"
        :key="layer.id"
        :id="layer.id as string"
        data-cy="myLayer"
      >
        <layer-item
          :is3d="false"
          :dragHandleClassName="dragHandleClassName"
          :layer="layer"
          :isOpen="isLayerOpenId === layer.id"
          :isLayerComparatorOpen="sliderActive"
          :displayLayerComparatorOpen="index === 0"
          @clickRemove="removeLayer"
          @clickToggle="toggleAccordionItem"
          @clickToggleLayerComparator="toggleLayerComparator"
          @clickInfo="setMetadataLayer(layer)"
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
      @clickInfo="() => bgLayer && setMetadataLayer(bgLayer)"
      @clickEdit="openEditionLayer"
    >
    </layer-item-background>

    <div
      v-if="showAddLayerButton"
      class="flex flex-row justify-center space-x-1 my-2"
    >
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

    <!-- Preload webfont -->
    <div class="lux-preload">
      <i class="fa-regular fa-trash-can"></i>
    </div>
  </div>
</template>
