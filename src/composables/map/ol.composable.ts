import type BaseLayer from 'ol/layer/Base'
import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import type OlMap from 'ol/Map'
import { ImageWMS, WMTS } from 'ol/source'
import MapLibreLayer from '@geoblocks/ol-maplibre-layer'
import WmtsTileGrid from 'ol/tilegrid/WMTS'
import { getTopLeft } from 'ol/extent.js'
import { get as getProjection, transformExtent } from 'ol/proj'

import { layersCache } from '@/stores/layers.cache'
import type { Layer, LayerId } from '@/stores/map.store.model'
import useMap from './map.composable'
import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { PROJECTION_WEBMERCATOR, PROJECTION_WGS84 } from './map.composable'
import { isHiDpi, stringToBoolean } from '@/services/utils'
import { storageHelper } from '@/services/state-persistor/storage/storage.helper'
import { SP_KEY_IPV6 } from '@/services/state-persistor/state-persistor.model'
import {
  TILE_GRID_RESOLUTION,
  TILE_MATRIX_IDS,
} from '@/__fixtures__/wmts.fixture'
import { useStyleStore } from '@/stores/style.store'

const proxyWmsUrl = 'https://map.geoportail.lu/ogcproxywms'
export const remoteProxyWms = 'https://map.geoportail.lu/httpsproxy'

function getOlcsExtent() {
  return transformExtent(
    [5.31, 49.38, 6.64, 50.21],
    PROJECTION_WGS84,
    PROJECTION_WEBMERCATOR
  )
}

function createWmsLayer(layer: Layer): ImageLayer<ImageWMS> {
  const { name, layers, imageType, url, id } = layer
  const olLayer = new ImageLayer({
    properties: {
      'olcs.extent': getOlcsExtent(),
      label: name,
      id,
    },
    source: new ImageWMS({
      url: url || proxyWmsUrl,
      hidpi: isHiDpi(),
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

  return olLayer
}

function createWmtsLayer(layer: Layer): TileLayer<WMTS> {
  const { name, imageType, id } = layer
  const hasRetina = getLayerHasRetina(layer)
  const projection = getProjection(PROJECTION_WEBMERCATOR)!
  const extent = projection!.getExtent()
  const olLayer = new TileLayer({
    source: new WMTS({
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
    }),
    properties: {
      // check that olcs.extent is still available for legacy app
      'olcs.extent': getOlcsExtent(),
      label: name,
      id,
    },
  })

  return olLayer
}

function createVectorLayer(
  vectorSources: VectorSourceDict,
  bgLayer: Layer
): BaseLayer | undefined {
  const mapService = useMap()

  const styleSource = vectorSources.get(bgLayer.id)
  if (!styleSource) {
    return
  }
  const options = Object.assign(
    {
      container: mapService.getOlMap().getTarget(),
    },
    styleSource
  )

  const newBgBaseLayer = new MapLibreLayer({
    maplibreOptions: options,
    label: bgLayer.name,
    id: bgLayer.id,
    queryable_id: bgLayer.id,
    metadata: bgLayer.metadata,
  })
  console.log(`style loaded ? ${newBgBaseLayer?.maplibreMap}`)
  console.log(`style loaded ? ${newBgBaseLayer?.maplibreMap.loaded()}`)
  const styleStore = useStyleStore()
  if (newBgBaseLayer?.maplibreMap.loaded()) {
    styleStore.setBaseStyle(bgLayer.id, newBgBaseLayer.getStyle())
    console.log(`style loaded ? ${newBgBaseLayer?.maplibreMap.getStyle()}`)
  } else {
    new Promise(resolve =>
      newBgBaseLayer?.maplibreMap.once('data', resolve)
    ).then(() =>
      styleStore.setBaseStyle(
        bgLayer.id,
        newBgBaseLayer?.maplibreMap.getStyle()
      )
    )
  }
  return newBgBaseLayer
}

function getLayerWmtsUrl(layer: Layer, requestScheme = 'https') {
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

function getLayerHasRetina(layer: Layer) {
  return !!layer?.metadata?.hasRetina && isHiDpi()
}

export default function useOpenLayers() {
  function createLayer(spec: Layer): ImageLayer<ImageWMS> | TileLayer<WMTS> {
    let layer
    switch (spec.type) {
      case 'WMS': {
        layer = createWmsLayer(spec)
        break
      }
      case 'WMTS':
      case 'BG WMTS': {
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

  function removeFromCache(id: LayerId) {
    layersCache.delete(id)
  }

  function isLayerCached(layer: Layer): boolean {
    return layersCache.has(layer.id)
  }

  function addLayerToCache(id: LayerId, layer: BaseLayer) {
    layersCache.set(id, layer)
  }

  function getLayerFromCache(layer: Layer): BaseLayer {
    const id = layer.id

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
    vectorSources: VectorSourceDict
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
        // try to create vector layer from vector sources
        if (vectorSources) {
          bgBaseLayer = createVectorLayer(vectorSources, bgLayer)
        }
        // if no vector layer has been created, add raster layer
        bgBaseLayer = bgBaseLayer ? bgBaseLayer : createLayer(bgLayer)
        addLayerToCache(bgLayer.id, bgBaseLayer)
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
    statePersistorStyleService.restoreStyle(true)
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
