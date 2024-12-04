import { urlStorage } from '@/services/state-persistor/storage/url-storage'
import { transform } from 'ol/proj'
import { Coordinate } from 'ol/coordinate'
import { Projection } from 'ol/proj'

export const INFO_PROJECTIONS = {
  'EPSG:2169': 'Luref',
  'EPSG:4326': 'Lon/Lat WGS84',
  'EPSG:4326:DMS': 'Lon/Lat WGS84 DMS',
  'EPSG:4326:DMm': 'Lon/Lat WGS84 DM',
  'EPSG:3263*': 'WGS84 UTM',
}

const HEMISPHERES = ['EW', 'NS']

export async function queryInfos(location: Coordinate, fromCrs: Projection) {
  const clickCoordinateLuref = transform(location, fromCrs, 'EPSG:2169')
  const [shortUrl, elevation, address] = (
    await Promise.allSettled([
      createShortUrl(location),
      getElevation(clickCoordinateLuref),
      getNearestAddress(clickCoordinateLuref),
    ])
  ).map(r => (r.status === 'fulfilled' ? r.value : undefined))
  return {
    shortUrl,
    elevation,
    address,
    clickCoordinateLuref,
    formattedCoordinates: Object.fromEntries(
      Object.entries(INFO_PROJECTIONS).map(([crs, label]) => [
        label,
        formatCoords(location, fromCrs, crs),
      ])
    ),
  }
}

export function formatCoords(
  coords: Coordinate | undefined,
  fromCrs: Projection,
  format: string
) {
  let toCrs = format
  const ext = format.split(':')[2]
  let utm = ''
  if (ext !== undefined) {
    toCrs = format.slice(0, format.lastIndexOf(':'))
  }
  if (format.endsWith('*')) {
    const lonlat = transform(coords!, fromCrs, 'EPSG:4326')
    toCrs = Math.floor(lonlat[0]) >= 6 ? 'EPSG:32632' : 'EPSG:32631'
    utm = `  (UTM${toCrs.slice(-2)}N)`
  }
  const newCoords = transform(coords!, fromCrs, toCrs)
  if (ext === undefined) {
    return (
      newCoords
        .map((coord, i) => {
          let roundedCoord = Math.round(coord)
          if (format === 'EPSG:4326') {
            roundedCoord = Math.round(coord * 1e6) / 1e6
          }
          const hemisphere =
            roundedCoord > 0 ? HEMISPHERES[i][0] : HEMISPHERES[i][1]
          return `${Math.abs(roundedCoord)} ${hemisphere}`
        })
        .join(' | ') + utm
    )
  }
  return newCoords
    .map((degrees, i) => {
      const normalizedDegrees = ((degrees + 180) % 360) - 180
      const hemisphere =
        normalizedDegrees > 0 ? HEMISPHERES[i][0] : HEMISPHERES[i][1]
      const absDegrees = Math.abs(normalizedDegrees)
      const intDegrees = Math.floor(absDegrees)
      const minutes = (absDegrees % 1) * 60
      if (ext === 'DMm') {
        const roundedMinutes = Math.round(minutes * 1e6) / 1e6
        return `${intDegrees}\u00b0 ${roundedMinutes}\u2032 ${hemisphere}`
      }
      if (ext === 'DMS') {
        const intMinutes = Math.floor(minutes)
        const seconds = Math.round((minutes % 1) * 600) / 10
        return `${intDegrees}\u00b0 ${intMinutes}\u2032 ${seconds}\u2033 ${hemisphere}`
      }
    })
    .join(' | ')
}

export async function createShortUrl(optCoordinate: Coordinate | undefined) {
  return (await urlStorage.getShortUrl(optCoordinate)).short_url
}

export function getQRUrl(shortUrl: string | undefined) {
  return shortUrl && `https://migration.geoportail.lu/qr?url=${shortUrl}`
}

export async function getElevation(coords: Coordinate) {
  const resp = await fetch(
    `https://migration.geoportail.lu/raster?lat=${coords[1]}&lon=${coords[0]}`
  )
  const json = await resp.json()
  return `${json.dhm} m`
}

export async function getNearestAddress(coords: Coordinate) {
  const resp = await fetch(
    `https://migration.geoportail.lu/geocode/reverse?easting=${coords[0]}&northing=${coords[1]}`
  )
  const json = await resp.json()
  const nearestAddress = json.results[0]
  const formattedAddress = `${nearestAddress.number}, ${nearestAddress.street}, ${nearestAddress.postal_code} ${nearestAddress.locality}`
  return {
    formattedAddress,
    formattedDistance: `${Math.round(nearestAddress.distance * 100) / 100} m`,
  }
}
