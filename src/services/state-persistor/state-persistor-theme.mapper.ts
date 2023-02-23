import { ThemeNodeModel } from '@/composables/themes/themes.model'
import useThemes from '@/composables/themes/themes.composable'

export class StorageThemeMapper {
  themeToThemeName(theme: ThemeNodeModel | undefined) {
    return theme?.name || ''
  }

  themeNameToTheme(themeName: string) {
    const themes = useThemes()
    return themes.findBgLayerByName(themeName)
  }
}

export const storageThemeMapper = new StorageThemeMapper()
