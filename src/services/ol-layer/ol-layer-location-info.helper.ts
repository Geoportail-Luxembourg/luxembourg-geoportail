import { Feature } from 'ol'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import StyleStyle from 'ol/style/Style'
import StyleCircle from 'ol/style/Circle'
import StyleFill from 'ol/style/Fill'
import StyleStroke from 'ol/style/Stroke'

export const DEFAULT_ZINDEX = 1501
export const FEATURE_LAYER_TYPE = 'infoFeatureLayer'

class OlLayerLocationInfoHelper {
  createOlLayer(): VectorLayer<VectorSource> {
    const olLayer = new VectorLayer({
      source: new VectorSource({
        features: [] as Feature[],
      }),
      zIndex: DEFAULT_ZINDEX,
    })

    olLayer.set('cyLayerType', FEATURE_LAYER_TYPE)
    setInfoStyle(olLayer)

    return olLayer
  }
}

function setInfoStyle(layer: VectorLayer<VectorSource>) {
  const defaultFill = new StyleFill({
    color: [255, 255, 0, 0.6],
  })
  const circleStroke = new StyleStroke({
    color: [255, 155, 55, 1],
    width: 3,
  })

  const pointStyle = new StyleCircle({
    radius: 10,
    fill: defaultFill,
    stroke: circleStroke,
  })

  layer.setStyle([
    new StyleStyle({
      image: pointStyle,
    }),
  ])
}

const olLayerLocationInfoHelper = new OlLayerLocationInfoHelper()

export default olLayerLocationInfoHelper
