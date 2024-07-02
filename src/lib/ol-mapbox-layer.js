import Layer from 'ol/layer/Layer'
import { toDegrees } from 'ol/math'
import { toLonLat } from 'ol/proj'

import mapboxgl from 'mapbox-gl'

/**
 * @typedef {Object} Options
 * @property {string} [accessToken]
 * @property {string} style
 * @property {string|HTMLElement} container
 */

export default class MapBoxLayer extends Layer {
  /**
   * @param {Options} options
   */
  constructor(options) {
    const baseOptions = Object.assign({}, options)

    delete baseOptions.accessToken
    delete baseOptions.style
    delete baseOptions.container
    delete baseOptions.xyz

    super(baseOptions)
    this.set('xyz', options.maplibreOptions.xyz)
    this.set('xyz_custom', options.maplibreOptions.xyz_custom)

    this.xyz_ = options.xyz

    if (options.accessToken) {
      mapboxgl.accessToken = options.accessToken
    }

    this.map_ = new mapboxgl.Map({
      container: options.maplibreOptions.container,
      style: options.maplibreOptions.style,
      attributionControl: false,
      interactive: false,
    })
    this.maplibreMap = this.map_
  }

  getMapBoxMap() {
    return this.map_
  }

  getMapLibreMap() {
    return this.map_
  }

  /**
   * @param {import('ol/PluggableMap').FrameState} frameState
   */
  render(frameState) {
    const canvas = this.map_.getCanvas()
    const viewState = frameState.viewState

    canvas.style.position = 'absolute'

    const visible = this.getVisible()
    canvas.style.display = visible ? 'block' : 'none'

    const opacity = this.getOpacity().toString()
    if (opacity !== canvas.style.opacity) {
      canvas.style.opacity = opacity
    }

    // adjust view parameters in mapbox
    const rotation = viewState.rotation
    if (rotation) {
      this.map_.rotateTo(toDegrees(-rotation), {
        animate: false,
      })
    }
    this.map_.jumpTo({
      center: toLonLat(viewState.center),
      zoom: viewState.zoom - 1,
      animate: false,
    })

    // cancel the scheduled update & trigger synchronous redraw
    // see https://github.com/mapbox/mapbox-gl-js/issues/7893#issue-408992184
    // NOTE: THIS MIGHT BREAK WHEN UPDATING MAPBOX
    if (this.map_._frame) {
      this.map_._frame.cancel()
      this.map_._frame = null
    }
    this.map_._render()

    return canvas
  }

  /**
   * @param {string} name
   * @param {boolean} visible
   */
  setLayerVisibility(name, visible) {
    this.map_.setLayoutProperty(
      name,
      'visibility',
      visible ? 'visible' : 'none'
    )
  }

  /**
   * @return {mapboxgl.Style}
   */
  getStyle() {
    return this.map_.getStyle()
  }

  getXYZ() {
    return this.get('xyz')
  }
}
