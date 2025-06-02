import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import Draw from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import OlMap from 'ol/Map'
import { Circle } from 'ol/geom'

import useMap from '@/composables/map/map.composable'
import { setCircleRadius } from '@/services/common/measurement.utils'
import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import useDrawInteraction from './draw-interaction.composable'
import { olLayerFactoryService } from '@/services/ol-layer/ol-layer-factory.service'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

export default function useDraw() {
  const drawStore = useDrawStore()
  const { drawStateActive, drawnFeatures } = storeToRefs(drawStore)
  const map = useMap().getOlMap()
  const drawLayer = olLayerFactoryService.createOlLayerDrawnFeatures()
  const drawInteractions = {
    drawPoint: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLabel: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLine: useDrawInteraction({ type: 'LineString' }).drawInteraction,
    drawCircle: useDrawInteraction({ type: 'Circle' }).drawInteraction,
    drawPolygon: useDrawInteraction({ type: 'Polygon' }).drawInteraction,
  } as DrawInteractions

  // listener to synchronize ol interaction active states with store state
  watch(drawStateActive, drawStateActive => {
    Object.keys(drawInteractions).forEach(key => {
      if (`${[key as keyof DrawInteractions]}` === `${drawStateActive}`) {
        drawInteractions[key as keyof DrawInteractions].setActive(true)
      } else {
        drawInteractions[key as keyof DrawInteractions].setActive(false)
      }
    })
  })

  watch(
    () => drawnFeatures.value,
    drawnFeatures => {
      addFeaturesToSource(drawnFeatures as DrawnFeature[])
    }
  )

  /**
   * Add draw layer after map init to allow restoring draw features (not in v3 for now)
   * TODO: remove v4_standalone condition or move calls outside of it, once v4 draw or feature info is used in v3
   * @param map
   */
  function addDrawLayer(map: OlMap) {
    map.addLayer(drawLayer)
  }

  function createConcentricCircle(baseFeature: DrawnFeature, radius: number) {
    const newFeatureCircle = DrawnFeature.clone(baseFeature)
    const geometry = <Circle>newFeatureCircle.getGeometry()
    setCircleRadius(geometry, radius, map)

    return newFeatureCircle
  }

  function addFeaturesToSource(features: DrawnFeature[]) {
    const source = <VectorSource>drawLayer.getSource()
    source?.clear()
    source?.addFeatures(features)
  }

  return {
    createConcentricCircle,
    addDrawLayer,
  }
}
