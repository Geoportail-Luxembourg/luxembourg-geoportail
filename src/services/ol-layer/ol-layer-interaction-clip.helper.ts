import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { createEditingStyle } from 'ol/style/Style'

export const DEFAULT_DRAW_ZINDEX = 1001
export const FEATURE_LAYER_TYPE = 'interactionClipLayer'

class OlLayerInteractionDrawHelper {
  createOlLayer(): VectorLayer {
    const olLayer = new VectorLayer({
      source: new VectorSource({
        useSpatialIndex: false,
        wrapX: false,
      }),
      style: () => createEditingStyle()['Point'],
      zIndex: DEFAULT_DRAW_ZINDEX,
      updateWhileAnimating: true,
      updateWhileInteracting: true,
    })

    olLayer.set('cyLayerType', FEATURE_LAYER_TYPE)

    return olLayer
  }
}

const olLayerInteractionDrawHelper = new OlLayerInteractionDrawHelper()

export default olLayerInteractionDrawHelper
