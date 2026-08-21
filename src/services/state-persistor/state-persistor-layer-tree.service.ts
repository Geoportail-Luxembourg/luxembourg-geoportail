import { watch, watchEffect, WatchStopHandle } from 'vue'

import { useLayerTreeStore } from '@/stores/layer-tree.store'

import { SP_KEY_EXPANDED_NODES } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageLayerTreeMapper } from './state-persistor-layer-tree.mapper'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'

export function computeOverrides(
  tree: LayerTreeNodeModel,
  serverDefaults: Map<string | number, boolean>
): Record<string, boolean> {
  const overrides: Record<string, boolean> = {}

  const walk = (node: LayerTreeNodeModel) => {
    const defaultExpanded = serverDefaults.get(node.id) ?? false
    if (node.expanded !== defaultExpanded) {
      overrides[String(node.id)] = node.expanded
    }
    node.children?.forEach(walk)
  }

  walk(tree)
  return overrides
}

class StatePersistorLayerTreeService {
  bootstrap() {
    this.restore()

    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persist()
      stop && stop() // test if exists, for HMR support
    })
  }

  persist() {
    const store = useLayerTreeStore()

    watch(
      () => store.layerTree,
      tree => {
        if (!tree) return
        const defaults = store.serverDefaults
        const overrides = computeOverrides(tree, defaults)
        if (store.layerTree3d) {
          const overrides3d = computeOverrides(store.layerTree3d, defaults)
          Object.assign(overrides, overrides3d)
        }
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
