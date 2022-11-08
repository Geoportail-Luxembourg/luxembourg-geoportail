import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'
import { Layer } from '../../../../state/map/map.state.model'
import { property } from 'lit/decorators.js'

@customElement('lux-layer-manager-background-element')
export class LayerManagerElement extends i18nMixin(LitElement) {
  @property()
  private layer: Layer

  constructor() {
    super()
  }

  render(): TemplateResult {
    return html`
      <li class="bg-secondary">
        <a class="fa fa-info"></a>
        ${this.layer.name}
        <span class="fa fa-pencil"></span>
      </li>
    `
  }

  override createRenderRoot() {
    return this
  }
}
