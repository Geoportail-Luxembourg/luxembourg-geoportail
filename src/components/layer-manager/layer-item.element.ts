import i18next from 'i18next'
import { property } from 'lit/decorators'
import { Layer } from '../../states/map/map.state.model'
import LuxElement from '../common/base.element'

export abstract class LayerItemElement<T = any> extends LuxElement {
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
