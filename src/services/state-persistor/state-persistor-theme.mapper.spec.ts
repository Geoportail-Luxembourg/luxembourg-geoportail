import { createTestingPinia } from '@pinia/testing'

import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { storageThemeMapper } from './state-persistor-theme.mapper'

const useThemesMock = {
  findBgLayerByName: vi.fn(),
}

describe('StorageThemeMapper', () => {
  vi.mock('@/composables/themes/themes.composable', () => ({
    default: () => useThemesMock,
  }))

  createTestingPinia({
    stubActions: false,
  })

  describe('#themeToThemeName', () => {
    it('returns the theme name', () => {
      expect(
        storageThemeMapper.themeToThemeName({
          name: 'mytesttheme',
        } as ThemeNodeModel)
      ).toBe('mytesttheme')
      expect(storageThemeMapper.themeToThemeName(undefined)).toBe('')
    })
  })
  describe('#themeNameToTheme', () => {
    it('returns the theme entity', () => {
      storageThemeMapper.themeNameToTheme('mytesttheme')
      expect(useThemesMock.findBgLayerByName).toHaveBeenCalled()
    })
  })
})
