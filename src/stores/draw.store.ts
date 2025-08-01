import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { Draw } from 'ol/interaction'

import { DrawnFeature, DrawnFeatureId } from '@/services/ol-feature/ol-feature-drawn'
import { DrawStateActive, EditStateActive } from './draw.store.model'
import { Type } from 'ol/geom/Geometry'

export const useDrawStore = defineStore('draw', () => {
  const activeFeatureId = ref<DrawnFeatureId | undefined>(undefined)
  const editingFeatureId = ref<DrawnFeatureId | undefined>(undefined)
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
    const currentEditStateType = editStateActive.value
      ?.replace('edit', '')
      .replace('Continue', '')
    const newStateType = newState?.replace('draw', '').replace('Continue', '')

    // allow draw of different geom type after edit, but not same type
    if (currentEditStateType === newStateType) {
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

  function activateDrawLineContinue() {
    setDrawActiveState('drawLineContinue')
  }

  function addDrawnFeatureToCollection(feature: DrawnFeature) {
    drawnFeatures.value = [...drawnFeatures.value, feature]
  }

  function selectDrawnFeature(feature: DrawnFeature) {
    activeFeatureId.value = feature.id
    editingFeatureId.value = feature.id
    editStateActive.value = <EditStateActive>(
      feature.featureType.replace('drawn', 'edit').replace('Continue', '')
    )
    drawStateActive.value = undefined
  }

  /**
   * Update drawnfeature stored in collection by replacing the old feature in collection
   * by the given drawnfeature (they will be identified by feature.id)
   * @param feature The new drawfeature that will replace the old one within the store collection
   */
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

  /**
   * Remove feature or features according to given id or ids
   * @param featureId 
   */
  function removeFeature(featureId: DrawnFeatureId | DrawnFeatureId[] | undefined ) {
    const featureIds = Array.isArray(featureId) ? featureId : [featureId]

    drawnFeatures.value = drawnFeatures.value.filter(
      feature => !featureIds.includes(feature.id)
    )

    if (featureIds.includes(activeFeatureId.value)) {
      activeFeatureId.value = undefined
      editingFeatureId.value = undefined
    }
  }

  function removeAllFeatures() {
    activeFeatureId.value = undefined
    editingFeatureId.value = undefined
    drawnFeatures.value = []
  }

  function reorderFeatures(featuresId: string[]) {
    drawnFeatures.value = drawnFeatures.value.map(f =>
      // Must use Object.assign function instead of spread operator so that
      // object type remains DrawnFeature and additional methods are not lost
      Object.assign(f, { display_order: featuresId.indexOf(`f-${f.id}`) })
    )
  }

  /**
   * Returns all the drawn features in the store collection corresponding to the given types
   * @param types An array of type geometry
   * @returns The list of drawn features corresponding to the given geometry types
   */
  function getDrawnFeaturesOfTypes(types: Type[]) {
    return <DrawnFeature[]>(
      drawnFeatures.value.filter(
        f => f.getGeometry() && types.includes(<Type>f.getGeometry()?.getType())
      )
    )
  }

  function getDrawnFeaturesWithIds(ids: (string | number)[]) {
    return <DrawnFeature[]>drawnFeatures.value.filter(f => ids.includes(f.id))
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
    removeAllFeatures,
    reorderFeatures,
    toggleDrawCircle,
    toggleDrawLabel,
    toggleDrawLine,
    toggleDrawPolygon,
    toggleDrawPoint,
    toggleDrawActiveState,
    setDrawActiveState,
    setEditActiveState,
    activateDrawLineContinue,
    addDrawnFeatureToCollection,
    selectDrawnFeature,
    updateDrawnFeature,
    setDrawnFeatures,
    getDrawnFeaturesOfTypes,
    getDrawnFeaturesWithIds,
  }
})
