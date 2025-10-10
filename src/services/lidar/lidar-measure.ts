import { select, pointer as d3Mouse } from 'd3-selection'
import type { LidarManager } from '@/services/lidar/lidar-manager'

/**
 * Measure tool for the d3 chart.
 * Provides interactive measurement between two points on the LIDAR profile.
 */
export class LidarMeasure {
  private manager: LidarManager
  private pStart: any & { set?: boolean }
  private pEnd: any & { set?: boolean }

  constructor(manager: LidarManager) {
    this.manager = manager
    this.pStart = {}
    this.pEnd = {}
  }

  /**
   * Clear the current measure.
   */
  clearMeasure(): void {
    this.manager.plot.activateZoom()
    this.pStart = {}
    this.pEnd = {}

    const svg = select('.lidarprofile-container svg.lidar-svg')
    svg.selectAll('#text_m').remove()
    svg.selectAll('#start_m').remove()
    svg.selectAll('#end_m').remove()
    svg.selectAll('#line_m').remove()

    svg.on('click', null)
    svg.style('cursor', 'default')
  }

  /**
   * Activate the measure tool.
   */
  setMeasureActive(): void {
    this.manager.plot.deactivateZoom()
    const svg = select('.lidarprofile-container svg.lidar-svg')
    svg.style('cursor', 'pointer')
    svg.on('click', event => this.measureHeight(event))
  }

  /**
   * Measure and display height after two clicks on the profile.
   */
  private measureHeight(event: MouseEvent): void {
    const svg = select('.lidarprofile-container svg.lidar-svg')
    const svgNode = svg.node()
    const canvasNode = select('.lidarprofile-container .lidar-canvas').node()

    if (!svgNode || !canvasNode) return

    const svgCoordinates = d3Mouse(event, svgNode)
    const canvasCoordinates = d3Mouse(event, canvasNode)
    const margin = this.manager.config.clientConfig.margin
    const xs = svgCoordinates[0]
    const ys = svgCoordinates[1]
    const tolerance = 2
    const sx = this.manager.plot.updateScaleX
    const sy = this.manager.plot.updateScaleY
    const pointSize = 3

    const p = this.manager.utils.getClosestPoint(
      this.manager.profilePoints,
      canvasCoordinates[0],
      canvasCoordinates[1],
      tolerance,
      sx,
      sy,
      this.manager.config.serverConfig.classification_colors
    )

    if (!this.pStart.set) {
      if (p !== undefined) {
        this.pStart.distance = p.distance
        this.pStart.altitude = p.altitude
        this.pStart.cx = sx(p.distance) + margin.left
        this.pStart.cy = sy(p.altitude) + margin.top
      } else {
        this.pStart.distance = sx.invert(xs)
        this.pStart.altitude = sy.invert(ys)
        this.pStart.cx = xs
        this.pStart.cy = ys
      }

      this.pStart.set = true
      svg
        .append('circle')
        .attr('id', 'start_m')
        .attr('cx', this.pStart.cx)
        .attr('cy', this.pStart.cy)
        .attr('r', pointSize)
        .style('fill', 'red')
    } else if (!this.pEnd.set) {
      if (p !== undefined) {
        this.pEnd.distance = p.distance
        this.pEnd.altitude = p.altitude
        this.pEnd.cx = sx(p.distance) + margin.left
        this.pEnd.cy = sy(p.altitude) + margin.top
      } else {
        this.pEnd.distance = sx.invert(xs)
        this.pEnd.altitude = sy.invert(ys)
        this.pEnd.cx = xs
        this.pEnd.cy = ys
      }

      this.pEnd.set = true
      svg
        .append('circle')
        .attr('id', 'end_m')
        .attr('cx', this.pEnd.cx)
        .attr('cy', this.pEnd.cy)
        .attr('r', pointSize)
        .style('fill', 'red')

      svg
        .append('line')
        .attr('id', 'line_m')
        .attr('x1', this.pStart.cx)
        .attr('y1', this.pStart.cy)
        .attr('x2', this.pEnd.cx)
        .attr('y2', this.pEnd.cy)
        .attr('stroke-width', 2)
        .attr('stroke', 'red')
    }

    if (this.pStart.set && this.pEnd.set) {
      const dH = this.pEnd.altitude - this.pStart.altitude
      const dD = this.pEnd.distance - this.pStart.distance
      const height =
        Math.round(10 * Math.sqrt(Math.pow(dH, 2) + Math.pow(dD, 2))) / 10

      if (!isNaN(height)) {
        svg
          .append('text')
          .attr('id', 'text_m')
          .attr('x', 10 + (this.pStart.cx + this.pEnd.cx) / 2)
          .attr('y', (this.pStart.cy + this.pEnd.cy) / 2)
          .text(`${height} m`)
          .attr('font-family', 'sans-serif')
          .attr('font-size', '14px')
          .style('font-weight', 'bold')
          .attr('fill', 'red')
      }
      this.pEnd.set = false
      this.pStart.set = false
    }
  }
}

export default LidarMeasure
