<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import ScaleLine from 'ol/control/ScaleLine'
import useMap from '@/composables/map/map.composable'

const { getOlMap } = useMap()
const map = getOlMap()

const scaleLineContainer = ref<HTMLElement | null>(null)
let scaleLineControl: ScaleLine | null = null

onMounted(() => {
  if (scaleLineContainer.value) {
    // Create ScaleLine control with custom target
    scaleLineControl = new ScaleLine({
      target: scaleLineContainer.value,
      units: 'metric',
      bar: false,
      text: true,
      minWidth: 64,
    })

    // Add to map
    map.addControl(scaleLineControl)
  }
})

onBeforeUnmount(() => {
  if (scaleLineControl) {
    map.removeControl(scaleLineControl)
    scaleLineControl = null
  }
})
</script>

<template>
  <div class="scaleline-wrapper">
    <div ref="scaleLineContainer" class="scaleline-container"></div>
  </div>
</template>

<style scoped>
.scaleline-wrapper {
  display: inline-flex;
  align-items: center;
}

.scaleline-container {
  display: flex;
  align-items: center;
}

/* Style the OpenLayers ScaleLine */
.scaleline-container :deep(.ol-scale-line) {
  position: relative;
  background: transparent;
  padding: 0;
  margin: 0;
  border-radius: 0;
  bottom: auto;
  left: auto;
}

.scaleline-container :deep(.ol-scale-line-inner) {
  border: 1px solid var(--color-primary);
  border-top: none;
  color: var(--color-primary);
  font-size: 12px;
  text-align: center;
  margin: 0;
  padding: 0 2px;
  will-change: contents, width;
}
</style>
