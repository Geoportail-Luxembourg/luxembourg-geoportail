import { LineString, Polygon, Point } from 'ol/geom'
import { Projection, transform } from 'ol/proj'
import { getDistance as haversineDistance, getArea } from 'ol/sphere'

const getFormattedLength = function (
  lineString: LineString,
  projection: Projection,
  precision?: number
): string {
  let length = 0
  const coordinates = lineString.getCoordinates()
  for (let i = 0, ii = coordinates.length - 1; i < ii; ++i) {
    const c1 = transform(coordinates[i], projection, 'EPSG:4326')
    const c2 = transform(coordinates[i + 1], projection, 'EPSG:4326')
    length += haversineDistance(c1, c2)
  }
  let output
  if (length > 1000) {
    output =
      parseFloat((length / 1000).toPrecision(precision || 3)) + ' ' + 'km'
  } else {
    output = parseFloat(length.toPrecision(precision || 3)) + ' ' + 'm'
  }
  return output
}

const getFormattedArea = function (polygon: Polygon): string {
  const area = Math.abs(getArea(polygon))
  let output = ''
  if (area > 1000000) {
    output =
      parseFloat((area / 1000000).toPrecision(3)) + ' ' + 'km<sup>2</sup>'
  } else {
    output = parseFloat(area.toPrecision(3)) + ' ' + 'm<sup>2</sup>'
  }
  return output
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
}
