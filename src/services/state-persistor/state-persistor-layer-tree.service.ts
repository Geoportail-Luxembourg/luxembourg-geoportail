import { useLayerTreeStore } from '@/stores/layer-tree.store'

import { SP_KEY_EXPANDED_NODES } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageLayerTreeMapper } from './state-persistor-layer-tree.mapper'

class StatePersistorLayerTreeService {
  bootstrap() {
    this.restore()
  }

  restore() {
    const store = useLayerTreeStore()
    const expandedNodes = storageHelper.getValue<Record<string, boolean>>(
      SP_KEY_EXPANDED_NODES,
      storageLayerTreeMapper.storageToExpandedNodes
    )

    if (Object.keys(expandedNodes).length > 0) {
      store.expandedNodes = expandedNodes
    }
  }
}

export const statePersistorLayerTreeService =
  new StatePersistorLayerTreeService()
