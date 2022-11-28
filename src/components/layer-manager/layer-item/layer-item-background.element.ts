import { html, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators'
import i18next from 'i18next'
import { LayerItemElement } from '../layer-manager-item.element'

@customElement('lux-layer-manager-background-element')
export class LayerManagerElement extends LayerItemElement {
  @property()
  protected showEditButton: boolean

  constructor() {
    super()
  }

  onclickEdit() {
    this.dispatchCustomEvent('clickEdit')
  }

  render(): TemplateResult {
    return html`
      <div class="lux-layer-manager-item mt-2.5">
        <button
          class="fa fa-info w-3"
          title="${i18next.t('Display informations for "{{layerName}}"', {
            ns: 'client',
            layerName: this.getLabel(),
          })}"
          @click="${this.onClickInfo}"
        ></button>
        <span class="flex-1 text-left cursor-default">${this.getLabel()}</span>
        ${this.showEditButton
          ? html` <button
              class="fa fa-pencil"
              title="${i18next.t('Open editor panel', { ns: 'client' })}"
              @click="${this.onclickEdit}"
            ></button>`
          : html``}
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
