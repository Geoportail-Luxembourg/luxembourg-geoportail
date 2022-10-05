type Metadata = Partial<{
  is_queryable: boolean
  metadata_id: string
  attribution: string
}>
export type LayerType = 'WMS' | 'WFS'

export interface Layer {
  id: number
  name: string
  layers: string
  url?: string
  type: LayerType
  imageType: string
  metadata?: Metadata
  dimensions?: {}
  style?: string
}
export interface Group {
  id: number
  icon?: string
  childrenIds: number[]
}
export type LayerTreeNode = Layer | Group

export interface MapContext {
  layers?: Layer[]
}

export interface LayerComparison {
  layer: Layer
  position: number
}
