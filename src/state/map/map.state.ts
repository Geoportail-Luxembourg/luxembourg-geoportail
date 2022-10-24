import { BehaviorSubject } from 'rxjs'
import { Layer, MapContext } from './map.state.model'

const initialState: MapContext = {}

export class MapState {
  private mapContext: MapContext = initialState
  map$ = new BehaviorSubject<MapContext>(this.mapContext)
  layers$ = new BehaviorSubject<Layer[]>([])

  addLayer(layer: Layer) {
    this.mapContext = {
      ...this.mapContext,
      layers: [...(this.mapContext.layers || []), layer],
    }
    this.map$.next(this.mapContext)
    this.layers$.next(this.mapContext.layers || [])
  }

  removeLayer(layerId: string) {
    this.mapContext = {
      ...this.mapContext,
      layers:
        this.mapContext.layers?.filter(layer => layer.id !== layerId) || [],
    }
    this.map$.next(this.mapContext)
  }

  hasLayer(layerId: string) {
    return !!this.mapContext.layers?.find(layer => layer.id === layerId)
  }
}

export const mapState = new MapState()
