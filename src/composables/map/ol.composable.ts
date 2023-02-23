import type BaseLayer from 'ol/layer/Base'
import ImageLayer from 'ol/layer/Image'
import type TileLayer from 'ol/layer/Tile'
import type OlMap from 'ol/Map'
import { ImageWMS, WMTS } from 'ol/source'
import MapLibreLayer from '@geoblocks/ol-maplibre-layer'

import { createBgWmtsLayer } from '@/composables/background-layer/background-layer.wmts-helper'
import { layersCache } from '@/stores/layers.cache'
import type { Layer, LayerId } from '@/stores/map.store.model'
import useMap from './map.composable'
import { IMvtStyle } from '@/composables/mvt-styles/mvt-styles.model'

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

  function removeFromCache(id: string) {
    layersCache.delete(id)
  }

  function isLayerCached(layer: Layer): boolean {
    return layersCache.has(layer.id.toString())
  }

  function addLayerToCache(id: string, layer: BaseLayer) {
    layersCache.set(id, layer)
  }

  function getLayerFromCache(layer: Layer): BaseLayer {
    const id = layer.id.toString()

    const cachedLayer = layersCache.get(id)
    if (cachedLayer) {
      return cachedLayer
    } else {
      const newLayer = createLayer(layer)
      addLayerToCache(id, newLayer)
      return newLayer
    }
  }

  function applyOnBgLayer(
    olMap: OlMap,
    callbackFunction: (bgLayer: BaseLayer) => void
  ) {
    const mapLayers = olMap.getLayers()
    const bgLayer = mapLayers.getArray().find(layer => layer.getZIndex() === -1)
    if (bgLayer) callbackFunction(bgLayer)
  }
  function setBgLayer(
    olMap: OlMap,
    bgLayer: Layer | null,
    styles: { [id: string]: IMvtStyle }
  ) {
    const mapLayers = olMap.getLayers()
    const currentBgLayerPos = mapLayers
      .getArray()
      .findIndex(layer => layer.getZIndex() === -1)

    let bgBaseLayer: BaseLayer | undefined = undefined
    if (bgLayer) {
      if (isLayerCached(bgLayer)) {
        bgBaseLayer = getLayerFromCache(bgLayer)
      } else {
        const style = styles && styles[bgLayer.id]
        const mapService = useMap()

        if (style) {
          const options = Object.assign(
            {
              container: mapService.getOlMap().getTarget(),
            },
            style
          )
          addLayerToCache(
            bgLayer.id.toString(),
            (bgBaseLayer = new MapLibreLayer({ maplibreOptions: options }))
          )
        } else {
          addLayerToCache(
            bgLayer.id.toString(),
            (bgBaseLayer = createLayer(bgLayer))
          )
        }
      }
    }

    if (currentBgLayerPos >= 0) {
      if (bgBaseLayer) {
        bgBaseLayer.setZIndex(-1)
        mapLayers.setAt(currentBgLayerPos, bgBaseLayer)
      } else {
        mapLayers.removeAt(currentBgLayerPos)
      }
    } else {
      if (bgBaseLayer) {
        bgBaseLayer.setZIndex(-1)
        olMap.addLayer(bgBaseLayer)
      }
    }
  }

  return {
    createLayer,
    addLayer,
    removeLayer,
    removeFromCache,
    reorderLayers,
    setLayerOpacity,
    getLayerFromCache,
    setBgLayer,
    applyOnBgLayer,
  }
}
