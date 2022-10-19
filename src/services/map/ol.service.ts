import BaseLayer from 'ol/layer/Base'
import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import WmtsTileGrid from 'ol/tilegrid/WMTS'
import { get as getProjection } from 'ol/proj'
import { transformExtent } from 'ol/proj.js'
import { getTopLeft } from 'ol/extent.js'
import OlMap from 'ol/Map'
import { ImageWMS, WMTS } from 'ol/source'
import { layersCache } from '../../states/layers/layers.cache'
import { Layer, LayerId } from '../../states/map/map.state.model'

const proxyWmsUrl = 'https://map.geoportail.lu/ogcproxywms'
export const remoteProxyWms = 'https://map.geoportail.lu/httpsproxy'

function createWmsLayer(layer: Layer): ImageLayer<ImageWMS> {
  const { name, layers, imageType, url, id } = layer
  const olLayer = new ImageLayer({
    properties: {
      //'olcs.extent': appOlcsExtent,
      label: name,
      id,
    },
    source: new ImageWMS({
      url: url || proxyWmsUrl,
      //hidpi: appGetDevice.isHiDpi(),
      serverType: 'mapserver',
      params: {
        FORMAT: imageType,
        LAYERS: layers,
      },
      ...((url !== undefined && url !== null) || remoteProxyWms
        ? { crossOrigin: 'anonymous' }
        : {}),
    }),
  })
  //ngeoMiscDecorate.layer(layer);

  return olLayer
}

// this function has been ported from the bg layer creation getWmtsLayer in GetWmtsLayerFactory
// TODO: check that it is valid for all WMTS layers
// TODO: factory(requestScheme, wmtsUrl)
function createWmtsLayer(layer: Layer): TileLayer<WMTS> {
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

export class Openlayers {
  static createLayer(spec: Layer): ImageLayer<ImageWMS> | TileLayer<WMTS> {
    let layer
    switch (spec.type) {
      case 'WMS': {
        layer = createWmsLayer(spec)
        break
      }
      case 'WMTS': {
        layer = createWmtsLayer(spec)
        break
      }
      default:
        throw new Error(`Unrecognized layer type: ${spec.type}`)
    }
    layer.set('metadata', spec.metadata)
    layer.set('queryable_id', spec.id)
    layer.setOpacity(spec.opacity as number)

    if (spec.metadata?.hasOwnProperty('attribution')) {
      const source = layer.getSource()
      source?.setAttributions(spec.metadata.attribution)
    }
    return layer
  }

  addLayer(olMap: OlMap, layer: Layer) {
    const { id } = layer
    const baseLayer: BaseLayer =
      !layersCache.hasOwnProperty(id) || !layersCache[id]
        ? this.createLayer(layer)
        : layersCache[id]

    olMap.addLayer(baseLayer)
  }

  removeLayer(olMap: OlMap, layerId: LayerId) {
    const layerToRemove = olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)
    if (layerToRemove) {
      olMap.removeLayer(layerToRemove)
    }
  }

  reorderLayers(olMap: OlMap, layers: Layer[]) {
    const arrayLayers = olMap.getLayers().getArray()
    layers.forEach((layer, idx) => {
      const baseLayer = arrayLayers.find(
        mapLayer => mapLayer.get('id') === layer.id
      )
      baseLayer?.setZIndex(idx + 1)
    })
  }

  setLayerOpacity(olMap: OlMap, layerId: LayerId, opacity: number) {
    const layer = olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)
    if (layer) layer.setOpacity(opacity)
  }
}

export const openLayersService = new OpenLayersService()
