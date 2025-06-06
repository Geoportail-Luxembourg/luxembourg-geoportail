import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { Draw } from 'ol/interaction'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { DrawStateActive, EditStateActive } from './draw.store.model'

export const useDrawStore = defineStore('draw', () => {
  const activeFeatureId: Ref<string | number | undefined> = ref(undefined)
  const editingFeatureId: Ref<string | number | undefined> = ref(undefined)
  const drawStateActive = ref<DrawStateActive>(undefined)
  const editStateActive = ref<EditStateActive>(undefined)
  const drawnFeatures = ref<DrawnFeature[]>([])
  const featureEditionDocked = ref(false)
  const currentDrawInteraction = ref<Draw | undefined>(undefined)

  function toggleDrawPoint() {
    toggleDrawActiveState('drawPoint')
  }

  function toggleDrawLabel() {
    toggleDrawActiveState('drawLabel')
  }

  function toggleDrawLine() {
    toggleDrawActiveState('drawLine')
  }

  function toggleDrawPolygon() {
    toggleDrawActiveState('drawPolygon')
  }

  function toggleDrawCircle() {
    toggleDrawActiveState('drawCircle')
  }

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

  function activateEditLine(feature?: DrawnFeature) {
    if (feature) {
      editingFeatureId.value = feature.id
      // Nb. the edit composable will activate the state itself in his own watcher
    }
  }

  function addDrawnFeature(feature: DrawnFeature) {
    drawnFeatures.value = [...drawnFeatures.value, feature]
    activeFeatureId.value = feature.id
    editingFeatureId.value = feature.id
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
    // affect immutable value to trigger reactivity for state persistor
    drawnFeatures.value = [...drawnFeatures.value]
  }

  function setDrawnFeatures(features: DrawnFeature[]) {
    drawnFeatures.value = features
  }

  function removeFeature(featureId: String | undefined) {
    drawnFeatures.value = drawnFeatures.value.filter(
      feature => feature.id !== featureId
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
      Object.assign(f, { display_order: featuresId.indexOf(`f-${f.id}`) })
    )
  }

  return {
    activeFeatureId,
    editingFeatureId,
    drawStateActive,
    editStateActive,
    drawnFeatures,
    featureEditionDocked,
    currentDrawInteraction,
    removeFeature,
    reorderFeatures,
    toggleDrawCircle,
    toggleDrawLabel,
    toggleDrawLine,
    toggleDrawPolygon,
    toggleDrawPoint,
    toggleDrawActiveState,
    setDrawActiveState,
    setEditActiveState,
    activateEditLine,
    addDrawnFeature,
    updateDrawnFeature,
    setDrawnFeatures,
  }
})
