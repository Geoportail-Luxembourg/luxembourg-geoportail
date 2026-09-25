import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Layer } from '@/stores/map.store.model'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { OlLayer } from './ol-layer.model'

class OlLayerGeoJSONHelper {
  createOlLayer(layer: Layer): OlLayer {
    const { data } = layer

    if (!data) {
      return new VectorLayer({ source: new VectorSource() }) as OlLayer
    }

    const parsed = JSON.parse(data)
    const features = (parsed.features || []).map((f: unknown) =>
      DrawnFeature.generateFromGeoJson(f)
    )

    features.forEach((f: DrawnFeature) => {
      f.editable = false
    })

    const source = new VectorSource({ features })
    const olLayer = new VectorLayer({ source })

    olLayer.setStyle((feature, resolution) => {
      const df = feature as DrawnFeature
      return df.getStyleFunction()(feature, resolution)
    })

    return olLayer as OlLayer
  }
}

const olLayerGeoJSONHelper = new OlLayerGeoJSONHelper()

export default olLayerGeoJSONHelper
