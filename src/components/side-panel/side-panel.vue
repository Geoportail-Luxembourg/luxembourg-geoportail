<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import LegendsPanel from '@/components/legends/legends-panel.vue'
import StylePanel from '@/components/style-selector/style-panel.vue'
import RoutingPanel from '@/components/routing/RoutingPanel.vue'
import MyMapsPanel from '@/components/my-maps/my-maps-panel.vue'
import InfoPanel from '@/components/info/info-panel.vue'
import LidarConfigPanel from '@/components/lidar/lidar-config-panel.vue'
import FeedbackPanel from '@/components/feedback/feedback-panel.vue'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'
import { ignoreNextMapMove } from '@/services/map/map-move-detection.service'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
const {
  layersOpen,
  legendsOpen,
  myMapsOpen,
  infoOpen,
  lidarOpen,
  routingPanelOpen,
  feedbackOpen,
  styleEditorOpen,
  themeGridOpen,
  drawToolbarOpen,
} = storeToRefs(appStore)

const maxExtent = JSON.parse(import.meta.env.VITE_DEFAULT_MAX_EXTENT)
const routingUrl = import.meta.env.VITE_ROUTING_URL || ''

// Close any open side panel when the map is moved in mobile mode (w-4/5 = 80%)
function handleMapMoved() {
  // Only close panels when in mobile view (using w-4/5 class = 80% width)
  // which means screen is below md breakpoint (< 768px)
  if (!screenSizeIsAtLeast('md')) {
    layersOpen.value = false
    legendsOpen.value = false
    myMapsOpen.value = false
    infoOpen.value = false
    styleEditorOpen.value = false
    feedbackOpen.value = false
    routingPanelOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('map-moved', handleMapMoved)
})

onUnmounted(() => {
  window.removeEventListener('map-moved', handleMapMoved)
})

watch(layersOpen, layersOpen => {
  if (layersOpen) {
    // Ignore the next map movement to prevent closing the panel right after opening
    ignoreNextMapMove()
    lidarOpen.value =
      legendsOpen.value =
      myMapsOpen.value =
      styleEditorOpen.value =
      routingPanelOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(myMapsOpen, myMapsOpen => {
  if (myMapsOpen) {
    ignoreNextMapMove()
    styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      legendsOpen.value =
      infoOpen.value =
      routingPanelOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(legendsOpen, legendsOpen => {
  if (legendsOpen) {
    ignoreNextMapMove()
    myMapsOpen.value =
      styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      infoOpen.value =
      lidarOpen.value =
      routingPanelOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(drawToolbarOpen, drawToolbarOpen => {
  if (drawToolbarOpen && screenSizeIsAtLeast('md')) {
    ignoreNextMapMove()
    myMapsOpen.value = true
    layersOpen.value = false
    legendsOpen.value = false
    themeGridOpen.value = false
    infoOpen.value = false
    lidarOpen.value = false
    feedbackOpen.value = false
    routingPanelOpen.value = false
  }
})

watch(infoOpen, infoOpen => {
  if (infoOpen) {
    ignoreNextMapMove()
    myMapsOpen.value =
      styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      legendsOpen.value =
      lidarOpen.value =
      feedbackOpen.value =
      routingPanelOpen.value =
        false
  }
})

watch(feedbackOpen, isOpen => {
  if (isOpen) {
    ignoreNextMapMove()
    myMapsOpen.value =
      styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      legendsOpen.value =
      lidarOpen.value =
      infoOpen.value =
      routingPanelOpen.value =
        false
  }
})

watch(routingPanelOpen, isOpen => {
  if (isOpen) {
    ignoreNextMapMove()
    layersOpen.value =
      legendsOpen.value =
      myMapsOpen.value =
      styleEditorOpen.value =
      feedbackOpen.value =
      infoOpen.value =
      lidarOpen.value =
      themeGridOpen.value =
        false
  }
})
</script>

<template>
  <!-- Layer panel -->
  <div v-if="layersOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <layer-panel />
  </div>

  <!-- Legends panel -->
  <div v-if="legendsOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <legends-panel />
  </div>

  <!-- Style editor -->
  <div v-if="styleEditorOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <style-panel />
  </div>

  <!-- MyMaps panel -->
  <div v-if="myMapsOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <my-maps-panel />
  </div>

  <!-- Info panel -->
  <div v-show="infoOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <info-panel />
  </div>

  <!-- Feedback panel -->
  <div v-if="feedbackOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <feedback-panel />
  </div>

  <!-- Routing panel -->
  <div v-if="routingPanelOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <routing-panel
      :max-extent="maxExtent"
      :poi-search-service-url="routingUrl"
    />
  </div>

  <!-- lidar panel -->
  <div v-show="lidarOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <lidar-config-panel></lidar-config-panel>
  </div>
</template>
