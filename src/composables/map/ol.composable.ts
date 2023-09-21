import type BaseLayer from 'ol/layer/Base'
import type OlMap from 'ol/Map'

import { layersCache } from '@/stores/layers.cache'
import type { Layer, LayerId } from '@/stores/map.store.model'
import { VectorSourceDict } from '@/composables/mvt-styles/mvt-styles.model'
import { statePersistorStyleService } from '@/services/state-persistor/state-persistor-bgstyle.service'
import { olLayerFactoryService } from '@/services/ol-layer/ol-layer-factory.service'
import { olLayerTimeService } from '@/services/ol-layer/ol-layer-time.service'
import { OlLayer } from '@/services/ol-layer/ol-layer.model'

const DEFAULT_BGZINDEX = -200 // Value comming  from legacy

export default function useOpenLayers() {
  function addLayer(olMap: OlMap, layer: Layer) {
    if (!layer) return
    const baseLayer = getOrCreateLayer(layer)
    olMap.addLayer(baseLayer)
  }

  function findLayer(olMap: OlMap, layerId: LayerId) {
    return olMap
      .getLayers()
      .getArray()
      .find(layer => layer.get('id') === layerId)
  }

  function removeLayer(olMap: OlMap, layerId: LayerId) {
    const layerToRemove = findLayer(olMap, layerId)
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

  function setLayerTime(olMap: OlMap, layerId: LayerId, time: string) {
    const layer = findLayer(olMap, layerId)

    if (layer) {
      olLayerTimeService.setLayerTime(<OlLayer>layer, time)
    }
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

  function getOrCreateLayer(layer: Layer): BaseLayer {
    const id = layer.id

    const cachedLayer = layersCache.get(id)
    if (cachedLayer) {
      return cachedLayer
    } else {
      const newLayer = olLayerFactoryService.createOlLayer(layer)
      addLayerToCache(id, newLayer)
      return newLayer
    }
  }

  function getLayerFromCache(
    layer: Layer | undefined | null
  ): BaseLayer | null {
    return layer ? layersCache.get(layer.id) || null : null
  }

  function applyOnBgLayer(
    olMap: OlMap,
    callbackFunction: (bgLayer: BaseLayer) => void
  ) {
    const mapLayers = olMap.getLayers()
    const bgLayer = mapLayers
      .getArray()
      .find(layer => layer.getZIndex() === DEFAULT_BGZINDEX)
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
      .findIndex(layer => layer.getZIndex() === DEFAULT_BGZINDEX)

    const oldBgLayerId = mapLayers.getArray()[currentBgLayerPos]?.get('id')
    let bgBaseLayer: BaseLayer | undefined = undefined
    if (bgLayer) {
      if (isLayerCached(bgLayer)) {
        bgBaseLayer = getLayerFromCache(bgLayer)!
      } else {
        bgBaseLayer = olLayerFactoryService.createOlLayer(
          bgLayer,
          vectorSources
        )

        addLayerToCache(bgLayer.id, bgBaseLayer)
      }
    }

    if (currentBgLayerPos >= 0) {
      if (bgBaseLayer) {
        bgBaseLayer.setZIndex(DEFAULT_BGZINDEX)
        mapLayers.setAt(currentBgLayerPos, bgBaseLayer)
      } else {
        mapLayers.removeAt(currentBgLayerPos)
      }
    } else {
      if (bgBaseLayer) {
        bgBaseLayer.setZIndex(DEFAULT_BGZINDEX)
        olMap.addLayer(bgBaseLayer)
      }
    }
    if (oldBgLayerId !== bgLayer?.id) {
      statePersistorStyleService.restoreStyle(true)
    }
  }

  return {
    addLayer,
    findLayer,
    removeLayer,
    removeFromCache,
    reorderLayers,
    setLayerOpacity,
    setLayerTime,
    getLayerFromCache,
    setBgLayer,
    applyOnBgLayer,
  }
}
