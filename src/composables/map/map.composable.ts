import { ShallowRef, shallowRef } from 'vue'
import OlMap from 'ol/Map'
import OlView from 'ol/View'

import type {
  Layer,
  LayerComparison,
  MapContext,
} from '@/stores/map.store.model'

export const PROJECTION_WEBMERCATOR = 'EPSG:3857'
export const PROJECTION_WGS84 = 'EPSG:4326'
export const PROJECTION_LUX = 'EPSG:2169'

let map: OlMap
const olMap: ShallowRef<OlMap | undefined> = shallowRef()

export default function useMap() {
  function getOlMap() {
    return map
  }

  function createMap() {
    olMap.value = map = new OlMap({
      view: new OlView({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: true,
      }),
      controls: [],
    })

    return map
  }

  function equalsLayer(layerA: Layer, layerB: Layer) {
    return layerA.id === layerB.id
  }

  function strictEqualsLayer(
    layerA: Layer | undefined,
    layerB: Layer | undefined
  ) {
    return layerA === layerB
  }

  function hasLayer(context: MapContext, layer: Layer) {
    return context.layers?.some(l => equalsLayer(l, layer))
  }

  function layerHasChanged(oldContext: MapContext | null, layer: Layer) {
    const oldLayer = oldContext?.layers?.find(l => equalsLayer(l, layer))
    return !strictEqualsLayer(oldLayer, layer)
  }

  function contextHasChanged(
    newContext: MapContext,
    oldContext: MapContext | null
  ) {
    return !(
      oldContext === null ||
      !('layers' in newContext) ||
      !('layers' in oldContext) ||
      typeof oldContext.layers === 'undefined' ||
      typeof newContext.layers === 'undefined' ||
      newContext.layers === oldContext.layers
    )
  }

  function getAddedLayers(
    newContext: MapContext,
    oldContext: MapContext | null
  ): LayerComparison[] {
    if (!('layers' in newContext) || typeof newContext.layers === 'undefined')
      return []
    if (oldContext === null || !('layers' in oldContext)) {
      return newContext.layers.map((layer, position) => ({ layer, position }))
    }
    if (newContext.layers === oldContext.layers) return []
    return newContext.layers.reduce(
      (addedLayers: LayerComparison[], layer, i) =>
        hasLayer(oldContext, layer)
          ? addedLayers
          : [
              ...addedLayers,
              {
                layer,
                position: i,
              },
            ],
      [] as LayerComparison[]
    )
  }

  function getRemovedLayers(
    newContext: MapContext,
    oldContext: MapContext | null
  ): Layer[] {
    if (contextHasChanged(newContext, oldContext)) {
      return ((oldContext as MapContext).layers as Layer[]).reduce(
        (prev, layer) =>
          hasLayer(newContext, layer) ? prev : [...prev, layer],
        [] as Layer[]
      )
    }

    return []
  }

  function getMutatedLayers(
    newContext: MapContext,
    oldContext: MapContext | null
  ): Layer[] {
    if (contextHasChanged(newContext, oldContext)) {
      return (newContext.layers as Layer[]).reduce(
        (prev, layer) =>
          layerHasChanged(oldContext, layer) ? [...prev, layer] : prev,
        [] as Layer[]
      )
    }

    return []
  }

  return {
    olMap,
    getOlMap,
    createMap,
    equalsLayer,
    hasLayer,
    layerHasChanged,
    contextHasChanged,
    getAddedLayers,
    getRemovedLayers,
    getMutatedLayers,
  }
}
