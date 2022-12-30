<script setup lang="ts">
import { onMounted, ref } from 'vue'

import useMap from '@/composables/map/map.composable'
import { OlSynchronizer } from '@/composables/map/ol.synchronizer'

const map = useMap()
const mapContainer = ref(null)

onMounted(async () => {
  if (mapContainer.value) {
    map.createMap(mapContainer.value)
    new OlSynchronizer(map.getOlMap())
  }
})
</script>

<template>
  <div ref="mapContainer" class="h-full w-full bg-white"></div>
</template>
