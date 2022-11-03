/* eslint-disable @typescript-eslint/no-var-requires */
import {
  LitElement,
  TemplateResult,
  html,
  css,
  CSSResult,
  unsafeCSS,
} from 'lit'
import { property, customElement } from 'lit/decorators'
import cssText from 'bundle-text:./../../styles/tailwind.global.css'

@customElement('lux-modal')
export class Modal extends LitElement {
  @property() private isOpen: boolean

  static globalStyle: CSSResult = css`
    ${unsafeCSS(cssText)}
  `

  static styles: CSSResult[] = [Modal.globalStyle]

  render(): TemplateResult {
    return html`
      <div class="lux-modal" role="dialog">
        <div class="lux-modal-header">
          <slot name="lux-modal-header"></slot>
        </div>
        <div class="lux-modal-body">
          <slot name="lux-modal-body"></slot>
        </div>
        <div class="lux-modal-footer">
          <slot name="lux-modal-footer"></slot>
        </div>
      </div>
    `
  }
}
