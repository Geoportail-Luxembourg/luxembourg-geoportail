import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

export const DEFAULT_DRAW_ZINDEX = 1000
export const FEATURE_LAYER_TYPE = 'interactionDrawLayer'

class OlLayerInteractionDrawHelper {
  createOlLayer(): VectorLayer {
    const olLayer = new VectorLayer({
      source: new VectorSource({
        features: [],
      }),
      zIndex: DEFAULT_DRAW_ZINDEX,
      // Use feature's own style function
      style: (feature, resolution) => {
        const featureStyle = feature.getStyle()
        if (typeof featureStyle === 'function') {
          return featureStyle.call(feature, feature, resolution)
        }
        return featureStyle
      },
    })
    olLayer.set('cyLayerType', FEATURE_LAYER_TYPE)

    return olLayer
  }
}

const olLayerInteractionDrawHelper = new OlLayerInteractionDrawHelper()

export default olLayerInteractionDrawHelper
