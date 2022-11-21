import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import i18next from 'i18next'
import LuxElement from '../common/base.element'

@customElement('lux-theme-selector-button')
export class ThemeSelectorButtonElement extends LuxElement {
  @property({ type: Object }) themes?: ThemeNodeModel[]
  @property({ type: Object }) currentTheme?: ThemeNodeModel
  @property({ type: Boolean }) isOpen?: boolean

  render() {
    return html` <button
      class="w-full flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary"
      aria-expanded="${this.isOpen}"
    >
      <span class="py-0.5"
        >${i18next.t('Theme')}: ${i18next.t(`${this.currentTheme?.name}`)}</span
      >
      <span
        class="px-1 py-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white"
      >
        <span class="py-[3]">${i18next.t('Changer')}</span>
        <span class="flex flex-row flex-wrap ml-1 w-12">
          ${this.themes
            ?.slice(0, 8)
            .map(
              theme =>
                html`<div
                  class="h-2.5 w-2.5 m-px bg-${theme.name}-primary"
                ></div>`
            )}
        </span>
      </span>
    </button>`
  }

  override createRenderRoot() {
    return this
  }
}
