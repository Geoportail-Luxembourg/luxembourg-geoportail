import { LayerId } from '@/stores/map.store.model'
import BaseLayer from 'ol/layer/Base'

export const layersCache: Map<LayerId, BaseLayer> = new Map()

export function clearLayersCache() {
  layersCache.clear()
}
