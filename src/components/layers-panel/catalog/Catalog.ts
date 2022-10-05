import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'

import './layer-tree/layer-tree-node.component'
import { Subscription } from 'rxjs'
import { themesService } from '../../../services/themes.service'
import { mapState } from '../../../state/map/map.state'
import { Layer } from '../../../state/map/map.state.model'
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
  private subscription = new Subscription()

  constructor() {
    super()

    themesApi.fetchThemes().then(config => {
      themesService.themes = config.themes.find(
        (theme: ThemeNodeModel) => theme.name == 'main'
      )
      this.layerTree = themesToLayerTree(themesService.themes)

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
        mapState.removeLayer(layer.id)
      } else {
        mapState.addLayer(layer as unknown as Layer)
      }
    }
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

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  override createRenderRoot() {
    return this
  }
}
