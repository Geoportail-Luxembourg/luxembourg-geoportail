import { BehaviorSubject } from 'rxjs'

interface LuxBgLayer {
  name: string
}

export class BgLayerService {
  bgLayers = [
    {
      name: 'route',
    },
    {
      name: 'topo',
    },
    {
      name: 'topo_bw',
    },
    {
      name: 'ortho',
    },
    {
      name: 'hybrid',
    },
    {
      name: 'white',
    },
  ]
  bgLayers$ = new BehaviorSubject<LuxBgLayer[]>(this.bgLayers)
  activeBgLayer$ = new BehaviorSubject<LuxBgLayer>(this.bgLayers[0])

  constructor() {
  }

  setBgLayer(theme: LuxBgLayer) {
    this.currentTheme$.next(bgLayer)
  }
}

export const LuxBgLayerService = new BgLayerService()
