import { BehaviorSubject } from 'rxjs'
import { Layer, MapContext } from './map.state.model'

const initialState: MapContext = {}

export class MapState {
  mapContext: MapContext = initialState
  map$ = new BehaviorSubject<MapContext>(this.mapContext)
  layers$ = new BehaviorSubject<Layer[]>([])

  addLayer(layer: Layer) {
    this.mapContext = {
      ...this.mapContext,
      layers: [...(this.mapContext.layers || []), layer],
    }
    this.map$.next(this.mapContext)
  }

  removeLayer(layerId: number) {
    this.mapContext = {
      ...this.mapContext,
      layers:
        this.mapContext.layers?.filter(layer => layer.id !== layerId) || [],
    }
    this.map$.next(this.mapContext)
  }
}

export const mapState = new MapState()
