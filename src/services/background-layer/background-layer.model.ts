import { ThemeNodeModel } from '../themes/themes.model'
import { Layer } from '../../state/map/map.state.model'

import { bgConfig } from '../../../test/fixtures/background.config.fixture'

export class LuxBgLayer {
  name: string
  id: number

  static fromLayer(layer: Layer | null): LuxBgLayer {
    return new LuxBgLayer(layer?.name, layer?.id)
  }

  static fromThemeNodeModel(layer: ThemeNodeModel): LuxBgLayer {
    const bgLayer = bgConfig.bg_layers.find(l => l.id == layer.id)
    return new LuxBgLayer(bgLayer?.name, bgLayer?.id)
  }

  constructor(name: string | undefined, id: number | undefined) {
    this.name = name ?? 'white'
    this.id = id ?? 0
  }
}
