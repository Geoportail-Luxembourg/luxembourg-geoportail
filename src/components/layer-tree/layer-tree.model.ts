import { LayerId } from '@/stores/map.store.model'

export type LayerTreeToggleProperty = 'checked' | 'expanded'

export interface LayerTreeNodeModel {
  id: LayerId
  name: string
  checked: boolean
  expanded: boolean
  depth: number
  children?: LayerTreeNodeModel[]
}
