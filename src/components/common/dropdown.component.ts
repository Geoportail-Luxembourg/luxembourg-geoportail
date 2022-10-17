import { LitElement, TemplateResult, html } from 'lit'
import { property, customElement } from 'lit/decorators'
import { DropdownOptionModel } from './dropdown.model'

@customElement('lux-dropdown')
export class Dropdown extends LitElement {
  @property() private placeholder: string
  @property() private options: DropdownOptionModel[] = []

  private onChange(e: Event) {
    const event = new CustomEvent(`dropdown-change`, {
      bubbles: true,
      detail: (e.target as HTMLSelectElement).value,
    })
    this.dispatchEvent(event)
  }

  render(): TemplateResult {
    return html` <select class="lux-btn" @change="${this.onChange}">
      ${this.placeholder
        ? html`<option value="" disabled selected>${this.placeholder}</option>`
        : ''}
      ${this.options.map(
        option => html`<option value="${option.value}">${option.label}</option>`
      )}
    </select>`
  }

  override createRenderRoot() {
    return this
  }
}
