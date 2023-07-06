import { get as getProjection, transform } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import { Coordinate, format } from 'ol/coordinate'
import { padNumber } from 'ol/string'
import proj4 from 'proj4'

export enum PROJECTIONS {
  LUREF = 'EPSG:2169',
  WGS84 = 'EPSG:4326',
  WGS84DMS = 'EPSG:4326:DMS',
  WGS84DM = 'EPSG:4326:DMm',
  WGS84UTM3231 = 'EPSG:3263*',
  WGS84UTM31 = 'EPSG:32631',
  WGS84UTM32 = 'EPSG:32632',
  WEBMERCATOR = 'EPSG:3857',
}

export function initProjections() {
  proj4.defs('EPSG:32632', '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs')
  proj4.defs('EPSG:32631', '+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs')
  proj4.defs(
    PROJECTIONS.LUREF,
    '+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 ' +
      '+k=1 +x_0=80000 +y_0=100000 +ellps=intl ' +
      '+towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 ' +
      '+units=m +no_defs'
  )

  register(proj4)

  getProjection('EPSG:32632')?.setExtent([
    166021.44, 0.0, 833978.55, 9329005.18,
  ])
  getProjection('EPSG:32631')?.setExtent([
    166021.44, 0.0, 833978.55, 9329005.18,
  ])
  getProjection(PROJECTIONS.LUREF)?.setExtent([
    48225.17, 56225.6, 105842.04, 139616.4,
  ])
}

export function coordinatesToString(
  coordinate: Coordinate,
  sourceProj: string,
  destinationProj: string,
  optDMS: boolean,
  optDMm: boolean
) {
  let formattedCoordinates: string

  if (destinationProj === PROJECTIONS.WGS84UTM3231) {
    const lonlat = transform(coordinate, sourceProj, PROJECTIONS.WGS84)
    destinationProj =
      Math.floor(lonlat[0]) >= 6
        ? PROJECTIONS.WGS84UTM32
        : PROJECTIONS.WGS84UTM31
  }

  coordinate = transform(coordinate, sourceProj, destinationProj)

  switch (destinationProj) {
    default:
    case PROJECTIONS.LUREF:
      formattedCoordinates = format(coordinate, '{x} E | {y} N', 0)
      break
    case PROJECTIONS.WGS84:
      if (optDMS) {
        const hdms = coordinateToStringHDMm(coordinate)
        const yhdms = hdms.split(' ').slice(0, 4).join(' ')
        const xhdms = hdms.split(' ').slice(4, 8).join(' ')
        formattedCoordinates = xhdms + ' | ' + yhdms
      } else if (optDMm) {
        const hdmm = coordinateToStringHDMm(coordinate)
        const yhdmm = hdmm.split(' ').slice(0, 3).join(' ')
        const xhdmm = hdmm.split(' ').slice(3, 6).join(' ')
        formattedCoordinates = xhdmm + ' | ' + yhdmm
      } else {
        formattedCoordinates = format(coordinate, ' {x} E | {y} N', 5)
      }
      break
    case PROJECTIONS.WGS84UTM32:
      formattedCoordinates = format(coordinate, '{x} | {y} (UTM32N)', 0)
      break
    case PROJECTIONS.WGS84UTM31:
      formattedCoordinates = format(coordinate, '{x} | {y} (UTM31N)', 0)
      break
  }

  return formattedCoordinates
}

function coordinateToStringHDMm(coordinate: Coordinate) {
  return `${degreesToStringHDMm(coordinate[1], 'NS')} ${degreesToStringHDMm(
    coordinate[0],
    'EW'
  )}`
}

function degreesToStringHDMm(degrees: number, hemispheres: string) {
  const normalizedDegrees = ((degrees + 180) % 360) - 180,
    x = Math.abs(3600 * normalizedDegrees),
    dd = x / 3600,
    m = (dd - Math.floor(dd)) * 60

  return `${Math.floor(dd)}\u00b0 ${padNumber(Math.floor(m), 2)},${Math.floor(
    (m - Math.floor(m)) * 100000
  )}\u2032 ${hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0)}`
}
