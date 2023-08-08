import Layer from 'ol/layer/Layer'
import { toDegrees } from 'ol/math'
import { toLonLat } from 'ol/proj'

import maplibregl from 'maplibre-gl'

/**
 * @typedef {Object} Options
 * @property {Object<string, *>} maplibreOptions
 */

export default class MapLibreLayer extends Layer {
  /**
   * @param {Options} options
   */
  constructor(options) {
    const baseOptions = Object.assign({}, options)

    delete baseOptions.maplibreOptions

    super(baseOptions)

    const container = options.maplibreOptions.container

    this.maplibreMap = new maplibregl.Map(
      Object.assign({}, options.maplibreOptions, {
        container: container,
        attributionControl: false,
        interactive: false,
        trackResize: false,
      })
    )

    this.applyOpacity_()
  }

  /**
   * @param {number} opacity
   */
  setOpacity(opacity) {
    super.setOpacity(opacity)
    this.applyOpacity_()
  }

  applyOpacity_() {
    const canvas = this.maplibreMap.getCanvas()
    const opacity = this.getOpacity().toString()
    if (opacity !== canvas.style.opacity) {
      canvas.style.opacity = opacity
    }
  }

  /**
   * @param {import('ol/Map').FrameState} frameState
   * @return {HTMLCanvasElement} canvas
   */
  render(frameState) {
    const canvas = this.maplibreMap.getCanvas()
    const viewState = frameState.viewState

    // adjust view parameters in maplibre
    this.maplibreMap.jumpTo({
      center: toLonLat(viewState.center),
      zoom: viewState.zoom - 1,
      bearing: toDegrees(-viewState.rotation),
      animate: false,
    })

    // const maplibreCanvas = this.maplibreMap.getCanvas();
    // if (!maplibreCanvas.isConnected) {
    //   // The canvas is not connected to the DOM, request a map rendering at the next animation frame
    //   // to set the canvas size.
    //   this.getMapInternal().render();
    // } else if (!sameSize(maplibreCanvas, frameState)) {
    //   this.maplibreMap.resize();
    // }

    // this.maplibreMap.redraw();
    if (this.maplibreMap._frame) {
      this.maplibreMap._frame.cancel()
      this.maplibreMap._frame = null
    }
    this.maplibreMap._render()

    //return this.maplibreMap.getContainer();
    return canvas
  }
}

// /**
//  *
//  * @param {HTMLCanvasElement} canvas
//  * @param {import('ol/Map').FrameState} frameState
//  * @return boolean
//  */
// function sameSize(canvas, frameState) {
//   return (
//     canvas.width === Math.floor(frameState.size[0] * frameState.pixelRatio) ||
//     canvas.height === Math.floor(frameState.size[1] * frameState.pixelRatio)
//   )
// }
