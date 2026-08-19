import { defineStore } from 'pinia'
import { Ref, ShallowRef, shallowRef, ref } from 'vue'
import type { LayerId } from '@/stores/map.store.model'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerTreeService } from '@/components/layer-tree/layer-tree.service'

export const useLayerTreeStore = defineStore('layer-tree', () => {
  const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
  const layerTree3d: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
  const expandedNodesOverrides: Ref<Record<string, boolean>> = ref({})
  const serverDefaults: Ref<Map<LayerId, boolean>> = ref(new Map())

  const setLayerTree = (tree: LayerTreeNodeModel | undefined) =>
    (layerTree.value = tree)

  const setLayerTree3d = (tree: LayerTreeNodeModel | undefined) =>
    (layerTree3d.value = tree)

  function captureServerDefaults(node: LayerTreeNodeModel) {
    serverDefaults.value.set(node.id, node.expanded)
    node.children?.forEach(captureServerDefaults)
  }

  const toggleParentNode = (nodeId: LayerId, is3d: boolean) => {
    const tree = is3d ? layerTree3d.value : layerTree.value
    if (!tree) return

    const updated = layerTreeService.toggleNode(nodeId, tree, 'expanded')
    if (is3d) {
      layerTree3d.value = updated
    } else {
      layerTree.value = updated
    }

    const findNode = (n: LayerTreeNodeModel): LayerTreeNodeModel | undefined =>
      n.id === nodeId ? n : n.children?.find(findNode)
    const toggledNode = findNode(updated)
    if (!toggledNode) return

    const defaultExpanded = serverDefaults.value.get(nodeId) ?? false
    if (toggledNode.expanded !== defaultExpanded) {
      expandedNodesOverrides.value = {
        ...expandedNodesOverrides.value,
        [String(nodeId)]: toggledNode.expanded,
      }
    } else {
      expandedNodesOverrides.value = Object.fromEntries(
        Object.entries(expandedNodesOverrides.value).filter(
          ([key]) => key !== String(nodeId)
        )
      )
    }
  }

  const applyOverrides = (tree: LayerTreeNodeModel): LayerTreeNodeModel => {
    const overrides = expandedNodesOverrides.value

    const apply = (node: LayerTreeNodeModel): LayerTreeNodeModel => {
      const override = overrides[String(node.id)]
      const newNode = { ...node }
      if (override !== undefined) {
        newNode.expanded = override
      }
      if (newNode.children) {
        newNode.children = newNode.children.map(apply)
      }
      return newNode
    }

    return apply(tree)
  }

  return {
    layerTree,
    layerTree3d,
    expandedNodesOverrides,
    serverDefaults,
    setLayerTree,
    setLayerTree3d,
    toggleParentNode,
    captureServerDefaults,
    applyOverrides,
  }
})
