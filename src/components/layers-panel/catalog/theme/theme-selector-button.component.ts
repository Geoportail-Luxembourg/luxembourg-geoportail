import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeNodeModel } from '../../../../services/themes/themes.model'
import i18next from 'i18next'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'

@customElement('lux-theme-selector-button')
export class ThemeSelectorButton extends i18nMixin(LitElement) {
  @property({ type: Object }) themes?: ThemeNodeModel[]
  @property({ type: Object }) currentTheme?: ThemeNodeModel

  render() {
    return html` <div
      class="flex flex-row justify-between bg-tertiary text-white px-2 py-1.5 uppercase cursor-pointer hover:bg-white hover:text-primary"
    >
      <span class="py-0.5"
        >${i18next.t('Theme')}: ${i18next.t(`${this.currentTheme?.name}`)}</span
      >
      <button
        href=""
        class="p-0.5 shrink-0 flex flex-row text-[12px] bg-secondary text-white"
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
      </button>
    </div>`
  }

  override createRenderRoot() {
    return this
  }
}
