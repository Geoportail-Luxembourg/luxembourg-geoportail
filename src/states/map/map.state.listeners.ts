import { Layer, LayerComparison, MapContext } from './map.state.model'

function equalsLayer(layerA: Layer, layerB: Layer) {
  return layerA === layerB
}

function hasLayer(context: MapContext, layer: Layer) {
  return context.layers?.some(l => equalsLayer(layer, l))
}

function layerHasChanged(oldContext: MapContext | null, layer: Layer) {
  const oldLayer = oldContext?.layers?.find(l => l.id === layer.id)
  return oldLayer === layer
}

const contextHasChanged = (
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

export class MapSateListener {
  static getAddedLayers(
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

  static getRemovedLayers(
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

  static getMutatedLayers(
    newContext: MapContext,
    oldContext: MapContext | null
  ): Layer[] {
    if (contextHasChanged(newContext, oldContext)) {
      return (newContext.layers as Layer[]).reduce(
        (prev, layer) =>
          !layerHasChanged(oldContext, layer) ? prev : [...prev, layer],
        [] as Layer[]
      )
    }

    return []
  }
}
