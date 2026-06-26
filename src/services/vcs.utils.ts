export const LUX_VCS_ALTITUDE = import.meta.env.VITE_LUX_VCS_ALTITUDE ?? 300
export const LUX_VCS_URL = import.meta.env.VITE_LUX_VCS_URL
export const LUX_VCS_PITCH = import.meta.env.VITE_LUX_VCS_PITCH
  ? Number(import.meta.env.VITE_LUX_VCS_PITCH)
  : -45
export const LUX_VCS_COORDINATES = [6.13, 49.61]
export const LUX_VCS_MODULES = ['LuxConfig', 'catalogConfig']
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
  collection: string
}

/**
 * Generate a 3D state string for the given parameters for VCS 3D and oblique.
 * Exemple: https://3d.geoportail.lu/?state=[[[5.982461093967874,49.73802869488359,692],[5.982461093967874,49.73802869488359,292],400,0,-90,0],"Oblique Map",["LuxConfig","catalogConfig"],[],[],0,"ACT2023_ImagesObliques_all",[]]
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
    LUX_VCS_MODULES,
    [], // Layers (empty for oblique viewer)
    [],
    0,
    'ACT2023_ImagesObliques_all', // Oblique imagery dataset
    [],
  ]

  return JSON.stringify(state)
}

/**
 * Generate a 3D state string for the given parameters for VCS 3D and oblique.
 * Altitude is always 300 for VCS.
 * Exemple: https://3d.geoportail.lu/?state=[[[],[5.982465381886571,49.7380285256788,300],40000,0,-45,0],"cesium",["LuxConfig","catalogConfig"],[["pag_pcn",1,0],["pag_pap_approuves",1,0],["pag_infos_supp",1,0],["pag_ssmn",1,0],["pag_pos",1,0],["eco_emob_isochrones_count_AC_5min",1,0]],[],0,0]
 *
 * @param lon
 * @param lat
 * @param distance Distance of camera, remove const and calculate
 * @param heading
 * @param pitch Pitch of camera, default is LUX_VCS_PITCH
 * @param selectedLayers
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
  selectedLayers: unknown[] = [],
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
    LUX_VCS_MODULES,
    selectedLayers,
    [],
    0,
  ]

  if (collection !== undefined) {
    state.push(collection)
    state.push([])
  } else {
    state.push(0)
  }

  return JSON.stringify(state)
}
