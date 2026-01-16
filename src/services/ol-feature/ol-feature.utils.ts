import { Feature } from 'ol'
import { Coordinate } from 'ol/coordinate'
import { Circle, Geometry, LineString, Point, Polygon } from 'ol/geom'

/**
 * Get cordinates of a features, used to get anchor for edition popup on the map
 * @param feature The ol feature to get the coordinates from
 * @returns The coordinates of the feature or undefined
 */
export function getFeatCoordinates(feature: Feature<Geometry>) {
  const geometry = feature.getGeometry()
  let coordinates: Coordinate | undefined = undefined

  if (geometry) {
    switch (geometry.getType()) {
      case 'Point':
        coordinates = (<Point>geometry).getFlatCoordinates()
        break
      case 'LineString':
        coordinates = (<LineString>geometry).getFlatMidpoint()
        break
      case 'Polygon':
        coordinates = (<Polygon>geometry).getFlatInteriorPoint()
        break
      case 'Circle':
        coordinates = (<Circle>geometry).getCenter()
        break
      case 'MultiPoint':
      case 'MultiLineString':
      case 'MultiPolygon':
      case 'GeometryCollection':
      default:
        // eslint-disable-next-line no-console
        console.warn(
          `getFeatCoordinates: Geometry type ${geometry.getType()} not supported, please convert to a supported geometry type before calling this function.`
        )
        break
    }
  }

  return coordinates
}
