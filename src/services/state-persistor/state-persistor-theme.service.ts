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
      // After login, when loadThemes() is called again, setThemeZooms must be
      // called again to update the zoom constraints for the newly accessible theme.
      const checkThemes = (themes: typeof themeStore.themes) => {
        if (!themes) return false

        const themeData = themes.find(t => t.name === theme)
        if (themeData) {
          useThemes().setThemeZooms(themeData.name)
          return true
        } else {
          // Theme not found in available themes → user must log in
          useAppStore().toggleAuthFormOpen(true)
          return false
        }
      }

      // Themes may already be loaded (e.g. HMR), handle immediately if so
      checkThemes(themeStore.themes)

      // Watch for themes reload (e.g. after login) to update zoom constraints
      // Keep the watcher active to handle cases where a private theme becomes
      // accessible after authentication
      watch(
        () => themeStore.themes,
        themes => {
          checkThemes(themes)
        }
      )
    }
  }
}

export const statePersistorThemeService = new StatePersistorThemeService()
