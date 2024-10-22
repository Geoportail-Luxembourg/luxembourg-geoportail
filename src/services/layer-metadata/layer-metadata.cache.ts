import { LayerId } from '@/stores/map.store.model'
import { LayerMetadataModel } from './layer-metadata.model'

export const layersMetadataCache: Map<
  LayerId,
  Promise<LayerMetadataModel>
> = new Map()

export function clearLayersMetadataCache() {
  layersMetadataCache.clear()
}
