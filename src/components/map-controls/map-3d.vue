<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'
import { CLASS_CONTROL, CLASS_UNSELECTABLE } from 'ol/css'
import Control from 'ol/control/Control'
import { Options } from 'ol/control/Control'
import { toLonLat } from 'ol/proj'

import useControl from '@/composables/control/control.composable'
import { useMapStore } from '@/stores/map.store'

const LUX_VCS_URL = import.meta.env.VITE_LUX_VCS_URL
const LUX_VCS_COORDINATES = [6.13, 49.61]
const LUX_VCS_MODULES = ['catalogConfig', 'LuxConfig']
const zoomToCesiumAltitude = {
  9: 350000,
  10: 180000,
  11: 100000,
  12: 40000,
  13: 25000,
  14: 9000,
  15: 6000,
  16: 3500,
  17: 1900,
  18: 900,
  19: 600,
}

const mapStore = useMapStore()
const { t } = useTranslation()
const props = withDefaults(
  defineProps<{
    className?: string
    label?: string
    tipLabel?: string
  }>(),
  {
    className: 'map-3d-button',
    label: '3D',
    tipLabel: '3D',
  }
)
const { x, y, zoom, layers } = storeToRefs(mapStore)
const controlElement = ref(null)
const linkTo3dMap = computed(() => {
  // Example pattern for VCS state
  // [[[6.131935,49.611622,5000],[6.131935,49.611622,50],300,0,-90,0],"cesium",["moduleName"],[["addresses",1,0],["communes",1,0]],[],0]

  const [lon, lat] = getLonLatFromXY(x.value, y.value)
  const altitude = getAltFromZoom(zoom.value ?? 12)
  const selectedLayers = layers.value.map(l => JSON.stringify([l.name, 1, 0]))
  const state = `[[[${[lon, lat, altitude].join(',')}],[${[
    lon,
    lat,
    altitude,
  ].join(',')}],300,0,-90,0],"cesium",["${LUX_VCS_MODULES.join(
    '","'
  )}"],[${selectedLayers.join(',')}],[],0]`

  return `${LUX_VCS_URL}?state=${encodeURIComponent(state)}`
})

onMounted(() =>
  useControl(Control, {
    ...props,
    target: controlElement,
  } as unknown as Options)
)

function getLonLatFromXY(
  x: number | undefined | null,
  y: number | undefined | null
) {
  return x && y ? toLonLat([x, y]) : LUX_VCS_COORDINATES
}

function getAltFromZoom(zoom: number) {
  const minZoom = 9
  const maxZoom = 19

  const clampedZoom = Math.max(
    minZoom,
    Math.min(maxZoom, Math.round(zoom))
  ) as keyof typeof zoomToCesiumAltitude

  return zoomToCesiumAltitude[clampedZoom]
}
</script>

<template>
  <div
    data-cy="3dViewerLink"
    ref="controlElement"
    :class="`${props.className} ${CLASS_UNSELECTABLE} ${CLASS_CONTROL} ${
      mapStore.is3dActive ? 'active' : ''
    }`"
  >
    <a
      type="button"
      target="lux3d"
      :href="linkTo3dMap"
      :title="t(props.tipLabel)"
      >3D</a
    >
  </div>
</template>

<style lang="css" scoped>
.ol-control a[type='button'] {
  font-family: 'DINNextLTPro-Condensed', Arial, sans-serif;
  font-size: 1.5em;
  line-height: 2.5rem;
}
</style>
