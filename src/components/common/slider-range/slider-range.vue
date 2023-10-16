<script setup lang="ts">
import { ref, watch } from 'vue'
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
const minValue = ref(props.selectedMinValue)
const maxValue = ref(props.selectedMaxValue)

watch(
  () => props.selectedMinValue,
  value => {
    minValue.value = value
  }
)

watch(
  () => props.selectedMaxValue,
  value => {
    maxValue.value = value
  }
)

function onChangeMin(value: number, dragging: boolean) {
  emit('change', value, props.selectedMaxValue, dragging)
}

function onChangeMax(value: number, dragging: boolean) {
  emit('change', props.selectedMinValue, value, dragging)
}

function onChange(value: number) {
  if (maxValue.value === undefined) {
    minValue.value = value
  } else {
    if (value >= maxValue.value) {
      maxValue.value = value
    } else if (value <= props.selectedMinValue) {
      minValue.value = value
    } else if (+(maxValue.value - value) < +(minValue.value - value)) {
      maxValue.value = value
    } else {
      maxValue.value = value
    }
  }

  emit('change', minValue.value, maxValue.value, false)
}
</script>

<template>
  <div class="lux-slidebar-fake">
    <!-- Draggable Max thumb button -->
    <slider-range-thumb
      v-if="maxValue !== undefined"
      :ariaLabel="ariaLabelMax"
      :minLimit="selectedMinValue"
      :selectedValue="maxValue"
      @change="onChangeMax"
    />
    <!-- Draggable Min thumb button -->
    <!-- put Min value after Max value, this is just for z-index grabbing -->
    <slider-range-thumb
      :ariaLabel="ariaLabelMin"
      :maxLimit="selectedMaxValue"
      :selectedValue="minValue"
      @change="onChangeMin"
    />
    <!-- Selection highlight -->
    <slider-range-active-track
      :selectedMinValue="selectedMinValue"
      :selectedMaxValue="selectedMaxValue"
      @change="onChange"
    />
  </div>
</template>
