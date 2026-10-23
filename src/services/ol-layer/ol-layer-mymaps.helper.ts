import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'
import {
  buildMyMapsDrawnFeatures,
  uuidFromMyMapsLayerId,
} from '@/services/my-maps/my-maps-layer.utils'
import {
  fetchMyMap,
  fetchMyMapFeatures,
} from '@/services/api/api-mymaps.service'
import { OlLayer } from './ol-layer.model'

class OlLayerMyMapsHelper {
  createOlLayer(layer: Layer): OlLayer {
    const source = new VectorSource({
      loader: async (_extent, _res, _proj, success, failure) => {
        try {
          const uuid = uuidFromMyMapsLayerId(layer.id)
          const [map, features] = await Promise.all([
            fetchMyMap(uuid),
            fetchMyMapFeatures(uuid),
          ])
          const drawnFeatures = buildMyMapsDrawnFeatures(features, {
            editable: false,
          })
          source.addFeatures(drawnFeatures)

          // Fill in the layer name if it was restored without one (permalink)
          if (!layer.name && map.title) {
            useMapStore().setLayerName(layer.id, map.title)
          }

          success?.(drawnFeatures)
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
