import { LitElement, TemplateResult, html } from 'lit'
import { property, customElement } from 'lit/decorators'
import { DropdownOptionModel } from './dropdown.model'

@customElement('lux-dropdown')
export class Dropdown extends LitElement {
  @property() private placeholder: string
  @property() private options: DropdownOptionModel[] = []

  render(): TemplateResult {
    return html`<select class="lux-btn">
      ${this.placeholder
        ? html`<option value="" disabled selected>${this.placeholder}</option>`
        : ''}
      ${this.options?.map(
        option => html`<option value="${option.value}">${option.label}</option>`
      )}
    </select>`
  }

  override createRenderRoot() {
    return this
  }
}
