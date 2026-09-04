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
}

export const storageLayerTreeMapper = new StorageLayerTreeMapper()
