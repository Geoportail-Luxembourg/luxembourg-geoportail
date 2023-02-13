import type { ConfigModel, ThemeNodeModel } from './themes.model'
import { themesApiFixture } from '@/__fixtures__/themes.api.fixture'
import { useThemeStore } from '@/stores/config.store'
import { LayerId } from '@/stores/map.store.model'

export default function useThemes() {
  function findById(
    id: LayerId,
    node?: ThemeNodeModel
  ): ThemeNodeModel | undefined {
    const { theme } = useThemeStore()

    node = node || theme
    if (node?.id === id) {
      return node
    } else if (node?.children) {
      for (const child of node.children) {
        const match = findById(id, child)
        if (match) {
          return match
        }
      }
    }
  }

  function findBgLayerById(id: LayerId) {
    const { bgLayers } = useThemeStore()

    return bgLayers.find(l => l.id === id)
  }

  function findBgLayerByName(name: string) {
    const { bgLayers } = useThemeStore()

    return bgLayers.find(l => l.name === name)
  }

  function setTheme(name: string) {
    const { setTheme } = useThemeStore()

    setTheme(name)
  }

  async function fetchThemes(): Promise<ConfigModel> {
    return new Promise(resolve => resolve(themesApiFixture()))
  }

  return {
    findById,
    findBgLayerById,
    findBgLayerByName,
    setTheme,
    fetchThemes,
  }
}
