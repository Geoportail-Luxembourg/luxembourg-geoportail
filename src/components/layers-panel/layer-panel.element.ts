import { html, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import i18next from 'i18next'

import LuxElement from '../common/lux.element'
import '../remote-layers/remote-layers.element'
import '../catalog/catalog-tab.element'
import '../layer-manager/layer-manager.element'

@customElement('lux-layer-panel')
export class LayerPanelElement extends LuxElement {
  @state() myLayersOpen = true

  render(): TemplateResult {
    return html`
      <div class="flex flex-col h-full">
        <div class="h-20 shrink-0">
          <div class="lux-panel-title">
            ${i18next.t('Layers', { ns: 'client' })}
          </div>
        </div>
        <!--selector tab-->
        <div class="flex flex-row gap-2 h-10 text-2xl">
          <div
            @click="${() => (this.myLayersOpen = true)}"
            class="text-white basis-1/2 hover:bg-primary cursor-pointer text-center uppercase  ${this
              .myLayersOpen
              ? 'bg-primary'
              : 'bg-tertiary'}"
          >
            ${i18next.t('my_layers', { ns: 'client' })}
          </div>
          <div
            @click="${() => (this.myLayersOpen = false)}"
            class="text-white basis-1/2 hover:bg-primary cursor-pointer text-center uppercase  ${!this
              .myLayersOpen
              ? 'bg-primary'
              : 'bg-tertiary'}"
          >
            ${i18next.t('Catalog', { ns: 'client' })}
          </div>
        </div>
        <!--catalog tab-->
        <div class="relative grow p-2.5 bg-primary overflow-auto">
          ${!this.myLayersOpen
            ? html`<lux-catalog-tab></lux-catalog-tab>`
            : html`<lux-layer-manager></lux-layer-manager>`}
        </div>
        <lux-remote-layers></lux-remote-layers>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}