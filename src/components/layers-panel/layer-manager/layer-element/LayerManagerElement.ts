import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'
import { Layer } from '../../../../state/map/map.state.model'
import { property } from 'lit/decorators.js'
import i18next from 'i18next'

@customElement('lux-layer-manager-element')
export class LayerManagerElement extends i18nMixin(LitElement) {
  @property()
  private layer: Layer

  @property()
  private draggableClassName: string

  @property()
  private prevOpacity: number

  @property()
  private opacity = 100

  @state()
  private isOpen = false

  constructor() {
    super()
  }

  private getLabel() {
    return i18next.t(this.layer.name, { ns: 'client' })
  }

  render(): TemplateResult {
    return html`
      <li class="lux-layer-manager-item flex item relative">
        <button
          class="fa-solid fa-bars ${this.draggableClassName} cursor-move"
        ></button>
        <button class="fa-solid fa-info"></button>
        <button
          for="faq-${this.layer.id}"
          class="cursor-pointer grow text-left"
          tabindex="0"
          @click="${this.onClickToggle}"
        >
          ${this.getLabel()}
        </button>
        <button
          class="w-3.5 fa-solid ${this.isOpen ? 'fa-xmark' : 'fa-ellipsis'}"
          @click="${this.onClickToggle}"
        ></button>
        <button
          class="fa-solid fa-trash"
          title="${i18next.t('Remove layer "{{layerName}}"', {
            ns: 'client',
            layerName: this.getLabel(),
          })}"
          @click="${this.onClickRemove}"
        ></button>
        <div
          class="lux-layer-manager-item-content ${this.isOpen
            ? 'max-h-96'
            : 'max-h-0'}"
        >
          <button
            title="${i18next.t('Toggle layer opacity', { ns: 'client' })}"
            class="w-5 ${this.opacity === 0
              ? 'fa-eye-slash'
              : 'fa-eye'} fa-solid "
            @click="${this.onToggleVisibility}"
          ></button>
          <input
            id="steps-range"
            type="range"
            min="0"
            max="100"
            .value="${this.opacity}"
            step="25"
            @change=${this.onChangeOpacity}
            class="m-2.5 w-16 h-[5px] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </li>
    `
  }

  onClickToggle() {
    this.isOpen = !this.isOpen

    this.dispatchEvent(
      new CustomEvent('clickToggle', {
        detail: {
          value: this.layer.id,
        },
      })
    )
  }

  onClickRemove() {
    this.dispatchEvent(
      new CustomEvent('clickRemove', {
        detail: {
          value: this.layer.id,
        },
      })
    )
  }

  onToggleVisibility = () => {
    if (this.opacity === 0) {
      this.opacity = this.prevOpacity
    } else {
      this.prevOpacity = this.opacity
      this.opacity = 0
    }

    this.dispatchChangeOpacity()
  }

  onChangeOpacity = (event: Event) => {
    if (event.target) {
      this.opacity = parseInt((event.target as HTMLInputElement).value)

      this.dispatchChangeOpacity()
    }
  }

  dispatchChangeOpacity = () => {
    this.dispatchEvent(
      new CustomEvent('changeOpacity', {
        detail: {
          id: this.layer.id,
          opacity: this.opacity,
        },
      })
    )
  }

  override createRenderRoot() {
    return this
  }
}
