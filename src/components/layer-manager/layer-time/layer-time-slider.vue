<script setup lang="ts">
import { formatTimeValue } from '@/services/time.utils'
import { Layer, LayerTimeMode, LayerTimeSlider } from '@/stores/map.store.model'
import { ShallowRef, shallowRef } from 'vue'

const props = defineProps<{
  layer: Layer
}>()
defineEmits<{
  (e: 'changeRange'): void
}>()
const layerTime = <LayerTimeSlider>props.layer.time
const sliderValue: ShallowRef<number | undefined> = shallowRef(undefined)
</script>

<template>
  <div class="lux-time-slider w-full">
    <!-- Slider -->
    <div>
      <input
        class="mt-2 mb-2 ml-0 mr-0 w-full h-1 bg-[#d3e5d7] rounded-sm appearance-none cursor-pointer"
        type="range"
        min="0"
        max="100"
        step="25"
        v-model="sliderValue"
        @change="$emit('changeRange', sliderValue)"
      />
    </div>

    <!-- Display localized time values -->
    <div class="lux-time-slider-displayed-dates">
      <div
        class="lux-time-slider-start-date"
        v-if="layer.time?.mode === LayerTimeMode.RANGE"
      >
        <span>{{
          formatTimeValue(123 /*layer.time?.values[0]*/, layerTime.resolution)
        }}</span>
      </div>

      <div
        class="lux-time-slider-start-date"
        v-if="layer.time?.mode === LayerTimeMode.VALUE"
      >
        <span>{{
          formatTimeValue(123 /*layer.time?.values*/, layerTime.resolution)
        }}</span>
      </div>

      <div
        class="lux-time-slider-end-date"
        v-if="layer.time?.mode === LayerTimeMode.RANGE"
      >
        <span>{{
          formatTimeValue(123 /*layer.time?.values[1]*/, layerTime.resolution)
        }}</span>
      </div>
    </div>
  </div>
</template>
