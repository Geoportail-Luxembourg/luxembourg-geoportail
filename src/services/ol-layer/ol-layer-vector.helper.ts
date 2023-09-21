import MapLibreLayer from '@geoblocks/ol-maplibre-layer'

import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import useMap from '@/composables/map/map.composable'
import { Layer } from '@/stores/map.store.model'
import { useStyleStore } from '@/stores/style.store'
import { OlLayer } from './ol-layer.model'

class OlLayerVectorHelper {
  createOlLayer(
    layer: Layer,
    vectorSources: VectorSourceDict // TODO: this comes from a store, use direct access here?
  ): OlLayer | undefined {
    const mapService = useMap()
    const { id, metadata } = layer
    const styleSource = vectorSources.get(id)

    if (!styleSource) {
      return
    }

    const options = {
      container: mapService.getOlMap().getTarget(),
      ...styleSource,
    }

    const olLayer = new MapLibreLayer({
      maplibreOptions: options,
      label: layer.name,
      id,
      queryable_id: id,
      metadata,
    })
    const styleStore = useStyleStore()

    if (olLayer?.maplibreMap.loaded()) {
      styleStore.setBaseStyle(id, olLayer.getStyle())
    } else {
      new Promise(resolve => olLayer?.maplibreMap.once('data', resolve)).then(
        () => styleStore.setBaseStyle(id, olLayer?.maplibreMap.getStyle())
      )
    }

    return olLayer
  }
}

const olLayerVectorHelper = new OlLayerVectorHelper()

export default olLayerVectorHelper
