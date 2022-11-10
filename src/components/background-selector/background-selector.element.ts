import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { i18nMixin } from '../../mixins/i18n-lit-element'
import { Subscription, BehaviorSubject, combineLatest } from 'rxjs'
import { themesService } from '../../services/themes/themes.service'
import { backgroundLayerService } from '../../services/background-layer/background-layer.service'
import {
  BLANK_BACKGROUNDLAYER,
  IBackgroundLayer,
} from '../../services/background-layer/background-layer.model'
import { mapState } from '../../states/map/map.state'

import './background-selector-item.element'

@customElement('lux-background-selector')
export class BackgroundSelectorElement extends i18nMixin(LitElement) {
  @state() isOpen = false
  @state() activeLayerId: number
  private bgLayers: IBackgroundLayer[] = []
  private subscription = new Subscription()

  constructor() {
    super()
    this.subscription.add(
      themesService.bgLayers$.subscribe(bgLayers => {
        this.bgLayers =
          bgLayers.length > 0
            ? backgroundLayerService.getBgLayersFromConfig()
            : [BLANK_BACKGROUNDLAYER]

        if (this.activeLayerId === void 0) {
          backgroundLayerService.setBgLayer(
            backgroundLayerService.getDefaultSelectedId()
          )
        }
      })
    )
    this.subscription.add(
      combineLatest([mapState.bgLayer$, themesService.bgLayers$]).subscribe(
        ([layer]) =>
          (this.activeLayerId =
            (layer?.id as number) ?? BLANK_BACKGROUNDLAYER.id)
      )
    )
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
