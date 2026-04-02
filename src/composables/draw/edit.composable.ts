import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { listen, unlistenByKey, EventsKey } from 'ol/events'

import { noModifierKeys, singleClick } from 'ol/events/condition'
import Modify, { ModifyEvent } from 'ol/interaction/Modify'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import LineString from 'ol/geom/LineString'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { useDrawStore } from '@/stores/draw.store'
import useMap from '../map/map.composable'
import {
  DEFAULT_DRAW_ZINDEX,
  FEATURE_LAYER_TYPE,
} from '@/services/ol-layer/ol-layer-interaction-draw.helper'

export default function useEdit() {
  let modifyInteraction: Modify | undefined = undefined
  let modifyEndHandler: ((event: ModifyEvent) => void) | undefined = undefined
  let originalFeature: DrawnFeature | undefined = undefined // Store reference to original
  let geometryChangeHandler: (() => void) | undefined = undefined // Store geometry change handler
  let keyupListenerKey: EventsKey | undefined = undefined // Store keyup listener key

  const { editStateActive, editingFeatureId, drawnFeatures } =
    storeToRefs(useDrawStore())
  const { updateDrawnFeature } = useDrawStore()
  const map = useMap().getOlMap()

  // Create edit layer with style function that delegates to feature's StyleFunction.
  // We use getStyle() (already stored on the feature via setStyle()) rather than
  // getStyleFunction() so we never rebuild the closure on every render frame.
  const editLayer = new VectorLayer({
    source: new VectorSource({
      features: [],
    }),
    zIndex: DEFAULT_DRAW_ZINDEX + 1, // Above draw layer
    style: (feature, resolution) => {
      const drawnFeature = feature as DrawnFeature
      const styleFunc = drawnFeature.getStyle()
      if (typeof styleFunc === 'function') {
        return (styleFunc as Function).call(
          drawnFeature,
          drawnFeature,
          resolution
        )
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
      attachKeyListener()
    } else {
      detachKeyListener()
    }
  })

  // Update layer with edited feature
  // Use flush: 'post' to ensure draw-select watcher runs first
  watch(
    editingFeatureId,
    fId => {
      editSource.clear()

      const feature = <DrawnFeature>drawnFeatures.value.find(f => f.id === fId)

      if (feature) {
        // Store reference to original feature
        originalFeature = feature

        // Clone the feature to avoid conflicts with drawLayer
        // OpenLayers doesn't allow the same feature instance in multiple sources
        const clonedFeature = new DrawnFeature(feature)
        clonedFeature.setId(feature.id) // Ensure the cloned feature has the same id
        clonedFeature.setGeometry(feature.getGeometry()?.clone())

        // Listen to geometry changes on the cloned feature for real-time UI updates
        // Note: We don't update the original geometry during mouse modification to avoid conflicts with input changes
        // The UI will be updated through the computed properties in feature-measurements
        geometryChangeHandler = () => {
          // Geometry changed - UI will update automatically through computed properties
        }
        clonedFeature.getGeometry()?.on('change', geometryChangeHandler)

        // Mark as being edited so StyleFunction shows vertex handles
        clonedFeature.set('__isBeingEdited__', true)

        editSource.addFeature(clonedFeature)
        map.render()
      } else {
        // Exiting edit mode - clear original reference and geometry change handler
        if (originalFeature && geometryChangeHandler) {
          originalFeature.getGeometry()?.un('change', geometryChangeHandler)
        }
        originalFeature = undefined
        geometryChangeHandler = undefined
      }
      // When fId is undefined, the feature goes back to drawLayer automatically
      // via the watch in draw.composable.ts (it's no longer excluded)
    },
    { flush: 'post' }
  )

  function clearInteraction() {
    if (modifyInteraction && modifyEndHandler) {
      modifyInteraction.un('modifyend', modifyEndHandler)
      map.removeInteraction(modifyInteraction)
      modifyInteraction = undefined
      modifyEndHandler = undefined
    }
  }

  /**
   * Handle Backspace key press to remove the last point from the edited feature
   */
  function onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Backspace' && originalFeature) {
      removeLastPoint()
    }
  }

  /**
   * Attach keyboard listener for Backspace key
   */
  function attachKeyListener() {
    if (!keyupListenerKey) {
      keyupListenerKey = listen(document, 'keyup', event =>
        onKeyUp(event as KeyboardEvent)
      )
    }
  }

  /**
   * Detach keyboard listener
   */
  function detachKeyListener() {
    if (keyupListenerKey) {
      unlistenByKey(keyupListenerKey)
      keyupListenerKey = undefined
    }
  }

  /**
   * Remove the last point from the edited feature (for LineString and Polygon geometries)
   */
  function removeLastPoint() {
    if (!originalFeature) return

    const geometry = originalFeature.getGeometry()
    if (!geometry) return

    const geomType = geometry.getType()
    let pointRemoved = false

    if (geomType === 'LineString' || geomType === 'MultiLineString') {
      const lineString = geometry as LineString
      const coordinates = lineString.getCoordinates()

      // Only remove if there are more than 2 points
      if (coordinates.length > 2) {
        coordinates.splice(-1, 1)
        lineString.setCoordinates(coordinates)
        pointRemoved = true
      }
    } else if (geomType === 'Polygon') {
      const polygon = geometry as any // Polygon type
      const rings = polygon.getCoordinates()

      if (rings.length > 0) {
        const ring = rings[0]
        // For polygons, keep at least 4 points (3 unique + 1 to close the ring)
        if (ring.length > 4) {
          ring.splice(-2, 1) // Remove the second-to-last point, keeping the closing point
          polygon.setCoordinates(rings)
          pointRemoved = true
        }
      }
    }

    if (pointRemoved) {
      originalFeature.resetProfileData()
      originalFeature.changed()
      updateDrawnFeature(originalFeature)

      // Also update the cloned feature in the edit layer
      const clonedFeature = editSource.getFeatures()[0] as DrawnFeature
      if (clonedFeature) {
        clonedFeature.setGeometry(geometry.clone())
        clonedFeature.resetProfileData()
        clonedFeature.changed()
      }

      map.render()
    }
  }

  function createModifyInteraction() {
    modifyInteraction = new Modify({
      source: editSource,
      pixelTolerance: 20,
      deleteCondition: event => noModifierKeys(event) && singleClick(event),
      // Disable pointer snapping to segment midpoints: for lines with many points,
      // the default snapping computes the closest point on every segment on each
      // pointermove event (O(n)), which causes noticeable lag.
      snapToPointer: false,
      // Let OpenLayers use its default blue style during modification
      // The feature will get its custom style back after modifyend
    })

    modifyEndHandler = event => {
      const clonedFeature = <DrawnFeature>event.features.getArray()[0]
      clonedFeature.resetProfileData()

      // Copy modified geometry from clone back to original feature.
      // No need to rebuild the StyleFunction: geometry changed but style parameters
      // are unchanged, so the cached StyleFunction is still valid.
      if (originalFeature && clonedFeature) {
        originalFeature.setGeometry(clonedFeature.getGeometry()?.clone())
        originalFeature.resetProfileData()
        originalFeature.changed()
        updateDrawnFeature(originalFeature)
      }

      // Trigger re-render of the clone with its current (cached) style
      clonedFeature.changed()
    }

    modifyInteraction.on('modifyend', modifyEndHandler)
    map.addInteraction(modifyInteraction)
  }

  return {}
}
