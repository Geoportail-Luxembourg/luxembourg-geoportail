import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { mapState } from '../../../state/map/map.state'
import { i18nMixin } from '../../../mixins/i18n-lit-element'
import { Layer } from '../../../state/map/map.state.model'
import './layer-element/LayerManagerElement'
import Sortable, { SortableEvent } from 'sortablejs'

@customElement('lux-layer-manager')
export class LayerManager extends i18nMixin(LitElement) {
  @state() private layers: Layer[]
  @state() private isLayerOpenId: number

  private subscription = new Subscription()
  private sortable: Sortable
  private draggableClassName = 'drag-handle'

  constructor() {
    super()

    this.subscription.add(
      mapState.map$.subscribe(mapContext => {
        this.layers = mapContext.layers ?? []
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

  removeLayer(event: CustomEvent) {
    mapState.removeLayer(event.detail.value)
  }

  clickToggleAccordionItem(event: CustomEvent) {
    this.isLayerOpenId = event.detail.value
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
                .isOpen=${this.isLayerOpenId === layer.id}
                .updateLayerOpacity="${this.updateLayerOpacity}"
                @clickRemove="${this.removeLayer}"
                @clickToggle="${this.clickToggleAccordionItem}"
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
