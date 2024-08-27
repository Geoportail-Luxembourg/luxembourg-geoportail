<script setup lang="ts">
import { onMounted, ref, shallowRef, watchEffect } from 'vue'
import { Coordinate } from 'ol/coordinate'
import Overlay from 'ol/Overlay'

import useMap from '@/composables/map/map.composable'

const props = defineProps<{
  anchor: Coordinate | undefined
}>()
const emit = defineEmits(['closePopup'])
const map = useMap()
const popupContainer = ref(null)
const overlay = shallowRef(
  new Overlay({
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  })
)

onMounted(() => {
  if (popupContainer.value) {
    overlay.value.setElement(popupContainer.value)
    map.getOlMap().addOverlay(overlay.value)
  }
})

watchEffect(() => {
  overlay.value.setPosition(props.anchor)
})
</script>

<template>
  <Teleport to="body">
    <div ref="popupContainer" data-cy="mapPopup" class="popup">
      <button
        class="fa-sharp fa-solid fa-close float-right mt-2 hover:text-primary"
        @click="() => emit('closePopup')"
      ></button>
      <slot></slot>
    </div>
  </Teleport>
</template>

<style>
.popup {
  @apply absolute bg-white px-2 rounded-lg bottom-3 -left-12;
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  min-width: 340px;
}
.popup:after,
.popup:before {
  top: 100%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
</style>
