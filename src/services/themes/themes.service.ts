import type { ThemeNodeModel } from './themes.model'
import { useThemeStore } from '@/stores/config.store'

export class ThemesService {
  findById(id: number, node?: ThemeNodeModel): ThemeNodeModel | undefined {
    const { theme } = useThemeStore()

    node = node || theme
    if (node?.id === id) {
      return node
    } else if (node?.children) {
      for (const child of node.children) {
        const match = this.findById(id, child)
        if (match) {
          return match
        }
      }
    }
  }

  findBgLayerById(id: number) {
    const { bgLayers } = useThemeStore()

    return bgLayers.find(l => l.id === id)
  }

  setTheme(name: string) {
    const { setTheme } = useThemeStore()

    setTheme(name)
  }
}

export const themesService = new ThemesService()
