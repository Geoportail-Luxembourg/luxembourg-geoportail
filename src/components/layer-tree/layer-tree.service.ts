import type { Layer, LayerId } from '@/stores/map.store.model'
import type {
  LayerTreeNodeModel,
  LayerTreeToggleProperty,
} from './layer-tree.model'

export class LayerTreeService {
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
