import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import CircleStyle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Style from 'ol/style/Style'
import { axisBottom, axisLeft } from 'd3-axis'
import { scaleLinear, ScaleLinear } from 'd3-scale'
import { pointer, select } from 'd3-selection'
import { zoom } from 'd3-zoom'
import i18next from 'i18next'
import { LidarManager } from '@/services/lidar/lidar-manager'
import type { LidarProfilePoints } from '@/services/lidar/lidar.types'
import type {
  ConfigClassification,
  ConfigClassifications,
} from './lidar-config.model'

const d3 = {
  axisBottom,
  axisLeft,
  scaleLinear,
  select,
  zoom,
}

export class LidarPlot {
  private manager_: LidarManager
  public scaleX!: ScaleLinear<number, number>
  public scaleY!: ScaleLinear<number, number>
  public updateScaleX: (x: number) => number = x => x
  public updateScaleY: (y: number) => number = y => y
  public material!: string
  private width_!: number
  private height_!: number
  public previousDomainX: number[] = []
  private zoom_!: any
  private svg_!: any

  constructor(manager: LidarManager) {
    this.manager_ = manager
  }

  drawPoints(points: LidarProfilePoints) {
    const nPoints = points.distance!.length
    const ctx = (d3
      .select('.lidarprofile-container .lidar-canvas')
      .node() as HTMLCanvasElement)!.getContext('2d')!
    const profileServerConfig = this.manager_.config.serverConfig

    for (let i = 0; i < nPoints; ++i) {
      const distance = points.distance![i]
      const altitude = points.altitude![i]
      const rgb = points.color_packed![i]
      const intensity = points.intensity![i]
      const classification = points.classification![i]
      if (
        profileServerConfig.classification_colors[classification] &&
        profileServerConfig.classification_colors[classification].visible
      ) {
        const cx = this.updateScaleX(distance)
        const cy = this.updateScaleY(altitude)

        ctx.beginPath()
        ctx.moveTo(cx, cy)

        if (this.material === 'COLOR_PACKED') {
          ctx.fillStyle = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        } else if (this.material === 'INTENSITY') {
          ctx.fillStyle = `rgb(${intensity}, ${intensity}, ${intensity})`
        } else if (this.material === 'CLASSIFICATION') {
          ctx.fillStyle = `rgb(${profileServerConfig.classification_colors[classification].color})`
        } else {
          ctx.fillStyle = profileServerConfig.default_color
        }
        ctx.arc(cx, cy, profileServerConfig.point_size, 0, 2 * Math.PI, false)
        ctx.fill()
      }
    }
  }

