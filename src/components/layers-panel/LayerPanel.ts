import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators'
import { i18nMixin, translate } from '../../mixins/i18n-lit-element'

import './catalog/CatalogTab'

@customElement('lux-layer-panel')
export class LayerPanel extends i18nMixin(LitElement) {
  render(): TemplateResult {
    return html`
      <div class="flex flex-col h-full">
        <div class="h-20 shrink-0">
          <div class="lux-panel-title">${translate('app:layers')}</div>
        </div>
        <!--catalog tab-->
        <div class="grow p-2.5 bg-main-primary overflow-auto">
          <lux-catalog-tab></lux-catalog-tab>
        </div>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
