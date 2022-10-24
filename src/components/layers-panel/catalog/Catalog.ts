import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { ThemeNodeModel } from '../../../services/themes/themes.model'
import { themesService } from '../../../services/themes/themes.service'
import { mapState } from '../../../state/map/map.state'
import { Layer } from '../../../state/map/map.state.model'

import './layer-tree/layer-tree-node.component'
import './layer-metadata/layer-metadata.component'
import { themesToLayerTree } from './layer-tree/layer-tree.mapper'
import { LayerTreeNodeModel } from './layer-tree/layer-tree.model'
import { layerTreeState } from './layer-tree/layer-tree.service'
import { layerMetadataService } from './layer-metadata/layer-metadata.service'
import { LayerMetadataModel } from './layer-metadata/layer-metadata.model'

@customElement('lux-catalog')
export class Catalog extends LitElement {
  @state()
  private layerTree: LayerTreeNodeModel | undefined
  private subscription = new Subscription()
  @state() private layerMetadata: LayerMetadataModel

  constructor() {
    super()
    themesService.theme$.subscribe(theme => {
      this.layerTree = themesToLayerTree(theme as ThemeNodeModel)

      this.subscription.add(
        mapState.map$.subscribe(mapContext => {
          this.layerTree = layerTreeState.updateLayers(
            this.layerTree as LayerTreeNodeModel,
            mapContext.layers
          )
        })
      )
    })
  }

  private toggleParent(event: Event) {
    const node = (event as CustomEvent).detail

    this.layerTree = layerTreeState.toggleNode(
      node.id,
      this.layerTree as LayerTreeNodeModel,
      'expanded'
    )
  }

  private toggleLayer(event: Event) {
    const node = (event as CustomEvent).detail
    const layer = themesService.findById(node.id)
    if (layer) {
      if (node.checked === true) {
        mapState.removeLayer(layer.id as unknown as string)
      } else {
        mapState.addLayer(layer as unknown as Layer)
      }
    }
  }

  private async displayLayerMetadata(event: Event) {
    const node = (event as CustomEvent).detail
    const layer = themesService.findById(node.id)
    this.layerMetadata = await layerMetadataService.getLayerMetadata(
      node,
      layer
    )
  }

  render(): TemplateResult {
    return html`
      <lux-layer-metadata
        .layerMetadata="${this.layerMetadata}"
      ></lux-layer-metadata>
      <lux-layer-tree-node
        .node="${this.layerTree}"
        @parent-toggle="${this.toggleParent}"
        @layer-toggle="${this.toggleLayer}"
        @display-layer-metadata="${this.displayLayerMetadata}"
      ></lux-layer-tree-node>
    `
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  override createRenderRoot() {
    return this
  }
}
