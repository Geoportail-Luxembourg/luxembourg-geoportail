<script setup lang="ts">
import OlMap from 'ol/Map'
//import {listen, listenOnce} from 'ol/events.js';
import { unByKey } from 'ol/Observable.js'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { useSliderStore } from '@/stores/slider-ratio.store'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

import useOpenLayers from '@/composables/map/ol.composable'
import useMap from '@/composables/map/map.composable'

function get() {
  return 'myLabel'
}

const appStore = useAppStore()
const mapStore = useMapStore()
const sliderStore = useSliderStore()
const luxOL = useOpenLayers()
const map = useMap()
const mainCtrl = {
  // activeLayersComparator: 'bla',
  map: 'bli',
  activeLayersComparator: 'blou',
  selectedLayers: [{ get }],
}

const { sliderOffset } = storeToRefs(sliderStore)
const { layerComparatorOpen, layerComparatorSliderRatio } =
  storeToRefs(appStore)

//const leftOffset = computed(() => sliderRatio * 500 )

const styleText = computed(() => `left:${sliderOffset.value}px`)

watch(sliderOffset, off => {
  console.log(off)
  // $el.style.left = off
})

/* const props = defineProps({
 *   map: {
 *     type: OlMap,
 *   },
 * })
 * */
let precomposeEvent_
let postcomposeEvent_
let olMap_: OlMap
let topLayer
olMap_ = map.getOlMap() as OlMap

// function activate() {
watch(layerComparatorOpen, isOpen => {
  olMap_ = map.getOlMap() as OlMap
  if (isOpen) {
    topLayer = mapStore.layers[0]
    if (topLayer !== undefined) {
      const olLayer = luxOL.getLayerFromCache(topLayer)
      precomposeEvent_ = olLayer.on('prerender', function (event) {
        if (mapStore.layers[0] === topLayer) {
          var ratio = layerComparatorSliderRatio.value
          var ctx = event.context
          var width = ctx.canvas.width * (1 - ratio)
          ctx.save()
          ctx.beginPath()
          ctx.rect(0, 0, ctx.canvas.width - width, ctx.canvas.height)
          ctx.clip()
        } else {
          appStore.toggleLayerComparator(false)
        }
      })
      postcomposeEvent_ = olLayer.on('postrender', function (event) {
        if (mapStore.layers[0] === topLayer) {
          var ctx = event.context
          ctx.restore()
        } else {
          appStore.toggleLayerComparator(false)
        }
      })
    }
  }

  //function deactivate() {
  else {
    /* if (this.mousedownEvent_) {
     *   unByKey(this.mousedownEvent_);
     * }
     * if (this.mapResizeEvent_) {
     *   unByKey(this.mapResizeEvent_);
     * }*/
    if (precomposeEvent_ !== null) {
      unByKey(precomposeEvent_)
    }
    if (postcomposeEvent_ !== null) {
      unByKey(postcomposeEvent_)
    }
  }
  olMap_.render()
})

/* function mapResizeEvent_ = listen(props.map, 'change:size', this.moveLine_, this)
 * let mousedownEvent_ = listen(
 *   this.element_[0], 'mousedown',
 *   function(event) {
 *     this.isDragging_ = true;
 *     if (this.mousemoveEvent_ === null) {
 *       this.mousemoveEvent_ = listen(
 *         this.map_,
 *         'pointermove', this.drag_, this);
 *     }
 *     listenOnce(
 *       this.$document_[0],
 *       'mouseup', function() {
 *         if (this.mousemoveEvent_) {
 *           unByKey(this.mousemoveEvent_);
 *         }
 *         this.isDragging_ = false;
 *         this.mousemoveEvent_ = null;
 *       }, this);
 *   }, this);
 * */

let dragging = false
let prevX

function mdown(e) {
  // deactivate()
  // activate()
  dragging = true
  prevX = e.x
}
function mmove(e) {
  if (dragging) {
    sliderStore.incrementOffset(e.x - prevX)
    //const vp = olMap_.getViewport()
    //var mapOffset = angular.element(olMap_.getViewport()).offset().left
    var curRatio = sliderOffset.value / olMap_.getSize()[0]

    if (curRatio < 0.1) {
      curRatio = 0.1
    } else if (curRatio > 0.9) {
      curRatio = 0.9
    }
    appStore.setLayerComparatorSliderRatio(curRatio)
    /* var offset = (curRatio * this.map_.getSize()[0]) -
     *              (this.element_.width() / 2) +
     *              angular.element(this.map_.getViewport()).offset().left;
     * this.element_.css({'left': offset});*/
    prevX = e.x
    olMap_.render()
  }
}
function mup() {
  dragging = false
  // deactivate()
}
</script>

<template>
  <!-- <div @mousedown="mdown" @mousemove="mmove" @mouseup="mup" v-drag:x ng-show="mainCtrl.activeLayersComparator"
       app-slider app-slider-map="::mainCtrl.map"
       app-slider-active="mainCtrl.activeLayersComparator"
       app-slider-layers="::mainCtrl.selectedLayers" id="slider-line-area ng-hide" class="ml-[20px] absolute h-full w-[32px]" style="cursor:default" ng-cloak> -->
  <div
    v-if="layerComparatorOpen"
    @mousedown="mdown"
    @mousemove="mmove"
    @mouseup="mup"
    class="left-[20px] absolute h-full w-[32px]"
    :style="styleText"
  >
    <div
      id="slider-line"
      class="absolute h-full w-[4px] left-[50%] bg-primary ml-[-2px] cursor-ew-resize"
    ></div>
    <div
      id="slider-arrows"
      class="absolute h-[32px] w-[32px] top-[50%] bg-primary flex justify-center items-center cursor-ew-resize"
    >
      <div
        id="slider-arrow-left"
        class="w-0 h-0 mr-[2px] border-r-[10px] border-white border-y-[10px] border-y-transparent"
      ></div>
      <div
        id="slider-arrow-right"
        class="w-0 h-0 ml-[2px] border-l-[10px] border-white border-y-[10px] border-y-transparent"
      ></div>
    </div>
    <div v-if="mainCtrl.selectedLayers.length > 0" class="slider-layer-label">
      <i class="fa fa-arrow-left"></i>
      <span
        >{{ mainCtrl.selectedLayers[0].get('label') }} {{ sliderOffset }}</span
      >
    </div>
  </div>
</template>
