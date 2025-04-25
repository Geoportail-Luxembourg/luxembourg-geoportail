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
  canton?: string
  description?: string
  district?: string
  image?: string
  label: string
  length?: number
  name: string
  sentier?: string
  showProfile?: { active: boolean }
  thumbnail?: string
  profile?: any // FIXME: improve typing
  map_id?: number
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
