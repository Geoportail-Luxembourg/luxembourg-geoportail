import type { Geometry } from 'geojson'

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

/** The line parts of a geometry, collections flattened (as the 2D app's profile). */
export function extractLineParts(g?: Geometry): number[][][] {
  switch (g?.type) {
    case 'LineString':
      return [g.coordinates]
    case 'MultiLineString':
      return g.coordinates
    case 'GeometryCollection':
      return g.geometries.flatMap(extractLineParts)
    default:
      return []
  }
}

/**
 * Adds the length along the line as a third coordinate. Like profile.json, the
 * gaps between parts don't count.
 */
export function addLengthAlongLine(parts: number[][][]): number[][][] {
  let along = 0
  return parts.map(part =>
    part.map((xy, i) => {
      if (i) {
        along += Math.hypot(xy[0] - part[i - 1][0], xy[1] - part[i - 1][1])
      }
      return [xy[0], xy[1], along]
    })
  )
}

/** The point [x, y, along] of a line with lengths closest to `xy`, and its squared distance. */
export function findClosestPoint(
  parts: number[][][],
  [x, y]: number[]
): { point: number[]; sqDist: number } {
  let best = { point: [] as number[], sqDist: Infinity }
  for (const part of parts) {
    part.forEach((a, i) => {
      const b = part[i + 1] ?? a
      const dx = b[0] - a[0]
      const dy = b[1] - a[1]
      const t =
        dx || dy
          ? Math.min(
              1,
              Math.max(
                0,
                ((x - a[0]) * dx + (y - a[1]) * dy) / (dx ** 2 + dy ** 2)
              )
            )
          : 0
      const point = a.map((v, j) => v + t * (b[j] - v))
      const sqDist = (point[0] - x) ** 2 + (point[1] - y) ** 2
      if (sqDist < best.sqDist) {
        best = { point, sqDist }
      }
    })
  }
  return best
}

export function formatElevation(value: number, digits = 0): string {
  return `${value.toFixed(digits)} m`
}

export function formatLength(value: number, digits = 0): string {
  return value < 1000
    ? `${value.toFixed(digits)} m`
    : `${(value / 1000).toFixed(Math.max(digits, 2))} km`
}
