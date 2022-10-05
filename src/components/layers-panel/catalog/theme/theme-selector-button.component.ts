import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LuxTheme } from './theme.model'

@customElement('lux-theme-selector-button')
export class ThemeSelectorButton extends LitElement {
  @property({ type: Object }) themes?: LuxTheme[]
  @property({ type: Object }) currentTheme?: LuxTheme

  render() {
    return html` <div
      class="flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary"
      @click=${this.toggleThemesGrid}
    >
      <span class="py-[2]">Theme: ${this.currentTheme?.name}</span>
      <a href="#" class="p-[2] shrink-0 flex flex-row text-[12px] bg-secondary">
        <span class="py-[3]">Changer</span>
        <span class="flex flex-row flex-wrap ml-1 w-12">
          ${this.themes?.map(
            theme =>
              html`<div
                class="h-[10] w-[10] m-[1] bg-${theme.name}-primary"
              ></div>`
          )}
        </span>
      </a>
    </div>`
  }

  toggleThemesGrid() {
    const event = new CustomEvent(`toggle-themes`, {
      bubbles: true,
    })
    this.dispatchEvent(event)
  }

  override createRenderRoot() {
    return this
  }
}
