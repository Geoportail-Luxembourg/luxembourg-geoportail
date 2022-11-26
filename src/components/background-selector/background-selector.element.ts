import { html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { combineLatest, map } from 'rxjs'
import { themesService } from '../../services/themes/themes.service'
import { backgroundLayerService } from '../../services/background-layer/background-layer.service'
import {
  BLANK_BACKGROUNDLAYER,
  IBackgroundLayer,
} from '../../services/background-layer/background-layer.model'
import { mapState } from '../../states/map/map.state'
import LuxElement from '../common/lux.element'

import './background-selector-item.element'

@customElement('lux-background-selector')
export class BackgroundSelectorElement extends LuxElement {
  @state() isOpen = false
  @state() activeLayerId: number
  private bgLayers: IBackgroundLayer[] = []

  constructor() {
    super()

    const bgLayers$ = themesService.bgLayers$.pipe(
      map(bgLayers => {
        if (this.activeLayerId === void 0) {
          backgroundLayerService.setBgLayer(
            backgroundLayerService.getDefaultSelectedId()
          )
        }

        return bgLayers.length > 0
          ? backgroundLayerService.getBgLayersFromConfig()
          : [BLANK_BACKGROUNDLAYER]
      })
    )

    const activeLayer$ = combineLatest([
      mapState.bgLayer$,
      themesService.bgLayers$,
    ]).pipe(map(([layer]) => (layer?.id as number) ?? BLANK_BACKGROUNDLAYER.id))

    this.subscribe('bgLayers' as keyof this, bgLayers$)
    this.subscribe('activeLayerId' as keyof this, activeLayer$)
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  getOpenMenuClasses = (layer: IBackgroundLayer) => {
    let openMenuClasses = 'lux-bg-sel hover:bg-cyan-600 '
    openMenuClasses +=
      layer.id === this.activeLayerId
        ? 'border-red-500 border-2'
        : 'border-black border'
    return openMenuClasses
  }

  getActiveLayerName() {
    return this.bgLayers.find(layer => layer.id === this.activeLayerId)?.name
  }

  render() {
    let closedMenuClasses = 'lux-bg-sel border border-black '
    closedMenuClasses += this.isOpen === true ? 'hidden' : 'block'
    const bgLayerComponents = this.bgLayers.map(
      layer =>
        html`<lux-background-selector-item
          class="${this.getOpenMenuClasses(layer)}"
          bgname="${layer.name}"
          @click="${() => this.setBackgroundLayer(layer)}"
        >
        </lux-background-selector-item>`
    )

    return html`
      <div class="flex flex-row-reverse">
        <lux-background-selector-item
          class="${closedMenuClasses}"
          aria-expanded="${this.isOpen}"
          bgtitle="Select BG layer"
          bgname="${this.getActiveLayerName()}"
          @click="${this.toggleSelector}"
        >
        </lux-background-selector-item>

        <div
          class="${this.isOpen === true
            ? 'flex flex-col md:flex-row'
            : 'hidden'}"
        >
          ${bgLayerComponents}
        </div>
      </div>
    `
  }

  setBackgroundLayer(layer: IBackgroundLayer) {
    backgroundLayerService.setBgLayer(layer.id)
    this.isOpen = false
  }

  toggleSelector() {
    this.isOpen = !this.isOpen
  }

  createRenderRoot() {
    return this
  }
}
