import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

export const DEFAULT_DRAW_ZINDEX = 1000
export const FEATURE_LAYER_TYPE = 'featureLayer'

class OlLayerDrawnFeatureHelper {
  createOlLayer(): VectorLayer {
    const olLayer = new VectorLayer({
      source: new VectorSource({
        features: [],
      }),
      zIndex: DEFAULT_DRAW_ZINDEX,
    })
    olLayer.set('cyLayerType', FEATURE_LAYER_TYPE)

    return olLayer
  }
}

const olLayerDrawnFeatureHelper = new OlLayerDrawnFeatureHelper()

export default olLayerDrawnFeatureHelper
