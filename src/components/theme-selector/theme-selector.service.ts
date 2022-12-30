import { ThemeNodeModel } from '@/composables/themes/themes.model'

export class ThemeSelectorService {
  setCurrentThemeColors(theme: ThemeNodeModel) {
    const root = document.querySelector(':root') as HTMLElement
    const colors = ['primary', 'secondary', 'tertiary']
    colors.forEach(colorTone => {
      const color = getComputedStyle(root).getPropertyValue(
        `--${theme.name}-${colorTone}`
      )
      root.style.setProperty(`--color-${colorTone}`, color)
    })
  }
}

export const themeSelectorService = new ThemeSelectorService()
