import { formatLength } from '@/directives/format-length.directive'
import { Coordinate } from 'ol/coordinate'
import { LineString, Polygon, Point, Geometry, Circle } from 'ol/geom'
import {
  getPointResolution,
  METERS_PER_UNIT,
  Projection,
  transform,
} from 'ol/proj'
import {
  getDistance as haversineDistance,
  getArea as getOlArea,
} from 'ol/sphere'
import { Map } from 'ol'

const getLength = function (geom: Geometry, projection: Projection): number {
  let length = 0
  let coordinates: Coordinate[] = []
  if (geom.getType() === 'Polygon') {
    coordinates = (geom as Polygon).getCoordinates()[0] as Coordinate[]
  } else if (geom.getType() === 'LineString') {
    coordinates = (geom as LineString).getCoordinates() as Coordinate[]
  }
  for (let i = 0, ii = coordinates.length - 1; i < ii; ++i) {
    const c1 = transform(coordinates[i], projection, 'EPSG:4326')
    const c2 = transform(coordinates[i + 1], projection, 'EPSG:4326')
    length += haversineDistance(c1, c2)
  }
  return length
}

const getArea = function (polygon: Polygon): number {
  return Math.abs(getOlArea(polygon))
}

const getCircleLength = function (circle: Circle, proj: Projection): number {
  const radius = getCircleRadius(circle, proj)
  return 2 * Math.PI * radius
}

const getCircleArea = function (circle: Circle, proj: Projection): number {
  return Math.PI * Math.pow(getCircleRadius(circle, proj), 2)
}

const getCircleRadius = function (circle: Circle, proj: Projection): number {
  const coord = circle.getLastCoordinate()
  const center = circle.getCenter()
  return center !== null && coord !== null
    ? getLength(new LineString([center, coord]), proj)
    : 0
}

const setCircleRadius = function (circle: Circle, radius: number, map: Map) {
  const center = circle.getCenter()
  const projection = map.getView().getProjection()
  const resolution = map.getView().getResolution() || 0
  const pointResolution = getPointResolution(projection, resolution, center)
  const resolutionFactor = resolution / pointResolution
  radius = (radius / METERS_PER_UNIT.m) * resolutionFactor
  circle.setRadius(radius)
}

//The following functions still contain formatting logic as the returned values are not used in the DOM
const getFormattedAzimutRadius = function (
  line: LineString,
  projection: Projection,
  decimals: number
) {
  let output = getFormattedAzimut(line, decimals)
  output += `, ${formatLength(getLength(line, projection))}`
  return output
}

const getFormattedAzimut = function (line: LineString, decimals: number) {
  const azimut = getAzimut(line)
  return `${azimut.toPrecision(decimals)}°`
}

const getAzimut = function (line: LineString) {
  const coords = line.getCoordinates()
  const dx = coords[1][0] - coords[0][0]
  const dy = coords[1][1] - coords[0][1]
  const rad = Math.acos(dy / Math.sqrt(dx * dx + dy * dy))
  const factor = dx > 0 ? 1 : -1
  return ((factor * rad * 180) / Math.PI) % 360
}

const getFormattedPoint = function (point: Point, decimals: number) {
  return point
    .getCoordinates()
    .map(c => c.toPrecision(decimals))
    .join(' ')
}

export {
  getLength,
  getArea,
  getCircleLength,
  getCircleArea,
  getCircleRadius,
  setCircleRadius,
  getFormattedAzimutRadius,
  getFormattedPoint,
}
