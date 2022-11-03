/* eslint-disable @typescript-eslint/no-var-requires */
import { LitElement, TemplateResult, html } from 'lit'
import { property, customElement } from 'lit/decorators'
import { StylesMixin } from '../../mixins/styles-lit-element'

@customElement('lux-modal')
export class Modal extends StylesMixin(LitElement) {
  @property() private isOpen: boolean

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
