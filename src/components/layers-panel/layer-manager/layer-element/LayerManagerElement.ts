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
      <li class="bg-secondary text-tertiary">
        <a class="fa fa-reorder"></a>
        <a class="fa fa-info"></a>
        ${this.layer.name}
        <span class="fa fa-ellipsis"></span>
        <span class="fa fa-trash"></span>
      </li>
    `
  }

  override createRenderRoot() {
    return this
  }
}
