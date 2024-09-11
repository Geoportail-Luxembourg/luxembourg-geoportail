import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

import { getUid } from 'ol/util'
import { DrawStateActive } from './draw.store.model'
import { DrawnFeature } from '@/services/draw/drawn-feature'

export const useDrawStore = defineStore('draw', () => {
  const activeFeatureId: Ref<String | undefined> = ref(undefined)
  const editingFeatureId: Ref<String | undefined> = ref(undefined)
  const drawStateActive = ref<DrawStateActive>(undefined)
  // no immutable changes on drawnFeatures in functions bellow,
  // but keep same Collection for sync with ol source (map)
  const drawnFeatures = ref<DrawnFeature[]>([])
  const featureEditionDocked = ref(false)

  function toggleActiveState(newState: DrawStateActive) {
    if (
      drawStateActive.value?.startsWith('edit') &&
      newState?.startsWith('draw')
    ) {
      drawStateActive.value = undefined
      editingFeatureId.value = undefined
    } else if (drawStateActive.value === newState) {
      drawStateActive.value = undefined
    } else {
      drawStateActive.value = newState
    }
  }

  function setActiveState(newState: DrawStateActive) {
    drawStateActive.value = newState
    if (!newState) editingFeatureId.value = undefined
  }

  function addDrawnFeature(feature: DrawnFeature) {
    drawnFeatures.value = [...drawnFeatures.value, feature]
    activeFeatureId.value = getUid(feature)
    editingFeatureId.value = getUid(feature)
    drawStateActive.value = drawStateActive.value?.replace(
      'draw',
      'edit'
    ) as DrawStateActive
    console.log(drawStateActive.value)
  }

  function updateDrawnFeature(feature: DrawnFeature) {
    const index = drawnFeatures.value.findIndex(
      drawnFeature => drawnFeature.id === feature.id
    )
    if (index !== -1) {
      drawnFeatures.value[index] = feature
    }
    //affect immutable value to trigger reactivity
    drawnFeatures.value = [...drawnFeatures.value]
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
    setActiveState,
    addDrawnFeature,
    updateDrawnFeature,
    setDrawnFeatures,
  }
})
