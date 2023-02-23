import { watch, watchEffect, WatchStopHandle } from 'vue'

import { useThemeStore } from '@/stores/config.store'

import { SP_KEY_THEME } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageThemeMapper } from './state-persistor-theme.mapper'

class StatePersistorThemeService {
  bootstrap() {
    this.restore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persist()
      stop && stop() // test if exists, for HMR support
    })
  }

  persist() {
    const themeStore = useThemeStore()

    watch(
      () => themeStore.theme,
      (value, oldValue) => {
        if (oldValue !== value && value) {
          storageHelper.setValue(
            SP_KEY_THEME,
            value,
            storageThemeMapper.themeToThemeName
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const theme = <string | null | undefined>(
      storageHelper.getValue(SP_KEY_THEME)
    )

    if (theme) {
      const { setTheme } = useThemeStore()
      setTheme(theme)
    }
  }
}

export const statePersistorThemeService = new StatePersistorThemeService()
