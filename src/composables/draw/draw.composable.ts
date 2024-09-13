import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import Draw from 'ol/interaction/Draw'
import Modify, { ModifyEvent } from 'ol/interaction/Modify'
import { useDrawStore } from '@/stores/draw.store'
import useDrawInteraction from './draw-interaction.composable'
import useDrawNotifications from './draw-notifications.composable'
import { noModifierKeys, singleClick } from 'ol/events/condition'
import { Collection, getUid } from 'ol'
import useMap from '../map/map.composable'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { listen } from 'ol/events'
import { EditStateActive } from '@/stores/draw.store.model'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

export default function useDraw() {
  const { drawStateActive, editStateActive, editingFeatureId, drawnFeatures } =
    storeToRefs(useDrawStore())
  const { updateDrawnFeature, setEditActiveState } = useDrawStore()

  const drawInteractions = {
    drawPoint: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLabel: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLine: useDrawInteraction({ type: 'LineString' }).drawInteraction,
    drawCircle: useDrawInteraction({ type: 'Circle' }).drawInteraction,
    drawPolygon: useDrawInteraction({ type: 'Polygon' }).drawInteraction,
  } as DrawInteractions

  useDrawNotifications()

  //listener to synchronize ol interaction active states with store state
  watch(drawStateActive, drawStateActive => {
    Object.keys(drawInteractions).forEach(key => {
      if (`${[key as keyof DrawInteractions]}` === `${drawStateActive}`) {
        drawInteractions[key as keyof DrawInteractions].setActive(true)
      } else {
        drawInteractions[key as keyof DrawInteractions].setActive(false)
      }
    })
  })

  watch(editStateActive, editStateActive => {
    if (editStateActive) {
      modifyInteraction.setActive(true)
    } else {
      modifyInteraction.setActive(false)
    }
  })

  const editingFeatures = new Collection<DrawnFeature>()

  //listener on editingFeatureId to set stores editing states
  watch(editingFeatureId, editingFeatureId => {
    if (!editingFeatureId) setEditActiveState(undefined)
    editingFeatures.clear()
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
      editingFeatures.push(feature)
    }
  })

  const modifyInteraction = new Modify({
    features: editingFeatures,
    pixelTolerance: 20,
    deleteCondition: function (event) {
      return noModifierKeys(event) && singleClick(event)
    },
  })
  modifyInteraction.setActive(false)

  const map = useMap().getOlMap()
  map.addInteraction(modifyInteraction)

  listen(modifyInteraction, 'modifyend', event => {
    const feature = (event as ModifyEvent).features.getArray()[0]
    updateDrawnFeature(feature as DrawnFeature)
  })

  return {}
}
