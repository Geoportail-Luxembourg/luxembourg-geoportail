<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  Ref,
  watch,
} from 'vue'
import { useTranslation } from 'i18next-vue'
import { getRenderPixel } from 'ol/render'
import { EventTypes, unByKey } from 'ol/Observable'
import EventType from 'ol/render/EventType'
import RenderEvent from 'ol/render/Event'
import { EventsKey } from 'ol/events'

import { useSliderComparatorStore } from '@/stores/slider-comparator.store'
import useOpenLayers from '@/composables/map/ol.composable'
import useMap from '@/composables/map/map.composable'
import { statePersistorSliderComparatorService } from '@/services/state-persistor/state-persistor-slider-comparator.service'

const DEFAULT_STEP_ONKEYDOWN = 30

const { t } = useTranslation()
const sliderStore = useSliderComparatorStore()
const openLayers = useOpenLayers()
const olMap = useMap().olMap
const sliderElement: Ref<HTMLElement | null> = ref(null)
const { sliderActive, sliderRatio, sliderTopLayer } = storeToRefs(sliderStore)
const sliderOffset = computed(() =>
  olMap.value && sliderElement.value
    ? sliderRatio.value * olMap.value.getSize()![0] -
      sliderElement.value.offsetWidth / 2 +
      olMap.value.getViewport().offsetLeft
    : 0
)
const styleObject = reactive({ left: '0' })

let isDragging = false
let olLayerPrerenderEvent: EventsKey
let olLayerPostrenderEvent: EventsKey
let mapWrapperElement: HTMLElement

statePersistorSliderComparatorService.bootstrap()

watch([sliderTopLayer, sliderActive], ([topLayer, isActive], [oldTopLayer]) => {
  if (topLayer && isActive) {
    // Check if top layer has changed
    // allways unbind prerender/postrender events in this case for the previous top layer
    if (topLayer !== oldTopLayer) {
      deactivate()
    }

    activate()
  } else {
    deactivate()
  }

  olMap.value?.render()
})

watch(sliderOffset, sliderOffset => {
  styleObject.left = `${sliderOffset}px`
  olMap.value?.render()
})

function activate() {
  const olLayer = openLayers.getLayerFromCache(sliderTopLayer.value)

  olLayerPrerenderEvent = olLayer.on(
    <EventTypes>EventType.PRERENDER,
    function (event) {
      const ctx = <CanvasRenderingContext2D>(<RenderEvent>event).context
      const mapSize = olMap.value?.getSize()!
      const width = sliderOffset.value + sliderElement.value!.offsetWidth / 2
      const tl = getRenderPixel(<RenderEvent>event, [width, 0])
      const tr = getRenderPixel(<RenderEvent>event, [mapSize[0], 0])
      const bl = getRenderPixel(<RenderEvent>event, [width, mapSize[1]])
      const br = getRenderPixel(<RenderEvent>event, mapSize)

      ctx.save()
      ctx.beginPath()
      ctx.moveTo(tl[0], tl[1])
      ctx.lineTo(bl[0], bl[1])
      ctx.lineTo(br[0], br[1])
      ctx.lineTo(tr[0], tr[1])
      ctx.closePath()
      ctx.clip()
    }
  )

  olLayerPostrenderEvent = olLayer.on(
    <EventTypes>EventType.POSTRENDER,
    function (e) {
      const event = <RenderEvent>e
      const ctx = <CanvasRenderingContext2D>event.context
      ctx.restore()
    }
  )
}

function deactivate() {
  unByKey([olLayerPrerenderEvent, olLayerPostrenderEvent])
}

function moveSplitBar(offsetLeft: number) {
  const mapSize = olMap.value?.getSize()!
  const newRatio =
    (offsetLeft + sliderElement.value!.offsetWidth / 2) / mapSize[0]

  sliderStore.setRatio(newRatio)
}

function onMouseDown() {
  isDragging = true
}

function onMouseMove(payload: MouseEvent) {
  if (!isDragging) {
    return
  }

  const mapContainerOffsetLeft = mapWrapperElement.offsetLeft!

  moveSplitBar(payload.clientX - mapContainerOffsetLeft)
}

function onMouseUp() {
  isDragging = false
}

function onKeyDownRight() {
  moveSplitBar(sliderElement.value!.offsetLeft + DEFAULT_STEP_ONKEYDOWN)
}

function onKeyDownLeft() {
  moveSplitBar(sliderElement.value!.offsetLeft - DEFAULT_STEP_ONKEYDOWN)
}

function onKeyDownEsc() {
  sliderStore.toggleSlider()
}

onMounted(() => {
  // Keep ".map-wrapper" for v3 compatibility
  mapWrapperElement = olMap.value
    ?.getTargetElement()
    ?.closest('.map-wrapper') as HTMLElement

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)

  // Unbind event for HMR support
  deactivate()
})
</script>

<template>
  <button
    ref="sliderElement"
    v-if="sliderActive"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @keydown.space="onKeyDownRight"
    @keydown.right="onKeyDownRight"
    @keydown.left="onKeyDownLeft"
    @keydown.delete="onKeyDownLeft"
    @keydown.esc="onKeyDownEsc"
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
    <span class="lux-slider-layer-label" v-if="sliderTopLayer">
      <i class="fa fa-arrow-left mr-2"></i>
      <span>{{ t(sliderTopLayer.name) }}</span>
    </span>
  </button>
</template>
