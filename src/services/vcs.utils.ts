export const LUX_VCS_ALTITUDE = import.meta.env.VITE_LUX_VCS_ALTITUDE ?? 300
export const LUX_VCS_URL = import.meta.env.VITE_LUX_VCS_URL
export const LUX_VCS_PITCH = import.meta.env.VITE_LUX_VCS_PITCH ?? -45
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

/**
 * Generate a 3D state string for the given parameters for VCS 3D and oblique.
 * Exemple: https://3d.geoportail.lu/?state=[[[5.982461093967874,49.73802869488359,692],[5.982461093967874,49.73802869488359,292],400,0,-90,0],"Oblique Map",["LuxConfig","8bbdc4b3-691e-466e-9e91-2b0d57a9a53e","c627c247-8017-483a-a32e-1ff0ad5f0536","0fa7c853-d866-486c-8c2d-3470f401d44c","1f9cb759-c3dc-44ba-9253-7299701499a3","f7791a73-5132-4282-b3c4-1adb1abce06a","catalogConfig"],[],[],[["@geoportallux/lux-3dviewer-themesync",{"prop":"*"}],["@geoportallux/lux-3dviewer-plugin-back-to-2d-portal",{"prop":"*"}]],"ACT2023_ImagesObliques_all",[]]
 */
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
    [...new Set([...(cfg.modules || []), ...LUX_VCS_MODULES])],
    [], // Layers (empty for oblique viewer)
    [],
    [...new Set([...(cfg.plugins || []), ...LUX_VCS_PLUGINS])],
    'ACT2023_ImagesObliques_all', // Oblique imagery dataset
    [],
  ]

  return JSON.stringify(state)
}

/**
 * Generate a 3D state string for the given parameters for VCS 3D and oblique.
 * Altitude is always 300 for VCS.
 * Exemple: https://3d.geoportail.lu/?state=[[[],[5.982465381886571,49.7380285256788,300],40000,0,-45,0],"cesium",["catalogConfig","LuxConfig"],[["pag_pcn",1,0],["pag_pap_approuves",1,0],["pag_infos_supp",1,0],["pag_ssmn",1,0],["pag_pos",1,0],["eco_emob_isochrones_count_AC_5min",1,0]],[],0]
 *
 * @param lon
 * @param lat
 * @param distance Distance of camera, remove const and calculate
 * @param heading
 * @param pitch Pitch of camera, default is LUX_VCS_PITCH
 * @param modules
 * @param selectedLayers
 * @param plugins
 * @param label
 * @param roll
 * @param collection
 * @returns
 */
export function build3dState(
  lon: number,
  lat: number,
  distance: number, // distance of camera, remove const and calculate
  heading: number = 0,
  pitch: number = LUX_VCS_PITCH,
  modules: string[] = [],
  selectedLayers: unknown[] = [],
  plugins: [string, Record<string, unknown>][] = [],
  label = '3D Map',
  roll = 0,
  collection?: string
): string {
  const state: unknown[] = [
    [
      [],
      [lon, lat, LUX_VCS_ALTITUDE], // Note: altitude is always 300 for lux
      distance,
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
