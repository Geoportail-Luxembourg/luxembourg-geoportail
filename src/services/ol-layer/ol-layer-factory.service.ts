import useLayers from '@/composables/layers/layers.composable'
import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import { OfflineLayerTypeValue } from '@/composables/offline/offline.model'
import { LayerTypeValue } from '@/composables/themes/themes.model'
import { Layer } from '@/stores/map.store.model'

import {
  OLLAYER_PROP_CURRENT_TIME,
  OLLAYER_PROP_ID,
  OLLAYER_PROP_LABEL,
  OLLAYER_PROP_LAYER_NAME,
  OLLAYER_PROP_METADATA,
  OLLAYER_PROP_QUERYABLE_ID,
  OLLAYER_PROP_TIME,
  OlLayer,
} from './ol-layer.model'
import olLayerWmsHelper from './ol-layer-wms.helper'
import olLayerWmtsHelper from './ol-layer-wmts.helper'
import olLayerVectorHelper from './ol-layer-vector.helper'
import { olLayerOfflineFactoryService } from './ol-layer-offline-factory'

export class OlLayerFactoryService {
  createOlLayer(layer: Layer, vectorSources?: VectorSourceDict): OlLayer {
    let olLayer: OlLayer | undefined

    if (vectorSources) {
      // Try to create vector layer from vector sources
      olLayer = olLayerVectorHelper.createOlLayer(layer, vectorSources)
    }

    // If no vector layer has been created, add raster layer
    if (!olLayer) {
      switch (layer.type) {
        case LayerTypeValue.WMS:
          olLayer = olLayerWmsHelper.createOlLayer(layer)
          break
        case LayerTypeValue.WMTS:
        case LayerTypeValue.BG_WMTS:
          olLayer = olLayerWmtsHelper.createOlLayer(layer)
          break
        case OfflineLayerTypeValue.LAYER_OFFLINE_TILE:
        case OfflineLayerTypeValue.LAYER_OFFLINE_BG_VECTOR:
          olLayer = olLayerOfflineFactoryService.createOlLayer(layer)
          break
        default:
          throw new Error(`Unrecognized layer type: ${layer.type}`)
      }
    }

    olLayer.set(OLLAYER_PROP_ID, layer.id)
    olLayer.set(OLLAYER_PROP_LABEL, layer.name)
    olLayer.set(OLLAYER_PROP_LAYER_NAME, layer.name) // for v3 compatibility (search)
    olLayer.set(OLLAYER_PROP_METADATA, layer.metadata) // Used for setLayerTime in ol-layer-wmts.helper, maybe do it with layer.name comming from spec instead
    olLayer.set(OLLAYER_PROP_QUERYABLE_ID, layer.id)
    olLayer.set(
      OLLAYER_PROP_CURRENT_TIME,
      useLayers().getLayerCurrentTime(layer)
    ) // Legacy for v3
    olLayer.set(OLLAYER_PROP_TIME, layer.time)
    olLayer.setOpacity(layer.opacity as number)

    return olLayer
  }
}

export const olLayerFactoryService = new OlLayerFactoryService()
