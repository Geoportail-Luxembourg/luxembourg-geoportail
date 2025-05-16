<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, Ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { Layer } from '@/stores/map.store.model'

const DEFAULT_STEP_ONKEYDOWN = 30

const props = defineProps<{
  sliderActive: boolean
  sliderRatio: number
  sliderTopLayer: Layer
  sliderOffset: number
  containerOffset: number
}>()
const emit = defineEmits(['moveSplitBar', 'escSplitBar'])
const { t } = useTranslation()
const sliderElement: Ref<HTMLElement | null> = ref(null)
const styleObject = computed(() => ({ left: `${props.sliderOffset}px` }))

let isDragging = false

defineExpose({
  sliderElement: sliderElement,
})

function moveSplitBar(offsetLeft: number) {
  emit('moveSplitBar', offsetLeft + sliderElement.value!.offsetWidth / 2)
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

  moveSplitBar(payload.clientX)
}

function onMouseUp() {
  isDragging = false

  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

function onKeyDownRight() {
  const offsetLeft = props.containerOffset + sliderElement.value!.offsetLeft
  moveSplitBar(offsetLeft + DEFAULT_STEP_ONKEYDOWN)
}

function onKeyDownLeft() {
  const offsetLeft = props.containerOffset + sliderElement.value!.offsetLeft
  moveSplitBar(offsetLeft - DEFAULT_STEP_ONKEYDOWN)
}

function onKeyDownEsc() {
  emit('escSplitBar')
}

onMounted(() => {
  sliderElement.value?.focus(<FocusOptions>{ focusVisible: true })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
})
</script>

<template>
  <button
    ref="sliderElement"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @keydown.space.stop="onKeyDownRight"
    @keydown.right.stop="onKeyDownRight"
    @keydown.left.stop="onKeyDownLeft"
    @keydown.delete.stop="onKeyDownLeft"
    @keydown.esc.stop="onKeyDownEsc"
    class="left-[20px] absolute h-full w-[32px] block"
    :style="styleObject"
    role="seperator"
    aria-controls="map-container"
    data-cy="sliderElement"
  >
    <span class="lux-slider-line"></span>
    <span class="lux-slider-arrows">
      <span></span>
      <span></span>
    </span>
    <span
      data-cy="sliderLayerLabel"
      class="lux-slider-layer-label"
      v-if="sliderTopLayer"
    >
      <i class="fa fa-arrow-left mr-2"></i>
      <span>{{ t(sliderTopLayer.name) }}</span>
    </span>
  </button>
</template>
