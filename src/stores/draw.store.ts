import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { DrawnFeature, DrawStateActive } from './draw.store.model'

export const useDrawStore = defineStore('draw', () => {
  const drawStateActive = ref<DrawStateActive>(undefined)
  // no immutable changes on drawnFeatures in functions bellow,
  // but keep same Collection for sync with ol source (map)
  const drawnFeatures = ref<DrawnFeature[]>([])
  const drawnOlFeatures = computed(() =>
    drawnFeatures.value.map(f => f.olFeature as any as Feature<Geometry>)
  )
  const featureEditionDocked = ref(false)

  function toggleActiveState(newState: DrawStateActive) {
    if (drawStateActive.value === newState) {
      drawStateActive.value = undefined
    } else {
      drawStateActive.value = newState
    }
  }

  function addDrawnFeature(feature: DrawnFeature) {
    drawnFeatures.value = [...drawnFeatures.value, feature]
  }

  function setDrawnFeatures(features: DrawnFeature[]) {
    drawnFeatures.value = features
  }

  function removeFeature(featureId: number) {
    drawnFeatures.value = drawnFeatures.value.filter(
      feature => feature.id !== featureId
    )
  }

  return {
    drawStateActive,
    drawnFeatures,
    drawnOlFeatures,
    featureEditionDocked,
    removeFeature,
    toggleActiveState,
    addDrawnFeature,
    setDrawnFeatures,
  }
})
