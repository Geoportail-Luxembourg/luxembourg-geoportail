import { LayerId } from '@/stores/map.store.model'

export interface IMvtConfig {
  label: string
  defaultMapBoxStyle: string
  defaultMapBoxStyleXYZ: string
  xyz: string
  xyz_custom: string
  style: string
}
export type VectorSourceDict = Map<LayerId, IMvtConfig>

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
export const stylePropertyTypeList: StylePropertyType[] = [
  'line',
  'fill',
  'symbol',
  'fill-extrusion',
  'background',
  'hillshade',
]
export interface StyleItem {
  label: string
  color: string
  lines?: string[]
  fills?: string[]
  symbols?: string[]
  'fill-extrusions'?: string[]
  backgrounds?: string[]
  hillshades?: string[]
  visible: boolean
}
