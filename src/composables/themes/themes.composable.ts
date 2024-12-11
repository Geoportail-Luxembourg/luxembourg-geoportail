import type { Metadata, ThemeNodeModel } from './themes.model'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import { LayerId } from '@/stores/map.store.model'
import { storeToRefs } from 'pinia'
import { DEFAULT_VIEW_ZOOM_MAX } from '@/composables/map/map.model'

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
    if ((id && node?.id === +id) || (name && node?.name === name)) {
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

  /**
   * Find layer in layers list or from background definition, or from 3d layers list
   * @param id The layer id
   * @returns The first layer (or bg layer, or 3d layer) with the given id
   */
  function findAnyLayerById(id: LayerId) {
    return findBgLayerById(+id) || findById(+id) || find3dLayerById(+id)
  }

  /**
   * Switch theme and set max zoom
   * @param name The theme's name eg. "main"
   */
  function setTheme(name: string) {
    const { setTheme } = useThemeStore()

    setTheme(name)
    setThemeZooms(name)
  }

  /**
   * Set the max zoom according to the theme's metadata resolutions (if any).
   * Only the max zoom is set, min zoom is by default always 8.
   * @param name The theme's name eg. "main"
   */
  function setThemeZooms(name: string) {
    // TODO: deactivate setThemeZooms in v3 and use this one instead
    const { maxZoom } = storeToRefs(useMapStore())
    const theme = findByName(name)
    const { resolutions } = <Metadata>theme?.metadata || {}

    maxZoom.value = resolutions ? resolutions.length + 7 : DEFAULT_VIEW_ZOOM_MAX
  }

  return {
    findById,
    findByName,
    find3dLayerById,
    findBgLayerById,
    findBgLayerByName,
    findAnyLayerById,
    setTheme,
  }
}
