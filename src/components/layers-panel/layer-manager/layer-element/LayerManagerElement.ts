import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { themesService } from '../../../../services/themes/themes.service'
import { mapState } from '../../../../state/map/map.state'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'
import { layerTreeState } from '../../catalog/layer-tree/layer-tree.service'
import { LayerTreeNodeModel } from '../../catalog/layer-tree/layer-tree.model'
import { Layer } from '../../../../state/map/map.state.model'
import { property } from 'lit/decorators.js'

@customElement('lux-layer-manager-element')
export class LayerManagerElement extends i18nMixin(LitElement) {
  @property()
  private layer: Layer

  constructor() {
    super()
  }

  render(): TemplateResult {
    return html`
      <li class="lux-layer-manager-item flex space-x-1.5">
        <a class="fa-solid fa-bars flex-none"></a>
        <a class="fa-solid fa-info flex-none"></a>
        <div class="flex-auto">
          ${this.layer.name}
        </div>
        <span class="fa-solid fa-ellipsis flex-none"></span>
        <span class="fa-solid fa-trash flex-none" @click="${this.removeLayer()}></span>
      </li>
    `
  }

  removeLayer() {}

  override createRenderRoot() {
    return this
  }
}
