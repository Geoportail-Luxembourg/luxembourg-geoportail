export class ThemeSelectorService {
  setCurrentThemeColors(themeName: string) {
    const root = document.querySelector(':root') as HTMLElement
    const colors = ['primary', 'secondary', 'tertiary', 'quaternary']
    colors.forEach(colorTone => {
      const color = getComputedStyle(root).getPropertyValue(
        `--${themeName}-${colorTone}`
      )
      root.style.setProperty(`--color-${colorTone}`, color)
    })
  }
}

export const themeSelectorService = new ThemeSelectorService()
