import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { themesApi } from './themes.api'

@customElement('lux-catalog')
export class CatalogTab extends LitElement {
  @state()
  private layers: any

  constructor() {
    super()
    themesApi
      .fetchThemes()
      .then(
        config =>
          (this.layers = config.themes.find(
            (theme: any) => theme.name == 'main'
          ).children)
      )
  }

  render(): TemplateResult {
    return this.layers?.map((layer: any) => {
      return html`
        <div class="lux-primary cursor-pointer mb-px">${layer.name}</div>
      `
    })
  }

  override createRenderRoot() {
    return this
  }
}
