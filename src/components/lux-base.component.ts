import { LitElement } from 'lit'
import i18next from 'i18next'

export class LuxBase extends LitElement {
  private i18nLanguageChangedCallback_: any
  connectedCallback() {
    this.i18nLanguageChangedCallback_ = () => this.requestUpdate()
    i18next.on('languageChanged', this.i18nLanguageChangedCallback_)
    super.connectedCallback()
  }

  disconnectedCallback() {
    i18next.off('languageChanged', this.i18nLanguageChangedCallback_)
    super.disconnectedCallback()
  }
}
