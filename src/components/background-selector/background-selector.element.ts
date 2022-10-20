import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { i18nMixin } from '../../mixins/i18n-lit-element'
import {
  bgLayerService,
  LuxBgLayer,
} from '../../services/background-layer/background-layer.service'

import './background-selector-item.element'

@customElement('lux-background-selector')
export class BackgroundSelectorElement extends i18nMixin(LitElement) {
  @state() isOpen = false
  @state() activeLayer: LuxBgLayer = { name: 'white', id: 0 }
  private bgLayers: LuxBgLayer[]
  private subscription

  constructor() {
    super()
    this.bgLayers = bgLayerService.bgLayers$.getValue()
    this.subscription = bgLayerService.activeBgLayer$.subscribe(layer => {
      this.activeLayer = layer
    })
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  render() {
    var closedMenuClasses = 'lux-bg-sel border border-black bg-white '
    closedMenuClasses += this.isOpen == true ? 'hidden' : 'block'

    function getOpenMenuClasses(layer: LuxBgLayer, that) {
      var openMenuClasses = 'lux-bg-sel hover:bg-cyan-600 '
      openMenuClasses += layer.id === that.activeLayer.id ? 'border-red-500 border-2' : 'border-black border'
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
             @click="${this.toggleSelector}">
        </lux-background-selector-item>

        <div class="${this.isOpen == true ? 'flex flex-col md:flex-row' : 'hidden'}">
          ${bgLayerComponents}
        </div>
      </div>
    `
  }

  setBackgroundLayer(layer: LuxBgLayer) {
    bgLayerService.activeBgLayer$.next(layer)
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
