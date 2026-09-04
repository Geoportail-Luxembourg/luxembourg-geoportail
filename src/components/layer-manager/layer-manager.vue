<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
  ShallowRef,
  shallowRef,
  useTemplateRef,
} from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useMetadataStore } from '@/stores/metadata.store'
import { useDrawStore } from '@/stores/draw.store'
import type { Layer, LayerId } from '@/stores/map.store.model'
import useSortable from '@/composables/sortable'
import { BLANK_BACKGROUNDLAYER } from '@/composables/background-layer/background-layer.model'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import { useSliderComparatorStore } from '@/stores/slider-comparator.store'
import useMyMaps from '@/composables/my-maps/my-maps.composable'
import {
  LOCAL_DRAW_LAYER_ID,
  MYMAP_DRAW_LAYER_PREFIX,
} from '@/composables/draw/draw-layer-sync.composable'
import ModalConfirmDeleteAll from '@/components/draw/modal-confirm-delete-all.vue'

import LayerItemBackground from './layer-item/layer-item-background.vue'
import LayerItem from './layer-item/layer-item.vue'

const { t } = useTranslation()

const { setMetadataLayer } = useMetadataStore()
const mapStore = useMapStore()
const appStore = useAppStore()
const drawStore = useDrawStore()
const styles = useMvtStyles()
const sliderStore = useSliderComparatorStore()
const myMaps = useMyMaps()
const { bgLayer } = storeToRefs(mapStore)
const { sliderActive } = storeToRefs(sliderStore)
const { isOffLine } = storeToRefs(appStore)
const { setRemoteLayersOpen } = appStore

const sortableLayers = useTemplateRef('sortableLayers')
const sortableLayers3d = useTemplateRef('sortableLayers3d')
const layers = computed(() => [...mapStore.layers].reverse())
const layers3d = computed(() => [...mapStore.layers3d].reverse())
const isLayerOpenId: ShallowRef<LayerId | undefined> = shallowRef()
const dragHandleClassName = 'drag-handle'
const bgLayerIsEditable = computed(() =>
  styles.isLayerStyleEditable(bgLayer.value)
)
const showAddLayerButton = computed(() => !isOffLine.value)
const showConfirmDeleteDraw = ref(false)

const emit = defineEmits(['displayCatalog'])

onMounted(() => {
  useSortable(<HTMLElement>sortableLayers.value, { onSort: sortMethod })
  useSortable(<HTMLElement>sortableLayers3d.value, { onSort: sort3dMethod })
})

function sortMethod(elements: HTMLCollection, is3d?: boolean) {
  // Keep layer IDs as strings since remote WMS layers use string IDs (e.g., "WMS||url||name")
  // Internal layers use numeric IDs which are stored as string attributes in the DOM
  const layersIds = [...elements]
    .map(val => {
      const id = val.id
      // Try to parse as number for internal layers, otherwise keep as string
      const numericId = Number(id)
      return isNaN(numericId) ? id : numericId
    })
    .reverse()
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

function clearLayers() {
  mapStore.removeAllLayers()
}

function isLocalDrawLayer(layer: Layer): boolean {
  return layer.id === LOCAL_DRAW_LAYER_ID
}

function isMyMapDrawLayer(layer: Layer): boolean {
  return (
    typeof layer.id === 'string' && layer.id.startsWith(MYMAP_DRAW_LAYER_PREFIX)
  )
}

function removeLayer(layer: Layer) {
  if (isLocalDrawLayer(layer)) {
    showConfirmDeleteDraw.value = true
  } else if (isMyMapDrawLayer(layer)) {
    myMaps.closeMyMap()
  } else {
    mapStore.removeLayers(layer.id)
  }
}

function onConfirmDeleteDraw() {
  showConfirmDeleteDraw.value = false
  drawStore.removeAllFeatures()
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
      {{ t('No layer selected', { ns: 'app' }) }}
    </div>
    <ul
      ref="sortableLayers3d"
      class="mb-4 sortable-layers-3d"
      v-if="layers3d.length > 0"
    >
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
          @localiseInCatalog="l => appStore.locateLayerInCatalog(l.id)"
        >
        </layer-item>
      </li>
    </ul>

    <ul ref="sortableLayers" class="sortable-layers">
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
          @localiseInCatalog="l => appStore.locateLayerInCatalog(l.id)"
        >
        </layer-item>
      </li>
    </ul>

    <div class="flex flex-row justify-end space-x-1 my-2">
      <button
        v-if="layers.length > 0"
        data-cy="clearLayers"
        class="group flex gap-1 items-center text-white opacity-75 hover:opacity-100"
        @click="clearLayers"
      >
        <span
          aria-hidden="true"
          class="text-[.7rem] hidden group-hover:block after:font-icons lux-close-cross"
        ></span>
        <span>{{ t('Clear all layers', { ns: 'app' }) }}</span>
      </button>
    </div>

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
        {{ t('+ Add layers', { ns: 'app' }) }}
      </button>
      <button
        data-cy="addRemoteLayer"
        class="bg-white text-primary hover:bg-primary hover:text-white border border-slate-300 py-1.5 px-2.5"
        @click="setRemoteLayersOpen(true)"
      >
        {{ t('+ Add external Wms', { ns: 'app' }) }}
      </button>
    </div>

    <!-- Preload webfont -->
    <div class="lux-preload">
      <i class="fa-solid fa-trash-can"></i>
    </div>

    <ModalConfirmDeleteAll
      v-if="showConfirmDeleteDraw"
      @cancel="showConfirmDeleteDraw = false"
      @confirm="onConfirmDeleteDraw"
    />
  </div>
</template>
