<script setup lang="ts">
import { onUnmounted, Ref, computed, ref } from 'vue'

const props = defineProps<{
  ariaLabel?: string
  minValue: number
  maxValue: number
  totalSteps: number
  selectedValue: number
}>()
const emit = defineEmits<{
  (e: 'change', value: number): void
}>()

const sliderBarElement: Ref<HTMLElement | null> = ref(null)
const thumbElement: Ref<HTMLElement | null> = ref(null)
const thumbElementWidth = computed(() => thumbElement.value?.offsetWidth || 40)
const currentLeftOffset = computed(() => {
  const offset = sliderBarElement.value?.offsetWidth
    ? (sliderBarElement.value?.offsetWidth * props.selectedValue) /
      (props.totalSteps - 1)
    : 0
  return Math.round(offset - thumbElementWidth.value / 2)
})
const styleObject = computed(() => ({ left: `${currentLeftOffset.value}px` }))

let isDragging = false

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
})

function onMoveThumb(value: number) {
  emit('change', Math.min(Math.max(value, props.minValue), props.maxValue))
}

function onKeyDownLeft() {
  onMoveThumb(props.selectedValue - 1)
}

function onKeyDownRight() {
  onMoveThumb(props.selectedValue + 1)
}

function onMouseDown() {
  isDragging = true

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(payload: MouseEvent) {
  if (!isDragging) {
    return
  }

  const value = sliderBarElement.value?.offsetWidth
    ? ((payload.clientX - thumbElementWidth.value / 2) *
        (props.totalSteps - 1)) /
      sliderBarElement.value?.offsetWidth
    : 0

  onMoveThumb(Math.floor(value))
}

function onMouseUp() {
  isDragging = false

  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}
</script>

<template>
  <div class="w-full" role="slider" ref="sliderBarElement">
    <button
      class="lux-slidebar-thumb"
      ref="thumbElement"
      :style="styleObject"
      @keydown.space="onKeyDownRight"
      @keydown.right="onKeyDownRight"
      @keydown.left="onKeyDownLeft"
      @keydown.delete="onKeyDownLeft"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      :aria-label="ariaLabel"
      :title="ariaLabel"
    ></button>
  </div>
</template>
