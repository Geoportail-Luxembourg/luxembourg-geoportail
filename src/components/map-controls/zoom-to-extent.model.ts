import { Options } from 'ol/control/Control'
import OlControlZoomToExtent from 'ol/control/ZoomToExtent'

export default class ZoomToExtent extends OlControlZoomToExtent {
  private ol3dm: any

  constructor(optOptions?: Options) {
    // TODO: Handle 3D to map
    // this.ol3dm = ol3dm

    super(optOptions)
  }

  override handleZoomToExtent() {
    if (
      this.ol3dm &&
      this.ol3dm.luxCameraExtentInRadians &&
      this.ol3dm.is3dEnabled()
    ) {
      // TODO: Handle 3D to map
      // const rectangle = new Cesium.Rectangle(...this.ol3dm.luxCameraExtentInRadians)
      // const offset = 2000
      // this.ol3dm.flyToRectangle(rectangle, offset)
    } else {
      super.handleZoomToExtent()
    }
  }
}
