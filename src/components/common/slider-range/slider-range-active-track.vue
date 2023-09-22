<script setup lang="ts">
import { Ref, computed, ref } from 'vue'

const props = defineProps<{
  selectedMinValue: number
  selectedMaxValue?: number
  totalSteps: number
}>()
const sliderTrackElement: Ref<HTMLElement | null> = ref(null)
const sliderTrackSelectionElement: Ref<HTMLElement | null> = ref(null)
const currentLeftOffset = computed(() => {
  const offsetLeft = sliderTrackElement.value?.offsetWidth
    ? (sliderTrackElement.value?.offsetWidth * props.selectedMinValue) /
      (props.totalSteps - 1)
    : 0
  return Math.round(offsetLeft)
})
const currentWidthOffset = computed(() => {
  let offsetWidth = 0

  if (
    props.selectedMaxValue !== undefined &&
    sliderTrackElement.value?.offsetWidth
  ) {
    const offsetRight =
      (sliderTrackElement.value?.offsetWidth * props.selectedMaxValue) /
      (props.totalSteps - 1)

    offsetWidth = offsetRight - currentLeftOffset.value
  }

  return Math.round(offsetWidth)
})
const styleObject = computed(() => ({
  left: `${currentLeftOffset.value}px`,
  width: `${currentWidthOffset.value}px`,
}))
</script>

<template>
  <div ref="sliderTrackElement" class="lux-slidebar-track">
    <div
      v-if="selectedMaxValue !== undefined"
      ref="sliderTrackSelectionElement"
      class="lux-slidebar-track-selection"
      :style="styleObject"
    ></div>
    <div class="lux-slidebar-track-full"></div>
  </div>
</template>
