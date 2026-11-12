/** Response of the geoportail `profile.json` service (coordinates in EPSG:2169). */
export interface ProfileJson {
  profile: ProfileJsonEntry[]
}

export interface ProfileJsonEntry {
  dist: number
  values: {
    dhm: number
  }
  x: number
  y: number
}

export type ProfileData = ProfileDataEntry[]

export interface ProfileDataEntry extends ProfileJsonEntry {
  cumulativeElevation: number
  elevationGain: number
  elevationLoss: number
}

/** Adds the running elevation gain, loss and balance to each profile point. */
export function toProfileData({ profile }: ProfileJson): ProfileData {
  let elevationGain = 0
  let elevationLoss = 0
  let cumulativeElevation = 0
  return profile.map((row, i) => {
    if (i > 0) {
      const elevation = row.values.dhm - profile[i - 1].values.dhm
      cumulativeElevation += elevation
      if (elevation > 0) {
        elevationGain += elevation
      } else {
        elevationLoss += elevation
      }
    }
    return { ...row, cumulativeElevation, elevationGain, elevationLoss }
  })
}

/**
 * CSV of a profile. `toLonLat` converts the EPSG:2169 points: the package
 * carries no projection library.
 */
export function profileCsv(
  data: ProfileData,
  toLonLat: (xy: [number, number]) => number[]
): string {
  return data.reduce((csv, { dist, values, x, y }) => {
    const [lon, lat] = toLonLat([x, y])
    return `${csv}${dist},${values.dhm},${x},${y},${lon},${lat}\n`
  }, 'dist,MNT,y,x,lon,lat\n')
}

export function formatElevation(value: number, digits = 0): string {
  return `${value.toFixed(digits)} m`
}

export function formatLength(value: number, digits = 0): string {
  return value < 1000
    ? `${value.toFixed(digits)} m`
    : `${(value / 1000).toFixed(Math.max(digits, 2))} km`
}
