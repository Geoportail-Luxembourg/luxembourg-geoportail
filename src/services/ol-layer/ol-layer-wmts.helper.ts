import TileLayer from 'ol/layer/Tile'
import WmtsSource from 'ol/source/WMTS'
import WmtsTileGrid from 'ol/tilegrid/WMTS'
import { get as getProjection } from 'ol/proj'
import { getTopLeft } from 'ol/extent'

import {
  TILE_GRID_RESOLUTION,
  TILE_MATRIX_IDS,
} from '@/__fixtures__/wmts.fixture'
import { PROJECTION_WEBMERCATOR } from '@/composables/map/map.composable'
import { Layer } from '@/stores/map.store.model'
import {
  OLLAYER_PROP_LABEL,
  OLLAYER_PROP_LAYER_NAME,
  OLLAYER_PROP_METADATA,
  OlLayer,
} from './ol-layer.model'
import {
  getLayerHasRetina,
  getLayerWmtsUrl,
  getOlcsExtent,
} from './ol-layer.utils'

class OlLayerWmtsHelper {
  createOlLayer(layer: Layer): OlLayer /* Returns: TileLayer<WmtsSource> */ {
    const { name, imageType, id } = layer
    const hasRetina = getLayerHasRetina(layer)
    const projection = getProjection(PROJECTION_WEBMERCATOR)!
    const extent = projection!.getExtent()
    const olSource = new WmtsSource({
      url: getLayerWmtsUrl(layer),
      tilePixelRatio: hasRetina ? 2 : 1,
      layer: name,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${hasRetina ? '_HD' : ''}`,
      format: imageType,
      requestEncoding: 'REST',
      projection,
      tileGrid: new WmtsTileGrid({
        origin: getTopLeft(extent),
        extent,
        resolutions: TILE_GRID_RESOLUTION,
        matrixIds: TILE_MATRIX_IDS,
      }),
      style: 'default',
      crossOrigin: 'anonymous',
    })
    const olLayer = new TileLayer({
      source: olSource,
      properties: {
        // check that olcs.extent is still available for legacy app
        // check olcs ext for bg: transform extent from 'EPSG:3857' to 'EPSG:3857' in background.config.fixtures??? why
        'olcs.extent': getOlcsExtent(),
        label: name,
        id,
      },
    })

    return olLayer
  }

  setLayerTime(olLayer: OlLayer, olSource: WmtsSource, time: string) {
    const newLayerName: string = olLayer.get(OLLAYER_PROP_METADATA)[
      'time_layers'
    ][time]
    const oldUrls = olSource.getUrls()

    if (oldUrls) {
      const newUrls = this.transformUrls(oldUrls, newLayerName)
      olSource.setUrls(newUrls)
      olLayer.set(OLLAYER_PROP_LABEL, newLayerName)
      olLayer.set(OLLAYER_PROP_LAYER_NAME, newLayerName) // for v3 compatibility (search)
    }
  }

  private transformUrls(urls: string[], newLayerName: string) {
    return urls.map(url =>
      url.replace(
        /[/][^/]*[/]{TileMatrixSet}/,
        `/${newLayerName}/{TileMatrixSet}`
      )
    )
  }
}

const olLayerWmtsHelper = new OlLayerWmtsHelper()

export default olLayerWmtsHelper
