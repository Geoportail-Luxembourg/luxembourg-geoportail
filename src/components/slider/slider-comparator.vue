<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref, Ref, watch } from 'vue'
import { getRenderPixel } from 'ol/render'
import { EventTypes, unByKey } from 'ol/Observable'
import EventType from 'ol/render/EventType'
import RenderEvent from 'ol/render/Event'
import { EventsKey } from 'ol/events'

import useOpenLayers from '@/composables/map/ol.composable'
import useMap from '@/composables/map/map.composable'
import { statePersistorSliderComparatorService } from '@/services/state-persistor/state-persistor-slider-comparator.service'
import { useSliderComparatorStore } from '@/stores/slider-comparator.store'

import SplitterElement from './splitter-element.vue'

const sliderStore = useSliderComparatorStore()
const openLayers = useOpenLayers()
const olMap = useMap().olMap
const splitterElement: Ref<InstanceType<typeof SplitterElement> | null> =
  ref(null)
const { sliderActive, sliderRatio, sliderTopLayer } = storeToRefs(sliderStore)
const splitterElementOffset = computed(
  () => splitterElement.value?.sliderElement?.offsetWidth || 0
)
const sliderOffset = computed(() =>
  olMap.value && splitterElement.value
    ? sliderRatio.value * olMap.value.getSize()![0] -
      splitterElement.value?.sliderElement?.offsetWidth! / 2 +
      olMap.value.getViewport().offsetLeft
    : 0
)

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

watch(sliderOffset, () => {
  olMap.value?.render()
})

function activate() {
  const olLayer = openLayers.getLayerFromCache(sliderTopLayer.value)

  olLayerPrerenderEvent = olLayer.on(
    <EventTypes>EventType.PRERENDER,
    function (event) {
      const ctx = <CanvasRenderingContext2D>(<RenderEvent>event).context
      const mapSize = olMap.value?.getSize()!
      const width = sliderOffset.value + splitterElementOffset.value / 2
      const tl = getRenderPixel(<RenderEvent>event, [0, 0])
      const tr = getRenderPixel(<RenderEvent>event, [width, 0])
      const bl = getRenderPixel(<RenderEvent>event, [0, mapSize[1]])
      const br = getRenderPixel(<RenderEvent>event, [width, mapSize[0]])

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

function onMoveSplitBar(offsetLeft: number) {
  const mapSize = olMap.value?.getSize()!
  const newRatio = offsetLeft / mapSize[0]

  sliderStore.setRatio(newRatio)
}

function onEscSplitBar() {
  sliderStore.toggleSlider()
}

onMounted(() => {
  // Keep ".map-wrapper" for v3 compatibility
  mapWrapperElement = olMap.value
    ?.getTargetElement()
    ?.closest('.map-wrapper') as HTMLElement
})

onUnmounted(() => {
  // Unbind event for HMR support
  deactivate()
})
</script>

<template>
  <splitter-element
    v-if="sliderTopLayer && sliderActive"
    ref="splitterElement"
    :sliderActive="sliderActive"
    :sliderRatio="sliderRatio"
    :sliderTopLayer="sliderTopLayer"
    :sliderOffset="sliderOffset"
    :containerOffset="mapWrapperElement?.offsetLeft || 0"
    @moveSplitBar="onMoveSplitBar"
    @escSplitBar="onEscSplitBar"
  ></splitter-element>
</template>
