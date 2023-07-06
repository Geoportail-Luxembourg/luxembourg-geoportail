<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import MousePosition from 'ol/control/MousePosition'
import { Coordinate, CoordinateFormat } from 'ol/coordinate'

import useControl from '@/composables/control/control.composable'
import { useMapStore } from '@/stores/map.store'
import { PROJECTIONS, coordinatesToString } from '@/services/projection.utils'

const { mapProjection } = storeToRefs(useMapStore())
const controlElement = ref(null)
const props = withDefaults(
  defineProps<{
    className?: string
    coordinateFormat?: CoordinateFormat
  }>(),
  {
    className: 'lux-mouse-coordinates',
  }
)
let mousePositionControl: MousePosition

watch(mapProjection, mapProjection => {
  mapProjection &&
    mousePositionControl.setCoordinateFormat(coordinateFormat(mapProjection))
})

// TODO: watch proj and set new format position

function coordinateFormat(mapProjection?: string) {
  return (coordinate: number[] | undefined) => {
    if (mapProjection === PROJECTIONS.WGS84DMS) {
      return coordinatesToString(
        <Coordinate>coordinate,
        mapProjection,
        PROJECTIONS.WGS84,
        true,
        false
      )
    } else if (mapProjection === PROJECTIONS.WGS84DM) {
      return coordinatesToString(
        <Coordinate>coordinate,
        mapProjection,
        PROJECTIONS.WGS84,
        false,
        true
      )
    } else {
      return coordinatesToString(
        <Coordinate>coordinate,
        mapProjection!,
        mapProjection!,
        false,
        false
      ) // TODO: verify return this.coordinateString_(
      //         coord, mapEpsgCode, this['projection']['value'], false, false)
    }
  }
}

onMounted(() => {
  if (controlElement.value) {
    const newControl = useControl(MousePosition, {
      className: props.className,
      ...{ target: controlElement.value },
    })
    mousePositionControl = newControl.control as MousePosition
    newControl.addControlToMap()
  }
})
</script>

<template>
  <div ref="controlElement"></div>
</template>
