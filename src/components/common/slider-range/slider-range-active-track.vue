<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  selectedMinValue: number
  selectedMaxValue?: number
}>()
const emit = defineEmits<{
  (e: 'change', value: number): void
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

function onClick(payload: MouseEvent) {
  if (elRefFullTrack.value) {
    const offsetLeft = elRefFullTrack.value.getBoundingClientRect().x
    const value =
      ((payload.clientX - offsetLeft) * 100) / elRefFullTrack.value.offsetWidth

    emit('change', value)
  }
}
</script>

<template>
  <div ref="elRefFullTrack" class="lux-slidebar-track">
    <div
      v-if="selectedMaxValue !== undefined"
      ref="elRefSelectionTrack"
      class="lux-slidebar-track-selection"
      :style="styleObject"
      @click="onClick"
    ></div>
    <div class="lux-slidebar-track-full" @click="onClick"></div>
  </div>
</template>
