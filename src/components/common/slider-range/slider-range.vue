<script setup lang="ts">
import SliderRangeThumb from './slider-range-thumb.vue'
import SliderRangeTrack from './slider-range-track.vue'

const props = defineProps<{
  minValue: number
  maxValue: number
  selectedMinValue: number
  selectedMaxValue: number
  totalSteps: number
  ariaLabelMin?: string
  ariaLabelMax?: string
}>()
const emit = defineEmits<{
  (e: 'change', min: number, max: number): void
}>()

function onChangeMin(value: number) {
  emit('change', value, props.selectedMaxValue)
}

function onChangeMax(value: number) {
  emit('change', props.selectedMinValue, value)
}
</script>

<template>
  <div class="lux-slidebar-fake">
    <slider-range-thumb
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
      :maxValue="selectedMaxValue"
      :selectedValue="selectedMinValue"
      :totalSteps="totalSteps"
      @change="onChangeMin"
    />
    <slider-range-track
      :selectedMinValue="selectedMinValue"
      :selectedMaxValue="selectedMaxValue"
      :totalSteps="totalSteps"
    />
  </div>
</template>
