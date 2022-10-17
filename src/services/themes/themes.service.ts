import { BehaviorSubject, combineLatest, filter, from, map, tap } from 'rxjs'
import { themesApi } from './themes.api'
import { ThemeNodeModel } from './themes.model'

export class ThemesService {
  private theme: ThemeNodeModel
  private bgLayers: ThemeNodeModel[]

  config$ = from(themesApi.fetchThemes())
  bgLayers$ = this.config$.pipe(
    map(config => config),
    filter(config => !!config),
    map(config => config?.background_layers),
    tap(bgLayers => this.bgLayers = bgLayers as ThemeNodeModel[])
  )
  themes$ = this.config$.pipe(map(config => config?.themes))
  themeName$ = new BehaviorSubject('main')
  theme$ = combineLatest([this.themes$, this.themeName$]).pipe(
    map(([themes, themeName]) =>
      themes.find(theme => theme.name === themeName)
    ),
    filter(theme => !!theme),
    tap(theme => (this.theme = theme as ThemeNodeModel))
  )

  findById(id: number, node?: ThemeNodeModel): ThemeNodeModel | undefined {
    node = node || this.theme
    if (node.id === id) {
      return node
    } else if (node.children) {
      for (const child of node.children) {
        const match = this.findById(id, child)
        if (match) {
          return match
        }
      }
    }
  }

  findBgLayerById(id: number) {
    return this.bgLayers.find(l => l.id === id)
  }

  setTheme(name: string) {
    this.themeName$.next(name)
  }
}

export const themesService = new ThemesService()
