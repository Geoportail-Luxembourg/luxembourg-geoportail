interface Metadata {
  is_queryable: boolean
  metadata_id: string
}
export interface Layer {
  id: number
  name: string
  layers: string
  type: 'WMS' | 'WFS'
  metadata?: Metadata
  dimensions?: {}
  imageType?: string
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
