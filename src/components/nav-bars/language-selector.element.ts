import type { TemplateResult } from 'lit'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import LuxElement from '../common/lux.element'

@customElement('lux-language-selector')
export class LanguageSelectorElement extends LuxElement {
  render(): TemplateResult {
    return html`
      <select @change="${this.changeLanguages}">
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="lb">LB</option>
      </select>
    `
  }

  changeLanguages(event: Event) {
    if (event.target) {
      const result = (event.target as HTMLInputElement).value
      this.changeLanguage(result)
    }
  }

  override createRenderRoot() {
    return this
  }
}
