import { html, LitElement, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators'

import './catalog.element'
import '../theme-selector/theme-selector.element'

@customElement('lux-catalog-tab')
export class CatalogTabElement extends LitElement {
  @property()
  themeGridIsOpen = false

  toggleThemesGrid(event: CustomEvent) {
    this.themeGridIsOpen = event.detail.isOpen
  }

  render(): TemplateResult {
    return html`
      <div class="flex flex-col">
        <lux-theme-selector @toggleThemesGrid=${this.toggleThemesGrid}>
        </lux-theme-selector>
        ${this.themeGridIsOpen === false
          ? html` <lux-catalog class="pt-5"></lux-catalog>`
          : html``}
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
