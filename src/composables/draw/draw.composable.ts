import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import Draw from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import OlMap from 'ol/Map'

import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { olLayerFactoryService } from '@/services/ol-layer/ol-layer-factory.service'
import useDrawInteraction from './draw-interaction.composable'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

/**
 * This composable is mainly used to initialize the drawing functionality.
 * It sets watchers draw states and interactions, thus it should only be called once in the whole app.
 * @returns addDrawLayer()
 */
export default function useDraw() {
  const drawStore = useDrawStore()
  const { drawStateActive, editStateActive, drawnFeatures, currentDrawInteraction, editingFeatureId } =
    storeToRefs(drawStore)
  const { createDrawInteraction } = useDrawInteraction()
  const drawLayer = olLayerFactoryService.createOlLayerInteractionDraw()
  const drawInteractions = {
    drawPoint: createDrawInteraction({ type: 'Point' }),
    drawLabel: createDrawInteraction({ type: 'Point' }),
    drawLine: createDrawInteraction({ type: 'LineString' }),
    drawLineContinue: createDrawInteraction({ type: 'LineString' }, 'update'),
    drawCircle: createDrawInteraction({ type: 'Circle' }),
    drawPolygon: createDrawInteraction({ type: 'Polygon' }),
  } as DrawInteractions

  // listener to synchronize ol interaction active states with store state
  watch(drawStateActive, drawStateActive => {
    Object.keys(drawInteractions).forEach(key => {
      const interaction = drawInteractions[key as keyof DrawInteractions]
      // Only activate if we're not in edit mode
      if (`${[key as keyof DrawInteractions]}` === `${drawStateActive}` && !editStateActive.value) {
        interaction.setActive(true)
        currentDrawInteraction.value = interaction
      } else {
        interaction.setActive(false)
      }
    })
  })
  
  // Watch editStateActive to disable draw interactions when entering edit mode
  watch(editStateActive, isEditing => {
    if (isEditing) {
      // Disable all draw interactions when entering edit mode
      Object.values(drawInteractions).forEach(interaction => {
        interaction.setActive(false)
      })
    } else if (drawStateActive.value) {
      // Re-enable the active draw interaction when leaving edit mode
      const key = drawStateActive.value as keyof DrawInteractions
      if (drawInteractions[key]) {
        drawInteractions[key].setActive(true)
        currentDrawInteraction.value = drawInteractions[key]
      }
    }
  })

  watch(drawnFeatures, drawnFeatures => {
    addFeaturesToSource(drawnFeatures as DrawnFeature[], editingFeatureId.value)
  }, { flush: 'post' })
  
  // Also watch editingFeatureId to refresh the draw layer when entering/exiting edit mode
  watch(editingFeatureId, () => {
    addFeaturesToSource(drawnFeatures.value as DrawnFeature[], editingFeatureId.value)
  })

  /**
   * Add draw layer after map init to allow restoring draw features (not in v3 for now)
   * TODO: remove v4_standalone condition or move calls outside of it, once v4 draw or feature info is used in v3
   * @param map
   */
  function addDrawLayer(map: OlMap) {
    map.addLayer(drawLayer)
  }

  function addFeaturesToSource(features: DrawnFeature[], excludeFeatureId?: string | number) {
    const source = <VectorSource>drawLayer.getSource()
    
    // Filter out the feature being edited (it's in editSource)
    const featuresToAdd = excludeFeatureId 
      ? features.filter(f => f.id !== excludeFeatureId)
      : features
    
    // Get current features in source
    const currentFeatures = source?.getFeatures() || []
    
    // Remove features that shouldn't be there
    currentFeatures.forEach(f => {
      const drawnF = f as DrawnFeature
      if (!featuresToAdd.find(feat => feat.id === drawnF.id)) {
        source?.removeFeature(f)
      }
    })
    
    // Add features that should be there but aren't
    featuresToAdd.forEach(f => {
      if (!currentFeatures.find(feat => (feat as DrawnFeature).id === f.id)) {
        f.changed() // Trigger re-render
        source?.addFeature(f)
      }
    })
  }

  return {
    addDrawLayer,
    drawInteractions,
  }
}
