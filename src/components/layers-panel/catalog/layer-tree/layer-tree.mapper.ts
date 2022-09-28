import { LayerTreeNodeModel, ThemeNodeModel } from './layer-tree.model'

export function themesToLayerTree(
  node: ThemeNodeModel,
  depth = 0
): LayerTreeNodeModel {
  const { name, id, children, metadata } = node
  return {
    name,
    id,
    depth,
    children: children?.map(child => themesToLayerTree(child, depth + 1)),
    checked: false,
    expanded: metadata?.is_expanded,
  }
}
