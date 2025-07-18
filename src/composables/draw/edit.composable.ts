import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { noModifierKeys, singleClick } from 'ol/events/condition'
import Modify, { ModifyEvent } from 'ol/interaction/Modify'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { listen } from 'ol/events'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { useDrawStore } from '@/stores/draw.store'
import { EditStateActive } from '@/stores/draw.store.model'
import { OLLAYER_PROP_ID } from '@/services/ol-layer/ol-layer.model'
import useMap from '../map/map.composable'

const DEFAULT_DRAW_EDIT_ZINDEX = 1001
const FEATURE_EDIT_LAYER_TYPE = 'featureEditLayer'

export default function useEdit() {
  const { editStateActive, editingFeatureId, drawnFeatures } = storeToRefs(
    useDrawStore()
  )
  const { updateDrawnFeature, setEditActiveState } = useDrawStore()

  let modifyInteraction: Modify
  const map = useMap().getOlMap()
  const editSource = new VectorSource({
    features: [] as DrawnFeature[],
  })
  const editLayer = new VectorLayer({
    source: editSource,
    zIndex: DEFAULT_DRAW_EDIT_ZINDEX,
  })
  editLayer.set(OLLAYER_PROP_ID, FEATURE_EDIT_LAYER_TYPE)
  editLayer.set('cyLayerType', FEATURE_EDIT_LAYER_TYPE)
  map.addLayer(editLayer)

  watch(editStateActive, editStateActive => {
    if (editStateActive) {
      createModifyInteraction()
    } else {
      map.removeInteraction(modifyInteraction)
    }
  })

  // listener on editingFeatureId to set stores editing states
  watch(editingFeatureId, editingFeatureId => {
    if (!editingFeatureId) {
      setEditActiveState(undefined)
      drawnFeatures.value.forEach(feature => {
        if ((feature as DrawnFeature).editable) {
          ;(feature as DrawnFeature).editable = false
          feature.changed()
        }
      })
    }
    editSource.clear()
    const feature = drawnFeatures.value.find(
      feature => feature.id === editingFeatureId
    ) as DrawnFeature
    if (feature) {
      const editState = feature.featureType.replace(
        'drawn',
        'edit'
      ) as EditStateActive
      setEditActiveState(editState)
      feature.editable = true
      feature.changed()
      editSource.addFeature(feature)
    }
  })

  function createModifyInteraction() {
    if (modifyInteraction) {
      map.removeInteraction(modifyInteraction)
    }

    modifyInteraction = new Modify({
      source: editSource,
      pixelTolerance: 20,
      deleteCondition: event => noModifierKeys(event) && singleClick(event),
    })
    modifyInteraction.setActive(false)

    listen(modifyInteraction, 'modifyend', event => {
      const feature = <DrawnFeature>(
        (event as ModifyEvent).features.getArray()[0]
      )
      feature.resetProfileData()
      updateDrawnFeature(feature as DrawnFeature)
    })

    map.addInteraction(modifyInteraction)
  }

  return {}
}
