import Layer from 'ol/layer/Layer.js'
import { createCanvasContext2D } from 'ol/dom.js'
import { toRadians } from 'ol/math.js'

const INCHES_PER_METER = 39.37
const DOTS_PER_INCH = 72

/**
 * @extends {Layer<any>}
 */
class Mask extends Layer {
  constructor(options = {}) {
    super(options)

    /**
     * @private
     */
    this.context_ = createCanvasContext2D()

    this.context_.canvas.style.opacity = '0.5'
    this.context_.canvas.style.position = 'absolute'

    this.size = undefined
    this.rotation = undefined
    this.scale = undefined
  }

  /**
   * @param {import("ol/PluggableMap").FrameState} frameState
   */
  render(frameState) {
    const cwidth = (this.context_.canvas.width = frameState.size[0])
    const cheight = (this.context_.canvas.height = frameState.size[1])
    const center = [cwidth / 2, cheight / 2]

    // background (clockwise)
    this.context_.beginPath()
    this.context_.moveTo(0, 0)
    this.context_.lineTo(cwidth, 0)
    this.context_.lineTo(cwidth, cheight)
    this.context_.lineTo(0, cheight)
    this.context_.lineTo(0, 0)
    this.context_.closePath()

    const size = this.getSize()
    if (!size) {
      return
    }
    const height = size[1]
    const width = size[0]
    const scale = this.getScale()
    if (!scale) {
      return
    }
    const resolution = frameState.viewState.resolution

    const extentHalfWidth =
      ((width / DOTS_PER_INCH / INCHES_PER_METER) * scale) / resolution / 2
    const extentHalfHeight =
      ((height / DOTS_PER_INCH / INCHES_PER_METER) * scale) / resolution / 2

    const rotation =
      this.getRotation() !== undefined ? toRadians(this.getRotation()) : 0

    // diagonal = distance p1 to center.
    const diagonal = Math.sqrt(
      Math.pow(extentHalfWidth, 2) + Math.pow(extentHalfHeight, 2)
    )
    // gamma = angle between horizontal and diagonal (with rotation).
    const gamma = Math.atan(extentHalfHeight / extentHalfWidth) - rotation
    // omega = angle between diagonal and vertical (with rotation).
    const omega = Math.atan(extentHalfWidth / extentHalfHeight) - rotation
    // Calculation of each corner.
    const x1 = center[0] - Math.cos(gamma) * diagonal
    const y1 = center[1] + Math.sin(gamma) * diagonal
    const x2 = center[0] + Math.sin(omega) * diagonal
    const y2 = center[1] + Math.cos(omega) * diagonal
    const x3 = center[0] + Math.cos(gamma) * diagonal
    const y3 = center[1] - Math.sin(gamma) * diagonal
    const x4 = center[0] - Math.sin(omega) * diagonal
    const y4 = center[1] - Math.cos(omega) * diagonal

    // hole (counter-clockwise)
    this.context_.moveTo(x1, y1)
    this.context_.lineTo(x2, y2)
    this.context_.lineTo(x3, y3)
    this.context_.lineTo(x4, y4)
    this.context_.lineTo(x1, y1)
    this.context_.closePath()

    this.context_.fillStyle = '#000'
    this.context_.fill()

    return this.context_.canvas
  }

  getSize() {
    return this.size
  }

  getScale() {
    return this.scale
  }

  getRotation() {
    return this.rotation
  }

  setSize(size) {
    this.size = size
  }

  setScale(scale) {
    this.scale = scale
  }

  setRotation(rotation) {
    this.rotation = rotation
  }
}

export { Mask, DOTS_PER_INCH, INCHES_PER_METER }
