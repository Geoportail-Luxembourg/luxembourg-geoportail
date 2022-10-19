import TileLayer from 'ol/layer/Tile'
import { get as getProjection } from 'ol/proj'
import { transformExtent } from 'ol/proj.js'
import { getTopLeft } from 'ol/extent.js'
import { WMTS } from 'ol/source'
import WmtsTileGrid from 'ol/tilegrid/WMTS'

import { bgConfig } from '../../../test/fixtures/background.config.fixture'

export function createBgWmtsLayer(spec) {

}// this function has been ported from the bg layer creation getWmtsLayer in GetWmtsLayerFactory
// TODO: check that it is valid for all WMTS layers
// TODO: factory(requestScheme, wmtsUrl)
function createBgWmtsLayer(layer: Layer): TileLayer<WMTS> {
  function getImageExtension_(imageType) {
    console.assert(imageType.indexOf('/'))
    const imageExt = imageType.split('/')[1]
    console.assert(imageExt == 'png' || imageExt == 'jpeg')
    return imageExt
  }
  const imageExt = getImageExtension_(layer.imageType)
  const { name, layers, imageType, id } = layer
  let { url } = layer
  const catalogUrl = url
  const isIpv6 = location.search.includes('ipv6=true')
  const domain = isIpv6 ? 'app.geoportail.lu' : 'geoportail.lu'

  // TODO: refactor isHiDpi for entire app
  // isHiDpi_ = $window.matchMedia(
  //   '(-webkit-min-device-pixel-ratio: 2), ' +
  //     '(min-device-pixel-ratio: 2), ' +
  //     '(min-resolution: 192dpi)'
  // ).matches
  const isHiDpi_ = false
  const hasRetina = !!layer['metadata']['hasRetina'] && isHiDpi_
  // const retinaExtension = hasRetina ? '_hd' : ''

  // TODO: refactor requestScheme
  const requestScheme = 'http'

  const srv = requestScheme === 'https' ? bgConfig.https_bg_server : bgConfig.http_bg_server
  const layer_path = `${bgConfig.bg_wmts_server_path}${hasRetina?'_hd':''}`
  const full_tile_template = `${bgConfig.bg_wmts_tile_template}.${imageExt}`
  url = `//${srv}.${domain}/${layer_path}/${full_tile_template}`
  const projection = getProjection(bgConfig.bg_layer_projection)
  const extent = projection.getExtent()
  const tileLayer = new TileLayer({
    'olcs.extent': transformExtent(
      bgConfig.olcs_extent,
      bgConfig.olcs_extent_projection,
      bgConfig.bg_layer_projection
    ),
    source: new WMTS({
      url: url,
      tilePixelRatio: hasRetina ? 2 : 1,
      layer: name,
      matrixSet: `GLOBAL_WEBMERCATOR_4_V3${hasRetina ? '_HD' : ''}`,
      format: imageType,
      requestEncoding: 'REST', // WMTS.RequestEncoding.REST,
      projection: projection,
      tileGrid: new WmtsTileGrid({
        origin: getTopLeft(extent),
        extent: extent,
        resolutions: bgConfig.bg_layer_resolutions,
        matrixIds: bgConfig.bg_matrix_ids
      }),
      style: 'default',
      crossOrigin: 'anonymous',
    }),
  })

  tileLayer.set('label', name)
  tileLayer.set('id', id)
  tileLayer.type = 'TILE'
  //ngeoMiscDecorate.layer(layer);

  return tileLayer
}
