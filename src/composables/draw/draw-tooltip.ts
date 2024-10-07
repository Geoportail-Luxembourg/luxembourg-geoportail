import { Overlay } from 'ol'
import { EventsKey, listen } from 'ol/events'
import { Projection } from 'ol/proj'
import { unByKey } from 'ol/Observable'
import { Circle, Geometry, LineString, Polygon } from 'ol/geom'
import OlMap from 'ol/Map'
import { DrawEvent } from 'ol/interaction/Draw'
import {
  getFormattedLength,
  getFormattedArea,
} from '@/services/common/measurement.utils'

class DrawTooltip {
  private measureTooltipElement: HTMLElement | null = null
  private measureTooltipOverlay: Overlay | null = null
  private changeEventKey: EventsKey | null = null

  public add(map: OlMap, event: DrawEvent) {
    this.createMeasureTooltip(map)
    const geometry = event.feature.getGeometry()
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
        output = getFormattedLength(geom, proj)
      }
    } else if (geometry.getType() === 'Polygon') {
      const geom = geometry as Polygon
      const verticesCount = geom.getCoordinates()[0].length
      if (verticesCount > 2) {
        coord = geom.getInteriorPoint().getCoordinates()
      }
      if (coord !== null) {
        output = getFormattedArea(geom)
      }
    } else if (geometry.getType() === 'Circle') {
      const geom = geometry as Circle
      coord = geom.getLastCoordinate()
      const center = geom.getCenter()
      if (center !== null && coord !== null) {
        output = getFormattedLength(new LineString([center, coord]), proj)
      }
    }
    if (this.measureTooltipElement) {
      this.measureTooltipElement.innerText = output
      this.measureTooltipOverlay?.setPosition(coord)
    }
  }
}

const drawTooltip = new DrawTooltip()
export default drawTooltip
