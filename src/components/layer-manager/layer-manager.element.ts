import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { mapState } from '../../states/map/map.state'
import { i18nMixin } from '../../mixins/i18n-lit-element'
import { Layer, LayerId } from '../../states/map/map.state.model'
import Sortable, { SortableEvent } from 'sortablejs'

import './layer-item/layer-item.element'
import './layer-item/layer-item-background.element'
import { SubscribableMixin } from '../../mixins/subscribable'
import { map } from 'rxjs'

@customElement('lux-layer-manager')
export class LayerManagerElement extends i18nMixin(
  SubscribableMixin(LitElement)
) {
  @state() private layers: Layer[]
  @state() private backgroundLayer: Layer
  @state() private isLayerOpenId: LayerId

  private sortable: Sortable
  private draggableClassName = 'drag-handle'

  constructor() {
    super()

    this.subscribe(
      'layers' as keyof this,
      mapState.map$.pipe(map(mapContext => mapContext.layers ?? []))
    )
  }

  updated() {
    const sortableLayers = document.getElementById('sortable-layers')
    if (sortableLayers) {
      this.sortable = Sortable.create(sortableLayers, {
        dataIdAttr: 'data-id',
        dragClass: 'lux-sortable-drag',
        ghostClass: 'lux-sortable-ghost',
        sort: true,
        handle: `.${this.draggableClassName}`,
        onSort: this.sortMethod.bind(this),
      })
    }
  }

  sortMethod(event: SortableEvent) {
    const items = event.to.children
    mapState.reorderLayers([...items].map(val => Number(val.id)).reverse())
  }

  changeOpacityLayer = (event: CustomEvent) => {
    mapState.setLayerOpacity(event.detail.layer.id, event.detail.opacity / 100)
  }

  removeLayer(event: CustomEvent) {
    mapState.removeLayers(event.detail.layer.id)
  }

  toggleAccordionItem(event: CustomEvent) {
    this.isLayerOpenId = event.detail.layer.id
  }

  toggleInfoLayer(event: CustomEvent) {
    console.info('clickInfo to implement')
  }

  toggleEditionLayer(event: CustomEvent) {
    console.info('clickEdit to implement')
  }

  render(): TemplateResult {
    return html`
      <ul id="sortable-layers">
        ${[...this.layers].reverse().map(
          layer =>
            html` <li id=${layer.id}>
              <lux-layer-manager-item
                .draggableClassName="${this.draggableClassName}"
                .layer="${layer}"
                .isOpen=${this.isLayerOpenId === layer.id}
                @clickRemove="${this.removeLayer}"
                @clickToggle="${this.toggleAccordionItem}"
                @clickInfo="${this.toggleInfoLayer}"
                @changeOpacity="${this.changeOpacityLayer}"
              >
              </lux-layer-manager-item>
            </li>`
        )}
        ${this.backgroundLayer &&
        html`
          <lux-layer-manager-item-background
            .layer=${this.backgroundLayer}
            @clickInfo="${this.toggleInfoLayer}"
            @clickEdit="${this.toggleEditionLayer}"
          >
          </lux-layer-manager-item-background>
        `}
      </ul>
    `
  }

  override createRenderRoot() {
    return this
  }
}
