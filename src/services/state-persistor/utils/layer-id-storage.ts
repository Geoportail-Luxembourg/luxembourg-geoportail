import { LayerId } from '@/stores/map.store.model'

/**
 * String layer ids may contain dashes (uuid, remote layer names).
 * Persisted list is joined with "-": encode dashes as %2D first.
 */
export function encodeLayerIdForStorage(id: LayerId): string {
  return String(id).split('-').join('%2D')
}

export function decodeLayerIdFromStorage(id: string): string {
  return id.split('%2D').join('-')
}