  setupPlot(rangeX: [number, number], rangeY: [number, number]) {
    const canvas = d3.select('.lidarprofile-container .lidar-canvas')
    const canvasEl = canvas.node() as HTMLCanvasElement
    const ctx = canvasEl.getContext('2d')!
    ctx.clearRect(
      0,
      0,
      canvasEl.getBoundingClientRect().width,
      canvasEl.getBoundingClientRect().height
    )

    const margin = this.manager_.config.clientConfig.margin
    const containerEl = d3
      .select('.lidarprofile-container')
      .node() as HTMLElement
    const containerWidth = containerEl.getBoundingClientRect().width
    const containerHeight = containerEl.getBoundingClientRect().height

    this.width_ = Math.max(containerWidth - (margin.left + margin.right), 0)
    this.height_ = Math.max(containerHeight - (margin.top + margin.bottom), 0)

    this.material = this.manager_.config.serverConfig.default_attribute

    canvas
      .attr('height', this.height_)
      .attr('width', this.width_)
      .style('background-color', 'white')
      .style('z-index', 0)
      .style('position', 'absolute')
      .style('margin-left', `${margin.left}px`)
      .style('margin-top', `${margin.top}px`)

    const domainProfileWidth = rangeX[1] - rangeX[0]
    const domainProfileHeight = rangeY[1] - rangeY[0]
    const domainRatio = domainProfileWidth / domainProfileHeight
    const rangeProfileWidth = this.width_
    const rangeProfileHeight = this.height_
    const rangeRatio = rangeProfileWidth / rangeProfileHeight

    if (domainRatio < rangeRatio) {
      this.scaleX = d3.scaleLinear().domain(rangeX).range([0, this.width_])
      this.scaleY = d3.scaleLinear().domain(rangeY).range([this.height_, 0])
    } else {
      const domainScale = domainRatio / rangeRatio
      const domainScaledHeight = domainProfileHeight * domainScale
      const domainHeightCentroid = (rangeY[1] + rangeY[0]) / 2
      this.scaleX = d3.scaleLinear().domain(rangeX).range([0, this.width_])
      this.scaleY = d3
        .scaleLinear()
        .domain([
          domainHeightCentroid - domainScaledHeight / 2,
          domainHeightCentroid + domainScaledHeight / 2,
        ])
        .range([this.height_, 0])
    }

    this.zoom_ = d3
      .zoom<Element, unknown>()
      .scaleExtent([-10, 100])
      .translateExtent([
        [0, 0],
        [this.width_ + 1000, this.height_],
      ])
      .extent([
        [0, 0],
        [this.width_ + 1000, this.height_],
      ])
      .on('zoom', this.zoomed.bind(this))
      .on('end', this.zoomEnd.bind(this))

    this.previousDomainX = this.scaleX.domain()
    this.updateScaleX = this.scaleX
    this.updateScaleY = this.scaleY

    this.svg_ = d3.select('.lidarprofile-container svg.lidar-svg')

    this.svg_.call(this.zoom_).on('dblclick.zoom', null)
    this.svg_.selectAll('*').remove()

    this.svg_
      .attr('width', this.width_ + margin.left)
      .attr('height', this.height_ + margin.top + margin.bottom)

    this.svg_.on('mousemove', (event: MouseEvent) => {
      this.pointHighlight(event)
    })

    const xAxis = d3.axisBottom(this.scaleX)
    const yAxis = d3.axisLeft(this.scaleY).tickSize(-this.width_)

    this.svg_.append('g').attr('class', 'y axis').call(yAxis)
    this.svg_.append('g').attr('class', 'x axis').call(xAxis)

    this.svg_
      .select('.y.axis')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
    this.svg_
      .select('.x.axis')
      .attr(
        'transform',
        `translate(${margin.left}, ${this.height_ + margin.top})`
      )

    this.svg_
      .select('.y.axis')
      .selectAll('g.tick line')
      .style('opacity', '0.5')
      .style('stroke', '#b7cff7')
  }

  activateZoom() {
    this.svg_.call(this.zoom_)
  }

  deactivateZoom() {
    this.svg_.on('.zoom', null)
  }

  zoomEnd() {
    const ctx = (d3
      .select('.lidarprofile-container .lidar-canvas')
      .node() as HTMLCanvasElement)!.getContext('2d')!
    ctx.clearRect(0, 0, this.width_, this.height_)
    this.manager_.updateData()
  }

  zoomed(d3Event: any) {
    this.manager_.clearMeasure()

    const tr = d3Event.transform
    const svg = d3.select('.lidarprofile-container svg.lidar-svg')
    const xAxis = d3.axisBottom(this.scaleX)
    const yAxis = d3.axisLeft(this.scaleY).tickSize(-this.width_)

    const new_scaleX = tr.rescaleX(this.scaleX)
    const new_scaleY = tr.rescaleY(this.scaleY)
    const xAxisWithNewScale = xAxis.scale(new_scaleX)
    const yAxisWithNewScale = yAxis.scale(new_scaleY)

    svg.select('.x.axis').call(<any>xAxisWithNewScale)
    svg.select('.y.axis').call(<any>yAxisWithNewScale)

    const ctx = (d3
      .select('.lidarprofile-container .lidar-canvas')
      .node() as HTMLCanvasElement)!.getContext('2d')!
    ctx.clearRect(0, 0, this.width_, this.height_)

    svg
      .select('.y.axis')
      .selectAll('g.tick line')
      .style('opacity', '0.5')
      .style('stroke', '#b7cff7')

    this.updateScaleX = new_scaleX
    this.updateScaleY = new_scaleY
  }

