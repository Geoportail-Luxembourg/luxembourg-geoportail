import { defineStore } from 'pinia'
import { ref } from 'vue'

import { DrawStateActive } from './draw.store.model'
import { DrawnFeature } from '@/services/draw/drawn-feature'

export const useDrawStore = defineStore('draw', () => {
  const activeFeatureId = ref(undefined)
  const editingFeatureId = ref(undefined)
  const drawStateActive = ref<DrawStateActive>(undefined)
  // no immutable changes on drawnFeatures in functions bellow,
  // but keep same Collection for sync with ol source (map)
  const drawnFeatures = ref<DrawnFeature[]>([])
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
    activeFeatureId.value = feature.ol_uid
    editingFeatureId.value = feature.ol_uid
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
    activeFeatureId,
    editingFeatureId,
    drawStateActive,
    drawnFeatures,
    featureEditionDocked,
    removeFeature,
    toggleActiveState,
    addDrawnFeature,
    setDrawnFeatures,
  }
})
