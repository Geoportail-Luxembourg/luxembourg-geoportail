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
  (e: 'change', value: number, dragging: boolean): void
}>()

const isDragging = ref(false)
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

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
})

function onMoveThumb(value: number) {
  const valueThumb = Math.min(Math.max(value, props.minValue), props.maxValue)

  emit('change', valueThumb, isDragging.value)
}

function onKeyDownLeft() {
  onMoveThumb(props.selectedValue - 1)
}

function onKeyDownRight() {
  onMoveThumb(props.selectedValue + 1)
}

function onMouseDown() {
  isDragging.value = true

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(payload: MouseEvent) {
  if (!isDragging.value) {
    return
  }

  onMoveThumb(getPayloadValue(payload))
}

function onMouseUp(payload: MouseEvent) {
  isDragging.value = false

  onMoveThumb(getPayloadValue(payload))

  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

function getPayloadValue(payload: MouseEvent) {
  const value = sliderBarElement.value?.offsetWidth
    ? ((payload.clientX - thumbElementWidth.value / 2) *
        (props.totalSteps - 1)) /
      sliderBarElement.value?.offsetWidth
    : 0

  return Math.floor(value)
}
</script>

<template>
  <div class="w-full" role="slider" ref="sliderBarElement">
    <button
      class="lux-slidebar-thumb"
      :class="isDragging ? 'dragging' : ''"
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
