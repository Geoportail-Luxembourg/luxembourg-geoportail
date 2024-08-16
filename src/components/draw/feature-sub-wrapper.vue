<script setup lang="ts">
import { computed } from 'vue'

import MapPopup from '@/components/map/map-popup.vue'
import useDrawnFeatures from '@/composables/draw/drawn-features.composable'
import { DrawFeature } from '@/stores/draw.store.model'

const props = defineProps<{
  isDocked: boolean
  feature: DrawFeature
}>()
const { getFeatCoordinates } = useDrawnFeatures()
const emit = defineEmits(['closePopup'])
const popupAnchor = computed(() => getFeatCoordinates(props.feature.olFeature))

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
