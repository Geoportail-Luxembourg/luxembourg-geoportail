import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { i18nMixin } from '../../mixins/i18n-lit-element'
import { Subscription, BehaviorSubject, combineLatest } from 'rxjs'
import { themesService } from '../../services/themes/themes.service'
import {
  bgLayersFromThemes,
  createDefaultBgLayer,
  setBgLayer,
} from '../../services/background-layer/background-layer.service'
import { LuxBgLayer } from '../../services/background-layer/background-layer.service'
import { mapState } from '../../states/map/map.state'

import './background-selector-item.element'

@customElement('lux-background-selector')
export class BackgroundSelectorElement extends i18nMixin(LitElement) {
  @state() isOpen = false
  @state() activeLayer: LuxBgLayer = { name: 'white', id: 0 }
  private bgLayers: LuxBgLayer[] = []
  private subscription = new Subscription()

  constructor() {
    super()
    this.subscription.add(
      themesService.bgLayers$.subscribe(bgLayers => {
        this.bgLayers =
          bgLayers.length > 0 ? bgLayersFromThemes() : [createDefaultBgLayer()]
      })
    )
    this.subscription.add(
      combineLatest([themesService.bgLayers$, mapState.bgLayer$]).subscribe(
        ([bgLayers, layer]) => {
          if (!layer || bgLayers.find(l => l.id == layer?.id)) {
            this.activeLayer = LuxBgLayer.fromLayer(layer)
          }
        }
      )
    )
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  render() {
    let closedMenuClasses = 'lux-bg-sel border border-black '
    closedMenuClasses += this.isOpen == true ? 'hidden' : 'block'

    function getOpenMenuClasses(layer: LuxBgLayer, that: any) {
      let openMenuClasses = 'lux-bg-sel hover:bg-cyan-600 '
      openMenuClasses +=
        layer.id === that.activeLayer.id
          ? 'border-red-500 border-2'
          : 'border-black border'
      return openMenuClasses
    }
    const bgLayerComponents = this.bgLayers.map(
      (layer: LuxBgLayer) =>
        html`<lux-background-selector-item
          class="${getOpenMenuClasses(layer, this)}"
          bgname="${layer.name}"
          @click="${() => this.setBackgroundLayer(layer)}"
        >
        </lux-background-selector-item>`
    )
    return html`
      <div class="flex flex-row-reverse">
        <lux-background-selector-item
          class=" ${closedMenuClasses}"
          aria-expanded="${this.isOpen}"
          bgtitle="Select BG layer"
          bgname="${this.activeLayer.name}"
          @click="${this.toggleSelector}"
        >
        </lux-background-selector-item>

        <div
          class="${this.isOpen == true
            ? 'flex flex-col md:flex-row'
            : 'hidden'}"
        >
          ${bgLayerComponents}
        </div>
      </div>
    `
  }

  setBackgroundLayer(layer: LuxBgLayer) {
    setBgLayer(layer)
    this.isOpen = false
  }

  toggleSelector() {
    this.isOpen = !this.isOpen
  }

  createRenderRoot() {
    // no shadow dom
    return this
  }
}
