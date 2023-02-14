import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
import { SP_KEY_LANG } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'

class StatePersistorLangService {
  bootstrapLang() {
    this.restoreLang() // restore lang here (instead of inside watcher), otherwise i18next is not instanciated

    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persistLang()
      stop && stop() // test if exists, for HMR support
    })
  }

  persistLang() {
    const appStore = useAppStore()
    const { lang } = storeToRefs(appStore)

    watch(
      lang,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_LANG, value)
        }
      },
      { immediate: true }
    )
  }

  restoreLang() {
    const lang = <string | null | undefined>storageHelper.getValue(SP_KEY_LANG)

    if (lang) {
      const { setLang } = useAppStore()
      const { i18next } = useTranslation()
      i18next.changeLanguage(lang)
      setLang(lang)
    }
  }
}

export const statePersistorLangService = new StatePersistorLangService()
