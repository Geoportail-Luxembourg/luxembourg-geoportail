<script setup lang="ts">
import MapPopup from '@/components/map/map-popup.vue'

defineProps<{
  isDocked: boolean
}>()

const emit = defineEmits(['closePopup'])

function onClosePopup() {
  emit('closePopup')
}
</script>

<template>
  <!-- Display in a popup on the map if is docked -->
  <MapPopup v-if="isDocked" @closePopup="onClosePopup">
    <slot></slot>
  </MapPopup>

  <!-- Display in the drawing features list if not-->
  <template v-else>
    <slot></slot>
  </template>
</template>
