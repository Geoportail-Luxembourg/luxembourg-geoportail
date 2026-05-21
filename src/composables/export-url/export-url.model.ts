export interface ObliqueConfig {
  cameraAltitude: number
  targetHeight: number
  distance: number
  heading: number
  pitch: number
  roll: number
  label: string
  modules: string[]
  plugins: [string, Record<string, unknown>][]
  collection: string
}

export interface ExportLink {
  labelKey: string
  icon: string
  url?: string
  target?: string
  useLocationInfoCoords?: boolean
  obliqueConfig?: ObliqueConfig
}
