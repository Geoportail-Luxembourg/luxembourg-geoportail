import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Layer } from '@/stores/map.store.model'
import {
  buildMyMapsDrawnFeatures,
  uuidFromMyMapsLayerId,
} from '@/services/my-maps/my-maps-layer.utils'
import { fetchMyMapFeatures } from '@/services/api/api-mymaps.service'
import { OlLayer } from './ol-layer.model'

class OlLayerGeoJSONHelper {
  createOlLayer(layer: Layer): OlLayer {
    const { geojson } = layer

    if (geojson) {
      const features = buildMyMapsDrawnFeatures(JSON.parse(geojson), {
        editable: false,
      })
      return new VectorLayer({
        source: new VectorSource({ features }),
      }) as OlLayer
    }

    // Lazy-fetch: layer restored from permalink has no geojson yet.
    // Create an empty VectorLayer and populate it once the data arrives.
    const source = new VectorSource()
    const olLayer = new VectorLayer({ source }) as OlLayer

    const uuid = uuidFromMyMapsLayerId(layer.id)
    fetchMyMapFeatures(uuid)
      .then(features => {
        const drawnFeatures = buildMyMapsDrawnFeatures(features, {
          editable: false,
        })
        source.addFeatures(drawnFeatures)
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error('[MyMapsLayer] Failed to fetch features:', e)
      })

    return olLayer
  }
}

const olLayerGeoJSONHelper = new OlLayerGeoJSONHelper()

export default olLayerGeoJSONHelper
