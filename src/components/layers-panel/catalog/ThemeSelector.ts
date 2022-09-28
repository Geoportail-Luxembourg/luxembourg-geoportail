import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators'

@customElement('lux-theme-selector')
export class ThemeSelector extends LitElement {
  render(): TemplateResult {
    return html`
      <div
        class="bg-main-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-main-primary"
      >
        Theme: Main
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
