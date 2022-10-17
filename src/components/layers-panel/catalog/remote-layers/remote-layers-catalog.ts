import i18next from 'i18next'
import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import '../../../common/dropdown.component'

@customElement('lux-remote-layers-catalog')
export class RemoteLayersCatalog extends LitElement {
  @state() private layerTree: LayerTreeNodeModel | undefined

  constructor() {
    super()
  }

  render(): TemplateResult {
    return html`
      <div class="scroll-auto bg-white lux-modal" role="dialog">
        <div class="lux-modal-header">
          <h4>${i18next.t('Add external data', { ns: 'client' })}</h4>
        </div>
        <lux-layer-tree-node .node="${this.layerTree}"> </lux-layer-tree-node>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
