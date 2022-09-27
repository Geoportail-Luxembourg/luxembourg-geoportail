import { LuxTheme } from './theme.model'
import { BehaviorSubject } from 'rxjs'

export class ThemeService {
  themes = [
    {
      name: 'main',
      // primary: '#2980b9',
      // secondary: '#97bbd3',
      // tertiary: '#1f5d87',
    },
    {
      name: 'tourisme',
      // primary: '#e84c3d',
      // secondary: '#e88c83',
      // tertiary: '#a50f15',
    },
    {
      name: 'environnement',
      // primary: '#558b2f',
      // secondary: '#85bb5c',
      // tertiary: '#255d00',
    },
    {
      name: 'eau',
      // primary: '#03a2ac',
      // secondary: '#45cdd6',
      // tertiary: '#078f98',
    },
  ]
  themes$ = new BehaviorSubject<LuxTheme[]>(this.themes)
  currentTheme$ = new BehaviorSubject<LuxTheme>(this.themes[0])

  constructor() {
    // this.initAllThemeColors()
    this.currentTheme$.subscribe(theme => this.setCurrentThemeColors(theme))
  }
  // initAllThemeColors() {
  //   const root = document.querySelector(':root')
  //   const colors = ['primary', 'secondary', 'tertiary']
  //   this.themes.forEach(theme => {
  //     colors.forEach(colorTone => {
  //       root.style.setProperty(`--${theme.name}-${colorTone}`, theme[colorTone])
  //     })
  //   })
  // }
  // setCurrentThemeColors(theme: LuxTheme) {
  //   const root = document.querySelector(':root')
  //   const colors = ['primary', 'secondary', 'tertiary']
  //   colors.forEach(colorTone => {
  //     root.style.setProperty(`--color-${colorTone}`, theme[colorTone])
  //   })
  // }
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
