import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import { noModifierKeys, singleClick } from 'ol/events/condition'
import Modify, { ModifyEvent } from 'ol/interaction/Modify'
import VectorSource from 'ol/source/Vector'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { olLayerFactoryService } from '@/services/ol-layer/ol-layer-factory.service'
import { useDrawStore } from '@/stores/draw.store'
import useMap from '../map/map.composable'

export default function useEdit() {
  let modifyInteraction: Modify | undefined = undefined
  let modifyEndHandler: ((event: ModifyEvent) => void) | undefined = undefined

  const { editStateActive, editingFeatureId, drawnFeatures } = storeToRefs(
    useDrawStore()
  )
  const { updateDrawnFeature } = useDrawStore()
  const map = useMap().getOlMap()
  const editLayer = olLayerFactoryService.createOlLayerInteractionDraw()
  const editSource = <VectorSource>editLayer.getSource()

  map.addLayer(editLayer)

  watch(editStateActive, active => {
    clearInteraction()

    if (active) {
      createModifyInteraction()
    }
  })

  // Update layer with edited feature
  watch(editingFeatureId, fId => {
    editSource.clear()

    const feature = <DrawnFeature>drawnFeatures.value.find(f => f.id === fId)

    if (feature) {
      editSource.addFeature(feature)
    }
  })

  function clearInteraction() {
    if (modifyInteraction && modifyEndHandler) {
      modifyInteraction.un('modifyend', modifyEndHandler)
      map.removeInteraction(modifyInteraction)
      modifyInteraction = undefined
      modifyEndHandler = undefined
    }
  }

  function createModifyInteraction() {
    modifyInteraction = new Modify({
      source: editSource,
      pixelTolerance: 20,
      deleteCondition: event => noModifierKeys(event) && singleClick(event),
    })

    modifyEndHandler = event => {
      const feature = <DrawnFeature>event.features.getArray()[0]
      feature.resetProfileData()
      updateDrawnFeature(feature)
    }

    modifyInteraction.on('modifyend', modifyEndHandler)
    map.addInteraction(modifyInteraction)
  }

  return {}
}
