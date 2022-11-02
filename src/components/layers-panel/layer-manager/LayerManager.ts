import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement, query, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { themesService } from '../../../services/themes/themes.service'
import { mapState } from '../../../state/map/map.state'
import { i18nMixin } from '../../../mixins/i18n-lit-element'
import { layerTreeState } from '../catalog/layer-tree/layer-tree.service'
import { LayerTreeNodeModel } from '../catalog/layer-tree/layer-tree.model'
import { Layer } from '../../../state/map/map.state.model'
import './layer-element/LayerManagerElement'
// Default SortableJS
import Sortable, { SortableEvent } from 'sortablejs'
import { Openlayers } from '../../../services/map/ol.service'

@customElement('lux-layer-manager')
export class LayerManager extends i18nMixin(LitElement) {
  private subscription = new Subscription()
  private layers: Layer[]
  private sortable: Sortable
  private draggableClassName = 'drag-handle'

  constructor() {
    super()

    this.subscription.add(
      mapState.layers$.subscribe(layers => {
        this.layers = layers
      })
    )
  }

  updated() {
    const sortableLayers = document.getElementById('sortable-layers')
    if (sortableLayers) {
      this.sortable = Sortable.create(sortableLayers, {
        dataIdAttr: 'data-id',
        handle: `.${this.draggableClassName}`,
        onSort: this.sortMethod.bind(this),
      })
    }
  }

  sortMethod(event: SortableEvent) {
    const items = event.to.children
    mapState.reorderLayers([...items].map(val => Number(val.id)))
  }

  updateLayerOpacity(layerId: number, opacity: number) {
    mapState.setLayerOpacity(layerId, opacity / 100)
  }

  render(): TemplateResult {
    return html`
      <ul id="sortable-layers">
        ${this.layers.map(
          layer =>
            html` <li id=${layer.id}>
              <lux-layer-manager-element
                .draggableClassName="${this.draggableClassName}"
                .layer="${layer}"
                .updateLayerOpacity="${this.updateLayerOpacity}"
              ></lux-layer-manager-element>
            </li>`
        )}
      </ul>
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
