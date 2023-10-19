import useLayers from '@/composables/layers/layers.composable'
import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import { Layer } from '@/stores/map.store.model'

import { OlLayer } from './ol-layer.model'
import olLayerWmsHelper from './ol-layer-wms.helper'
import olLayerWmtsHelper from './ol-layer-wmts.helper'
import olLayerVectorHelper from './ol-layer-vector.helper'

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
        case 'WMS':
          olLayer = olLayerWmsHelper.createOlLayer(layer)
          break
        case 'WMTS':
        case 'BG WMTS':
          olLayer = olLayerWmtsHelper.createOlLayer(layer)
          break
        default:
          throw new Error(`Unrecognized layer type: ${layer.type}`)
      }
    }

    olLayer.set('id', layer.id)
    olLayer.set('label', layer.name)
    olLayer.set('layer_name', layer.name) // for v3 compatibility (search)
    olLayer.set('metadata', layer.metadata) // Used for setLayerTime in ol-layer-wmts.helper, maybe do it with layer.name comming from spec instead
    olLayer.set('queryable_id', layer.id)
    olLayer.set('current_time', useLayers().getLayerCurrentTime(layer)) // Legacy for v3
    olLayer.set('time', layer.time)
    olLayer.setOpacity(layer.opacity as number)

    return olLayer
  }
}

export const olLayerFactoryService = new OlLayerFactoryService()
