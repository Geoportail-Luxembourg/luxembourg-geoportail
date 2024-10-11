import { Coordinate } from 'ol/coordinate'
import { LineString, Polygon, Point, Geometry, Circle } from 'ol/geom'
import { Projection, transform } from 'ol/proj'
import { getDistance as haversineDistance, getArea } from 'ol/sphere'

const getFormattedLength = function (
  geom: Geometry,
  projection: Projection,
  precision?: number
): string {
  let length = 0
  let coordinates
  if (geom.getType() === 'Polygon') {
    coordinates = (geom as Polygon).getCoordinates()[0] as Coordinate[]
  } else if (geom.getType() === 'LineString') {
    coordinates = (geom as LineString).getCoordinates() as Coordinate[]
  } else {
    return ''
  }
  for (let i = 0, ii = coordinates.length - 1; i < ii; ++i) {
    const c1 = transform(coordinates[i], projection, 'EPSG:4326')
    const c2 = transform(coordinates[i + 1], projection, 'EPSG:4326')
    length += haversineDistance(c1, c2)
  }
  return formatLength(length, precision || 3)
}

const getFormattedArea = function (
  polygon: Polygon,
  precision?: number
): string {
  const area = Math.abs(getArea(polygon))
  return formatArea(area, precision || 3)
}

//TODO: handle projection ?
const getFormattedCircleLength = function (
  circle: Circle,
  precision?: number
): string {
  const radius = circle.getRadius()
  const length = 2 * Math.PI * radius
  return formatLength(length, precision || 3)
}

const getFormattedCircleArea = function (circle: Circle, precision?: number) {
  const area = Math.PI * Math.pow(circle.getRadius(), 2)
  return formatArea(area, precision || 3)
}

function formatLength(length: number, precision: number): string {
  let output
  if (length > 1000) {
    output =
      parseFloat((length / 1000).toPrecision(precision || 3)) + ' ' + 'km'
  } else {
    output = parseFloat(length.toPrecision(precision || 3)) + ' ' + 'm'
  }
  return output
}

function formatArea(area: number, precision: number) {
  let output = ''
  if (area > 1000000) {
    output = parseFloat((area / 1000000).toPrecision(precision)) + ' ' + 'km²'
  } else {
    output = parseFloat(area.toPrecision(precision)) + ' ' + 'm²'
  }
  return output
}

const getCircleRadius = function (circle: Circle, proj: Projection): string {
  const coord = circle.getLastCoordinate()
  const center = circle.getCenter()
  return center !== null && coord !== null
    ? getFormattedLength(new LineString([center, coord]), proj)
    : ''
}

const getFormattedAzimutRadius = function (
  line: LineString,
  projection: Projection,
  decimals: number,
  precision: number
) {
  let output = getFormattedAzimut(line, decimals)

  output += `, ${getFormattedLength(line, projection, precision)}`

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
  getFormattedLength,
  getFormattedArea,
  getFormattedAzimutRadius,
  getFormattedPoint,
  getFormattedCircleLength,
  getFormattedCircleArea,
  getCircleRadius,
}
