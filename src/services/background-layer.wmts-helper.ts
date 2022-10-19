import TileLayer from 'ol/layer/Tile'
import { get as getProjection } from 'ol/proj'
import { transformExtent } from 'ol/proj.js'
import { getTopLeft } from 'ol/extent.js'
import { WMTS } from 'ol/source'
import WmtsTileGrid from 'ol/tilegrid/WMTS'

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
  const retinaExtension = hasRetina ? '_hd' : ''

  // TODO: refactor requestScheme
  const requestScheme = 'http'

  url =
    '//wmts{1-2}.' +
    domain +
    '/mapproxy_4_v3/wmts/{Layer}' +
    retinaExtension +
    '/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.' +
    imageExt

  if (requestScheme === 'https') {
    url =
      '//wmts{3-4}.' +
      domain +
      '/mapproxy_4_v3/wmts/{Layer}' +
      retinaExtension +
      '/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.' +
      imageExt
  }
  const projection = getProjection('EPSG:3857')
  const extent = projection.getExtent()
  const tileLayer = new TileLayer({
    'olcs.extent': transformExtent(
      [5.31, 49.38, 6.64, 50.21],
      'EPSG:4326',
      'EPSG:3857'
    ),
    source: new WMTS({
      url: url,
      tilePixelRatio: hasRetina ? 2 : 1,
      layer: name,
      matrixSet: 'GLOBAL_WEBMERCATOR_4_V3' + (hasRetina ? '_HD' : ''),
      format: imageType,
      requestEncoding: 'REST', // WMTS.RequestEncoding.REST,
      projection: projection,
      tileGrid: new WmtsTileGrid({
        origin: getTopLeft(extent),
        extent: extent,
        resolutions: [
          156543.033928, 78271.516964, 39135.758482, 19567.879241, 9783.9396205,
          4891.96981025, 2445.98490513, 1222.99245256, 611.496226281,
          305.748113141, 152.87405657, 76.4370282852, 38.2185141426,
          19.1092570713, 9.55462853565, 4.77731426782, 2.38865713391,
          1.19432856696, 0.597164283478, 0.298582141739, 0.1492910708695,
          0.07464553543475,
        ],
        matrixIds: [
          '00',
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
        ],
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
