import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import type { LayerId } from '@/stores/map.store.model'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'

export const useLayerTreeStore = defineStore('layer-tree', () => {
  const expandedNodesOverrides: Ref<Record<string, boolean>> = ref({})
  const serverDefaults: Ref<Map<LayerId, boolean>> = ref(new Map())

  function captureServerDefaults(node: LayerTreeNodeModel) {
    serverDefaults.value.set(node.id, node.expanded)
    node.children?.forEach(captureServerDefaults)
  }

  function setExpanded(nodeId: LayerId, isExpanded: boolean) {
    const defaultExpanded = serverDefaults.value.get(nodeId) ?? false
    const key = String(nodeId)
    const current = expandedNodesOverrides.value
    if (isExpanded !== defaultExpanded) {
      expandedNodesOverrides.value = { ...current, [key]: isExpanded }
    } else if (key in current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [key]: _, ...rest } = current
      expandedNodesOverrides.value = rest
    }
  }

  return {
    expandedNodesOverrides,
    serverDefaults,
    setExpanded,
    captureServerDefaults,
  }
})
