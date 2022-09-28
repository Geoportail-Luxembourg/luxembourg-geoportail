import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'

import './layer-tree/layer-tree-node.component'
import { themesToLayerTree } from './layer-tree/layer-tree.mapper'
import {
  LayerTreeNodeModel,
  ThemeNodeModel,
} from './layer-tree/layer-tree.model'
import { layerTreeState } from './layer-tree/layer-tree.service'
import { themesApi } from './themes.api'

@customElement('lux-catalog')
export class Catalog extends LitElement {
  @state()
  private layerTree: LayerTreeNodeModel | undefined

  constructor() {
    super()
    themesApi
      .fetchThemes()
      .then(
        config =>
          (this.layerTree = themesToLayerTree(
            config.themes.find((theme: ThemeNodeModel) => theme.name == 'main')
          ))
      )
  }

  private toggleParent(event: Event) {
    const nodeId = (event as CustomEvent).detail
    this.layerTree = layerTreeState.toggleNode(
      nodeId,
      this.layerTree as LayerTreeNodeModel,
      'expanded'
    )
  }
  private toggleLayer(event: Event) {
    const nodeId = (event as CustomEvent).detail
    this.layerTree = layerTreeState.toggleNode(
      nodeId,
      this.layerTree as LayerTreeNodeModel,
      'checked'
    )
  }

  render(): TemplateResult {
    return html`
      <lux-layer-tree-node
        .node="${this.layerTree}"
        @parent-toggle="${this.toggleParent}"
        @layer-toggle="${this.toggleLayer}"
      ></lux-layer-tree-node>
    `
  }

  override createRenderRoot() {
    return this
  }
}
