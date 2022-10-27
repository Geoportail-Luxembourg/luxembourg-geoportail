import BaseLayer from 'ol/layer/Base'
import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import OlMap from 'ol/Map'
import { ImageWMS, WMTS } from 'ol/source'
import { layersCache } from '../../states/layers/layers.cache'
import { Layer, LayerId } from '../../states/map/map.state.model'
import { createBgWmtsLayer } from '../../services/background-layer/background-layer.wmts-helper'

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

export class Openlayers {
  static createLayer(spec: Layer): ImageLayer<ImageWMS> | TileLayer<WMTS> {
    let layer
    switch (spec.type) {
      case 'WMS': {
        layer = createWmsLayer(spec)
        break
      }
      case 'BG WMTS': {
        layer = createBgWmtsLayer(spec)
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

  static getLayerFromCache(layer: Layer): BaseLayer {
    const { id } = layer
    
    return !layersCache.hasOwnProperty(id) || !layersCache[id]
      ? Openlayers.createLayer(layer)
      : layersCache[id]
  }

  static addLayer(olMap: OlMap, layer: Layer) {
    const baseLayer = Openlayers.getLayerFromCache(layer)
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

  static setBgLayer(olMap: OlMap, bgLayer: Layer | null) {
    const mapLayers = olMap.getLayers()
    const currentBgLayerPos = mapLayers
      .getArray()
      .findIndex(layer => layer.get('zIndex') === -1)

    if (currentBgLayerPos >= 0) {
      if (bgLayer) {
        const bgBaseLayer = Openlayers.getLayerFromCache(bgLayer)
        bgBaseLayer.set('zIndex', -1)
        mapLayers.setAt(currentBgLayerPos, bgBaseLayer)
      } else {
        mapLayers.removeAt(currentBgLayerPos)
      }
    } else {
      if (bgLayer) {
        const bgBaseLayer = Openlayers.getLayerFromCache(bgLayer)
        bgBaseLayer.set('zIndex', -1)
        olMap.addLayer(bgBaseLayer)
      }
    }
  }
}

export const openLayersService = new OpenLayersService()
