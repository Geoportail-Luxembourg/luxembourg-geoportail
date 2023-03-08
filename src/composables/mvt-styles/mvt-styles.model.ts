export interface IMvtConfig {
  label: string
  defaultMapBoxStyle: string
  defaultMapBoxStyleXYZ: string
  xyz: string
  xyz_custom: string
  style: string
}
export interface VectorSourceDict {
  [id: string]: IMvtConfig
}
export interface SimpleRoadStyle {
  unlocalized_label: string
  hillshade: boolean
  colors: string[]
  selected: boolean
}
export type StylePropertyType =
  | 'line'
  | 'fill'
  | 'symbol'
  | 'fill-extrusion'
  | 'background'
  | 'hillshade'
export interface StyleProperties {
  type: StylePropertyType
  properties: string[]
}
export interface StyleItem {
  unlocalized_label: string
  color: string
  styleProperties: StyleProperties[]
  visible: boolean
}
