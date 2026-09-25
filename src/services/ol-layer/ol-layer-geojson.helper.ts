import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Layer } from '@/stores/map.store.model'
import olFormatGeoJSON from 'ol/format/GeoJSON'
import {
  PROJECTION_LUX,
  PROJECTION_WEBMERCATOR,
} from '@/composables/map/map.composable'
import { Circle, Fill, Stroke, Style } from 'ol/style'

import { OlLayer } from './ol-layer.model'

class OlLayerGeoJSONHelper {
  createOlLayer(
    layer: Layer
  ): OlLayer /* Returns: VectorLayer<VectorSource> */ {
    const { data } = layer

    if (!data) {
      return new VectorLayer({
        source: new VectorSource(),
      })
    }

    const format = new olFormatGeoJSON()
    const parsed = JSON.parse(data)
    const features = format.readFeatures(parsed, {
      dataProjection: PROJECTION_LUX,
      featureProjection: PROJECTION_WEBMERCATOR,
    })
    const source = new VectorSource({ features })
    const olLayer = new VectorLayer({ source }) as OlLayer
    const style = new Style({
      fill: new Fill({ color: 'rgba(237, 28, 36, 0.2)' }),
      stroke: new Stroke({ color: '#ed1c24', width: 1.25 }),
      image: new Circle({
        radius: 5,
        fill: new Fill({ color: '#ed1c24' }),
      }),
    })
    ;(olLayer as VectorLayer).setStyle(style)
    return olLayer
  }
}

const olLayerGeoJSONHelper = new OlLayerGeoJSONHelper()

export default olLayerGeoJSONHelper
