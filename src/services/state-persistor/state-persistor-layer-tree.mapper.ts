import type { LayerId } from '@/stores/map.store.model'

export class StorageLayerTreeMapper {
  /**
   * Encode expanded nodes to compact format: "-456,123,789"
   * IDs with - prefix are collapsed, others are expanded.
   */
  expandedNodesToStorage(
    expandedNodes: Record<string, boolean> | undefined | null
  ): string {
    if (!expandedNodes) return ''
    const parts: string[] = []
    for (const [id, expanded] of Object.entries(expandedNodes)) {
      parts.push(expanded ? id : `-${id}`)
    }
    return parts.join(',')
  }

  /**
   * Decode compact format back to expanded nodes object.
   * "-456" = collapsed, "123" = expanded.
   */
  storageToExpandedNodes(value: string | null): Record<string, boolean> {
    if (!value) return {}

    const expandedNodes: Record<string, boolean> = {}
    for (const token of value.split(',')) {
      if (!token) continue
      if (token.startsWith('-')) {
        expandedNodes[token.slice(1)] = false
      } else {
        expandedNodes[token] = true
      }
    }
    return expandedNodes
  }

  favouritesToStorage(ids: LayerId[] | undefined | null): string {
    return JSON.stringify(ids ?? [])
  }

  storageToFavourites(value: string | null): LayerId[] {
    if (!value) return []

    try {
      const parsed = JSON.parse(value)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }
}

export const storageLayerTreeMapper = new StorageLayerTreeMapper()
