import { Subscription, BehaviorSubject } from 'rxjs'
import { themesService } from '../themes/themes.service'
import { mapState } from '../../state/map/map.state'
import { Layer } from '../../state/map/map.state.model'

import { bgConfig } from '../../../test/fixtures/background.config.fixture'

export interface LuxBgLayer {
  name: string
  id: number
}

export class BgLayerService {
  private subscription = new Subscription()

  bgLayers: LuxBgLayer[] = bgConfig.bg_layers // constant from config
  bgLayers$ = new BehaviorSubject<LuxBgLayer[]>(this.bgLayers)
  activeBgLayer$ = new BehaviorSubject<LuxBgLayer>(this.bgLayers[5])

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
    const newBgLayer = themesService.findBgLayerById(bgLayer.id)
    if (newBgLayer) {
      if (!(newBgLayer.type === 'WMTS' || newBgLayer.type === 'BG WMTS')) {
        throw new Error(
          `Only WMTS BG layers are currently implemented (not ${newBgLayer.type} for ${newBgLayer.name})`
        )
      }
      newBgLayer.type = 'BG WMTS'
      mapState.setBgLayer(newBgLayer as unknown as Layer)
    } else {
      mapState.setBgLayer(null)
    }
  }
}

export const bgLayerService = new BgLayerService()
