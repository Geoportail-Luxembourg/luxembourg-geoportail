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

export function buildObliqueState(
  lon: number,
  lat: number,
  cfg: ObliqueConfig
): string {
  const state = [
    [
      [lon, lat, cfg.cameraAltitude],
      [lon, lat, cfg.targetHeight],
      cfg.distance,
      cfg.heading,
      cfg.pitch,
      cfg.roll,
    ],
    cfg.label,
    cfg.modules,
    [],
    [],
    cfg.plugins,
    cfg.collection,
    [],
  ]
  return JSON.stringify(state)
}
