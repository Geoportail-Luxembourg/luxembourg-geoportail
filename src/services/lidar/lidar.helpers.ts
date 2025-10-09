import olFeature from 'ol/Feature'
import olGeomLineString from 'ol/geom/LineString'
import olGeomPoint from 'ol/geom/Point'
import olStyleFill from 'ol/style/Fill'
import olStyleRegularShape from 'ol/style/RegularShape'
import olStyleStroke from 'ol/style/Stroke'
import olStyleStyle from 'ol/style/Style'
import type { Coordinate } from 'ol/coordinate'
import { saveAs } from 'file-saver'
import { select } from 'd3-selection'
import type { LidarProfilePoints } from './lidar.types'
const d3 = { select }

export class LidarHelpers {
  /**
   * Clip a linstring with start and end measure given by D3 Chart domain
   * returns Object with clipped lined coordinates and left domain value
   */
  clipLineByMeasure(
    linestring: olGeomLineString,
    dLeft: number,
    dRight: number
  ): {
    clippedLine: Coordinate[]
    bufferGeom: olFeature
    distanceOffset: number
    bufferStyle: olStyleStyle[]
  } {
    const clippedLine = new olGeomLineString([])
    let mileage_start = 0
    let mileage_end = 0

    const totalLength = linestring.getLength()
    const fractionStart = dLeft / totalLength
    const fractionEnd = dRight / totalLength

    let segNumber = linestring.getCoordinates().length - 1
    let counter = 0

    linestring.forEachSegment((segStart, segEnd) => {
      counter += 1
      const segLine = new olGeomLineString([segStart, segEnd])
      mileage_end += segLine.getLength()

      if (dLeft == mileage_start) {
        clippedLine.appendCoordinate(segStart)
      } else if (dLeft > mileage_start && dLeft < mileage_end) {
        clippedLine.appendCoordinate(linestring.getCoordinateAt(fractionStart))
      }

      if (mileage_start > dLeft && mileage_start < dRight) {
        clippedLine.appendCoordinate(segStart)
      }

      if (dRight == mileage_end) {
        clippedLine.appendCoordinate(segEnd)
      } else if (dRight > mileage_start && dRight < mileage_end) {
        clippedLine.appendCoordinate(linestring.getCoordinateAt(fractionEnd))
      } else if (
        dRight > mileage_start &&
        dRight > mileage_end &&
        counter === segNumber
      ) {
        clippedLine.appendCoordinate(linestring.getCoordinateAt(fractionEnd))
      }

      mileage_start += segLine.getLength()
    })

    // Return clippedLine in original projection to request new lidar data
    const clippedLineLidarProjection = clippedLine.clone()
    const feat = new olFeature({
      geometry: clippedLine.transform('EPSG:2169', 'EPSG:3857'),
    })

    const lineStyle = new olStyleStyle({
      stroke: new olStyleStroke({
        color: 'rgba(255,0,0,1)',
        width: 2,
        lineCap: 'square',
      }),
    })

    let firstSegmentAngle = 0
    let lastSegementAngle = 0

    segNumber = clippedLine.getCoordinates().length - 1
    let segCounter = 1

    clippedLine.forEachSegment((start, end) => {
      if (segCounter == 1) {
        const dx = end[0] - start[0]
        const dy = end[1] - start[1]
        firstSegmentAngle = Math.atan2(dx, dy)
      }

      if (segCounter == segNumber) {
        const dx = end[0] - start[0]
        const dy = end[1] - start[1]
        lastSegementAngle = Math.atan2(dx, dy)
      }
      segCounter += 1
    })

    const styles = [lineStyle]
    const lineEnd = clippedLine.getLastCoordinate()
    const lineStart = clippedLine.getFirstCoordinate()

    styles.push(
      new olStyleStyle({
        geometry: new olGeomPoint(lineStart),
        image: new olStyleRegularShape({
          fill: new olStyleFill({ color: 'rgba(255, 0, 0, 1)' }),
          stroke: new olStyleStroke({
            color: 'rgba(255,0,0,1)',
            width: 1,
            lineCap: 'square',
          }),
          points: 3,
          radius: 5,
          rotation: firstSegmentAngle,
          angle: Math.PI / 3,
        }),
      }),
      new olStyleStyle({
        geometry: new olGeomPoint(lineEnd),
        image: new olStyleRegularShape({
          fill: new olStyleFill({ color: 'rgba(255, 0, 0, 1)' }),
          stroke: new olStyleStroke({
            color: 'rgba(255,0,0,1)',
            width: 1,
            lineCap: 'square',
          }),
          points: 3,
          radius: 5,
          rotation: lastSegementAngle,
          angle: (4 * Math.PI) / 3,
        }),
      })
    )

    return {
      clippedLine: clippedLineLidarProjection.getCoordinates(),
      distanceOffset: dLeft,
      bufferGeom: feat,
      bufferStyle: styles,
    }
  }

