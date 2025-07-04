import { format } from 'ol/coordinate.js'
import { transform } from 'ol/proj.js'
import { padNumber } from 'ol/string.js'
import olGeomPoint from 'ol/geom/Point.js'
import { containsCoordinate } from 'ol/extent.js'
import olFeature from 'ol/Feature.js'
import { transformExtent } from 'ol/proj'

export function arrayIncludes<T>(arr: T[], obj: T): boolean {
  return arr.indexOf(obj) >= 0
}

/**
 * Provides a coordinate string output service, useful for
 * correctly formatted coordinate strings in different projections.
 */
export function useCoordinateString() {
  /**
   * Formats a coordinate string for various projections.
   */
  function coordinateString(
    coordinate: number[],
    sourceEpsgCode: string,
    targetEpsgCode: string,
    opt_DMS = false,
    opt_DMm = false
  ): string {
    let str = ''
    let tgtEpsg = targetEpsgCode

    if (targetEpsgCode === 'EPSG:3263*') {
      const lonlat = transform(coordinate, sourceEpsgCode, 'EPSG:4326')
      tgtEpsg = Math.floor(lonlat[0]) >= 6 ? 'EPSG:32632' : 'EPSG:32631'
    }

    const transformed = transform(coordinate, sourceEpsgCode, tgtEpsg)

    switch (tgtEpsg) {
      case 'EPSG:2169':
        str = format(transformed, '{x} E | {y} N', 0)
        break
      case 'EPSG:4326':
        if (opt_DMS) {
          const hdms = toStringHDMS(transformed)
          const yhdms = hdms.split(' ').slice(0, 4).join(' ')
          const xhdms = hdms.split(' ').slice(4, 8).join(' ')
          str = `${xhdms} | ${yhdms}`
        } else if (opt_DMm) {
          const hdmm = toStringHDMm(transformed)
          const yhdmm = hdmm.split(' ').slice(0, 3).join(' ')
          const xhdmm = hdmm.split(' ').slice(3, 6).join(' ')
          str = `${xhdmm} | ${yhdmm}`
        } else {
          str = format(transformed, '{x} E | {y} N', 5)
        }
        break
      case 'EPSG:32632':
        str = format(transformed, '{x} | {y} (UTM32N)', 0)
        break
      case 'EPSG:32631':
        str = format(transformed, '{x} | {y} (UTM31N)', 0)
        break
      default:
        str = format(transformed, '{x} E | {y} N', 0)
        break
    }
    return str
  }

  function toStringHDMS(coordinate?: number[]): string {
    if (coordinate) {
      return (
        degreesToStringHDMS(coordinate[1], 'NS') +
        ' ' +
        degreesToStringHDMS(coordinate[0], 'EW')
      )
    }
    return ''
  }

  function toStringHDMm(coordinate?: number[]): string {
    if (coordinate) {
      return (
        degreesToStringHDMm(coordinate[1], 'NS') +
        ' ' +
        degreesToStringHDMm(coordinate[0], 'EW')
      )
    }
    return ''
  }

  function degreesToStringHDMS(degrees: number, hemispheres: string): string {
    const normalizedDegrees = ((degrees + 180) % 360) - 180
    const x = Math.abs(3600 * normalizedDegrees)
    return (
      Math.floor(x / 3600) +
      '\u00b0 ' +
      padNumber(Math.floor((x / 60) % 60), 2) +
      '\u2032 ' +
      padNumber(Math.floor(x % 60), 2) +
      ',' +
      Math.floor((x - (x < 0 ? Math.ceil(x) : Math.floor(x))) * 10) +
      '\u2033 ' +
      hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0)
    )
  }

  function degreesToStringHDMm(degrees: number, hemispheres: string): string {
    const normalizedDegrees = ((degrees + 180) % 360) - 180
    const x = Math.abs(3600 * normalizedDegrees)
    const dd = x / 3600
    const m = (dd - Math.floor(dd)) * 60
    const c = (m % 1).toString()
    return (
      Math.floor(dd) +
      '\u00b0 ' +
      padNumber(Math.floor(m), 2) +
      ',' +
      c.substring(c.indexOf('.') + 1, c.indexOf('.') + 6) +
      '\u2032 ' +
      hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0)
    )
  }

  return { coordinateString }
}

