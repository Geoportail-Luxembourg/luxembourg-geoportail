import { LuxTheme } from './theme.model'
import { BehaviorSubject, map } from 'rxjs'

export class ThemeService {
  themes$ = new BehaviorSubject<[]>([
    {
      name: 'main',
    },
    {
      name: 'tourisme',
    },
  ])
  currentTheme$ = new BehaviorSubject<LuxTheme>({
    name: 'main',
  })
  //FIXME: derive currentTheme$ from themes$
  // this.themes$.pipe(map(themes => themes['main']))
  constructor() {
    this.currentTheme$.subscribe(theme => this.setThemeStyles(theme.name))
  }
  setThemeStyles(themeName: string) {
    const root = document.querySelector(':root')
    const colors = ['primary', 'secondary', 'tertiary']
    colors.forEach(colorTone => {
      const color = getComputedStyle(root).getPropertyValue(
        `--${themeName}-${colorTone}`
      )
      root.style.setProperty(`--color-${colorTone}`, color)
    })
  }
  setCurrentTheme(theme: LuxTheme) {
    this.currentTheme$.next(theme)
  }
}

export const LuxThemeService = new ThemeService()
