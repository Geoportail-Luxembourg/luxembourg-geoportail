<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

import useMap from '@/composables/map/map.composable'
import { OlSynchronizer } from '@/composables/map/ol.synchronizer'
import { OlViewSynchronizer } from '@/composables/map/ol-view.synchronizer'
import { statePersistorMapService } from '@/services/state-persistor/state-persistor-map.service'

import AttributionControl from '../map-controls/attribution-control.vue'
import LocationControl from '../map-controls/location-control.vue'
import Map3dControl from '../map-controls/map-3d.vue'
import FullscreenControl from '../map-controls/fullscreen-control.vue'
import ZoomControl from '../map-controls/zoom-control.vue'
import ZoomToExtentControl from '../map-controls/zoom-to-extent-control.vue'

const map = useMap()
const mapContainer = ref(null)
const olMap = map.createMap()

withDefaults(
  defineProps<{
    v4_standalone?: boolean
  }>(),
  {
    v4_standalone: false,
  }
)

const DEFAULT_EXTENT = [
  425152.9429259216, 6324465.99999133, 914349.9239510496, 6507914.867875754,
] // TODO: comming from legacy var "defaultExtent", to be moved to config

onMounted(() => {
  if (mapContainer.value) {
    new OlSynchronizer(olMap)
    new OlViewSynchronizer(olMap)
    statePersistorMapService.bootstrap()
    olMap.setTarget(mapContainer.value)

    // Direct access to olMap for cypress
    window.olMap = olMap
  }
})

provide('olMap', olMap)
</script>

<template>
  <div
    id="map-container"
    data-cy="mapContainer"
    ref="mapContainer"
    class="lux h-full w-full bg-white relative"
  >
    <zoom-control />
    <zoom-to-extent-control :extent="DEFAULT_EXTENT" />
    <fullscreen-control />
    <attribution-control />
    <map-3d-control v-if="v4_standalone" />
    <location-control />
  </div>
</template>
