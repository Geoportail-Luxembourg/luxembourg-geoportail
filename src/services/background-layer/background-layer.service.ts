import { Subscription, BehaviorSubject } from 'rxjs'
import { themesService } from '../services/themes/themes.service'
import { mapState } from '../state/map/map.state'
import { Layer } from '../state/map/map.state.model'

export interface LuxBgLayer {
  name: string
  id: number
}

export class BgLayerService {
  private subscription = new Subscription()

  bgLayers: LuxBgLayer[] = [
    {
      name: 'route',
      id: 556,
    },
    {
      name: 'topo',
      id: 529,
    },
    {
      name: 'topo_bw',
      id: 502,
    },
    {
      name: 'ortho',
      id: 530,
    },
    {
      name: 'hybrid',
      id: 501,
    },
    {
      name: 'white',
      id: 0,
    },
  ]
  bgLayers$ = new BehaviorSubject<LuxBgLayer[]>(this.bgLayers)
  activeBgLayer$ = new BehaviorSubject<LuxBgLayer>(this.bgLayers[0])

  constructor() {
    themesService.bgLayers$.subscribe(bgLayers =>
      this.subscription.add(
        this.activeBgLayer$.subscribe(layer => {
          this.setMapBackground(layer)
        })
      )
    )
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
  }

  setBgLayer(bgLayer: LuxBgLayer) {
    this.activeBgLayer$.next(bgLayer)
  }

  setMapBackground(bgLayer: LuxBgLayer) {
    const currentLowestLayer = mapState.getLayer(0)
    if (
      currentLowestLayer &&
      this.bgLayers.find(l => l.id === currentLowestLayer.id)
    ) {
      mapState.removeLayer(currentLowestLayer.id)
    }
    const newBgLayer = themesService.findBgLayerById(bgLayer.id)
    if (newBgLayer) {
      if (newBgLayer.type !== 'WMTS') {
        throw new Error(`Only WMTS BG layers are currently implemented (not ${newBgLayer.type} for ${newBgLayer.name})`)
      }
      newBgLayer.type = 'BG WMTS'
      mapState.insertLayer(newBgLayer as unknown as Layer, 0)
    }
  }
}

export const bgLayerService = new BgLayerService()
