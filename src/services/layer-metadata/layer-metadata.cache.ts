import { LayerId } from '@/stores/map.store.model'
import { LayerMetadataModel } from './layer-metadata.model'

/**
 * Stores Promises for layers metadata (also containing get legend),
 * if any changes in language selection, the cache must be invalidated (use: layersMetadataCache.clear())
 * to perform a new GET request and store new Promises.
 * @see /src/components/header-bar/language-selector.vue
 */
export const layersMetadataCache: Map<
  LayerId,
  Promise<LayerMetadataModel>
> = new Map()
