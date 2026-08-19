export class StorageLayerTreeMapper {
  expandedOverridesToStorage(overrides: Record<string, boolean>): string {
    return JSON.stringify(overrides)
  }

  storageToExpandedOverrides(json: string | null): Record<string, boolean> {
    if (!json) return {}
    try {
      const parsed = JSON.parse(json)
      if (typeof parsed === 'object' && parsed !== null) return parsed
    } catch {
      // malformed JSON — ignore
    }
    return {}
  }
}

export const storageLayerTreeMapper = new StorageLayerTreeMapper()
