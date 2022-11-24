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
  @state() activeLayer = 'white'
  private bgLayers
  private subscription

  constructor() {
    super()
    this.bgLayers = bgLayerService.bgLayers$
      .getValue()
      .map((l: LuxBgLayer) => l.name)
    this.subscription = bgLayerService.activeBgLayer$.subscribe(layer => {
      this.activeLayer = layer.name
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
            (layer: string) =>
              html`<lux-background-selector-item
                      class="${`lux-bg-sel ` +
                               `${layer == this.activeLayer ? 'border-red-500 border-2' : 'border-black border'} ` +
                               `hover:bg-cyan-600`}"
                      bgclass="bg-${layer}"
                      @click="${() => this.setBackgroundLayer(layer)}"
                   >
              </lux-background-selector-item>`
          )}
        </div>
        <lux-background-selector-item
             class=" ${
               'lux-bg-sel border border-black bg-white ' +
               (this.isOpen == true ? 'hidden' : 'block')}"
             bgclass="bg-${this.activeLayer}"
             @click="${this.toggleSelector}">
        </lux-background-selector-item>
      </div>
    `
  }

  setBackgroundLayer(layer: string) {
    bgLayerService.activeBgLayer$.next({ name: layer })
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