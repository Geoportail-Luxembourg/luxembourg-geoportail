import { ShallowRef, shallowRef } from 'vue'
import OlMap from 'ol/Map'
import OlView from 'ol/View'

import type {
  Layer,
  LayerComparison,
  LayerId,
  MapContext,
} from '@/stores/map.store.model'
import { MutationTypeValue } from './map.model'

export const PROJECTION_WEBMERCATOR = 'EPSG:3857'
export const PROJECTION_WGS84 = 'EPSG:4326'
export const PROJECTION_LUX = 'EPSG:2169'

let map: OlMap
const olMap: ShallowRef<OlMap | undefined> = shallowRef()

export default function useMap() {
  function getOlMap() {
    return map
  }

  /**
   * Creates and return an OpenLayers map
   * 'keyboardEventTarget': document options is mandatory to use "esc" and "back" on keydown
   * @returns The newly created OpenLayers map
   */
  function createMap() {
    olMap.value = map = new OlMap({
      view: new OlView({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: true,
      }),
      controls: [],
      keyboardEventTarget: document, // Very important for listening keyboard events when drawing in v3!
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

  /**
   * Returns the mutation type, needed to know how to handle the layer change.
   * eg. when switching to offline, the layer should be removed and added again
   * @param layerId 
   * @param newContext 
   * @param oldContext 
   * @returns MutationType or null if no mutation or any other mutation 
   */
  function getMutationType(
    layerId: LayerId,
    newContext: MapContext,
    oldContext: MapContext | null
  ) {
    const newLayer = newContext.layers?.find(l => l.id === layerId)
    const oldLayer = oldContext?.layers?.find(l => l.id === layerId)

    if(newLayer?.type !== oldLayer?.type) {
      // There is a change on layer type (eg. swhitching to offline)
      // Layer should be removed and added again
      return MutationTypeValue.ON_LAYER_TYPE
    }

    return null
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
    getMutationType
  }
}
