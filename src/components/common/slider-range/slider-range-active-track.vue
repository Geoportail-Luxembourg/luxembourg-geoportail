<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  selectedMinValue: number
  selectedMaxValue?: number
}>()

const elRefFullTrack = ref<HTMLElement>()
const elRefSelectionTrack = ref<HTMLElement>()

const currentLeftOffset = computed(() =>
  elRefFullTrack.value
    ? Math.round(
        (elRefFullTrack.value.offsetWidth * props.selectedMinValue) / 100
      )
    : 0
)
const currentWidthOffset = computed(() => {
  let offsetWidth = 0

  if (
    props.selectedMaxValue !== undefined &&
    elRefFullTrack.value?.offsetWidth
  ) {
    const offsetRight =
      (elRefFullTrack.value?.offsetWidth * props.selectedMaxValue) / 100

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
  <div ref="elRefFullTrack" class="lux-slidebar-track">
    <div
      v-if="selectedMaxValue !== undefined"
      ref="elRefSelectionTrack"
      class="lux-slidebar-track-selection"
      :style="styleObject"
    ></div>
    <div class="lux-slidebar-track-full"></div>
  </div>
</template>
