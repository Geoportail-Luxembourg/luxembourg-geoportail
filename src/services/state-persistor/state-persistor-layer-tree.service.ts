import { watch, WatchStopHandle } from 'vue'

import { useLayerTreeStore } from '@/stores/layer-tree.store'

import { SP_KEY_EXPANDED_NODES } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageLayerTreeMapper } from './state-persistor-layer-tree.mapper'

export function computeOverrides(
  tree: { expanded: boolean; id: string | number; children?: unknown[] },
  serverDefaults: Map<string | number, boolean>
): Record<string, boolean> {
  const overrides: Record<string, boolean> = {}

  const walk = (node: {
    expanded: boolean
    id: string | number
    children?: unknown[]
  }) => {
    const defaultExpanded = serverDefaults.get(node.id) ?? false
    if (node.expanded !== defaultExpanded) {
      overrides[String(node.id)] = node.expanded
    }
    node.children?.forEach(walk as (child: unknown) => void)
  }

  walk(tree)
  return overrides
}

class StatePersistorLayerTreeService {
  private stopHandle: WatchStopHandle | undefined

  bootstrap() {
    this.restore()
    this.persist()
  }

  persist() {
    if (this.stopHandle) {
      this.stopHandle()
    }

    this.stopHandle = watch(
      () => {
        const store = useLayerTreeStore()
        const overrides = store.expandedNodesOverrides
        return overrides
      },
      overrides => {
        if (Object.keys(overrides).length > 0) {
          storageHelper.setValue(
            SP_KEY_EXPANDED_NODES,
            overrides,
            storageLayerTreeMapper.expandedOverridesToStorage
          )
        } else {
          storageHelper.removeItem(SP_KEY_EXPANDED_NODES)
        }
      },
      { deep: true, immediate: true }
    )
  }

  restore() {
    const store = useLayerTreeStore()
    const overrides = storageHelper.getValue<Record<string, boolean>>(
      SP_KEY_EXPANDED_NODES,
      storageLayerTreeMapper.storageToExpandedOverrides
    )

    if (Object.keys(overrides).length > 0) {
      store.expandedNodesOverrides = overrides
    }
  }
}

export const statePersistorLayerTreeService =
  new StatePersistorLayerTreeService()
