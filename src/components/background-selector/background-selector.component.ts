import { LuxBase } from '../lux-base.component'
import { LuxBgLayerService, LuxBgLayer } from '../background-layer.service'
import { html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './background-selector-item.component'

@customElement('background-selector')
export class BackgroundSelector extends LuxBase {
  @state() isOpened = false
  @state() activeLayer = 'white'
  private bgLayerService
  private bgLayers
  private subscription

  constructor() {
    super()
    this.bgLayerService = LuxBgLayerService
    this.bgLayers = this.bgLayerService.bgLayers$
      .getValue()
      .map((l: LuxBgLayer) => l.name)
    this.subscription = this.bgLayerService.activeBgLayer$.subscribe(layer => {
      this.activeLayer = layer.name
      this.requestUpdate()
    })
    // ['route', 'topo', 'topo_bw', 'ortho', 'hybrid', 'white'];
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  render() {
    // prettier-ignore
    return html`
      <div class="flex flex-row-reverse">
        <div class="flex flex-col md:flex-row ${this.isOpened == true ? 'block' : 'hidden'}">
          ${this.bgLayers.map(
            (layer: string) =>
              html`<background-selector-item
                      class="${`lux-bg-sel ` +
                               `${layer == this.activeLayer ? 'border-red-500 border-2' : 'border-black border'} ` +
                               `hover:bg-cyan-600`}"
                      bgclass="bg-${layer}"
                      @click="${() => this.setBackgroundLayer(layer)}"
                   >
              </background-selector-item>`
          )}
        </div>
        <div class="${`lux-bg-sel border border-black bg-white ` +
                      `${this.isOpened == true ? 'hidden' : 'block'}`}"
             @click="${this.toggleSelector}"
        >
          <img
            class="${'h-full w-full rounded-sm ' +
                     'bg-[length:41px_41px] md:bg-[length:90px_50px] ' +
                     `bg-${this.activeLayer}_sm md:bg-${this.activeLayer} ` +
                     `hd:bg-${this.activeLayer}_sm_hi hd_md:bg-${this.activeLayer}_hi`}"
          />
        </div>
      </div>
    `
  }

  setBackgroundLayer(layer: string) {
    this.bgLayerService.activeBgLayer$.next({ name: layer })
    this.isOpened = false
    console.log(layer)
  }

  toggleSelector() {
    this.isOpened = !this.isOpened
  }

  createRenderRoot() {
    // no shadow dom
    return this
  }
}
