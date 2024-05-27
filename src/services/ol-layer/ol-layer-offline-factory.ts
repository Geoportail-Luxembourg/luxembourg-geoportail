import useLayers from '@/composables/layers/layers.composable'
import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import { Layer } from '@/stores/map.store.model'

import { LayerTypeValue } from '@/composables/themes/themes.model'
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
import olLayerTileWmsOfflineHelper from './ol-layer-offline-tile-wms.helper'
import olLayerWmtsOfflineHelper from './ol-layer-offline-wmts.helper'

class OlLayerOfflineFactoryService {
  createOlLayer(layer: Layer, vectorSources?: VectorSourceDict): OlLayer {
    let olLayer: OlLayer | undefined
    const offlineLayerType = this.getOfflineLayerSourceType(layer)

    switch (offlineLayerType) {
      case LayerTypeValue.WMTS:
        olLayer = olLayerWmtsOfflineHelper.createOlLayer(layer)
        break
      case LayerTypeValue.TILE_WMS:
        olLayer = olLayerTileWmsOfflineHelper.createOlLayer(layer)
        break
      default:
        throw new Error(`Unrecognized layer type: ${layer.type}`)
    }

    return olLayer
  }

  getOfflineLayerSourceType(layer: Layer) {
    // TODO: GSLUX-667-offline-mode compléter Layer model avec serialization property
    return JSON.parse(layer.serialization).sourceType
  }
}

export const olLayerOfflineFactoryService = new OlLayerOfflineFactoryService()
export default olLayerOfflineFactoryService