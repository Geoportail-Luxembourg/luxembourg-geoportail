export interface ConfigClassification {
  color: string
  name: string
  value: string
  visible: boolean
}

export type ConfigClassifications = Record<number, ConfigClassification>

export interface ConfigLevel {
  max: number
  width: number
}

export type ConfigLevels = Record<number, ConfigLevel>

export interface ConfigPointAttribute {
  bytes: number
  elements: number
  name: string
  value: string
  visible: number
}

export type ConfigPointAttributes = Record<string, ConfigPointAttribute>

export interface Config {
  classes_names_normalized: Record<number, string>
  classes_names_standard: Record<number, string>
  classification_colors: ConfigClassifications
  debug: boolean
  default_attribute: string
  default_color: string
  default_point_attribute: string
  default_point_cloud: string
  initialLOD: number
  max_levels: ConfigLevels
  max_point_number: number
  minLOD: number
  point_attributes: ConfigPointAttributes
  point_size: number
  vertical_pan_tolerance: number
  width: number
}
