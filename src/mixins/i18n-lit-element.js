import i18next, { t as translate } from 'i18next'
import backend from 'i18next-http-backend';

export const i18nMixin = baseClass => class extends baseClass {
  firstUpdated() {
    i18next.on('initialized', options => {
      this.requestUpdate()
    })
    i18next.on('languageChanged', options => {
      this.requestUpdate()
    })
    if (!i18next.isInitialized) {
      i18next.use(backend)
      i18next.init({
        lng: 'fr',
        debug: true,
        defaultNS: 'app',
        supportedLngs: ['de', 'en', 'fr', 'lb'],
        ns: ['app'],
        fallbackLng: 'fr',
        backend: {
          loadPath: this.languageResources || '/assets/locales/{{ns}}.{{lng}}.json'
        }
      })
    }
    super.firstUpdated && super.firstUpdated()
  }

  changeLanguage(lang) {
    i18next.changeLanguage(lang)
  }
}

export {
  translate
}