  /**
   * Get a Level Of Details and with for a given chart span
   * Configuration is set up in Pytree configuration
   * return Object with optimized Level Of Details and width for this profile span
   */
  getNiceLOD(span: number, max_levels: any): { maxLOD: number; width: number } {
    let maxLOD = 0
    let width = 0
    for (const key in max_levels) {
      const level = parseInt(key, 10)
      if (span < level && max_levels[level].max > maxLOD) {
        maxLOD = max_levels[level].max
        width = max_levels[level].width
      }
    }
    return { maxLOD, width }
  }

  /**
   * Create a image file by combining SVG and canvas elements and let the user downloads it.
   */
  downloadProfileAsImageFile(profileClientConfig: any) {
    const profileSVG = d3.select('.lidarprofile-container svg.lidar-svg')
    const w = parseInt(profileSVG.attr('width'), 10)
    const h = parseInt(profileSVG.attr('height'), 10)
    const margin = profileClientConfig.margin

    // Create a new canvas element to avoid manipulate the one with profile.
    const canvas = document.createElement('canvas')
    canvas.style.display = 'none'
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, w, h)

      // Draw the profile canvas (the points) into the new canvas.
      const profileCanvasNode = d3
        .select('.lidarprofile-container .lidar-canvas')
        .node()
      if (profileCanvasNode instanceof HTMLCanvasElement) {
        ctx.drawImage(
          profileCanvasNode,
          margin.left,
          margin.top,
          w - (margin.left + margin.right),
          h - (margin.top + margin.bottom)
        )
      }

      // Add transforms the profile into an image.
      const exportImage = new Image()
      const serializer = new XMLSerializer()
      const svgNode = profileSVG.node()
      const svgStr = serializer.serializeToString(svgNode as Node)

