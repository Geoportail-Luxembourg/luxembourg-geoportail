import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { getUid } from 'ol'
import { noModifierKeys, singleClick } from 'ol/events/condition'
import Modify, { ModifyEvent } from 'ol/interaction/Modify'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { listen } from 'ol/events'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { useDrawStore } from '@/stores/draw.store'
import useMap from '../map/map.composable'
import { EditStateActive } from '@/stores/draw.store.model'
import { DEFAULT_DRAW_ZINDEX, FEATURE_LAYER_TYPE } from './draw.composable'
import { Circle } from 'ol/geom'
import { setCircleRadius } from '@/services/common/measurement.utils'

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
    zIndex: DEFAULT_DRAW_ZINDEX,
  })
  editLayer.set('cyLayerType', FEATURE_LAYER_TYPE)
  map.addLayer(editLayer)

  watch(editStateActive, editStateActive => {
    if (editStateActive) {
      createModifyInteraction()
    } else {
      map.removeInteraction(modifyInteraction)
    }
  })

  //listener on editingFeatureId to set stores editing states
  watch(editingFeatureId, editingFeatureId => {
    if (!editingFeatureId) {
      setEditActiveState(undefined)
      editSource.getFeatures().forEach(feature => {
        ;(feature as DrawnFeature).editable = false
        feature.changed()
      })
    }
    editSource.clear()
    const feature = drawnFeatures.value.find(
      feature => getUid(feature) === editingFeatureId
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
      deleteCondition: function (event) {
        return noModifierKeys(event) && singleClick(event)
      },
    })
    map.addInteraction(modifyInteraction)

    listen(modifyInteraction, 'modifyend', event => {
      const feature = (event as ModifyEvent).features.getArray()[0]
      updateDrawnFeature(feature as DrawnFeature)
    })
  }

  function setRadius(feature: DrawnFeature, radius: number) {
    const geometry = feature.getGeometry()
    if (geometry?.getType() === 'Circle') {
      setCircleRadius(geometry as Circle, radius, map)
      updateDrawnFeature(feature)
    }
  }

  return {
    setRadius,
  }
}
