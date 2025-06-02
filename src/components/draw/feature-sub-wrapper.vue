<script setup lang="ts">
import { inject, ref, watchEffect } from 'vue'

import MapPopup from '@/components/map/map-popup.vue'
import useDrawnFeatures from '@/composables/draw/drawn-features.composable'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { debounce } from '@/services/utils'

defineProps<{
  isDocked: boolean
}>()
const { getFeatCoordinates } = useDrawnFeatures()
const emit = defineEmits(['closePopup'])
const feature: DrawnFeature | undefined = inject('feature')
const popupAnchor: any = ref(getUnreactiveCoords())

function onClosePopup() {
  emit('closePopup')
}

/**
 * Update the anchor coords when user modfies the geom,
 * but with a debounce, preventing the modale to moves at each update of the geom
 */
const onChangeGeom = debounce(() => {
  popupAnchor.value = getUnreactiveCoords()
}, 1000)

/**
 * Get an unreactive value for coords, otherwise, anchor is updated
 * each time the geom is modified by the user
 */
function getUnreactiveCoords() {
  return JSON.parse(JSON.stringify(getFeatCoordinates(feature!)))
}

watchEffect(() => {
  if (feature?.getGeometry() && getFeatCoordinates(feature!)) {
    onChangeGeom()
  }
})
</script>

<template>
  <!-- Display in a popup on the map if is docked -->
  <MapPopup v-if="isDocked" :anchor="popupAnchor" @closePopup="onClosePopup">
    <slot></slot>
  </MapPopup>

  <!-- Display in the drawing features list if not-->
  <template v-else>
    <slot></slot>
  </template>
</template>
