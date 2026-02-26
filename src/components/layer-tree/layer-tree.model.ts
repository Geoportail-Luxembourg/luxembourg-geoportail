import { LayerId } from '@/stores/map.store.model'

export type LayerTreeToggleProperty = 'checked' | 'expanded'

export interface LayerTreeNodeModel {
  id: LayerId
  name: string
  /** Optional human-readable label (e.g. WMS layer title). Falls back to `name` when not set. */
  label?: string
  checked: boolean
  expanded: boolean
  depth: number
  children?: LayerTreeNodeModel[]
}
