import { ThemeNodeModel } from '@/composables/themes/themes.model'

export class StorageThemeMapper {
  themeToThemeName(theme: ThemeNodeModel | undefined) {
    return theme?.name || ''
  }
}

export const storageThemeMapper = new StorageThemeMapper()
