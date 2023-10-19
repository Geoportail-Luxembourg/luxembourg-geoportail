import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import useMap from '@/composables/map/map.composable'
import { Layer } from '@/stores/map.store.model'
import { useStyleStore } from '@/stores/style.store'
import { OlLayer } from './ol-layer.model'

// For the time being, legacy mapbox is used instead of maplibre, but the naming "maplibre" is kept
import MapLibreLayer from '@/lib/ol-mapbox-layer'
// TODO: find another name for this wrapper, maybe "MapCustomSDK"? Don't keep the names "MapBox" VS "MapLibre"...

class OlLayerVectorHelper {
  createOlLayer(
    layer: Layer,
    vectorSources: VectorSourceDict // TODO: this comes from a store, use direct access here?
  ): OlLayer | undefined {
    const mapService = useMap()
    const { id, metadata, name } = layer
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
      label: name,
      id,
      queryable_id: id,
      metadata,
    })
    const styleStore = useStyleStore()

    if (olLayer?.getMapLibreMap().loaded()) {
      styleStore.setBaseStyle(id, olLayer?.getMapLibreMap().getStyle())
    } else {
      new Promise(resolve =>
        olLayer?.getMapLibreMap().once('data', resolve)
      ).then(() =>
        styleStore.setBaseStyle(id, olLayer?.getMapLibreMap().getStyle())
      )
    }

    return olLayer
  }
}

const olLayerVectorHelper = new OlLayerVectorHelper()

export default olLayerVectorHelper
