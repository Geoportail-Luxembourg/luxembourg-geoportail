import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import useMap from '@/composables/map/map.composable'
import { Layer } from '@/stores/map.store.model'
import { useStyleStore } from '@/stores/style.store'
import { OLLAYER_PROP_DEFAULT_MAPBOX_STYLE, OlLayer } from './ol-layer.model'

// For the time being, legacy mapbox is used instead of maplibre, but the naming "maplibre" is kept
import MapLibreLayer from '@/lib/ol-mapbox-layer'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
// TODO: find another name for this wrapper, maybe "MapCustomSDK"? Don't keep the names "MapBox" VS "MapLibre"...

class OlLayerVectorHelper {
  createOlLayer(
    layer: Layer,
    vectorSources: VectorSourceDict // TODO: -CLEAN STYLE- this comes from a store, use direct access here?
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
    let olLayer: OlLayer

    try {
      olLayer = new MapLibreLayer({
        maplibreOptions: options,
        label: name,
        id,
        queryable_id: id,
        metadata,
      })
    } catch (error) {
      // Mapbox GL may fail in CI/headless environments without WebGL support.
      // Returning `undefined` lets the factory fall back to raster layer creation.
      // eslint-disable-next-line no-console
      console.warn('Failed to initialize vector layer, fallback to raster', {
        layerId: id,
        layerName: name,
        error,
      })
      return
    }

    const styleStore = useStyleStore()
    const styleService = useMvtStyles()

    if (olLayer.getMapLibreMap().loaded()) {
      styleStore.setBaseStyle(id, olLayer.getMapLibreMap().getStyle())
    } else {
      new Promise(resolve =>
        olLayer.getMapLibreMap().once('data', resolve)
      ).then(() =>
        styleStore.setBaseStyle(id, olLayer.getMapLibreMap().getStyle())
      )
    }

    olLayer.set(
      OLLAYER_PROP_DEFAULT_MAPBOX_STYLE,
      styleService.getDefaultMapBoxStyleUrl(styleService.getVectorId(layer))
    ) // for v3 compatibility

    return olLayer
  }
}

const olLayerVectorHelper = new OlLayerVectorHelper()

export default olLayerVectorHelper
