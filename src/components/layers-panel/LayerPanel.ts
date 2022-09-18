import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators'

import './catalog/CatalogTab'

@customElement('lux-layer-panel')
export class LayerPanel extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="flex flex-col h-full">
        <div class="h-20">
          <div class="lux-panel-title">layers</div>
        </div>
        <!--catalog tab-->
        <div class="grow p-2.5 bg-main-primary">
          <lux-catalog-tab></lux-catalog-tab>
        </div>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
