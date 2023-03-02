import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAppStore } from '@/stores/app.store'
import { SP_KEY_LANG, StatePersistorService } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'

class StatePersistorLangService implements StatePersistorService {
  bootstrap() {
    this.restore() // restore lang here (instead of inside watcher), otherwise i18next is not instanciated

    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persist()
      stop && stop() // test if exists, for HMR support
    })
  }

  persist() {
    const appStore = useAppStore()
    const { lang } = storeToRefs(appStore)

    watch(
      lang,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_LANG, value)

          const getHTMLTag = document.documentElement
          getHTMLTag.setAttribute('lang', value)
        }
      },
      { immediate: true }
    )
  }

  restore() {
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