      // Draw the image of the profile into the context of the new canvas.
      const img_id = 'lidar_profile_for_export_uid'
      exportImage.id = img_id
      exportImage.src = `data:image/svg+xml;base64, ${btoa(svgStr)}`
      exportImage.style.setProperty('display', 'none')
      const body = document.getElementsByTagName('body')[0]
      // The image must be loaded to be drawn.
      exportImage.onload = () => {
        ctx.drawImage(exportImage, 0, 0, w, h)
        const exportImgElem = document.getElementById(img_id)
        if (exportImgElem) {
          body.removeChild(exportImgElem)
        }
        // Let the user download the image.
        canvas.toBlob(blob => {
          saveAs(blob, 'LIDAR_profile.png')
        })
      }
      body.appendChild(exportImage)
    }
  }

  /**
   * Transforms a lidarprofile into multiple single points sorted by distance.
   * returns An array of Lidar Points.
   */
  getFlatPointsByDistance(profilePoints: any): any[] {
    const points = []
    for (let i = 0; i < profilePoints.distance.length; i++) {
      const p = {
        distance: profilePoints.distance[i],
        altitude: profilePoints.altitude[i],
        color_packed: profilePoints.color_packed[i],
        intensity: profilePoints.intensity[i],
        classification: profilePoints.classification[i],
        coords: profilePoints.coords[i],
      }
      points.push(p)
    }
    points.sort((a, b) => a.distance - b.distance)
    return points
  }

  /**
   * Get the data for a CSV export of the profile.
   * @param {gmfx.LidarPoint} points a lidar profile points object.
   * @return {Array.<Object>} Objects for a csv export (column: value).
   * @export
   */
  getCSVData(points: Array<{ [key: string]: any }>): any[] {
    return points.map(point => {
      const row: Record<string, any> = {}
      for (const key in point) {
        const value = point[key]
        if (key == 'altitude') {
          row[key] = value ? value.toFixed(4) : null
        } else if (key == 'color_packed' || key == 'coords') {
          row[key] = value ? value.join(' ') : null
        } else {
          row[key] = value
        }
      }
      return row
    })
  }

  /**
   * Find the maximum value in an array of numbers
   * returns the maximum of input array
   */
  arrayMax(array: number[]): number {
    return Math.max(...array)
  }

  /**
   * Find the minimum value in an array of numbers
   * returns the minimum of input array
   */
  arrayMin(array: number[]): number {
    let minVal = Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i] < minVal) {
        minVal = array[i]
      }
    }
    return minVal
  }

  /**
   * Transform Openlayers linestring into a cPotree compatible definition
   * returns linestring in a cPotree/pytree compatible string definition
   */
  getPytreeLinestring(line: olGeomLineString): string {
    const coords = line.getCoordinates()
    let pytreeLineString = ''
    for (let i = 0; i < coords.length; i++) {
      const px = coords[i][0]
      const py = coords[i][1]
      pytreeLineString += `{${Math.round(100 * px) / 100}, ${
        Math.round(100 * py) / 100
      }},`
    }
    return pytreeLineString.slice(0, -1)
  }

  /**
   * Find the profile's closest point in profile data to the chart mouse position
   * @param {gmfx.LidarprofilePoints} points Object containing points properties as arrays
   * @param {number} xs mouse x coordinate on canvas element
   * @param {number} ys mouse y coordinate on canvas element
   * @param {number} tolerance snap sensibility
   * @param {Function} sx d3.scalelinear x scale
   * @param {Function} sy d3.scalelinear y scale
   * @param {lidarprofileServer.ConfigClassifications} classification_colors classification colors
   * @return {gmfx.LidarPoint} closestPoint the closest point to the clicked coordinates
   */
  getClosestPoint(
    points: LidarProfilePoints,
    xs: number,
    ys: number,
    tolerance: number,
    sx: Function,
    sy: Function,
    classification_colors: any
  ): any {
    const d = points
    const tol = tolerance
    const distances = []
    const hP = []

    if (
      d.distance &&
      d.altitude &&
      d.classification &&
      d.color_packed &&
      d.intensity &&
      d.coords
    ) {
      for (let i = 0; i < d.distance.length; i++) {
        if (
          sx(d.distance[i]) < xs + tol &&
          sx(d.distance[i]) > xs - tol &&
          sy(d.altitude[i]) < ys + tol &&
          sy(d.altitude[i]) > ys - tol
        ) {
          const pDistance = Math.sqrt(
            Math.pow(sx(d.distance[i]) - xs, 2) +
              Math.pow(sy(d.altitude[i]) - ys, 2)
          )
          const cClassif = classification_colors[d.classification[i]]
          if (cClassif && cClassif.visible == 1) {
            hP.push({
              distance: d.distance[i],
              altitude: d.altitude[i],
              classification: d.classification[i],
              color_packed: d.color_packed[i],
              intensity: d.intensity[i],
              coords: d.coords[i],
            })
            distances.push(pDistance)
          }
        }
      }
    }

    let closestPoint

    if (hP.length > 0) {
      const minDist = Math.min(...distances)
      const indexMin = distances.indexOf(minDist)
      if (indexMin != -1) {
        closestPoint = hP[indexMin]
      } else {
        closestPoint = hP[0]
      }
    }
    return closestPoint
  }
}

export default LidarHelpers
