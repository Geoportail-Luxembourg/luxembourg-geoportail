import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

import { getUid } from 'ol/util'
import { DrawStateActive, EditStateActive } from './draw.store.model'
import { DrawnFeature } from '@/services/draw/drawn-feature'

export const useDrawStore = defineStore('draw', () => {
  const activeFeatureId: Ref<String | undefined> = ref(undefined)
  const editingFeatureId: Ref<String | undefined> = ref(undefined)
  const drawStateActive = ref<DrawStateActive>(undefined)
  const editStateActive = ref<EditStateActive>(undefined)
  // no immutable changes on drawnFeatures in functions bellow,
  // but keep same Collection for sync with ol source (map)
  const drawnFeatures = ref<DrawnFeature[]>([])
  const featureEditionDocked = ref(false)

  function toggleDrawActiveState(newState: DrawStateActive) {
    // allow draw of different geom type after edit, but not same type
    if (editStateActive.value?.slice(4) === newState?.slice(4)) {
      drawStateActive.value = undefined
      editStateActive.value = undefined
      editingFeatureId.value = undefined
    } else if (drawStateActive.value === newState) {
      drawStateActive.value = undefined
    } else {
      setDrawActiveState(newState)
    }
  }

  function setDrawActiveState(newState: DrawStateActive) {
    if (newState) {
      editStateActive.value = undefined
      editingFeatureId.value = undefined
    }
    drawStateActive.value = newState
  }

  function setEditActiveState(newState: EditStateActive) {
    if (newState) {
      drawStateActive.value = undefined
    } else {
      editingFeatureId.value = undefined
    }
    editStateActive.value = newState
  }

  function addDrawnFeature(feature: DrawnFeature) {
    drawnFeatures.value = [...drawnFeatures.value, feature]
    activeFeatureId.value = getUid(feature)
    editingFeatureId.value = getUid(feature)
    editStateActive.value = feature.featureType.replace(
      'drawn',
      'edit'
    ) as EditStateActive
    drawStateActive.value = undefined
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
    editStateActive,
    drawnFeatures,
    featureEditionDocked,
    removeFeature,
    toggleDrawActiveState,
    setDrawActiveState,
    setEditActiveState,
    addDrawnFeature,
    updateDrawnFeature,
    setDrawnFeatures,
  }
})
