import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { mapState } from '../../../state/map/map.state'
import { i18nMixin } from '../../../mixins/i18n-lit-element'
import { Layer } from '../../../state/map/map.state.model'
import Sortable, { SortableEvent } from 'sortablejs'

import './layer-element/LayerManagerElement'
import './layer-element/LayerManagerBackgroundElement'

@customElement('lux-layer-manager')
export class LayerManager extends i18nMixin(LitElement) {
  @state() private layers: Layer[]
  @state() private backgroundLayer: Layer
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
    mapState.reorderLayers([...items].map(val => Number(val.id)))
  }

  changeOpacityLayer = (event: CustomEvent) => {
    mapState.setLayerOpacity(event.detail.layer.id, event.detail.opacity / 100)
  }

  removeLayer(event: CustomEvent) {
    mapState.removeLayer(event.detail.layer.id)
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
        ${this.layers.map(
          layer =>
            html` <li id=${layer.id}>
              <lux-layer-manager-element
                .draggableClassName="${this.draggableClassName}"
                .layer="${layer}"
                .isOpen=${this.isLayerOpenId === layer.id}
                @clickRemove="${this.removeLayer}"
                @clickToggle="${this.toggleAccordionItem}"
                @clickInfo="${this.toggleInfoLayer}"
                @changeOpacity="${this.changeOpacityLayer}"
              >
              </lux-layer-manager-element>
            </li>`
        )}
        ${this.backgroundLayer &&
        html`
          <lux-layer-manager-background-element
            .layer=${this.backgroundLayer}
            @clickInfo="${this.toggleInfoLayer}"
            @clickEdit="${this.toggleEditionLayer}"
          >
          </lux-layer-manager-background-element>
        `}
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
