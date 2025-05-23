<script setup lang="ts">
import { SetupContext, computed } from 'vue'

import { useLayer } from '@/composables/layer'
import { Layer } from '@/stores/map.store.model'
import useLayers from '@/composables/layers/layers.composable'
import useOffline from '@/composables/offline/offline.composable'

import LayerItemSub from './layer-item-sub.vue'
import LayerTime from '../layer-time/layer-time.vue'

const props = defineProps<{
  is3d: boolean
  layer: Layer
  dragHandleClassName: string
  isOpen: boolean
  isLayerComparatorOpen: boolean
  displayLayerComparatorOpen: boolean
}>()
const emit = defineEmits<{
  (e: 'clickInfo', layer: Layer): void
  (e: 'clickToggle', layer: Layer): void
  (e: 'clickToggleLayerComparator', layer: Layer): void
  (e: 'clickRemove', layer: Layer): void
  (e: 'changeOpacity', layer: Layer, opacity: number): void
  (e: 'changeTime', dateStart?: string, dateEnd?: string): void
}>()
const { t, onClickInfo } = useLayer(props.layer, <SetupContext>{ emit })
const layersService = useLayers()
const layerLabel = computed(() =>
  t(layersService.getLayerCurrentLabel(props.layer), { ns: 'client' })
)
const showInfoButton = computed(() => !useOffline().isOffLine.value)

const txtDraggableLabel = computed(() =>
  t('Sort "{{layerName}}" in the list', {
    ns: 'app',
    layerName: layerLabel.value,
  })
)
const txtTitleLabel = computed(() =>
  t('Display informations for "{{layerName}}"', {
    ns: 'app',
    layerName: layerLabel.value,
  })
)
const txtRemoveLayer = computed(() =>
  t('Remove layer "{{layerName}}"', {
    ns: 'app',
    layerName: layerLabel.value,
  })
)

function changeTime(dateStart?: string, dateEnd?: string) {
  emit('changeTime', dateStart, dateEnd)
}
</script>

<template>
  <div class="lux-layer-manager-item relative">
    <div class="w-full flex flex-nowrap items-start gap-x-2">
      <button
        class="fa-solid fa-bars cursor-move mt-1"
        :class="dragHandleClassName"
        :title="txtDraggableLabel"
      ></button>
      <button
        v-if="showInfoButton"
        class="fa-solid fa-info mt-1"
        :aria-label="txtTitleLabel"
        :title="txtTitleLabel"
        @click="onClickInfo"
      ></button>
      <button
        :aria-expanded="isOpen"
        :aria-controls="`layer-manager-item-content-${layer.id}`"
        :data-cy="`myLayerItemLabel-${layer.id}`"
        :class="is3d ? 'cursor-default' : ''"
        class="grow text-left break-words w-[70%] flex items-center"
        @click="$emit('clickToggle', layer)"
      >
        <span class="grow">{{ layerLabel }}</span>
        <span
          v-if="!is3d"
          class="w-3.5 fa-solid"
          :class="isOpen ? 'fa-xmark' : 'fa-ellipsis'"
          aria-hidden="true"
        ></span>
      </button>
      <button
        class="mt-1 fa-regular fa-trash-can"
        :title="txtRemoveLayer"
        :aria-label="txtRemoveLayer"
        @click="$emit('clickRemove', layer)"
      ></button>
    </div>

    <!-- Layer item sub content (opacity and toggle comparator) -->
    <layer-item-sub
      v-if="!is3d"
      :layer="layer"
      :isOpen="isOpen"
      :isLayerComparatorOpen="isLayerComparatorOpen"
      :displayLayerComparatorOpen="displayLayerComparatorOpen"
      @clickToggleLayerComparator="$emit('clickToggleLayerComparator', $event)"
      @changeOpacity="
        (layer: Layer, value: number) => $emit('changeOpacity', layer, value)
      "
    ></layer-item-sub>

    <!-- Layer time: slider OR datepicker widgets -->
    <layer-time
      v-if="layer.time"
      :layer="layer"
      @changeTime="changeTime"
    ></layer-time>
  </div>
</template>
