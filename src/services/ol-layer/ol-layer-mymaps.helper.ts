import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Layer } from '@/stores/map.store.model'
import {
  buildMyMapsDrawnFeatures,
  uuidFromMyMapsLayerId,
} from '@/services/my-maps/my-maps-layer.utils'
import { fetchMyMapFeatures } from '@/services/api/api-mymaps.service'
import { OlLayer } from './ol-layer.model'

class OlLayerMyMapsHelper {
  createOlLayer(layer: Layer): OlLayer {
    const source = new VectorSource({
      loader: async (_extent, _res, _proj, success, failure) => {
        try {
          const json = await fetchMyMapFeatures(uuidFromMyMapsLayerId(layer.id))
          const features = buildMyMapsDrawnFeatures(json, {
            editable: false,
          })
          source.addFeatures(features)
          success?.(features)
        } catch {
          failure?.()
        }
      },
    })

    return new VectorLayer({ source }) as OlLayer
  }
}

const olLayerMyMapsHelper = new OlLayerMyMapsHelper()

export default olLayerMyMapsHelper
