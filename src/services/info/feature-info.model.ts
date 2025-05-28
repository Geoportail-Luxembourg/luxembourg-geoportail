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
  canton?: string
  description?: string
  district?: string
  image?: string
  label: string
  [key: string]: unknown
  path?: string
  thumb?: string
  category_id?: number
  PF: {
    [key: string]: unknown
  }
  measurements: FeatureMeasurement[]
  length?: number
  name: string
  sentier?: string
  showProfile?: { active: boolean }
  thumbnail?: string
  profile?: any // FIXME: improve typing
  map_id?: string
  sketches?: { id: string; name: string }[]
  K_KATASTERGEMEINDE: string
  K_MEASUREMENTNUMBER: string
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
  value: any // FIXME: string instead of any?
}
