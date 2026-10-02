import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Layer } from '@/stores/map.store.model'
import { buildMyMapsDrawnFeatures } from '@/services/my-maps/my-maps-layer.service'
import { OlLayer } from './ol-layer.model'

class OlLayerGeoJSONHelper {
  createOlLayer(layer: Layer): OlLayer {
    const { geojson } = layer

    if (!geojson) {
      return new VectorLayer({ source: new VectorSource() }) as OlLayer
    }

    const parsed = JSON.parse(geojson)
    const features = buildMyMapsDrawnFeatures(parsed, { editable: false })

    return new VectorLayer({
      source: new VectorSource({ features }),
    }) as OlLayer
  }
}

const olLayerGeoJSONHelper = new OlLayerGeoJSONHelper()

export default olLayerGeoJSONHelper
