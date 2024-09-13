import { DrawnFeature } from '@/services/draw/drawn-feature'
import { useDrawStore } from '@/stores/draw.store'
import OlMap from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { watch } from 'vue'

const DEFAULT_DRAW_ZINDEX = 1000

export default function useOlDraw() {
  const drawLayer = new VectorLayer({
    source: new VectorSource({
      features: [] as DrawnFeature[],
    }),
    zIndex: DEFAULT_DRAW_ZINDEX,
  })
  const drawStore = useDrawStore()

  watch(
    () => drawStore.drawnFeatures,
    drawnFeatures => {
      setDrawnFeatures(drawnFeatures as DrawnFeature[])
    }
  )

  function addDrawLayer(map: OlMap) {
    drawLayer.set('featureID', 'featureLayer')
    map.addLayer(drawLayer)
  }

  function setDrawnFeatures(features: DrawnFeature[]) {
    drawLayer.getSource()?.clear()
    drawLayer.getSource()?.addFeatures(features)
  }

  return {
    addDrawLayer,
    setDrawnFeatures,
  }
}
