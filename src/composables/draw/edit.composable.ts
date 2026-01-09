import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import { noModifierKeys, singleClick } from 'ol/events/condition'
import Modify, { ModifyEvent } from 'ol/interaction/Modify'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { useDrawStore } from '@/stores/draw.store'
import useMap from '../map/map.composable'
import { DEFAULT_DRAW_ZINDEX, FEATURE_LAYER_TYPE } from '@/services/ol-layer/ol-layer-interaction-draw.helper'

export default function useEdit() {
  let modifyInteraction: Modify | undefined = undefined
  let modifyEndHandler: ((event: ModifyEvent) => void) | undefined = undefined
  let originalFeature: DrawnFeature | undefined = undefined // Store reference to original

  const { editStateActive, editingFeatureId, drawnFeatures } = storeToRefs(
    useDrawStore()
  )
  const { updateDrawnFeature } = useDrawStore()
  const map = useMap().getOlMap()
  
  // Create edit layer with style function that delegates to feature's StyleFunction
  const editLayer = new VectorLayer({
    source: new VectorSource({
      features: [],
    }),
    zIndex: DEFAULT_DRAW_ZINDEX + 1, // Above draw layer
    style: (feature, resolution) => {
      const drawnFeature = feature as DrawnFeature
      const styleFunc = drawnFeature.getStyleFunction()
      if (styleFunc) {
        return styleFunc.call(drawnFeature, drawnFeature, resolution)
      }
      return []
    },
  })
  editLayer.set('cyLayerType', FEATURE_LAYER_TYPE)
  const editSource = <VectorSource>editLayer.getSource()

  map.addLayer(editLayer)

  watch(editStateActive, active => {
    clearInteraction()

    if (active) {
      createModifyInteraction()
    }
  })

  // Update layer with edited feature
  // Use flush: 'post' to ensure draw-select watcher runs first
  watch(editingFeatureId, fId => {
    editSource.clear()

    const feature = <DrawnFeature>drawnFeatures.value.find(f => f.id === fId)

    if (feature) {
      // Store reference to original feature
      originalFeature = feature
      
      // Clone the feature to avoid conflicts with drawLayer
      // OpenLayers doesn't allow the same feature instance in multiple sources
      const clonedFeature = new DrawnFeature(feature)
      clonedFeature.setGeometry(feature.getGeometry()?.clone())
      
      // Mark as being edited so StyleFunction shows vertex handles
      clonedFeature.set('__isBeingEdited__', true)
      
      editSource.addFeature(clonedFeature)
      map.render()
    } else {
      // Exiting edit mode - clear original reference
      originalFeature = undefined
    }
    // When fId is undefined, the feature goes back to drawLayer automatically
    // via the watch in draw.composable.ts (it's no longer excluded)
  }, { flush: 'post' })

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
      // Let OpenLayers use its default blue style during modification
      // The feature will get its custom style back after modifyend
    })

    modifyEndHandler = event => {
      const clonedFeature = <DrawnFeature>event.features.getArray()[0]
      clonedFeature.resetProfileData()
      
      // Copy modified geometry from clone back to original feature
      if (originalFeature && clonedFeature) {
        originalFeature.setGeometry(clonedFeature.getGeometry()?.clone())
        originalFeature.resetProfileData()
        originalFeature.setStyle(originalFeature.getStyleFunction())
        originalFeature.changed()
        updateDrawnFeature(originalFeature)
      }
      
      // Re-apply the clone's custom style for continued editing
      clonedFeature.setStyle(clonedFeature.getStyleFunction())
      clonedFeature.changed()
    }

    modifyInteraction.on('modifyend', modifyEndHandler)
    map.addInteraction(modifyInteraction)
  }

  return {}
}
