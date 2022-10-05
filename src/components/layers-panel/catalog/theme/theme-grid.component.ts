import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LuxTheme } from './theme.model'

@customElement('lux-theme-grid')
export class ThemeGrid extends LitElement {
  @property({ type: Object }) themes: LuxTheme[]

  render() {
    return html`${this.themes?.map(
      theme =>
        html`<button
          class="shrink-0 flex flex-col justify-between h-[150] w-1/2 pt-5 pb-1 px-[10] text-start text-gray-100/40 uppercase bg-${theme.name}-primary"
          @click="${() => this.setTheme(theme)}"
        >
          <div class="text-2xl">${theme.name}</div>
          <div
            class="text-6xl align-baseline after:content-${theme.name} after:font-icons"
          ></div>
        </button>`
    )} `
  }

  setTheme(theme: LuxTheme) {
    const event = new CustomEvent(`set-theme`, {
      bubbles: true,
      detail: theme,
    })
    this.dispatchEvent(event)
  }

  override createRenderRoot() {
    return this
  }
}
