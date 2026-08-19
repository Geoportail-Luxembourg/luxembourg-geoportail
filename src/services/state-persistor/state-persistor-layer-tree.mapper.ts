export class StorageLayerTreeMapper {
  /**
   * Encode overrides to compact format: "~456,123,789"
   * IDs with ~ prefix are collapsed, others are expanded.
   */
  expandedOverridesToStorage(overrides: Record<string, boolean>): string {
    const parts: string[] = []
    for (const [id, expanded] of Object.entries(overrides)) {
      parts.push(expanded ? id : `~${id}`)
    }
    return parts.join(',')
  }

  /**
   * Decode compact format back to overrides object.
   * "~456" = collapsed, "123" = expanded.
   */
  storageToExpandedOverrides(value: string | null): Record<string, boolean> {
    if (!value) return {}

    const overrides: Record<string, boolean> = {}
    for (const token of value.split(',')) {
      if (!token) continue
      if (token.startsWith('~')) {
        overrides[token.slice(1)] = false
      } else {
        overrides[token] = true
      }
    }
    return overrides
  }
}

export const storageLayerTreeMapper = new StorageLayerTreeMapper()
