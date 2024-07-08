import { OlLayer } from './ol-layer.model'
import { Collection } from 'ol'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

class OlLayerDrawHelper {
  features = new Collection<Feature<Geometry>>()

  createOlLayer(): OlLayer {
    const olLayer = new VectorLayer({
      source: new VectorSource({
        features: this.features,
      }),
      zIndex: 1000,
      // altitudeMode: 'clampToGround', //used in v3, but causes type error
    })
    return olLayer
  }

  addFeature(feature: Feature<Geometry>) {
    //todo: handle mutuability, save to mymaps, encode in URL
    this.features.push(feature)
  }
}

const olLayerDrawHelper = new OlLayerDrawHelper()

export default olLayerDrawHelper
