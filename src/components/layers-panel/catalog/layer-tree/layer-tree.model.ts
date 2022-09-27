export interface ThemeNodeModel {
  id: number
  name: string
  children: ThemeNodeModel[]
  metadata: {
    is_expanded: boolean
  }
}

export type LayerTreeToggleProperty = 'checked' | 'expanded'

export interface LayerTreeNodeModel {
  id: number
  name: string
  checked: boolean
  expanded: boolean
  depth: number
  children?: LayerTreeNodeModel[]
}
