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
export class CatalogTab extends LitElement {
  @state()
  private layerTree: LayerTreeNodeModel | undefined

  constructor() {
    super()
    this.listenInteraction()
    themesApi
      .fetchThemes()
      .then(
        config =>
          (this.layerTree = themesToLayerTree(
            config.themes.find((theme: ThemeNodeModel) => theme.name == 'main')
          ))
      )
  }

  private listenInteraction() {
    this.addEventListener('layer-toggle', event => {
      const nodeId = (event as CustomEvent).detail
      console.log('layer', nodeId)
      this.layerTree = layerTreeState.toggleNode(
        nodeId,
        this.layerTree as LayerTreeNodeModel,
        'checked'
      )
    })

    this.addEventListener('parent-toggle', event => {
      const nodeId = (event as CustomEvent).detail
      console.log('parent', nodeId)
      this.layerTree = layerTreeState.toggleNode(
        nodeId,
        this.layerTree as LayerTreeNodeModel,
        'expanded'
      )
    })
  }

  render(): TemplateResult {
    return html`
      <lux-layer-tree-node .node="${this.layerTree}"></lux-layer-tree-node>
    `
  }

  override createRenderRoot() {
    return this
  }
}
