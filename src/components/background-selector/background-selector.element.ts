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
    // prettier-ignore
    return html`
      <div class="flex flex-row-reverse">
        <div class="${this.isOpen == true ? 'flex flex-col md:flex-row' : 'hidden'}">
          ${this.bgLayers.map(
            (layer: LuxBgLayer) =>
              html`<lux-background-selector-item
                      class="${`lux-bg-sel ` +
                               `${layer.id === this.activeLayer.id ? 'border-red-500 border-2' : 'border-black border'} ` +
                               `hover:bg-cyan-600`}"
                      bgclass="bg-${layer.name}"
                      @click="${() => this.setBackgroundLayer(layer)}"
                   >
              </lux-background-selector-item>`
          )}
        </div>
        <lux-background-selector-item
             class=" ${
               'lux-bg-sel border border-black bg-white ' +
               (this.isOpen == true ? 'hidden' : 'block')}"
             bgclass="bg-${this.activeLayer.name}"
             @click="${this.toggleSelector}">
        </lux-background-selector-item>
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
