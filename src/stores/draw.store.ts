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
  const drawnFeatures = ref<DrawnFeature[]>([])
  const featureEditionDocked = ref(false)

  function toggleDrawActiveState(newState: DrawStateActive) {
    // allow draw of different geom type after edit, but not same type
    if (
      editStateActive.value?.replace('edit', '') ===
      newState?.replace('draw', '')
    ) {
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
    //affect immutable value to trigger reactivity for state persistor
    drawnFeatures.value = [...drawnFeatures.value]
  }

  function setDrawnFeatures(features: DrawnFeature[]) {
    drawnFeatures.value = features
  }

  function removeFeature(featureId: String | undefined) {
    drawnFeatures.value = drawnFeatures.value.filter(
      feature => getUid(feature) !== featureId
    )
    if (activeFeatureId.value === featureId) {
      activeFeatureId.value = undefined
      editingFeatureId.value = undefined
    }
  }

  function reorderFeatures(featuresId: String[]) {
    drawnFeatures.value = drawnFeatures.value.map(f =>
      // Must use Object.assign function instead of spread operator so that
      // object type remains DrawnFeature and additional methods are not lost
      Object.assign(f, { display_order: featuresId.indexOf(`f-${getUid(f)}`) })
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
    reorderFeatures,
    toggleDrawActiveState,
    setDrawActiveState,
    setEditActiveState,
    addDrawnFeature,
    updateDrawnFeature,
    setDrawnFeatures,
  }
})
