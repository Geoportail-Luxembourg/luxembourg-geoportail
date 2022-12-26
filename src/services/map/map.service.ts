import { defaults as defaultControls } from 'ol/control'
import OlMap from 'ol/Map'
import OlView from 'ol/View'
import type {
  Layer,
  LayerComparison,
  MapContext,
} from '../../stores/map.store.model'

export class MapService {
  map: OlMap

  createMap(target: string | HTMLElement) {
    this.map = new OlMap({
      view: new OlView({
        zoom: 10,
        center: [682439, 6379152],
        multiWorld: true,
      }),
      target,
      controls: defaultControls({
        zoom: false,
        rotate: false,
      }),
    })
  }

  equalsLayer(layerA: Layer, layerB: Layer) {
    return layerA === layerB
  }

  hasLayer(context: MapContext, layer: Layer) {
    return context.layers?.some(l => this.equalsLayer(layer, l))
  }

  layerHasChanged(oldContext: MapContext | null, layer: Layer) {
    const oldLayer = oldContext?.layers?.find(l => l.id === layer.id)
    return oldLayer === layer
  }

  contextHasChanged = (
    newContext: MapContext,
    oldContext: MapContext | null
  ) => {
    return !(
      oldContext === null ||
      !('layers' in newContext) ||
      !('layers' in oldContext) ||
      typeof oldContext.layers === 'undefined' ||
      typeof newContext.layers === 'undefined' ||
      newContext.layers === oldContext.layers
    )
  }

  getAddedLayers(
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
        this.hasLayer(oldContext, layer)
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

  getRemovedLayers(
    newContext: MapContext,
    oldContext: MapContext | null
  ): Layer[] {
    if (this.contextHasChanged(newContext, oldContext)) {
      return ((oldContext as MapContext).layers as Layer[]).reduce(
        (prev, layer) =>
          this.hasLayer(newContext, layer) ? prev : [...prev, layer],
        [] as Layer[]
      )
    }

    return []
  }

  getMutatedLayers(
    newContext: MapContext,
    oldContext: MapContext | null
  ): Layer[] {
    if (this.contextHasChanged(newContext, oldContext)) {
      return (newContext.layers as Layer[]).reduce(
        (prev, layer) =>
          !this.layerHasChanged(oldContext, layer) ? prev : [...prev, layer],
        [] as Layer[]
      )
    }

    return []
  }
}

export const mapService = new MapService()
