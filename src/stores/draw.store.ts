import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type DrawStateActive =
  | undefined
  | 'drawPoint'
  | 'drawLabel'
  | 'drawLine'
  | 'drawCircle'
  | 'drawPolygon'

export const useDrawStore = defineStore('draw', () => {
  const drawStateActive = ref<DrawStateActive>(undefined)
  const drawnFeatures = ref<Collection<Feature<Geometry>>>(
    new Collection<Feature<Geometry>>()
  )

  function toggleActiveState(newState: DrawStateActive) {
    if (drawStateActive.value === newState) {
      drawStateActive.value = undefined
    } else {
      drawStateActive.value = newState
    }
  }

  function addDrawnFeature(feature: Feature<Geometry>) {
    drawnFeatures.value.push(feature)
  }

  return {
    drawStateActive,
    drawnFeatures,
    toggleActiveState,
    addDrawnFeature,
  }
})
