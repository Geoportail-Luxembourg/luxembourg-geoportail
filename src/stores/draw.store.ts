import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

export type DrawStateActive =
  | undefined
  | 'drawPoint'
  | 'drawLabel'
  | 'drawLine'
  | 'drawCircle'
  | 'drawPolygon'

export const useDrawStore = defineStore('draw', () => {
  const drawStateActive = ref<DrawStateActive>(undefined)
  const drawFeatures: Ref<string[]> = ref([
    'Point',
    'Polygon',
    'LineString',
    'Circle',
  ]) // TODO improve typing in an other PR

  function toggleActiveState(newState: DrawStateActive) {
    if (drawStateActive.value === newState) {
      drawStateActive.value = undefined
    } else {
      drawStateActive.value = newState
    }
  }

  return {
    drawFeatures,
    drawStateActive,
    toggleActiveState,
  }
})
