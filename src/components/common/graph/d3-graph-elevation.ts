import 'd3-transition'
import { bisector, extent } from 'd3-array'
import { axisBottom, axisLeft } from 'd3-axis'
import { ScaleLinear, scaleLinear } from 'd3-scale'
import {
  type BaseType,
  pointer,
  select,
  selectAll,
  Selection,
  KeyType,
} from 'd3-selection' // nb. pointer has replaced mouse in last version of d3
import { area, line } from 'd3-shape'
import * as olObj from 'ol/obj'

import { Elevations, Poi, ProfileOptions } from './d3-graph-elevation.d'

const d3 = {
  bisector,
  extent,
  axisBottom,
  axisLeft,
  scaleLinear,
  pointer,
  select,
  selectAll,
  area,
  line,
}

const DEFAULT_GRAPH_UNIT = 'm'
const DEFAULT_GRAPH_UNIT_1000 = 'km'

/**
 * Provides a D3js composable to be used to draw an elevation profile chart.
 *
 *     let selection = d3.select('#element_id');
 *     let profile = D3GraphElevation({
 *       distanceExtractor: function (item) {return item['dist'];},
 *       linesConfiguration: {
 *         'lineZ1': {
 *           zExtractor: function (item) {return item['values']['z1'];}
 *         },
 *         'lineZ2': {
 *           color: '#00F',
 *           zExtractor: function (item) {return item['values']['z2'];}
 *         }
 *       },
 *       hoverCallback: function(point, dist, xUnits, elevations, yUnits) {
 *         console.log(point.x, point.y);
 *       },
 *       outCallback: function() {
 *         console.log("out");
 *       }
 *     });
 *     selection.datum(data).call(profile);
 *
 * The selection data must be an array.
 * The layout for the items of this array is unconstrained: the distance values
 * is extracted using the distanceExtractor config option and multiples z values
 * can be displayed by providing multiple linesConfiguration with its specific
 * zExtractor.
 * Optionally you can provide a color in your linesConfiguration. A line without
 * color will be red. Each linesConfiguration name is used as class for its
 * respective line. So you can pass a styleDefs config option (inline css) to
 * customize the line or all the chart.
 * Optionally, POIs can be displayed and depend on a poiExtractor
 * config option.
 *
 * The data below will work for the above example:
 *
 *     [
 *         {
 *             "y": 199340,
 *             "values": {"z1": 788.7, "z2": 774.2},
 *             "dist": 0.0,
 *             "x": 541620
 *         }, ...
 *     ]
 */
