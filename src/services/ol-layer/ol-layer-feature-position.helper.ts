import { Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import { Options } from 'ol/layer/BaseVector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'

import { OlLayer } from './ol-layer.model'
import { getStyleFeaturePosition } from './styles.helper'

export const DEFAULT_LAYER_ZINDEX = 1002
export const FEATURE_LAYER_TYPE = 'featurePositionLayer'

export class PositionVectorLayer extends VectorLayer {
  geoMarker: Feature<Point> | undefined

  constructor(options: Options<Feature, VectorSource>) {
    const source = new VectorSource({
      features: [], // geoMarker to be added here (@see createGeoMarker())
      useSpatialIndex: false,
    })

    super({ ...options, ...{ source } })
  }

  moveGeoMarker(x: number, y: number) {
    if (!this.geoMarker?.getGeometry()) {
      this.createGeoMarker()
    }

    this.geoMarker?.getGeometry()?.setCoordinates([x, y])
  }

  createGeoMarker() {
    this.geoMarker = new Feature({ geometry: new Point([0, 0]) })
    this.getSource()?.clear()
    this.getSource()?.addFeature(this.geoMarker)
  }

  removeGeoMarker() {
    this.getSource()?.clear()
    this.geoMarker = undefined
  }
}

class OlLayerFeaturePositionHelper {
  createOlLayer(): OlLayer {
    const style = getStyleFeaturePosition()
    const olLayer = new PositionVectorLayer({
      declutter: true, // always on top, overpass zindex (needed in v3 for profile/routing)
      zIndex: DEFAULT_LAYER_ZINDEX,
      style,
      updateWhileAnimating: true,
      updateWhileInteracting: true,
    })

    olLayer.set('cyLayerType', FEATURE_LAYER_TYPE)

    return olLayer
  }
}

const olLayerFeaturePositionHelper = new OlLayerFeaturePositionHelper()

export default olLayerFeaturePositionHelper
