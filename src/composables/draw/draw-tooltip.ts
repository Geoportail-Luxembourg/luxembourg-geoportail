import { Overlay } from 'ol'
import { EventsKey, listen } from 'ol/events'
import { Projection, transform } from 'ol/proj'
import { getDistance as haversineDistance, getArea } from 'ol/sphere'
import { unByKey } from 'ol/Observable'
import { Circle, Geometry, LineString, Polygon } from 'ol/geom'
import OlMap from 'ol/Map'
import { DrawEvent } from 'ol/interaction/Draw'

class DrawTooltip {
  private measureTooltipElement: HTMLElement | null = null
  private measureTooltipOverlay: Overlay | null = null
  private changeEventKey: EventsKey | null = null

  public add(map: OlMap, event: DrawEvent) {
    this.createMeasureTooltip(map)
    const geometry = event.feature.getGeometry()
    console.assert(geometry !== undefined)
    if (geometry === undefined) return
    const proj = map.getView().getProjection()

    this.changeEventKey = listen(
      geometry,
      'change',
      () => this.updateTootip(geometry, proj),
      this
    )
  }

  public remove() {
    this.removeMeasureTooltip()

    if (this.changeEventKey !== null) {
      unByKey(this.changeEventKey)
      this.changeEventKey = null
    }
  }

  private createMeasureTooltip(map: OlMap) {
    this.removeMeasureTooltip()
    this.measureTooltipElement = document.createElement('div')
    this.measureTooltipElement.classList.add('lux-tooltip')

    this.measureTooltipOverlay = new Overlay({
      element: this.measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
    })
    map.addOverlay(this.measureTooltipOverlay)
  }

  private removeMeasureTooltip() {
    if (this.measureTooltipElement !== null) {
      this.measureTooltipElement.parentNode?.removeChild(
        this.measureTooltipElement
      )
      this.measureTooltipElement = null
      this.measureTooltipOverlay = null
    }
  }

  private updateTootip(geometry: Geometry, proj: Projection) {
    let coord = undefined
    let output = ''
    if (geometry.getType() === 'LineString') {
      const geom = geometry as LineString
      coord = geom.getLastCoordinate()
      if (coord !== null) {
        output = this.getFormattedLength(geom, proj)
      }
    } else if (geometry.getType() === 'Polygon') {
      const geom = geometry as Polygon
      const verticesCount = geom.getCoordinates()[0].length
      if (verticesCount > 2) {
        coord = geom.getInteriorPoint().getCoordinates()
      }
      if (coord !== null) {
        output = this.getFormattedArea(geom)
      }
    } else if (geometry.getType() === 'Circle') {
      const geom = geometry as Circle
      coord = geom.getLastCoordinate()
      const center = geom.getCenter()
      if (center !== null && coord !== null) {
        output = this.getFormattedLength(new LineString([center, coord]), proj)
      }
    }
    if (this.measureTooltipElement) {
      this.measureTooltipElement.innerHTML = output
      this.measureTooltipOverlay?.setPosition(coord)
    }
  }

  private getFormattedLength(
    lineString: LineString,
    projection: Projection
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
      output = parseFloat((length / 1000).toPrecision(3)) + ' ' + 'km'
    } else {
      output = parseFloat(length.toPrecision(3)) + ' ' + 'm'
    }
    return output
  }

  private getFormattedArea(polygon: Polygon): string {
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
}

const drawTooltip = new DrawTooltip()
export default drawTooltip
