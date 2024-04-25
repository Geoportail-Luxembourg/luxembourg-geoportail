import { transformExtent } from 'ol/proj'
import { Layer } from '@/stores/map.store.model'
import { isHiDpi, stringToBoolean } from '@/services/utils'
import { SP_KEY_IPV6 } from '@/services/state-persistor/state-persistor.model'
import { storageHelper } from '@/services/state-persistor/storage/storage.helper'
import {
  PROJECTION_WEBMERCATOR,
  PROJECTION_WGS84,
} from '@/composables/map/map.composable'

export function getOlcsExtent() {
  return transformExtent(
    [5.31, 49.38, 6.64, 50.21],
    PROJECTION_WGS84,
    PROJECTION_WEBMERCATOR
  )
}

export function getLayerHasRetina(layer: Layer) {
  return !!layer?.metadata?.hasRetina && isHiDpi()
}

export function getLayerWmtsUrl(layer: Layer, requestScheme = 'https') {
  const imageExt = layer.imageType.split('/')[1]
  const domain = storageHelper.getValue(SP_KEY_IPV6, stringToBoolean)
    ? 'app.geoportail.lu'
    : 'geoportail.lu'

  return (
    `${requestScheme === 'https' ? '//wmts{3-4}.' : '//wmts{1-2}.'}${domain}` +
    `/mapproxy_4_v3/wmts/{Layer}${getLayerHasRetina(layer) ? '_hd' : ''}` +
    `/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${imageExt}`
  )
}
