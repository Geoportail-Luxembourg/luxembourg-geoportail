import { Feature } from 'ol'
import { Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import StyleStyle from 'ol/style/Style'
import StyleIcon from 'ol/style/Icon'

export const DEFAULT_ZINDEX = 1501
export const FEATURE_LAYER_TYPE = 'exportFeatureLayer'

export class TargetExportLayer extends VectorLayer<VectorSource> {
  private readonly targetFeature: Feature<Point>

  constructor() {
    const targetFeature = new Feature<Point>()
    super({
      source: new VectorSource({ features: [targetFeature] }),
      zIndex: DEFAULT_ZINDEX,
    })
    this.targetFeature = targetFeature
    this.set('cyLayerType', FEATURE_LAYER_TYPE)
    setInfoStyle(this)
  }

  positionTarget(x: number | null | undefined, y: number | null | undefined) {
    if (x != null && y != null) {
      this.targetFeature.setGeometry(new Point([x, y]))
    } else {
      this.targetFeature.setGeometry(undefined)
    }
  }
}

class OlLayerTargetExportHelper {
  createOlLayer(): TargetExportLayer {
    return new TargetExportLayer()
  }
}

function setInfoStyle(layer: VectorLayer<VectorSource>) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="17" stroke="#e05c00" stroke-width="2.5" fill="none"/>
    <line x1="20" y1="1"  x2="20" y2="9"  stroke="#e05c00" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="20" y1="31" x2="20" y2="39" stroke="#e05c00" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="1"  y1="20" x2="9"  y2="20" stroke="#e05c00" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="31" y1="20" x2="39" y2="20" stroke="#e05c00" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="20" cy="20" r="4" stroke="#e05c00" stroke-width="2" fill="rgba(224,92,0,0.5)"/>
  </svg>`
  const dataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`

  layer.setStyle([
    new StyleStyle({
      image: new StyleIcon({ src: dataUri, scale: 0.7 }),
    }),
  ])
}

const olLayerTargetExportHelper = new OlLayerTargetExportHelper()

export default olLayerTargetExportHelper
