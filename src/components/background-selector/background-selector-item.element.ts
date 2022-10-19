import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { i18nMixin } from '../../mixins/i18n-lit-element'

@customElement('lux-background-selector-item')
export class BackGroundSelectorItemElement extends i18nMixin(LitElement) {
  @property() bgTitle = ''
  @property() bgName = ''

  constructor() {
    super()
  }

  render() {
    // prettier-ignore
    return html`<button title="${this.bgTitle}${this.bgTitle.length>0?'\n':''}Background layer: ${this.bgName}"
      class="${`h-full w-full rounded-sm lux-bg-sel-icon-bg-length bg-white ` +
               `bg-${this.bgName}_sm md:bg-${this.bgName} hd:bg-${this.bgName}_sm_hi hd_md:bg-${this.bgName}_hi`}"
    />`
  }
  createRenderRoot() {
    // no shadow dom
    return this
  }
}
