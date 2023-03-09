<script setup lang="ts">
import { ShallowRef, shallowRef } from 'vue'

import { useLayer } from '@/composables/layer'
import { Layer } from '@/stores/map.store.model'

const props = defineProps<{
  layer: Layer
  draggableClassName: string
  isOpen: boolean
}>()
const emit = defineEmits([
  'clickInfo',
  'clickEdit',
  'changeOpacity',
  'clickToggle',
  'clickRemove',
])
const { t, getLabel, onClickInfo } = useLayer(props.layer as Layer, { emit })

const opacity: ShallowRef<number | undefined> = shallowRef(
  (props.layer?.opacity ?? 1) * 100
)
const prevOpacity: ShallowRef<number | undefined> = shallowRef(
  ((props.layer?.previousOpacity ?? opacity.value) as number) * 100
)

const txtTitleLabel = t('Display informations for "{{layerName}}"', {
  ns: 'client',
  layerName: getLabel(),
})

const txtRemoveLayer = t('Remove layer "{{layerName}}"', {
  ns: 'client',
  layerName: getLabel(),
})

function onClickToggle() {
  emit('clickToggle', props.layer)
}

function onToggleVisibility() {
  if (opacity.value === 0) {
    opacity.value = prevOpacity.value
  } else {
    prevOpacity.value = opacity.value
    opacity.value = 0
  }

  dispatchChangeOpacity()
}

function onClickRemove() {
  emit('clickRemove', props.layer)
}

function onChangeOpacity(event: Event) {
  if (event.target) {
    opacity.value = parseInt((event.target as HTMLInputElement).value)

    dispatchChangeOpacity()
  }
}

function dispatchChangeOpacity() {
  emit('changeOpacity', props.layer, opacity.value)
}
</script>

<template>
  <div class="lux-layer-manager-item relative">
    <div class="w-full flex flex-nowrap items-start gap-x-2">
      <button
        class="fa-solid fa-bars cursor-move mt-1"
        :class="draggableClassName"
      ></button>
      <button
        class="fa-solid fa-info mt-1"
        :title="txtTitleLabel"
        @click="onClickInfo"
      ></button>
      <button class="cursor-pointer grow text-left" @click="onClickToggle">
        {{ getLabel() }}
      </button>
      <button
        class="mt-1 w-3.5 fa-solid"
        :class="props.isOpen ? 'fa-xmark' : 'fa-ellipsis'"
        @click="onClickToggle"
      ></button>
      <button
        class="mt-1 fa-solid fa-trash"
        :title="txtRemoveLayer"
        @click="onClickRemove"
      ></button>
    </div>
    <div
      class="lux-layer-manager-item-content"
      :class="props.isOpen ? 'h-6' : 'h-0'"
    >
      <button
        :title="t('Toggle layer opacity', { ns: 'client' })"
        class="w-5 fa-solid"
        :class="opacity === 0 ? 'fa-eye-slash' : 'fa-eye'"
        @click="onToggleVisibility"
      ></button>
      <input
        :id="`${props.layer.id}-steps-range`"
        type="range"
        min="0"
        max="100"
        :value="opacity"
        step="25"
        @change="onChangeOpacity"
        class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
      />
    </div>
  </div>
</template>
