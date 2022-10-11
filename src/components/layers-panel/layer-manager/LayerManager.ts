import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { themesService } from '../../../services/themes/themes.service'
import { mapState } from '../../../state/map/map.state'
import { i18nMixin } from '../../../mixins/i18n-lit-element'

@customElement('lux-layer-manager')
export class LayerManager extends i18nMixin(LitElement) {
  private subscription = new Subscription()

  constructor() {
    super()
  }

  render(): TemplateResult {
    return html` <p>Layer Manager</p> `
  }

  disconnectedCallback() {
    this.subscription.unsubscribe()
    super.disconnectedCallback()
  }

  override createRenderRoot() {
    return this
  }
}
