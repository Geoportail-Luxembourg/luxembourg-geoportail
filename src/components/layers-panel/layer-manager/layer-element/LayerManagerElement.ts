import { css, html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators'
import { Subscription } from 'rxjs'
import { themesService } from '../../../../services/themes/themes.service'
import { mapState } from '../../../../state/map/map.state'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'
import { layerTreeState } from '../../catalog/layer-tree/layer-tree.service'
import { LayerTreeNodeModel } from '../../catalog/layer-tree/layer-tree.model'
import { Layer } from '../../../../state/map/map.state.model'
import { property } from 'lit/decorators.js'

@customElement('lux-layer-manager-element')
export class LayerManagerElement extends i18nMixin(LitElement) {
  @property()
  private layer: Layer

  @property()
  private updateLayerOpacity: Function

  @property()
  private prevOpacity: number

  @property()
  private opacity = 100

  constructor() {
    super()
  }

  render(): TemplateResult {
    return html`
      <li class="lux-layer-manager-item flex item relative">
        <!-- wrap is important here -->
        <input type="checkbox" id="faq1" class="peer appearance-none hidden" />
        <a class="fa-solid fa-bars flex-none drag-handle"></a>
        <a class="fa-solid fa-info flex-none"></a>
        <label for="faq1" class="cursor-pointer grow">
          ${this.layer.name}
          <!-- note: grow is used to fill all remaining space of the article -->
        </label>
        <label
          for="faq1"
          class="flex-none invisible fa-solid fa-xmark peer-checked:visible cursor-pointer"
        ></label>
        <label
          for="faq1"
          class="flex-none fa-solid fa-ellipsis peer-checked:hidden cursor-pointer"
        ></label>
        <span
          class="fa-solid fa-trash flex-none"
          @click="${this.removeLayer()}"
        ></span>
        <!-- note: checkbox will be triggered even if label is triggered. -->
        <div class="content">
          <!-- note: basis may not work without wrap -->
          <span
            class="${this.opacity === 0
              ? 'fa-eye-slash'
              : 'fa-eye'} fa-solid flex-none"
            @click="${this.setLayerInvisible}"
          ></span>
          <input
            id="steps-range"
            type="range"
            min="0"
            max="100"
            .value="${this.opacity}"
            step="25"
            @change=${this._updateOpacityValue}
            class="w-1/2 h-2 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </li>
    `
  }

  removeLayer() {}

  setLayerInvisible() {
    console.log('Set invisible')
    if (this.opacity === 0) {
      this.opacity = this.prevOpacity
    } else {
      this.prevOpacity = this.opacity
      this.opacity = 0
    }
  }

  _updateOpacityValue(e: Event) {
    if (e.target) {
      const target = e.target as HTMLTextAreaElement
      this.opacity = parseInt(target.value)
    }
    this.updateLayerOpacity(this.layer.id, this.opacity)
  }
  override createRenderRoot() {
    return this
  }
}
