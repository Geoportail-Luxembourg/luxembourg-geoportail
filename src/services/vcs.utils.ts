export const LUX_VCS_URL = import.meta.env.VITE_LUX_VCS_URL
export const LUX_VCS_PITCH = import.meta.env.VITE_LUX_VCS_PITCH ?? -45
export const LUX_VCS_DISTANCE = import.meta.env.VITE_LUX_VCS_DISTANCE ?? 300
export const LUX_VCS_COORDINATES = [6.13, 49.61]
export const LUX_VCS_MODULES = [
  'LuxConfig',
  '8bbdc4b3-691e-466e-9e91-2b0d57a9a53e',
  'c627c247-8017-483a-a32e-1ff0ad5f0536',
  '0fa7c853-d866-486c-8c2d-3470f401d44c',
  '1f9cb759-c3dc-44ba-9253-7299701499a3',
  'f7791a73-5132-4282-b3c4-1adb1abce06a',
  'catalogConfig',
]
export const LUX_VCS_PLUGINS = [
  ['@geoportallux/lux-3dviewer-themesync', { prop: '*' }],
  ['@geoportallux/lux-3dviewer-plugin-back-to-2d-portal', { prop: '*' }],
]
export const zoomToCesiumAltitude = {
  9: 350000,
  10: 180000,
  11: 100000,
  12: 40000,
  13: 25000,
  14: 9000,
  15: 6000,
  16: 3500,
  17: 1900,
  18: 900,
  19: 600,
}

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
  return build3dState(
    lon,
    lat,
    cfg.cameraAltitude,
    cfg.distance,
    cfg.heading,
    cfg.pitch,
    cfg.modules,
    [],
    cfg.plugins,
    cfg.label,
    cfg.targetHeight,
    cfg.roll,
    cfg.collection
  )
}

export function build3dState(
  lon: number,
  lat: number,
  altitude: number,
  distance: number = LUX_VCS_DISTANCE,
  heading: number = 0,
  pitch: number = LUX_VCS_PITCH,
  modules: string[] = [],
  selectedLayers: unknown[] = [],
  plugins: [string, Record<string, unknown>][] = [],
  label = '3D Map',
  targetAltitude: number | null = null,
  roll = 0,
  collection?: string
): string {
  const state: unknown[] = [
    [
      [lon, lat, altitude],
      [lon, lat, targetAltitude ?? altitude],
      distance ?? LUX_VCS_DISTANCE,
      heading,
      pitch ?? LUX_VCS_PITCH,
      roll,
    ],
    label,
    [...new Set([...modules, ...LUX_VCS_MODULES])],
    selectedLayers,
    [],
    [...new Set([...plugins, ...LUX_VCS_PLUGINS])],
  ]

  if (collection !== undefined) {
    state.push(collection)
    state.push([])
  } else {
    state.push(0)
  }

  return JSON.stringify(state)
}
