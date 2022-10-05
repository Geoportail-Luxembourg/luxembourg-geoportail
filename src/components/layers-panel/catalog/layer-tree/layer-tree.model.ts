export type LayerTreeToggleProperty = 'checked' | 'expanded'

export interface LayerTreeNodeModel {
  id: number
  name: string
  checked: boolean
  expanded: boolean
  depth: number
  children?: LayerTreeNodeModel[]
}
