<script setup lang="ts">
import SliderRangeThumb from './slider-range-thumb.vue'
import SliderRangeActiveTrack from './slider-range-active-track.vue'

const props = defineProps<{
  minValue: number
  maxValue: number
  selectedMinValue: number
  selectedMaxValue?: number
  totalSteps: number
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
    <slider-range-thumb
      v-if="selectedMaxValue"
      :totalSteps="totalSteps"
      :ariaLabel="ariaLabelMax"
      :minValue="selectedMinValue"
      :maxValue="maxValue"
      :selectedValue="selectedMaxValue"
      @change="onChangeMax"
    />
    <!-- Put Min date value after Max value, this is just for z-index grabbing -->
    <slider-range-thumb
      :ariaLabel="ariaLabelMin"
      :minValue="minValue"
      :maxValue="selectedMaxValue ?? totalSteps - 1"
      :selectedValue="selectedMinValue"
      :totalSteps="totalSteps"
      @change="onChangeMin"
    />
    <slider-range-active-track
      :selectedMinValue="selectedMinValue"
      :selectedMaxValue="selectedMaxValue"
      :totalSteps="totalSteps"
    />
  </div>
</template>
