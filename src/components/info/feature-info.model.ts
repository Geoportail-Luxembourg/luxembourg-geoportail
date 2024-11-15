import { Geometry } from 'ol/geom'

export interface Feature {
  type: string
  geometry: Geometry
  fid: string
  id: string
  attributes: Attributes
  alias: Record<string, unknown>
}

// interface Geometry {
//   type: string
//   coordinates: number[][][]
// }

export interface Attributes {
  name: string
  canton: string
  district: string
  showProfile: { active: boolean }
  profile: any
  label: string
  [key: string]: any
  value: string
}

export interface FeatureInfo {
  features: Feature[]
  remote_template: boolean
  template: string
  layer: string
  ordered: boolean
  has_profile: boolean
  total_features_count: number
  features_count: number
  layerLabel: string
}
