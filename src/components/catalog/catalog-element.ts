import { combineLatest, map } from 'rxjs'
import { html, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { layersServices } from '../../services/layers/layers.service'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { themesService } from '../../services/themes/themes.service'
import { mapState } from '../../states/map/map.state'
import { themesToLayerTree } from '../layer-tree/layer-tree.mapper'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { layerTreeService } from '../layer-tree/layer-tree.service'
import LuxElement from '../common/base.element'

import '../layer-tree/layer-tree-node.element'

@customElement('lux-catalog')
export class CatalogElement extends LuxElement {
  @state()
  private layerTree: LayerTreeNodeModel | undefined

  constructor() {
    super()

    const layerTree$ = combineLatest([
      themesService.theme$,
      mapState.map$,
    ]).pipe(
      map(([theme, mapContext]) => {
        const layerTree =
          this.layerTree &&
          (this.layerTree.id as unknown as number) === theme?.id
            ? this.layerTree
            : themesToLayerTree(theme as ThemeNodeModel)

        return layerTreeService.updateLayers(
          layerTree as LayerTreeNodeModel,
          mapContext.layers
        )
      })
    )

    this.subscribe('layerTree' as keyof this, layerTree$)
  }

  private toggleParent(event: Event) {
    const node = (event as CustomEvent).detail

    this.layerTree = layerTreeService.toggleNode(
      node.id,
      this.layerTree as LayerTreeNodeModel,
      'expanded'
    )
  }

  private toggleLayer(event: Event) {
    const node = (event as CustomEvent).detail
    layersServices.toggleLayer(node.id, !node.checked)
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
