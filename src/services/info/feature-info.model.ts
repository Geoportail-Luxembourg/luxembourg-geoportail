export interface FeatureJSON {
  type: string
  geometry: GeometryJSON
  fid: string
  id: string
  attributes: Attributes
  alias: Record<string, unknown>
  properties?: Record<string, unknown>
}

interface GeometryJSON {
  type: string
  coordinates: number[][][]
}

export interface Attributes {
  name: string
  canton: string
  district: string
  showProfile: { active: boolean }
  profile: any
  label: string
}

export interface FeatureInfoJSON {
  features: FeatureJSON[]
  remote_template: boolean
  template: string
  layer: string
  ordered: boolean
  has_profile: boolean
  total_features_count: number
  features_count: number
  layerLabel: string
}

export interface AttributeEntry {
  key: string
  value: any
}