export default function D3GraphElevation(options: ProfileOptions) {
  /**
   * Whether the simplified profile should be shown.
   */
  const light = options.light !== undefined ? options.light : false

  /**
   * The values for margins around the chart defined in pixels.
   */
  const margin = light
    ? { top: 0, right: 0, bottom: 0, left: 0 }
    : { top: 10, right: 20, bottom: 30, left: 40 }

  /**
   * Hover callback function.
   */
  const hoverCallback =
    options.hoverCallback !== undefined ? options.hoverCallback : () => {}

  /**
   * Out callback function.
   */
  const outCallback =
    options.outCallback !== undefined ? options.outCallback : () => {}

  /**
   * Distance data extractor used to get the dist values.
   */
  const distanceExtractor = options.distanceExtractor

  /**
   * Line configuration object.
   */
  const linesConfiguration = options.linesConfiguration

  /**
   * Number of different configurations for the line.
   */
  const numberOfLines = Object.keys(linesConfiguration).length

  /**
   * Method to get the coordinate in pixels from a distance.
   */
  const bisectDistance = d3.bisector(d => distanceExtractor(d)).left

  /**
   * POI data extractor.
   */
  const poiExtractor = options.poiExtractor

  /**
   * Optional SVG inline style.
   */
  const styleDefs = options.styleDefs

  const poiLabelAngle =
    options.poiLabelAngle !== undefined ? options.poiLabelAngle : -60

  const xAxisLabel = options.i18n?.xAxis || 'Distance'
  const yAxisLabel = options.i18n?.yAxis || 'Elevation'

  const formatter = {
    xhover: (distance: number, units = DEFAULT_GRAPH_UNIT) =>
      `${parseFloat(distance.toPrecision(3))} ${units}`,
    yhover: (elevation: number, units = DEFAULT_GRAPH_UNIT) =>
      elevation !== null ? `${Math.round(elevation)} ${units}` : '',
    xtick: (distance: number) => String(distance),
    ytick: (elevation: number) => String(elevation),
  }

  if (typeof options.formatter !== 'undefined') {
    olObj.assign(formatter, options.formatter)
  }

  const lightXAxis =
    options.lightXAxis !== undefined ? options.lightXAxis : false

  // Objects shared with the showPois function
  let svg: Selection<BaseType, any, any, unknown>

  /**
   * D3 x scale.
   */
  let x: ScaleLinear<number, number, never>

  /**
   * D3 y scale.
   */
  let y: ScaleLinear<number, number, never>

  /**
   * Scale modifier to allow customizing the x and y scales.
   */
  const scaleModifier = options.scaleModifier

  let g: Selection<BaseType, any, any, unknown>

  /**
   * Height of the chart in pixels
   */
  let height: number

  /**
   * Width of the chart in pixels
   */
  let width: number

  /**
   * Factor to determine whether to use 'm' or 'km'.
   */
  let xFactor: number

  /**
   * Distance units. Either 'm' or 'km'.
   */
  let xUnits: string

  /**
   * D3 extent of the distance.
   */
  let xDomain: number[]

  const profile = (
    selection: Selection<SVGElement, Iterable<any>, HTMLElement, any>
  ) => {
    selection.each(function (data) {
      d3.select(this).selectAll('svg').remove()
      if (data === undefined) {
        return
      }

      width = Math.max(this.clientWidth - margin.right - margin.left, 0)
      x = d3.scaleLinear().range([0, width])

      height = Math.max(this.clientHeight - margin.top - margin.bottom, 0)
      y = d3.scaleLinear().range([height, 0])

      const xAxis = d3.axisBottom(x)
      const yAxis = d3.axisLeft(y)

      const area =
        numberOfLines === 1
          ? d3
              .area()
              .x(d => x(distanceExtractor(d)))
              .y0(height)
              .y1(d => {
                const firstLineName = Object.keys(linesConfiguration)[0]
                return y(linesConfiguration[firstLineName].zExtractor(d))
              })
          : undefined

      // Select the svg element, if it exists.
      svg = d3.select(this).selectAll('svg').data([data])
      // Otherwise, create the skeletal chart.
      const svgEnter = svg.enter().append('svg')
      // Then select it again to get the complete object.
      svg = d3.select(this).selectAll('svg').data([data])

      if (styleDefs !== undefined) {
        svgEnter
          .append('defs')
          .append('style')
          .attr('type', 'text/css')
          .text(styleDefs)
      }
      const gEnter = svgEnter.append('g')

      clearPois()

      gEnter.style('font', '11px Arial')

      if (numberOfLines === 1) {
        gEnter
          .append('path')
          .attr('class', 'area')
          .style('fill', 'rgba(222, 222, 222, 0.5)')
      }

      gEnter.insert('g', ':first-child').attr('class', 'grid-y')

      if (!light) {
        gEnter
          .append('g')
          .attr('class', 'x axis')
          .attr('transform', `translate(0,${height})`)

        gEnter
          .append('text')
          .attr('class', 'x label')
          .attr('text-anchor', 'end')
          .attr('x', width - 4)
          .attr('y', height - 4)

        gEnter.append('g').attr('class', 'y axis')

        gEnter
          .append('text')
          .attr('class', 'y label')
          .attr('text-anchor', 'end')
          .attr('y', 6)
          .attr('dy', '.75em')
          .attr('transform', 'rotate(-90)')
          .style('fill', 'grey')
          .text(`${yAxisLabel} [m]`)

        gEnter
          .append('g')
          .attr('class', 'metas')
          .attr('transform', `translate(${width + 3}, 0)`)
      }

      gEnter.append('g').attr('class', 'pois')

      const xHover = gEnter.append('g').attr('class', 'x grid-hover')
      xHover.append('svg:line').attr('stroke-dasharray', '5,5')
      xHover.append('text')

      gEnter
        .append('rect')
        .attr('class', 'overlay')
        .attr('width', width)
        .attr('height', height)
        .style('fill', 'none')
        .style('pointer-events', 'all')

      // Update the outer dimensions.
      svg
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)

      // Update the inner dimensions.
      g = svg
        .select('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)

      xDomain = <number[]>d3.extent(data, d => distanceExtractor(d))
      x.domain(xDomain)

      // Return an array with the min and max value of the min/max values of
      // each lines.
      const yDomain = (function () {
        let elevationsValues: number[] = []
        // Get min/max values (extent) of each lines.
        for (const name in linesConfiguration) {
          const extent = <number[]>(
            d3.extent(data, d => linesConfiguration[name].zExtractor(d))
          )
          // only include defined extent
          if (extent.every(Number.isFinite)) {
            elevationsValues = elevationsValues.concat(extent)
          }
        }
        return [
          Math.min.apply(null, elevationsValues),
          Math.max.apply(null, elevationsValues),
        ]
      })()

      y.domain(yDomain)

      // set the ratio according to the horizontal distance
      if (scaleModifier !== undefined) {
        scaleModifier(x, y, width, height)
      } else {
        // By default, add a small padding so that it looks nicer
        const padding = (yDomain[1] - yDomain[0]) * 0.1
        y.domain([yDomain[0] - padding, yDomain[1] + padding])
      }

      // Update the area path.
      if (numberOfLines === 1) {
        g.select('.area')
          .transition()
          .attr('d', <any>area) // TODO: find better typing than any
      }

      // Set style and update the lines paths and y hover guides for each lines.
      let line, name: string, yHover
      for (name in linesConfiguration) {
        // Set style of each line and add a class with its respective name.
        gEnter
          .append('path')
          .attr('class', `line ${name}`)
          .style('stroke', linesConfiguration[name].color || '#F00')
          .style('fill', 'none')

        // Set y hover guides
        yHover = gEnter.append('g').attr('class', `y grid-hover ${name}`)
        yHover.append('svg:line').attr('stroke-dasharray', '5,5')
        yHover.append('text')

        // Configure the d3 line.
        line = d3
          .line()
          .x(d => x(distanceExtractor(d)))
          .y(d => y(linesConfiguration[name].zExtractor(d)))
          .defined(d => linesConfiguration[name].zExtractor(d) !== null)

        // Update path for the line.
        g.select(`.line.${name}`).transition().attr('d', line)
      }

      if (xDomain[1] > 2000) {
        xFactor = 1000
        xUnits = DEFAULT_GRAPH_UNIT_1000
      } else {
        xFactor = 1
        xUnits = DEFAULT_GRAPH_UNIT
      }

      if (!light) {
        xAxis.tickFormat(d => formatter.xtick(<number>d / xFactor))
        if (lightXAxis) {
          xAxis.tickValues([0, x.domain()[1]])
        }

        yAxis.tickFormat(d => formatter.ytick(<number>d))

        g.select('.x.axis')
          .transition()
          .call(<any>xAxis)

        g.select('.x.label')
          .text(`${xAxisLabel} [${xUnits}]`)
          .style('fill', 'grey')
          .style('shape-rendering', 'crispEdges')

        // Avoid too much lines with overlapping labels in small profiles
        if (height / 15 < 10) {
          yAxis.ticks(height / 15)
        }

        g.select('.y.axis')
          .transition()
          .call(<any>yAxis)
      }

      g.select('.grid-y')
        .transition()
        .call(<any>yAxis.tickSize(-width).tickFormat(() => ''))
        .selectAll('.tick line')
        .style('stroke', '#ccc')
        .style('opacity', 0.7)

      g.selectAll('.axis')
        .selectAll('path, line')
        .style('fill', 'none')
        .style('stroke', '#000')
        .style('shape-rendering', 'crispEdges')

      g.select('.grid-y').select('path').style('stroke', 'none')

      g.selectAll('.grid-hover line')
        .style('stroke', '#222')
        .style('opacity', 0.8)

      g.select('.overlay')
        .on('mouseout', () => profile.clearHighlight())
        .on('mousemove', event => {
          const [mouseX] = d3.pointer(event)
          const x0 = x.invert(mouseX)

          profile.highlight(x0)
        })
    })
  }

  /**
   * Remove any highlight.
   * Fire the outCallback callback.
   */
  profile.clearHighlight = () => {
    g.selectAll('.grid-hover').style('display', 'none')
    outCallback.call(null)
  }

  /**
   * Highlight the given distance and corresponding elevation on chart.
   * Fire the hoverCallback callback with corresponding point.
   * @param {number} distance Distance.
   */
  profile.highlight = (distance: number) => {
    const data = svg.datum()
    const i = bisectDistance(data, distance)

    if (i >= data.length) {
      return
    }

    const point = data[i]
    const dist = distanceExtractor(point)
    let elevation
    const elevations = []
    const elevationsRef: Elevations = {}
    let lineName

    for (lineName in linesConfiguration) {
      elevation = linesConfiguration[lineName].zExtractor(point)
      if (Number.isFinite(elevation)) {
        elevations.push(elevation)
        elevationsRef[lineName] = elevation
        g.select(`.y.grid-hover.${lineName}`)
          .style('display', 'inline')
          .select('line')
          .attr('x1', x(0))
          .attr('y1', y(elevation))
          .attr('x2', width)
          .attr('y2', y(elevation))
      } else {
        // no data for this line: hide it
        g.select(`.y.grid-hover.${lineName}`).style('display', 'none')
      }
    }

    const y2 = y(Math.max.apply(null, elevations))
    g.select('.x.grid-hover')
      .style('display', 'inline')
      .select('line')
      .attr('x1', x(dist))
      .attr('y1', height)
      .attr('x2', x(dist))
      .attr('y2', Number.isFinite(y2) ? y2 : 0)

    const right = dist > xDomain[1] / 2
    let xtranslate = x(dist)
    xtranslate += right ? -10 : 10

    g.select('.x.grid-hover text')
      .text(formatter.xhover(dist / xFactor, xUnits))
      .style('text-anchor', right ? 'end' : 'start')
      .attr('transform', `translate(${xtranslate},${height - 10})`)

    const yUnits = DEFAULT_GRAPH_UNIT
    // Display altitude on guides only if there is one line.
    if (numberOfLines === 1) {
      const text =
        elevations[0] === null
          ? 'no value'
          : formatter.yhover(elevations[0], DEFAULT_GRAPH_UNIT)
      g.select('.y.grid-hover text')
        .text(text)
        .style('text-anchor', right ? 'end' : 'start')
        .attr('transform', `translate(${xtranslate},${y(elevations[0]) - 10})`)
    }
    hoverCallback.call(
      null,
      point,
      dist / xFactor,
      xUnits,
      elevationsRef,
      yUnits
    )
  }

  profile.showPois = (pois: Poi[]) => {
    pois = pois !== undefined ? pois : []

    const pe = poiExtractor
    const g = svg.select('g')
    const profileData = svg.datum()
    const ps = g.select('.pois')
    const p = ps.selectAll('.poi').data(pois, d => {
      const i = bisectDistance(
        profileData,
        pe ? Math.round(pe.dist(<Poi>d) * 10) / 10 : undefined,
        1
      )
      const point = profileData[i]
      if (point) {
        let lineName
        const elevations = []
        for (lineName in linesConfiguration) {
          elevations.push(linesConfiguration[lineName].zExtractor(point))
        }
        const z = Math.max.apply(null, elevations)
        pe?.z(<Poi>d, z)
      }
      return <KeyType>pe?.id(<Poi>d)
    })

    const poiEnterG = p.enter().append('g').attr('class', 'poi')

    poiEnterG
      .append('text')
      .attr('x', light ? 0 : 9)
      .attr('dy', '.35em')
      .attr('text-anchor', light ? 'middle' : 'start')

    poiEnterG.append('line').style('shape-rendering', 'crispEdges')

    poiEnterG
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .delay(100)
      .style('opacity', 1)

    poiEnterG
      .selectAll('text')
      .attr('transform', d =>
        light
          ? [`translate(${x(pe!.dist(<Poi>d))},${y(pe!.z(<Poi>d)) - 10})`]
          : [
              `translate(${x(pe!.dist(<Poi>d))},${
                y(pe!.z(<Poi>d)) - 20
              }) rotate(${poiLabelAngle})`,
            ]
      )
      .text(d => pe!.sort(<Poi>d) + (light ? '' : ` - ${pe!.title(<Poi>d)}`))

    poiEnterG
      .selectAll('line')
      .style('stroke', 'grey')
      .attr('x1', d => x(pe!.dist(<Poi>d)))
      .attr('y1', () => y(y.domain()[0]))
      .attr('x2', d => x(pe!.dist(<Poi>d)))
      .attr('y2', d => y(pe!.z(<Poi>d)))

    // remove unused pois
    poiEnterG.exit().remove()
  }

  function clearPois() {
    profile.showPois([])
  }

  return profile
}
