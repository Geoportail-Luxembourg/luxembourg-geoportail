import { Overlay } from 'ol'
import { EventsKey, listen } from 'ol/events'
import { Projection } from 'ol/proj'
import { unByKey } from 'ol/Observable'
import { Circle, Geometry, LineString, Polygon } from 'ol/geom'
import OlMap from 'ol/Map'
import { DrawEvent } from 'ol/interaction/Draw'
import { getLength, getArea } from '@/services/common/measurement.utils'
import { formatLength, formatArea } from '@/services/common/formatting.utils'
import { listen as olListen } from 'ol/events'

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

  /**
   * Create a persistent measurement overlay anchored at the middle of the
   * provided geometry. Returns a disposer function to remove the overlay.
   */
  public createPersistentMeasurement(map: OlMap, geometry: Geometry) {
    const el = document.createElement('div')
    el.classList.add('lux-tooltip')

    const overlay = new Overlay({
      element: el,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
    })
    map.addOverlay(overlay)

    const proj = map.getView().getProjection()

    const update = () => {
      let coord: any = undefined
      let output = ''
      if (geometry.getType() === 'LineString') {
        const geom = geometry as LineString
        coord = geom.getCoordinateAt(0.5)
        if (coord !== null) {
          output = formatLength(getLength(geom, proj), 1)
        }
      } else if (geometry.getType() === 'Polygon') {
        const geom = geometry as Polygon
        const verticesCount = geom.getCoordinates()[0].length
        if (verticesCount > 2) {
          coord = geom.getInteriorPoint().getCoordinates()
        }
        if (coord !== null) {
          output = formatArea(getArea(geom))
        }
      }

      el.innerText = output
      overlay.setPosition(coord)
    }

    const key = olListen(geometry, 'change', update, this)
    update()

    return () => {
      unByKey(key)
      el.parentNode?.removeChild(el)
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
      // Position tooltip at the middle of the line instead of the last vertex
      coord = geom.getCoordinateAt(0.5)
      if (coord !== null) {
        output = formatLength(getLength(geom, proj))
      }
    } else if (geometry.getType() === 'Polygon') {
      const geom = geometry as Polygon
      const verticesCount = geom.getCoordinates()[0].length
      if (verticesCount > 2) {
        coord = geom.getInteriorPoint().getCoordinates()
      }
      if (coord !== null) {
        output = formatArea(getArea(geom))
      }
    } else if (geometry.getType() === 'Circle') {
      const geom = geometry as Circle
      coord = geom.getLastCoordinate()
      const center = geom.getCenter()
      if (center !== null && coord !== null) {
        output = formatLength(
          getLength(new LineString([center, coord]), proj),
          1
        )
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
