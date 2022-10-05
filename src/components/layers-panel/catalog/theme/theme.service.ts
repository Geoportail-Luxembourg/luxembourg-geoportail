import { LuxTheme } from './theme.model'
import { BehaviorSubject } from 'rxjs'

export class ThemeService {
  themes = [
    {
      name: 'main',
    },
    {
      name: 'tourisme',
    },
    {
      name: 'environnement',
    },
    {
      name: 'eau',
    },
  ]
  themes$ = new BehaviorSubject<LuxTheme[]>(this.themes)
  currentTheme$ = new BehaviorSubject<LuxTheme>(this.themes[0])

  constructor() {
    this.currentTheme$.subscribe(theme => this.setCurrentThemeColors(theme))
  }

  setCurrentThemeColors(theme: LuxTheme) {
    const root = document.querySelector(':root') as HTMLElement
    const colors = ['primary', 'secondary', 'tertiary']
    colors.forEach(colorTone => {
      const color = getComputedStyle(root).getPropertyValue(
        `--${theme.name}-${colorTone}`
      )
      root.style.setProperty(`--color-${colorTone}`, color)
    })
  }
  setCurrentTheme(theme: LuxTheme) {
    this.currentTheme$.next(theme)
  }
}

export const LuxThemeService = new ThemeService()
