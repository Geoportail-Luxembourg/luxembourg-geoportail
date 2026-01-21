<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import LayerPanel from '@/components/layer-panel/layer-panel.vue'
import LegendsPanel from '@/components/legends/legends-panel.vue'
import StylePanel from '@/components/style-selector/style-panel.vue'
import MyMapsPanel from '@/components/my-maps/my-maps-panel.vue'
import InfoPanel from '@/components/info/info-panel.vue'
import LidarConfigPanel from '@/components/lidar/lidar-config-panel.vue'
import FeedbackPanel from '@/components/feedback/feedback-panel.vue'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
const {
  layersOpen,
  legendsOpen,
  myMapsOpen,
  infoOpen,
  lidarOpen,
  feedbackOpen,
  styleEditorOpen,
  themeGridOpen,
  drawToolbarOpen,
} = storeToRefs(appStore)

watch(layersOpen, layersOpen => {
  if (layersOpen) {
    lidarOpen.value =
      legendsOpen.value =
      myMapsOpen.value =
      styleEditorOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(myMapsOpen, myMapsOpen => {
  if (myMapsOpen) {
    styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      legendsOpen.value =
      infoOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(legendsOpen, legendsOpen => {
  if (legendsOpen) {
    myMapsOpen.value =
      styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      infoOpen.value =
      lidarOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(drawToolbarOpen, drawToolbarOpen => {
  if (drawToolbarOpen && screenSizeIsAtLeast('md')) {
    myMapsOpen.value = true
    layersOpen.value = false
    legendsOpen.value = false
    themeGridOpen.value = false
    infoOpen.value = false
    lidarOpen.value = false
    feedbackOpen.value = false
  }
})

watch(infoOpen, infoOpen => {
  if (infoOpen) {
    myMapsOpen.value =
      styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      legendsOpen.value =
      lidarOpen.value =
      feedbackOpen.value =
        false
  }
})

watch(feedbackOpen, isOpen => {
  if (isOpen) {
    myMapsOpen.value =
      styleEditorOpen.value =
      layersOpen.value =
      themeGridOpen.value =
      legendsOpen.value =
      lidarOpen.value =
      infoOpen.value =
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

  <!-- lidar panel -->
  <div v-show="lidarOpen" class="w-4/5 md:w-80 bg-secondary z-10">
    <lidar-config-panel></lidar-config-panel>
  </div>
</template>
