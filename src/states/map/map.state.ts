import { BehaviorSubject } from 'rxjs'
import type { Layer, LayerId, MapContext } from './map.state.model'

const initialState: MapContext = {}

export class MapState {
  private mapContext: MapContext = initialState
  map$ = new BehaviorSubject<MapContext>(this.mapContext)
  layers$ = new BehaviorSubject<Layer[]>([])
  bgLayer$ = new BehaviorSubject<Layer | null>(null)

  setBgLayer(layer: Layer | null) {
    this.bgLayer$.next(layer)
  }

  getLayers() {
    return this.mapContext.layers || []
  }

  addLayers(...layers: Layer[]) {
    this.mapContext = {
      ...this.mapContext,
      layers: [...new Set([...(this.mapContext.layers || []), ...layers])],
    }
    this.map$.next(this.mapContext)
    this.layers$.next(this.mapContext.layers || [])
  }

  removeLayers(...layerIds: LayerId[]) {
    this.mapContext = {
      ...this.mapContext,
      layers:
        this.mapContext.layers?.filter(
          (layer) => layerIds.indexOf(layer.id) === -1
        ) || [],
    }
    this.map$.next(this.mapContext)
  }

  hasLayer(layerId: string) {
    return !!this.mapContext.layers?.find((layer) => layer.id === layerId)
  }

  reorderLayers(layersId: LayerId[]) {
    this.mapContext = {
      ...this.mapContext,
      layers: this.mapContext.layers?.sort(
        (a, b) => layersId.indexOf(a.id) - layersId.indexOf(b.id)
      ),
    }
    this.map$.next(this.mapContext)
    this.layers$.next(this.mapContext.layers || [])
  }

  setLayerOpacity(layerId: number, opacity: number) {
    this.mapContext = {
      ...this.mapContext,
      layers: this.mapContext.layers?.map((elt) => {
        if (elt.id === layerId) {
          return { ...elt, opacity: opacity, previousOpacity: elt.opacity }
        }
        return elt
      }),
    }

    this.map$.next(this.mapContext)
    this.layers$.next(this.mapContext.layers || [])
  }
}

export const mapState = new MapState()
