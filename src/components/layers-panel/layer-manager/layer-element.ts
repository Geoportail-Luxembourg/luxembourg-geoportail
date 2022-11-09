import i18next from 'i18next'
import { LitElement } from 'lit'
import { property } from 'lit/decorators'
import { i18nMixin } from '../../../mixins/i18n-lit-element'
import { Layer } from '../../../state/map/map.state.model'

export abstract class LayerElement<T = any> extends i18nMixin(LitElement) {
  @property()
  protected layer: Layer

  protected getLabel() {
    return i18next.t(this.layer.name, { ns: 'client' })
  }

  protected onClickInfo() {
    this.dispatchCustomEvent('clickInfo')
  }

  dispatchCustomEvent(eventName: string, detail?: T) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          layer: this.layer,
          ...detail,
        },
      })
    )
  }
}