  pointHighlight(event: MouseEvent) {
    const svg = d3.select('.lidarprofile-container svg.lidar-svg')
    const lidarInfo = d3.select('.lidarprofile-container .lidar-info')
    const pointSize = this.manager_.config.serverConfig.point_size
    const margin = this.manager_.config.clientConfig.margin
    const tolerance = this.manager_.config.clientConfig.tolerance || 0
    const canvas = d3
      .select('.lidarprofile-container .lidar-canvas')
      .node() as Element
    const canvasCoordinates = pointer(event, canvas)

    const classification_colors =
      this.manager_.config.serverConfig.classification_colors

    const p = this.manager_.utils.getClosestPoint(
      this.manager_.profilePoints,
      canvasCoordinates[0],
      canvasCoordinates[1],
      tolerance,
      this.updateScaleX,
      this.updateScaleY,
      classification_colors
    )

    if (p != undefined) {
      const cx = this.updateScaleX(p.distance) + margin.left
      const cy = this.updateScaleY(p.altitude) + margin.top

      svg.selectAll('#highlightCircle').remove()

      svg
        .append('circle')
        .attr('id', 'highlightCircle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', pointSize + 3)
        .style('fill', 'red')

      const pClassification = p.classification ?? -1
      const pointClassification = classification_colors[pClassification] || {}

      const html = this.getInfoHTML(p, pointClassification, 1)

      lidarInfo.html(html)
      this.manager_.cartoHighlight.setElement(undefined)
      const el = document.createElement('div')
      el.className += 'tooltip gmf-tooltip-measure'
      el.innerHTML = html

      this.manager_.cartoHighlight.setElement(el)
      const lidarPointGeom = new Point([p.coords[0], p.coords[1]]).transform(
        'EPSG:2169',
        'EPSG:3857'
      )
      this.manager_.cartoHighlight.setPosition(lidarPointGeom.getCoordinates())
      const lidarPointHighlightSource =
        this.manager_.lidarPointHighlight.getSource()
      if (lidarPointHighlightSource) {
        lidarPointHighlightSource.clear()
      }
      const lidarPointFeature = new Feature(lidarPointGeom)
      if (typeof pointClassification.color !== 'undefined') {
        lidarPointFeature.setStyle(
          new Style({
            image: new CircleStyle({
              fill: new Fill({
                color: `rgba(${pointClassification.color}, 1)`,
              }),
              radius: 3,
            }),
          })
        )
      }
      if (lidarPointHighlightSource) {
        lidarPointHighlightSource.addFeature(lidarPointFeature)
      }
    } else {
      const lidarPointHighlightSource =
        this.manager_.lidarPointHighlight.getSource()
      if (lidarPointHighlightSource) {
        lidarPointHighlightSource.clear()
      }
      svg.select('#highlightCircle').remove()
      lidarInfo.html('')
      this.manager_.cartoHighlight.setPosition(undefined)
    }
  }

  getInfoHTML(
    point: any,
    classification_color: ConfigClassification,
    distDecimal: number
  ): string {
    const number = (x: number, decimal: number) =>
      parseFloat(`${x}`).toFixed(decimal)

    const distance = point.distance
    const altitude = point.altitude
    const classificationValue = classification_color.name
      ? classification_color.name[
          i18next.language as keyof typeof classification_color.name
        ]
      : ''
    const classification: string =
      classificationValue !== undefined && classificationValue !== null
        ? String(classificationValue)
        : ''
    const intensity = point.intensity

    const html: string[] = []
    if (distance !== undefined) {
      const distanceTxt = i18next.t('Distance: ')
      html.push(`${distanceTxt + number(distance, distDecimal)}`)
    }
    if (altitude !== undefined) {
      const altitudeTxt = i18next.t('Altitude: ')
      html.push(`${altitudeTxt + number(altitude, distDecimal)}`)
    }
    if (classification.length > 0) {
      const classificationTxt = i18next.t('Classification: ')
      html.push(`${classificationTxt + classification}`)
    }
    if (intensity !== undefined) {
      const intensityTxt = i18next.t('Intensity: ')
      html.push(`${intensityTxt + number(intensity, 0)}`)
    }

    return html.join('</br>')
  }

  changeStyle(material: string) {
    this.material = material
    this.clear()
    this.drawPoints(this.manager_.profilePoints)
  }

  clear() {
    const canvasEl = d3
      .select('.lidarprofile-container .lidar-canvas')
      .node() as HTMLCanvasElement
    const ctx = canvasEl.getContext('2d')!
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
  }

  setClassActive(classification: ConfigClassifications, material: string) {
    this.manager_.config.serverConfig.classification_colors = classification
    this.changeStyle(material)
  }
}

export default LidarPlot
