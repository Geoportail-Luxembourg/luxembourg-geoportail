import { html, LitElement, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'

@customElement('lux-layer-metadata-item')
export class LayerMetadataItem extends i18nMixin(LitElement) {
  @property({ type: String }) private label?: string
  @property({ type: String }) private value?: string

  render(): TemplateResult {
    const content = this.value
      ? html`
          <dt>${this.label}</dt>
          <dd>${this.value}</dd>
        `
      : html``
    return content
  }

  override createRenderRoot() {
    return this
  }
}
