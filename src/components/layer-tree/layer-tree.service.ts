import type { Layer, LayerId } from '@/stores/map.store.model'
import type {
  LayerTreeNodeModel,
  LayerTreeToggleProperty,
} from './layer-tree.model'

export const EXCLUDED_PARENT_LAYER_IDS = JSON.parse(
  import.meta.env.VITE_EXCLUDED_PARENT_LAYER_IDS || '[]'
)

export class LayerTreeService {
  getLayerPresence(
    targetId: LayerId,
    node: LayerTreeNodeModel,
    excludedParentLayerIds: number[],
    hasExcludedAncestor = false
  ): { hasAny: boolean; hasAllowed: boolean } {
    const isExcludedAncestor =
      hasExcludedAncestor || excludedParentLayerIds.includes(+node.id)

    if (node.id === targetId) {
      return {
        hasAny: true,
        hasAllowed: !isExcludedAncestor,
      }
    }

    if (!node.children) {
      return { hasAny: false, hasAllowed: false }
    }

    return node.children.reduce<{ hasAny: boolean; hasAllowed: boolean }>(
      (acc, child) => {
        const childPresence = this.getLayerPresence(
          targetId,
          child,
          excludedParentLayerIds,
          isExcludedAncestor
        )
        return {
          hasAny: acc.hasAny || childPresence.hasAny,
          hasAllowed: acc.hasAllowed || childPresence.hasAllowed,
        }
      },
      { hasAny: false, hasAllowed: false }
    )
  }

  toggleNode(
    id: LayerId,
    node: LayerTreeNodeModel,
    propertyName: LayerTreeToggleProperty
  ): LayerTreeNodeModel {
    if (node?.id === id) {
      return {
        ...node,
        [propertyName]: !node[propertyName],
      }
    } else {
      return {
        ...node,
        children: node.children?.map(child =>
          this.toggleNode(id, child, propertyName)
        ),
      }
    }
  }

  /**
   * Expands all ancestor nodes of `targetId` so the layer is visible in the tree.
   * Returns `{ node, found }` where `found` indicates whether the target was located.
   */
  expandToLayer(
    targetId: LayerId,
    node: LayerTreeNodeModel
  ): { node: LayerTreeNodeModel; found: boolean } {
    if (!node.children) {
      return { node, found: node.id === targetId }
    }
    const results = node.children.map(child =>
      this.expandToLayer(targetId, child)
    )
    const found = results.some(r => r.found)
    return {
      node: {
        ...node,
        expanded: found ? true : node.expanded,
        children: results.map(r => r.node),
      },
      found,
    }
  }

  updateLayers(
    node: LayerTreeNodeModel,
    layers: Layer[] | undefined
  ): LayerTreeNodeModel {
    const { id } = node
    if (node.children) {
      return {
        ...node,
        children: node.children.map(child => this.updateLayers(child, layers)),
      }
    } else {
      const checked = !!layers?.find(l => l.id === id)
      return {
        ...node,
        checked,
      }
    }
  }
}

export const layerTreeService = new LayerTreeService()
