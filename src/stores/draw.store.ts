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
  // no immutable changes on drawnFeatures in functions bellow,
  // but keep same Collection for sync with ol source (map)
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

  function setDrawnFeatures(features: Feature<Geometry>[]) {
    drawnFeatures.value.clear()
    drawnFeatures.value.extend(features)
  }

  return {
    drawStateActive,
    drawnFeatures,
    toggleActiveState,
    addDrawnFeature,
    setDrawnFeatures,
  }
})
