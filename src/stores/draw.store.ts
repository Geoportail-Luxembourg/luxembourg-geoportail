import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import { useTranslation } from 'i18next-vue'
import { Draw } from 'ol/interaction'
import { Type } from 'ol/geom/Geometry'

import {
  DrawnFeature,
  DrawnFeatureId,
} from '@/services/ol-feature/ol-feature-drawn'
import { DrawStateActive, EditStateActive } from './draw.store.model'
import { useAlertNotificationsStore } from './alert-notifications.store'
import {
  deleteMyMapFeature,
  MyMapSaveFeatureJson,
  saveMyMapFeature,
  saveMyMapOrder,
} from '@/services/api/api-mymaps.service'
import { AlertNotificationType } from './alert-notifications.store.model'

export const useDrawStore = defineStore('draw', () => {
  const { t } = useTranslation()
  const { addNotification } = useAlertNotificationsStore()
  const activeFeatureId = ref<DrawnFeatureId | undefined>(undefined)
  const editingFeatureId = ref<DrawnFeatureId | undefined>(undefined)
  const drawStateActive = ref<DrawStateActive>(undefined)
  const editStateActive = ref<EditStateActive>(undefined)
  const drawnFeatures = ref<DrawnFeature[]>([])
  const drawnFeaturesExceptMyMaps = computed(() => {
    return drawnFeatures.value.filter(f => !f.map_id) as DrawnFeature[]
  })
  const drawnFeaturesMyMaps = computed(() => {
    return drawnFeatures.value.filter(f => f.map_id) as DrawnFeature[]
  })
  const editingFeature = computed(() =>
    editingFeatureId.value
      ? drawnFeatures.value.find(f => f.id === editingFeatureId.value)
      : undefined
  )
  const featureEditionDocked = ref(false)
  const currentDrawInteraction = ref<Draw | undefined>(undefined)
  const clipLineActive = ref(false)
  const queueAddedDrawnFeatures = shallowRef<DrawnFeature[]>([])
  const showModalMergeLines = ref(false)

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
      .replace('Continue', '') // FIXME: Continue => hack for now...
    const newStateType = newState?.replace('draw', '').replace('Continue', '') // FIXME: Continue => hack for now...

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

  function deactivateDraw() {
    drawStateActive.value = undefined
    editingFeatureId.value = undefined
    editStateActive.value = undefined
  }

  function activateDrawLineContinue() {
    setDrawActiveState('drawLineContinue')
  }

  async function addDrawnFeatureToCollection(feature: DrawnFeature) {
    queueAddedDrawnFeatures.value = [feature]
    drawnFeatures.value = [...drawnFeatures.value, feature]

    if (feature.map_id !== undefined) {
      const resp = await saveMyMapFeature(
        feature.map_id,
        feature.toGeoJSONString()

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ).catch(e =>
        addNotification(
          t('Erreur inattendue lors de la sauvegarde de votre modification.'),
          AlertNotificationType.ERROR
        )
      )
      feature.id = (<MyMapSaveFeatureJson>resp).id!
      feature.fid = (<MyMapSaveFeatureJson>resp).id!
    }
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

    if (feature.map_id !== undefined) {
      saveMyMapFeature(feature.map_id, feature.toGeoJSONString())
    }
  }

  function setDrawnFeatures(features: DrawnFeature[]) {
    drawnFeatures.value = features
  }

  /**
   * Remove feature or features according to given id or ids
   * @param featureId
   */
  function removeFeature(
    featureId: DrawnFeatureId | DrawnFeatureId[] | undefined,
    updateMyMap = true
  ) {
    const featureIds = Array.isArray(featureId) ? featureId : [featureId]

    if (updateMyMap) {
      featureIds.forEach(id => {
        const feature = drawnFeatures.value.find(f => f.id === id)
        if (feature && feature.map_id && updateMyMap) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          deleteMyMapFeature(feature.id).catch(e =>
            addNotification(
              t(
                'Erreur inattendue lors de la sauvegarde de votre modification.'
              ),
              AlertNotificationType.ERROR
            )
          )
        }
      })
    }

    drawnFeatures.value = drawnFeatures.value.filter(
      feature => !featureIds.includes(feature.id)
    )

    if (
      featureIds.includes(activeFeatureId.value) ||
      featureIds.includes(editingFeatureId.value)
    ) {
      activeFeatureId.value = undefined
      editingFeatureId.value = undefined
    }
  }

  /**
   * Remove all features related to the given MyMap,
   * usually called when closing the MyMap, this ONLY removes the features on the map, it does not save in the MyMap backend
   * @param myMapId
   */
  function removeMyMapsFeature(myMapId: string) {
    activeFeatureId.value = undefined
    editingFeatureId.value = undefined

    const featureIds = drawnFeatures.value
      .filter(f => f.map_id === myMapId)
      .map(f => f.id)

    return removeFeature(featureIds, false)
  }

  function removeAllFeatures() {
    activeFeatureId.value = undefined
    editingFeatureId.value = undefined
    // Keep MyMaps features, only remove URL features (without map_id)
    drawnFeatures.value = drawnFeatures.value.filter(f => f.map_id)
  }

  function reorderFeatures(featuresId: string[]) {
    drawnFeatures.value = drawnFeatures.value.map(f =>
      // Must use Object.assign function instead of spread operator so that
      // object type remains DrawnFeature and additional methods are not lost
      Object.assign(f, { display_order: featuresId.indexOf(`f-${f.id}`) })
    )

    const myMapFeatures = drawnFeatures.value.filter(f => f.map_id)

    if (myMapFeatures.length > 0) {
      const myMapId = myMapFeatures[0].map_id!
      const orders = myMapFeatures.map(f => ({
        fid: <number>f.id,
        display_order: f.display_order,
      }))
      saveMyMapOrder(myMapId, orders)
    }
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

  function toggleDrawMergeLinesModal(open?: boolean) {
    showModalMergeLines.value = open ?? !showModalMergeLines.value
  }

  function toggleDrawCutLineMode(active?: boolean) {
    clipLineActive.value = active ?? !clipLineActive.value
  }

  return {
    activeFeatureId,
    editingFeatureId,
    drawStateActive,
    editStateActive,
    drawnFeatures,
    drawnFeaturesExceptMyMaps,
    drawnFeaturesMyMaps,
    editingFeature,
    featureEditionDocked,
    currentDrawInteraction,
    clipLineActive,
    queueAddedDrawnFeatures,
    showModalMergeLines,
    deactivateDraw,
    removeFeature,
    removeMyMapsFeature,
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
    toggleDrawMergeLinesModal,
    toggleDrawCutLineMode,
  }
})