export function matchCoordinate(
  searchString: string,
  mapEpsgCode: string
): olFeature[] {
  const MAX_EXTENT = JSON.parse(import.meta.env.VITE_DEFAULT_MAX_EXTENT)
  const maxExtent = transformExtent(MAX_EXTENT, 'EPSG:4326', mapEpsgCode)
  searchString = searchString.replace(/,/gi, '.')
  const results: olFeature[] = []
  const re: Record<
    string,
    {
      regex: RegExp
      label: string
      epsgCode: string
    }
  > = {
    'EPSG:32631': {
      regex: /(\d{6,6}[,.]?\d{0,3})\s*?\W*(\d{7,7}[,.]?\d{0,3})\s*?/,
      label: 'UTM31N',
      epsgCode: 'EPSG:32631',
    },
    'EPSG:32632': {
      regex: /(\d{6,6}[,.]?\d{0,3})\s*?\W*(\d{7,7}[,.]?\d{0,3})\s*?/,
      label: 'UTM32N',
      epsgCode: 'EPSG:32632',
    },
    'EPSG:2169': {
      regex:
        /(\d{4,6}[,.]?\d{0,3})\s*([E|N])?\W*(\d{4,6}\s*[,.|]?\s*?\d{0,3})\s*([E|N])?/,
      label: 'LUREF',
      epsgCode: 'EPSG:2169',
    },
    'EPSG:2169:V2': {
      regex: /(\d{4,6})\s*([E|N])?\s*[,.|]?\s*(\d{4,6})\s*([E|N])?/,
      label: 'LUREF',
      epsgCode: 'EPSG:2169',
    },
    'EPSG:4326': {
      regex:
        /(\d{1,2}[,.]\d{1,6})\d*\s?(latitude|lat|N|longitude|long|lon|E|east|est)?\W*(\d{1,2}[,.]\d{1,6})\d*\s?(longitude|long|lon|E|latitude|lat|N|north|nord)?/i,
      label: 'long/lat WGS84',
      epsgCode: 'EPSG:4326',
    },
    'EPSG:4326:DMS': {
      regex:
        /([NSEW])?(-)?(\d+(?:\.\d+)?)[°º:d\s]?\s?(?:(\d+(?:\.\d+)?)['’‘′:]\s?(?:(\d{1,2}(?:\.\d+)?)(?:"|″|’’|'')?)?)?\s?([NSEW])?/i,
      label: 'long/lat WGS84 DMS',
      epsgCode: 'EPSG:4326',
    },
  }
  const northArray = ['LATITUDE', 'LAT', 'N', 'NORTH', 'NORD']
  const eastArray = ['LONGITUDE', 'LONG', 'LON', 'E', 'EAST', 'EST']

  for (const epsgKey in re) {
    let m = re[epsgKey].regex.exec(searchString)
    if (
      epsgKey === 'EPSG:2169' &&
      (searchString.match(/\./g) || []).length === 1
    ) {
      m = null
    }
    if (m) {
      const epsgCode = re[epsgKey].epsgCode
      let isDms = false
      let easting: number | undefined
      let northing: number | undefined

      if (epsgCode === 'EPSG:32631' || epsgCode === 'EPSG:32632') {
        if (m[1] && m[2]) {
          const coordinate = [
            parseFloat(m[1].replace(',', '.')),
            parseFloat(m[2].replace(',', '.')),
          ]
          const lonlat = transform(coordinate, epsgCode, 'EPSG:4326')
          if (Math.floor(lonlat[0]) === 5 || Math.floor(lonlat[0]) === 6) {
            easting = parseFloat(m[1].replace(',', '.'))
            northing = parseFloat(m[2].replace(',', '.'))
          }
        }
      } else if (
        epsgKey === 'EPSG:4326' ||
        epsgKey === 'EPSG:2169' ||
        epsgKey === 'EPSG:2169:V2'
      ) {
        if (m[2] && m[4]) {
          if (
            arrayIncludes(northArray, m[2].toUpperCase()) &&
            arrayIncludes(eastArray, m[4].toUpperCase())
          ) {
            easting = parseFloat(m[3].replace(',', '.'))
            northing = parseFloat(m[1].replace(',', '.'))
          } else if (
            arrayIncludes(northArray, m[4].toUpperCase()) &&
            arrayIncludes(eastArray, m[2].toUpperCase())
          ) {
            easting = parseFloat(m[1].replace(',', '.'))
            northing = parseFloat(m[3].replace(',', '.'))
          }
        } else if ((!m[2] || m[2] === '|') && m[4] === undefined) {
          easting = parseFloat(m[1].replace(',', '.'))
          northing = parseFloat(m[3].replace(',', '.'))
        }
      } else if (epsgKey === 'EPSG:4326:DMS') {
        // DMS parsing
        const m1 = m
        let dmsString2: string
        if (m1[1]) {
          m1[6] = ''
          dmsString2 = searchString.substring(m1[0].length - 1).trim()
        } else {
          dmsString2 = searchString.substring(m1[0].length).trim()
        }
        const decDeg1 = decDegFromMatch(m1)
        if (decDeg1 !== undefined) {
          const m2 = re[epsgKey].regex.exec(dmsString2)
          const decDeg2 = m2 ? decDegFromMatch(m2) : undefined
          if (decDeg2 !== undefined) {
            if (typeof decDeg1.latLon === 'undefined') {
              if (!isNaN(decDeg1.decDeg) && !isNaN(decDeg2.decDeg)) {
                decDeg1.latLon = 'lat'
              }
            }
            if (decDeg1.latLon === 'lat') {
              northing = decDeg1.decDeg
              easting = decDeg2.decDeg
            } else {
              easting = decDeg1.decDeg
              northing = decDeg2.decDeg
            }
            isDms = true
          }
        }
      }

      if (easting !== undefined && northing !== undefined) {
        const point = new olGeomPoint([easting, northing]).transform(
          epsgCode,
          mapEpsgCode
        )
        const flippedPoint = new olGeomPoint([northing, easting]).transform(
          epsgCode,
          mapEpsgCode
        )
        let feature: olFeature | null = null

        if (
          maxExtent &&
          containsCoordinate(maxExtent, point.getCoordinates())
        ) {
          feature = new olFeature(point)
        } else if (
          epsgCode === 'EPSG:4326' &&
          maxExtent &&
          containsCoordinate(maxExtent, flippedPoint.getCoordinates())
        ) {
          feature = new olFeature(flippedPoint)
        }
        if (feature) {
          const resultPoint = feature.getGeometry() as olGeomPoint
          const { coordinateString } = useCoordinateString()
          const resultString = coordinateString(
            resultPoint.getCoordinates(),
            mapEpsgCode,
            epsgCode,
            isDms,
            false
          )
          feature.set('label', resultString)
          feature.set('epsgLabel', re[epsgKey].label)
          results.push(feature)
        }
      }
    }
  }
  return results
}

// Helper for DMS parsing
function decDegFromMatch(m: Array<string | undefined>) {
  const signIndex: Record<string, number> = {
    '-': -1,
    N: 1,
    S: -1,
    E: 1,
    W: -1,
  }
  const latLonIndex: Record<string, 'lat' | 'lon'> = {
    N: 'lat',
    S: 'lat',
    E: 'lon',
    W: 'lon',
  }
  const sign =
    signIndex[m[2] as string] ||
    signIndex[m[1] as string] ||
    signIndex[m[6] as string] ||
    1
  if (m[3] === undefined) return undefined

  const degrees = Number(m[3])
  const minutes = m[4] !== undefined ? Number(m[4]) : 0
  const seconds = m[5] !== undefined ? Number(m[5]) : 0
  const latLon = latLonIndex[m[1] as string] || latLonIndex[m[6] as string]

  return {
    decDeg: sign * (degrees + minutes / 60 + seconds / 3600),
    latLon: latLon,
  }
}
