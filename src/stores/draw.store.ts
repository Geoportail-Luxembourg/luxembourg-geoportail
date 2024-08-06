import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { defineStore } from 'pinia'
import { ShallowRef, ref } from 'vue'

import { DrawFeature, DrawStateActive } from './draw.store.model'

export const useDrawStore = defineStore('draw', () => {
  const drawStateActive = ref<DrawStateActive>(undefined)
  const drawnFeatures = ref<Collection<Feature<Geometry>>>(
    new Collection<Feature<Geometry>>()
  )
  const drawFeatures: ShallowRef<DrawFeature[]> = ref([
    // 'Point',
    // 'Polygon',
    // 'LineString',
    // 'Circle',
  ]) // TODO improve typing in an other PR
  const featureEditionDocked = ref(false)

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

  function removeFeature(featureId: number) {
    drawFeatures.value = drawFeatures.value.filter(
      feature => feature.id !== featureId
    )
  }

  return {
    drawFeatures,
    drawStateActive,
    drawnFeatures,
    featureEditionDocked,
    removeFeature,
    toggleActiveState,
    addDrawnFeature,
  }
})
