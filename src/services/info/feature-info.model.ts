export interface FeatureJSON {
  type: string
  geometry: GeometryJSON
  fid: string
  id: string
  attributes: Attributes
  alias: Record<string, unknown>
  properties?: Record<string, unknown>
}

export interface GeometryJSON {
  type: string
  coordinates: number[][][]
}

export type FeatureMeasurement = Record<string, string>

export interface Attributes {
  name: string
  canton: string
  district: string
  showProfile: { active: boolean }
  profile: any
  label: string
  [key: string]: unknown
  path?: string
  thumb?: string
  category_id?: number
  PF: {
    [key: string]: unknown
  }
  measurements: FeatureMeasurement[]
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
