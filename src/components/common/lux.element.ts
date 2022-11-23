import { LitElement } from 'lit'
import { i18nMixin } from '../../mixins/i18n-lit-element'
import { SubscribableMixin } from '../../mixins/subscribable'

export default class LuxElement extends SubscribableMixin(
  i18nMixin(LitElement)
) {
  constructor() {
    super()
  }
}
