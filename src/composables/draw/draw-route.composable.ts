/**
 * Draw Route Composable
 * Provides functionality for drawing routes with map-matching
 */

import { ref, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import BaseEvent from 'ol/events/Event'
import Draw from 'ol/interaction/Draw'
import { DrawRouteInteraction, DrawRouteEvent } from './draw-route.interaction'
import useMap from '@/composables/map/map.composable'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import useDrawnFeatures from './drawn-features.composable'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

export default function useDrawRoute() {
  const map = useMap().getOlMap()
  const drawStore = useDrawStore()
  const { drawStateActive, editStateActive, followRoads } = storeToRefs(drawStore)
  const { generateDrawnFeature } = useDrawnFeatures()
  
  const isActive = ref(false)
  const mapMatchingEnabled = ref(true)
  let drawRouteInteraction: DrawRouteInteraction | null = null
  let deactivatedDrawInteraction: Draw | null = null
  
  /**
   * Get the routing API URL from environment
   */
  function getRouteUrl(): string {
    return import.meta.env.VITE_ROUTING_URL || '/route'
  }
  
  /**
   * Gets the source for the draw layer by finding it on the map
   */
  function getDrawLayerSource(): VectorSource | null {
    if (!map) return null
    
    // Find the existing draw layer on the map by its cyLayerType property
    const layers = map.getLayers().getArray()
    for (const layer of layers) {
      if (layer instanceof VectorLayer && layer.get('cyLayerType') === 'interactionDrawLayer') {
        return layer.getSource() as VectorSource | null
      }
    }
    return null
  }
  
  /**
   * Initialize and activate the draw route interaction
   */
  function activate(options: { mapMatching?: boolean } = {}) {
    if (!map) {
      return
    }
    
    // Find and deactivate the standard Draw interaction
    // Check if there's a drawing in progress that we should continue
    let existingSketch: Feature | null = null
    const interactions = map.getInteractions().getArray()
    interactions.forEach((interaction: any) => {
      if (interaction instanceof Draw && interaction.getActive()) {
        // Try to get the current sketch feature if drawing is in progress
        const overlay = (interaction as any).overlay_
        if (overlay) {
          const overlaySource = overlay.getSource()
          const features = overlaySource?.getFeatures()
          if (features && features.length > 0) {
            existingSketch = features[0]
            
            // Remove the sketch from Draw's overlay so it doesn't show duplicated
            overlaySource.clear()
          }
        }
        
        // Deactivate Draw and store reference
        deactivatedDrawInteraction = interaction
        interaction.setActive(false)
      }
    })
    
    // Get the draw layer source
    const source = getDrawLayerSource()
    if (!source) {
      return
    }
    
    // Create the interaction
    drawRouteInteraction = new DrawRouteInteraction({
      source,
      mapMatching: options.mapMatching ?? mapMatchingEnabled.value,
      getRouteUrl: getRouteUrl(),
      maxPoints: Infinity, // No limit - let user decide when to finish
      freehand: false,
      existingSketch // Pass existing sketch to continue drawing
    })
    
    // Listen to drawend event
    const handleDrawEndEvent = (event: any) => {
      handleDrawEnd(event as DrawRouteEvent)
    }
    // @ts-ignore - Custom event type
    drawRouteInteraction.addEventListener('drawend', handleDrawEndEvent)
    
    // Add to map
    map.addInteraction(drawRouteInteraction)
    isActive.value = true
  }
  
  /**
   * Deactivate the draw route interaction
   */
  function deactivate() {
    if (!map || !drawRouteInteraction) {
      return
    }
    
    // First, mark the interaction as inactive to stop processing events
    drawRouteInteraction.setActive(false)
    
    // Get the current sketch before removing
    const sketchFeature = (drawRouteInteraction as any).sketchFeature_
    const sketchCoords = (drawRouteInteraction as any).sketchCoords_
    
    // Suspend drawing to keep the sketch visible
    drawRouteInteraction.suspendDrawing()
    
    map.removeInteraction(drawRouteInteraction)
    drawRouteInteraction = null
    isActive.value = false
    
    // Reactivate the standard Draw interaction ONLY if not in edit mode
    if (deactivatedDrawInteraction) {
      if (!editStateActive.value) {
        deactivatedDrawInteraction.setActive(true)
        
        // Inject the sketch into Draw so it can continue
        if (sketchFeature && sketchCoords) {
          ;(deactivatedDrawInteraction as any).sketchFeature_ = sketchFeature
          ;(deactivatedDrawInteraction as any).sketchCoords_ = sketchCoords
          ;(deactivatedDrawInteraction as any).updateSketchFeatures_()
        }
      }
      
      deactivatedDrawInteraction = null
    }
  }
  
  /**
   * Toggle map matching on/off
   */
  function toggleMapMatching(): boolean {
    if (drawRouteInteraction) {
      const newState = drawRouteInteraction.toggleMapMatching()
      mapMatchingEnabled.value = newState
      return newState
    }
    mapMatchingEnabled.value = !mapMatchingEnabled.value
    return mapMatchingEnabled.value
  }
  
  /**
   * Remove the last point from the route
   */
  function removeLastPoint() {
    if (drawRouteInteraction) {
      drawRouteInteraction.removeLastPoint()
    }
  }
  
  /**
   * Finish the current drawing
   */
  function finishDrawing() {
    if (drawRouteInteraction) {
      drawRouteInteraction.finishDrawing()
    }
  }
  
  /**
   * Handle draw end event
   */
  function handleDrawEnd(event: DrawRouteEvent) {
    const olFeature = event.feature
    
    // Use generateDrawnFeature to properly handle MyMaps vs URL state
    // This will automatically set map_id based on isMyMapEditable
    const drawnFeature = generateDrawnFeature(olFeature)
    
    drawStore.addDrawnFeatureToCollection(drawnFeature)
    
    // Select the feature and enter edit mode (same as standard Draw)
    drawStore.selectDrawnFeature(drawnFeature)
  }
  
  /**
   * Watch for changes in followRoads checkbox
   */
  watch(followRoads, (isFollowingRoads) => {
    // Only activate/deactivate if we're in draw line mode (not edit mode)
    if (drawStateActive.value === 'drawLine' && editStateActive.value !== 'editLine') {
      if (isFollowingRoads) {
        activate({ mapMatching: true })
      } else {
        deactivate()
      }
    }
  })

  /**
   * Watch for draw state changes
   */
  watch(drawStateActive, (newState, oldState) => {
    // When entering line mode with checkbox checked, activate DrawRoute
    if (newState === 'drawLine' && followRoads.value && editStateActive.value !== 'editLine') {
      activate({ mapMatching: true })
    }
    
    // When switching away from line mode completely, deactivate and uncheck
    if (oldState === 'drawLine' && newState !== 'drawLine' && editStateActive.value !== 'editLine') {
      if (isActive.value) {
        deactivate()
      }
      followRoads.value = false
    }
  })

  /**
   * Watch for edit state changes
   */
  watch(editStateActive, (newState, oldState) => {
    // When entering ANY edit mode, disable DrawRoute (can't draw while editing)
    if (newState !== undefined && isActive.value) {
      deactivate()
    }
    
    // When leaving edit mode, re-enable if we're in line mode and checkbox is checked
    if (oldState !== undefined && newState === undefined && drawStateActive.value === 'drawLine' && followRoads.value) {
      activate({ mapMatching: true })
    }
  })

  /**
   * Cleanup on unmount
   */
  onUnmounted(() => {
    deactivate()
  })
  
  return {
    isActive,
    mapMatchingEnabled,
    activate,
    deactivate,
    toggleMapMatching,
    removeLastPoint,
    finishDrawing
  }
}
