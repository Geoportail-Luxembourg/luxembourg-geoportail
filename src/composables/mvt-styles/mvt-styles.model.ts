import { LayerId } from '@/stores/map.store.model'
// import type { StyleSpecification } from 'maplibre-gl'
// export type { StyleSpecification } from 'maplibre-gl'
import type { StyleSpecification } from '@/lib/ol-mapbox-layer'
export type { StyleSpecification } from '@/lib/ol-mapbox-layer'

export interface BgLayerDef {
  icon_id: string
  vector_id?: string
  simple_style_class?: string
  medium_style_class?: string
  expert_style_class?: string
  id: number
  is_default?: boolean
}
export interface IMvtConfig {
  label: string
  defaultMapBoxStyle: string
  defaultMapBoxStyleXYZ: string
  xyz: string
  xyz_custom: string
  style: string
}
export type VectorSourceDict = Map<LayerId, IMvtConfig>
export type VectorStyleDict = Map<LayerId, StyleSpecification>

export interface StyleCapabilities {
  isEditable: boolean
  hasSimpleStyle: boolean
  hasAdvancedStyle: boolean
  hasExpertStyle: boolean
}

export interface SimpleStyle {
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
