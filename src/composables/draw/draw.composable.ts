import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import Draw from 'ol/interaction/Draw'
import { useDrawStore } from '@/stores/draw.store'
import useDrawInteraction from './draw-interaction.composable'
import useDrawNotifications from './draw-notifications.composable'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OlMap from 'ol/Map'
import useEdit from './edit.composable'

export const DEFAULT_DRAW_ZINDEX = 1000
export const FEATURE_LAYER_TYPE = 'featureLayer'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

export default function useDraw() {
  const { drawStateActive, drawnFeatures } = storeToRefs(useDrawStore())

  useDrawNotifications()
  useEdit()

  const drawInteractions = {
    drawPoint: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLabel: useDrawInteraction({ type: 'Point' }).drawInteraction,
    drawLine: useDrawInteraction({ type: 'LineString' }).drawInteraction,
    drawCircle: useDrawInteraction({ type: 'Circle' }).drawInteraction,
    drawPolygon: useDrawInteraction({ type: 'Polygon' }).drawInteraction,
  } as DrawInteractions

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

  const drawLayer = new VectorLayer({
    source: new VectorSource({
      features: [] as DrawnFeature[],
    }),
    zIndex: DEFAULT_DRAW_ZINDEX,
  })
  drawLayer.set('cyLayerType', FEATURE_LAYER_TYPE)

  watch(
    () => drawnFeatures.value,
    drawnFeatures => {
      setDrawnFeatures(drawnFeatures as DrawnFeature[])
    }
  )

  function addDrawLayer(map: OlMap) {
    map.addLayer(drawLayer)
  }

  function setDrawnFeatures(features: DrawnFeature[]) {
    drawLayer.getSource()?.clear()
    drawLayer.getSource()?.addFeatures(features)
  }

  return {
    addDrawLayer,
  }
}
