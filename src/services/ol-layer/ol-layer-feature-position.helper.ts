import { Geometry, Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import { Options } from 'ol/layer/BaseVector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'

import { OlLayer } from './ol-layer.model'
import { getStyleFeaturePosition } from './styles.helper'

export const DEFAULT_LAYER_ZINDEX = 10000
export const FEATURE_LAYER_TYPE = 'featurePositionLayer'

export class PositionVectorLayer extends VectorLayer<VectorSource<Geometry>> {
  geoMarker: Feature<Point> | undefined

  constructor(options: Options<VectorSource<Geometry>>) {
    const source = new VectorSource({
      features: [], // geoMarker to be added here (@see createGeomarker())
    })

    super({ ...options, ...{ source } })
  }

  moveGeoMarker(x: number, y: number) {
    if (!this.geoMarker?.getGeometry()) {
      this.createGeomarker()
    }

    this.geoMarker?.getGeometry()?.setCoordinates([x, y])
  }

  createGeomarker() {
    this.geoMarker = new Feature({ geometry: new Point([0, 0]) })
    this.getSource()?.clear()
    this.getSource()?.addFeature(this.geoMarker)
  }

  removeGeomarker() {
    this.getSource()?.clear()
    this.geoMarker = undefined
  }
}

class OlLayerFeaturePositionHelper {
  createOlLayer(): OlLayer {
    const style = getStyleFeaturePosition()
    const olLayer = new PositionVectorLayer({
      zIndex: DEFAULT_LAYER_ZINDEX,
      style,
    })

    olLayer.set('cyLayerType', FEATURE_LAYER_TYPE)

    return olLayer
  }
}

const olLayerFeaturePositionHelper = new OlLayerFeaturePositionHelper()

export default olLayerFeaturePositionHelper
