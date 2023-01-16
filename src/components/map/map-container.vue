<script setup lang="ts">
import { onMounted, ref } from 'vue'

import useMap from '@/composables/map/map.composable'
import { OlSynchronizer } from '@/composables/map/ol.synchronizer'
import { statePersistorMapService } from '@/services/state-persistor/state-persistor-map.service'

const map = useMap()
const mapContainer = ref(null)

onMounted(async () => {
  if (mapContainer.value) {
    map.createMap(mapContainer.value)
    new OlSynchronizer(map.getOlMap())

    statePersistorMapService.restoreViewport()
    statePersistorMapService.persistViewport()
  }
})
</script>

<template>
  <div
    data-cy="mapContainer"
    ref="mapContainer"
    class="h-full w-full bg-white"
  ></div>
</template>
