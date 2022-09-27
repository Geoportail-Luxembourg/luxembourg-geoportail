import { LayerTreeNodeModel, LayerTreeToggleProperty } from './layer-tree.model'

export class LayerTreeService {
  toggleNode(
    id: number,
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
}

export const layerTreeState = new LayerTreeService()
