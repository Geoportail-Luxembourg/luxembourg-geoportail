<script setup lang="ts">
import { onMounted, provide, ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import useMap from '@/composables/map/map.composable'
import { OlSynchronizer } from '@/composables/map/ol.synchronizer'
import { OlViewSynchronizer } from '@/composables/map/ol-view.synchronizer'
import { statePersistorMapService } from '@/services/state-persistor/state-persistor-map.service'
import { statePersistorFeaturesService } from '@/services/state-persistor/state-persistor-features.service'
import { statePersistorLocationInfo } from '@/services/state-persistor/state-persistor-location-info'
import AttributionControl from '../map-controls/attribution-control.vue'
import LocationControl from '../map-controls/location-control.vue'
import Map3dControl from '../map-controls/map-3d.vue'
import FullscreenControl from '../map-controls/fullscreen-control.vue'
import ZoomControl from '../map-controls/zoom-control.vue'
import RotateControl from '../map-controls/rotate-control.vue'
import { olLayerSearchService } from '@/services/ol-layer/ol-layer-search.service'
import ZoomToExtentControl from '../map-controls/zoom-to-extent-control.vue'
import useDraw from '@/composables/draw/draw.composable'
import useDrawSelect from '@/composables/draw/draw-select.composable'
import useFeatureInfo from '@/composables/info/feature-info.composable'
import { DragRotate } from 'ol/interaction'
import { platformModifierKeyOnly } from 'ol/events/condition'

const appStore = useAppStore()
const { embedded } = storeToRefs(appStore)
const map = useMap()
const mapContainer = ref(null)
const olMap = map.createMap()

const props = withDefaults(
  defineProps<{
    v4_standalone?: boolean
  }>(),
  {
    v4_standalone: false,
  }
)

// Remove the default dragRotate interaction
olMap.getInteractions().forEach(interaction => {
  if (interaction instanceof DragRotate) {
    olMap.removeInteraction(interaction)
  }
})
const dragRotateInteraction = new DragRotate({
  condition: platformModifierKeyOnly,
})

olMap.addInteraction(dragRotateInteraction)

// add draw layer after map init to allow restoring draw features (not in v3 for now)
// TODO: remove v4_standalone condition or move calls outside of it, once v4 draw or feature info is used in v3
if (props.v4_standalone) {
  const draw = useDraw()
  draw.addDrawLayer(olMap)
  // initialise map listeners for feature selection
  useDrawSelect()
  const featureInfo = useFeatureInfo()
  featureInfo.init()
  olLayerSearchService.init(olMap)
}

const DEFAULT_EXTENT = [
  425152.9429259216, 6324465.99999133, 914349.9239510496, 6507914.867875754,
] // TODO: comming from legacy var "defaultExtent", to be moved to config

onMounted(() => {
  if (mapContainer.value) {
    new OlSynchronizer(olMap)
    new OlViewSynchronizer(olMap)
    statePersistorMapService.bootstrap()
    statePersistorFeaturesService.bootstrap()
    statePersistorLocationInfo.bootstrap()
    olMap.setTarget(mapContainer.value)

    // Direct access to olMap for cypress
    window.olMap = olMap
  }
})

watchEffect(() => {
  if (mapContainer.value && embedded.value) {
    // Specific to v3 when embedded mode:
    // wait for 1000ms = wait for angular to end drawing component
    // Otherwise, map height won't fit (angular has not yet finished removing header and footer in the dom,
    // resulting in an unwanted gutter when mode ise embedded)
    // Timer is to be removed when standalone fully fonctionnal
    const ms = import.meta.env.VITE_MODE_LIB === 'true' ? 1000 : 0

    setTimeout(() => {
      map.resize()
    }, ms)
  }
})

provide('olMap', olMap)
</script>

<template>
  <div
    id="map-container"
    data-cy="mapContainer"
    ref="mapContainer"
    class="h-full w-full bg-white relative"
  >
    <zoom-control />
    <zoom-to-extent-control :extent="DEFAULT_EXTENT" />

    <template v-if="!embedded">
      <fullscreen-control />
      <attribution-control />
      <map-3d-control v-if="v4_standalone" />
      <location-control />
      <rotate-control />
    </template>
  </div>
</template>
