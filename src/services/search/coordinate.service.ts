import olGeomPoint from 'ol/geom/Point.js'
import { containsCoordinate } from 'ol/extent.js'
import { transform } from 'ol/proj.js'
import olFeature from 'ol/Feature.js'

class CoordinateService {
  matchCoordinate(
    searchString: string,
    mapEpsgCode: string,
    coordinateString: (
      coordinates: number[],
      mapEpsgCode: string,
      epsgCode: string,
      isDms: boolean,
      flipped: boolean
    ) => string
  ): olFeature[] {
    searchString = searchString.replace(/,/gi, '.')
    const results: olFeature[] = []
    const re = {
      'EPSG:32631': {
        regex: /(\d{6,6}[\,\.]?\d{0,3})\s*?\W*(\d{7,7}[\,\.]?\d{0,3})\s*?/,
        label: 'UTM31N',
        epsgCode: 'EPSG:32631',
      },
      'EPSG:32632': {
        regex: /(\d{6,6}[\,\.]?\d{0,3})\s*?\W*(\d{7,7}[\,\.]?\d{0,3})\s*?/,
        label: 'UTM32N',
        epsgCode: 'EPSG:32632',
      },
      'EPSG:2169': {
        regex:
          /(\d{4,6}[\,\.]?\d{0,3})\s*([E|N])?\W*(\d{4,6}\s*[\,\.\|]?\s*?\d{0,3})\s*([E|N])?/,
        label: 'LUREF',
        epsgCode: 'EPSG:2169',
      },
      'EPSG:2169:V2': {
        regex: /(\d{4,6})\s*([E|N])?\s*[\,\.\|]?\s*(\d{4,6})\s*([E|N])?/,
        label: 'LUREF',
        epsgCode: 'EPSG:2169',
      },
      'EPSG:4326': {
        regex:
          /(\d{1,2}[\,\.]\d{1,6})\d*\s?(latitude|lat|N|longitude|long|lon|E|east|est)?\W*(\d{1,2}[\,\.]\d{1,6})\d*\s?(longitude|long|lon|E|latitude|lat|N|north|nord)?/i,
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
      const m = re[epsgKey as keyof typeof re].regex.exec(searchString)
      if (
        epsgKey === 'EPSG:2169' &&
        (searchString.match(/\./g) || []).length === 1
      ) {
        continue
      }

      if (m) {
        const epsgCode = re[epsgKey as keyof typeof re].epsgCode
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
              northArray.includes(m[2].toUpperCase()) &&
              eastArray.includes(m[4].toUpperCase())
            ) {
              easting = parseFloat(m[3].replace(',', '.'))
              northing = parseFloat(m[1].replace(',', '.'))
            } else if (
              northArray.includes(m[4].toUpperCase()) &&
              eastArray.includes(m[2].toUpperCase())
            ) {
              easting = parseFloat(m[1].replace(',', '.'))
              northing = parseFloat(m[3].replace(',', '.'))
            }
          } else if (!m[2] && !m[4]) {
            easting = parseFloat(m[1].replace(',', '.'))
            northing = parseFloat(m[3].replace(',', '.'))
          }
        }

        if (easting !== undefined && northing !== undefined) {
          const point = new olGeomPoint([easting, northing]).transform(
            epsgCode,
            mapEpsgCode
          )
          // const feature = containsCoordinate(maxExtent, point.getCoordinates()) ? new olFeature(point) : null;
          const feature = new olFeature(point)

          if (feature) {
            const resultPoint = feature.getGeometry() as olGeomPoint
            const resultString = coordinateString(
              resultPoint.getCoordinates(),
              mapEpsgCode,
              epsgCode,
              false,
              false
            )
            feature.set('label', resultString)
            feature.set('epsgLabel', re[epsgKey as keyof typeof re].label)
            results.push(feature)
          }
        }
      }
    }

    return results
  }
}
export const coordinateService = new CoordinateService()
