<script setup lang="ts">
import SliderRangeThumb from './slider-range-thumb.vue'
import SliderRangeActiveTrack from './slider-range-active-track.vue'

const props = defineProps<{
  selectedMinValue: number
  selectedMaxValue?: number
  ariaLabelMin?: string
  ariaLabelMax?: string
}>()
const emit = defineEmits<{
  (e: 'change', min: number, max?: number, dragging?: boolean): void
}>()

function onChangeMin(value: number, dragging: boolean) {
  emit('change', value, props.selectedMaxValue, dragging)
}

function onChangeMax(value: number, dragging: boolean) {
  emit('change', props.selectedMinValue, value, dragging)
}
</script>

<template>
  <div class="lux-slidebar-fake">
    <!-- Draggable Max thumb button -->
    <slider-range-thumb
      v-if="selectedMaxValue"
      :ariaLabel="ariaLabelMax"
      :minLimit="selectedMinValue"
      :selectedValue="selectedMaxValue"
      @change="onChangeMax"
    />
    <!-- Draggable Min thumb button -->
    <!-- put Min value after Max value, this is just for z-index grabbing -->
    <slider-range-thumb
      :ariaLabel="ariaLabelMin"
      :maxLimit="selectedMaxValue"
      :selectedValue="selectedMinValue"
      @change="onChangeMin"
    />
    <!-- Selection highlight -->
    <slider-range-active-track
      :selectedMinValue="selectedMinValue"
      :selectedMaxValue="selectedMaxValue"
    />
  </div>
</template>
