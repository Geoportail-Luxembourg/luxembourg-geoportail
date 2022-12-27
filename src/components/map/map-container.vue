<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { mapService } from '@/services/map/map.service'
import { OlSynchronizer } from '@/services/map/ol.synchronizer'

const mapContainer = ref(null)

onMounted(async () => {
  if (mapContainer.value) {
    mapService.createMap(mapContainer.value)
    new OlSynchronizer(mapService.map)
  }
})
</script>

<template>
  <div ref="mapContainer" class="h-full w-full bg-white"></div>
</template>
