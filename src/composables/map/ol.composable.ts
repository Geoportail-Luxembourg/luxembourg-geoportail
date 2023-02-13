import type BaseLayer from 'ol/layer/Base'
import ImageLayer from 'ol/layer/Image'
import type TileLayer from 'ol/layer/Tile'
import type OlMap from 'ol/Map'
import { ImageWMS, WMTS } from 'ol/source'
import MapBoxLayer from '@geoblocks/mapboxlayer/src/MapBoxLayer.js'

import { createBgWmtsLayer } from '@/composables/background-layer/background-layer.wmts-helper'
import { layersCache } from '@/stores/layers.cache'
import type { Layer, LayerId } from '@/stores/map.store.model'
import useMap from './map.composable'

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

export default function useOpenLayers() {
  function createLayer(spec: Layer): ImageLayer<ImageWMS> | TileLayer<WMTS> {
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
      case 'BG MVT': {
        const mapService = useMap()

        const options = Object.assign(
          {
            container: mapService.getOlMap().getTarget(),
          },
          spec.mvtData
        )
        layer = new MapBoxLayer(options)
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

  function addLayer(olMap: OlMap, layer: Layer) {
    const baseLayer = getLayerFromCache(layer)
    olMap.addLayer(baseLayer)
  }

  function removeLayer(olMap: OlMap, layerId: LayerId) {
    const layerToRemove = olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)
    if (layerToRemove) {
      olMap.removeLayer(layerToRemove)
    }
  }

  function reorderLayers(olMap: OlMap, layers: Layer[]) {
    const arrayLayers = olMap.getLayers().getArray()
    layers.forEach((layer, idx) => {
      const baseLayer = arrayLayers.find(
        mapLayer => mapLayer.get('id') === layer.id
      )
      baseLayer?.setZIndex(idx + 1)
    })
  }

  function setLayerOpacity(olMap: OlMap, layerId: LayerId, opacity: number) {
    const layer = olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)
    if (layer) layer.setOpacity(opacity)
  }

  /*
  function removeFromCache(layer: Layer) {
    layersCache.remove(layer.id)
  }
  */

  function getLayerFromCache(layer: Layer): BaseLayer {
    const { id } = layer

    if (!layersCache.hasOwnProperty(id) || !layersCache[id]) {
      layersCache[id] = createLayer(layer)
    }
    return layersCache[id]
  }

  function setBgLayer(olMap: OlMap, bgLayer: Layer | null) {
    const mapLayers = olMap.getLayers()
    const currentBgLayerPos = mapLayers
      .getArray()
      .findIndex(layer => layer.getZIndex() === -1)

    if (currentBgLayerPos >= 0) {
      if (bgLayer) {
        const bgBaseLayer = getLayerFromCache(bgLayer)
        bgBaseLayer.setZIndex(-1)
        mapLayers.setAt(currentBgLayerPos, bgBaseLayer)
      } else {
        mapLayers.removeAt(currentBgLayerPos)
      }
    } else {
      if (bgLayer) {
        const bgBaseLayer = getLayerFromCache(bgLayer)
        bgBaseLayer.setZIndex(-1)
        olMap.addLayer(bgBaseLayer)
      }
    }
  }

  return {
    createLayer,
    addLayer,
    removeLayer,
    reorderLayers,
    setLayerOpacity,
    getLayerFromCache,
    setBgLayer,
  }
}
