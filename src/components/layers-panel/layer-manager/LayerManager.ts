import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { themesService } from '../../../services/themes/themes.service'
import { mapState } from '../../../state/map/map.state'
import { i18nMixin } from '../../../mixins/i18n-lit-element'
import { layerTreeState } from '../catalog/layer-tree/layer-tree.service'
import { LayerTreeNodeModel } from '../catalog/layer-tree/layer-tree.model'
import { Layer } from '../../../state/map/map.state.model'
import './layer-element/LayerManagerElement'

@customElement('lux-layer-manager')
export class LayerManager extends i18nMixin(LitElement) {
  private subscription = new Subscription()
  private layers: Layer[]
  private backgroundLayers: Layer[]

  constructor() {
    super()
    this.subscription.add(
      mapState.layers$.subscribe(layers => {
        this.layers = layers
      })
    )
  }

  render(): TemplateResult {
    return html`
      <ul>
        ${this.layers.map(
          layer =>
            html`<lux-layer-manager-element .layer="${layer}"</lux-layer-manager-element>`
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
