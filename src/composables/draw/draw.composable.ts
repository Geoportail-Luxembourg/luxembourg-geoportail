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
  const { drawStateActive, drawnFeatures, currentDrawInteraction } =
    storeToRefs(drawStore)
  const { createDrawInteraction } = useDrawInteraction()
  const drawLayer = olLayerFactoryService.createOlLayerDrawnFeatures()
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
      if (`${[key as keyof DrawInteractions]}` === `${drawStateActive}`) {
        interaction.setActive(true)
        currentDrawInteraction.value = interaction
      } else {
        interaction.setActive(false)
      }
    })
  })

  watch(drawnFeatures, drawnFeatures => {
    addFeaturesToSource(drawnFeatures as DrawnFeature[])
  })

  /**
   * Add draw layer after map init to allow restoring draw features (not in v3 for now)
   * TODO: remove v4_standalone condition or move calls outside of it, once v4 draw or feature info is used in v3
   * @param map
   */
  function addDrawLayer(map: OlMap) {
    map.addLayer(drawLayer)
  }

  function addFeaturesToSource(features: DrawnFeature[]) {
    const source = <VectorSource>drawLayer.getSource()
    source?.clear()
    source?.addFeatures(features)
  }

  return {
    addDrawLayer,
  }
}
