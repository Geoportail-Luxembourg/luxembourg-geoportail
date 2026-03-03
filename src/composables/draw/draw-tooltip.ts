import { Overlay } from 'ol'
import type { Coordinate } from 'ol/coordinate'
import { EventsKey, listen } from 'ol/events'
import { Projection } from 'ol/proj'
import { unByKey } from 'ol/Observable'
import { Circle, Geometry, LineString, Polygon } from 'ol/geom'
import OlMap from 'ol/Map'
import { DrawEvent } from 'ol/interaction/Draw'
import Feature from 'ol/Feature'
import { Style, Stroke, Fill, Text } from 'ol/style'
import { getLength, getArea } from '@/services/common/measurement.utils'
import { formatLength, formatArea } from '@/services/common/formatting.utils'

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
   * Create a persistent measurement label by applying an OL Text style directly
   * on the feature. This replaces the HTML overlay so the label is encoded by
   * mapfishprint and appears in printed output.
   * Returns a disposer function that resets the feature style.
   */
  public createPersistentMeasurement(
    map: OlMap,
    geometry: Geometry,
    feature: Feature
  ) {
    const proj = map.getView().getProjection()

    const isLine = geometry.getType() === 'LineString'
    const isPoly = geometry.getType() === 'Polygon'

    const measureStroke = new Stroke({
      color: '#ff8c00',
      width: isLine ? 4 : 3,
    })
    const measureFill = isPoly
      ? new Fill({ color: 'rgba(255,140,0,0.15)' })
      : undefined
    const textFill = new Fill({ color: '#333333' })
    const textStroke = new Stroke({ color: '#ffffff', width: 3 })

    const getLabel = (): { text: string; coord: Coordinate | undefined } => {
      let coord: Coordinate | undefined
      let text = ''
      if (isLine) {
        const geom = geometry as LineString
        coord = geom.getCoordinateAt(0.5)
        if (coord) text = formatLength(getLength(geom, proj), 1)
      } else if (isPoly) {
        const geom = geometry as Polygon
        const verts = geom.getCoordinates()[0].length
        if (verts > 2) coord = geom.getInteriorPoint().getCoordinates()
        if (coord) text = formatArea(getArea(geom))
      }
      return { text, coord }
    }

    const applyStyle = () => {
      const { text } = getLabel()
      feature.setStyle(
        new Style({
          stroke: measureStroke,
          fill: measureFill,
          text: text
            ? new Text({
                text,
                font: 'bold 13px sans-serif',
                fill: textFill,
                stroke: textStroke,
                overflow: true,
              })
            : undefined,
        })
      )
    }

    applyStyle()

    // Keep style updated if geometry changes (shouldn't happen after drawend, but defensive)
    const key = listen(geometry, 'change', applyStyle, this)

    return () => {
      try {
        unByKey(key)
      } catch (_) {
        // ignore
      }
      // Reset to no explicit style so the layer default applies
      feature.setStyle(undefined)
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
    let coord: Coordinate | undefined = undefined
    let output = ''
    if (geometry.getType() === 'LineString') {
      const geom = geometry as LineString
      // Position tooltip at the middle of the line instead of the last vertex
      coord = geom.getCoordinateAt(0.5)
      if (coord != null) {
        output = formatLength(getLength(geom, proj))
      }
    } else if (geometry.getType() === 'Polygon') {
      const geom = geometry as Polygon
      const verticesCount = geom.getCoordinates()[0].length
      if (verticesCount > 2) {
        coord = geom.getInteriorPoint().getCoordinates()
      }
      if (coord != null) {
        output = formatArea(getArea(geom))
      }
    } else if (geometry.getType() === 'Circle') {
      const geom = geometry as Circle
      coord = geom.getLastCoordinate()
      const center = geom.getCenter()
      if (center != null && coord != null) {
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
