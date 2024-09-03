<script setup lang="ts">
import { inject } from 'vue'

import MapPopup from '@/components/map/map-popup.vue'
import useDrawnFeatures from '@/composables/draw/drawn-features.composable'
import { DrawnFeature } from '@/services/draw/drawn-feature'

defineProps<{
  isDocked: boolean
}>()
const { getFeatCoordinates } = useDrawnFeatures()
const emit = defineEmits(['closePopup'])
const feature: DrawnFeature | undefined = inject('feature')
const popupAnchor = feature ? getFeatCoordinates(feature) : undefined

function onClosePopup() {
  emit('closePopup')
}
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
