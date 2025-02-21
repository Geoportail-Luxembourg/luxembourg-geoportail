<script setup lang="ts">
import { watch } from 'vue'
import { onUnmounted, computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    maxLimit?: number
    minLimit?: number
    selectedValue: number
  }>(),
  {
    maxLimit: 100,
    minLimit: 0,
  }
)
const emit = defineEmits<{
  (e: 'change', value: number, dragging: boolean): void
}>()

const isDragging = ref(false)
const elRefTrack = ref<HTMLElement>()
const elRefThumb = ref<HTMLElement>()
/*
  TODO: Since we now use v-show instead of v-if in layer-panel.vue, the element is present in the DOM but remains hidden.  
  As a result, offsetWidth always returns its default value instead of the actual one.  
  We need to find a way to retrieve the correct offsetWidth value.
*/
const elRefTrackWidth = computed(() => elRefTrack.value?.offsetWidth || 274)
const elRefThumbWidth = computed(() => elRefThumb.value?.offsetWidth || 9)
const currentValue = ref(props.selectedValue) // Is detached from selectedValue, keep its own state
const currentLeftOffset = computed(() => {
  const offset = (elRefTrackWidth.value * currentValue.value) / 100
  return offset - elRefThumbWidth.value / 2
})
const styleObject = computed(() => ({ left: `${currentLeftOffset.value}px` }))

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
})

watch(
  () => props.selectedValue,
  value => {
    currentValue.value = value
  }
)

function onMoveThumb(value: number) {
  currentValue.value = Math.max(Math.min(value, 100), 0)
  emit('change', currentValue.value, isDragging.value)
}

function onKeyDownLeft() {
  onMoveThumb(currentValue.value - 1)
}

function onKeyDownRight() {
  onMoveThumb(currentValue.value + 1)
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

/**
 * From mouse move event getpayload, if it is a range (there are two thumbs coexisting,
 * there must be minLimit or maxLimit), then check if it does not exceed the limit
 * @param payload
 */
function getPayloadValue(payload: MouseEvent) {
  const value = elRefTrack.value?.offsetWidth
    ? ((payload.clientX - elRefThumbWidth.value * 2) * 100) /
      elRefTrack.value?.offsetWidth
    : 0

  return Math.round(Math.max(Math.min(value, props.maxLimit), props.minLimit))
}
</script>

<template>
  <div class="w-full" role="slider" ref="elRefTrack">
    <button
      class="lux-slidebar-thumb"
      :class="isDragging ? 'dragging' : ''"
      ref="elRefThumb"
      :style="styleObject"
      @keydown.space.stop="onKeyDownRight"
      @keydown.right.stop="onKeyDownRight"
      @keydown.left.stop="onKeyDownLeft"
      @keydown.delete.stop="onKeyDownLeft"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      :aria-label="ariaLabel"
      :title="ariaLabel"
    ></button>
  </div>
</template>
