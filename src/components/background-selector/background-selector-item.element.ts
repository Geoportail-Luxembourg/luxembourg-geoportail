import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import i18next from 'i18next'
import { i18nMixin } from '../../mixins/i18n-lit-element'

@customElement('lux-background-selector-item')
export class BackGroundSelectorItemElement extends i18nMixin(LitElement) {
  @property() bgTitle = ''
  @property() bgName = ''

  constructor() {
    super()
  }

  render() {
    const localizedTitle = i18next.t(this.bgTitle)
    const hasTitle = this.bgTitle.length > 0
    const localizedLayerName = `${i18next.t('Background layer')}: ${i18next.t(
      this.bgName
    )}`
    const buttonTitle = `${localizedTitle}${
      hasTitle ? '\n' : ''
    }${localizedLayerName}`
    let buttonClasses = 'h-full w-full rounded-sm lux-bg-sel-icon '
    buttonClasses += `lux-bg-sel-${this.bgName} `
    buttonClasses += `bg-${this.bgName}_sm `
    buttonClasses += `md:bg-${this.bgName} `
    buttonClasses += `hd:bg-${this.bgName}_sm_hi `
    buttonClasses += `hd_md:bg-${this.bgName}_hi `

    return html`<button title="${buttonTitle}" class="${buttonClasses}" />`
  }
  createRenderRoot() {
    // no shadow dom
    return this
  }
}
