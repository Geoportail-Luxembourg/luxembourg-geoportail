import type { ThemeNodeModel } from './themes.model'
import { useThemeStore } from '@/stores/config.store'
import { LayerId } from '@/stores/map.store.model'

export default function useThemes() {
  function findById(
    id: LayerId,
    node?: ThemeNodeModel
  ): ThemeNodeModel | undefined {
    return findByIdOrName(id, undefined, node)
  }

  function findByName(
    name: string,
    node?: ThemeNodeModel
  ): ThemeNodeModel | undefined {
    return findByIdOrName(undefined, name, node)
  }

  function findByIdOrName(
    id?: LayerId,
    name?: string,
    node?: ThemeNodeModel
  ): ThemeNodeModel | undefined {
    const { themes } = useThemeStore()

    node = node || themes?.find(theme => findByIdOrName(id, name, theme))
    if ((id && node?.id === id) || (name && node?.name === name)) {
      return node
    } else if (node?.children) {
      for (const child of node.children) {
        const match = findByIdOrName(id, name, child)
        if (match) {
          return match
        }
      }
    }
  }

  function find3dLayerById(id: LayerId) {
    const { layerTrees_3d } = useThemeStore()
    return findByIdOrName(id, undefined, layerTrees_3d)
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

  return {
    findById,
    findByName,
    find3dLayerById,
    findBgLayerById,
    findBgLayerByName,
    setTheme,
  }
}
