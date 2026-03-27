import { watch, watchEffect, WatchStopHandle } from 'vue'

import { useThemeStore } from '@/stores/config.store'
import { useAppStore } from '@/stores/app.store'
import useThemes from '@/composables/themes/themes.composable'

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
    const theme = <string | undefined>storageHelper.getValue(SP_KEY_THEME)

    if (theme) {
      const themeStore = useThemeStore()
      themeStore.setTheme(theme)

      // When opening a direct link, the themes config is not loaded yet when
      // restore() is called, so setThemeZooms cannot find the theme metadata.
      // Watch for the theme object (populated once loadThemes() completes) and
      // apply the zoom constraints as soon as the data is available.
      // Also, if the theme is not found in the available themes (e.g. it is a
      // private theme accessible only after login), open the auth form so the
      // user can authenticate and get access to it.
      const checkThemes = (themes: typeof themeStore.themes) => {
        if (!themes) return false

        const themeData = themes.find(t => t.name === theme)
        if (themeData) {
          useThemes().setThemeZooms(themeData.name)
        } else {
          // Theme not found in available themes → user must log in
          useAppStore().toggleAuthFormOpen(true)
        }
        return true
      }

      // Themes may already be loaded (e.g. HMR), handle immediately if so
      if (!checkThemes(themeStore.themes)) {
        // Otherwise wait for themes to load
        const stopWatch = watch(
          () => themeStore.themes,
          themes => {
            if (checkThemes(themes)) stopWatch()
          }
        )
      }
    }
  }
}

export const statePersistorThemeService = new StatePersistorThemeService()
