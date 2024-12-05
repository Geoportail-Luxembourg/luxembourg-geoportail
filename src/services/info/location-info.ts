import { urlStorage } from '@/services/state-persistor/storage/url-storage'
import { transform } from 'ol/proj'
import { Coordinate } from 'ol/coordinate'
import { Projection } from 'ol/proj'
import { containsCoordinate } from 'ol/extent'

import { getElevation } from '@/components/draw/feature-measurements-helper'

export const INFO_PROJECTIONS = {
  'EPSG:2169': 'Luref',
  'EPSG:4326': 'Lon/Lat WGS84',
  'EPSG:4326:DMS': 'Lon/Lat WGS84 DMS',
  'EPSG:4326:DMm': 'Lon/Lat WGS84 DM',
  'EPSG:3263*': 'WGS84 UTM',
}

export const LIDAR_EXTENT = [46602, 53725, 106944, 141219]
export const LIDAR_EXTENT_SRS = 'EPSG:2169'

export async function queryInfos(location: Coordinate, fromCrs: Projection) {
  const clickCoordinateLuref = transform(location, fromCrs, 'EPSG:2169')
  const [shortUrl, elevation, address] = (
    await Promise.allSettled([
      createShortUrl(location),
      getElevation(location),
      getNearestAddress(clickCoordinateLuref),
    ])
  ).map(r => (r.status === 'fulfilled' ? r.value : undefined))
  return {
    shortUrl,
    elevation,
    address,
    clickCoordinateLuref,
    isInBoxOfLidar: containsCoordinate(LIDAR_EXTENT, clickCoordinateLuref),
  }
}

export async function createShortUrl(optCoordinate: Coordinate | undefined) {
  const shortUrl = (await urlStorage.getShortUrl(optCoordinate)).short_url
  // workaround for incorrect route settings in migration
  return shortUrl.replace(
    'http://g-o.lu/migration/',
    import.meta.env.VITE_HOST + 's/'
  )
}

export function getQRUrl(shortUrl: string | undefined) {
  return shortUrl && `${import.meta.env.VITE_QR_URL}?url=${shortUrl}`
}

export async function getNearestAddress(coords: Coordinate) {
  const resp = await fetch(
    `${import.meta.env.VITE_ADDRESS_URL}?easting=${coords[0]}&northing=${
      coords[1]
    }`
  )
  const json = await resp.json()
  return json.results[0]
}
