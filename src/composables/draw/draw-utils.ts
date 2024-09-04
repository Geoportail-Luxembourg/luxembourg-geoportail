import { Circle, Geometry } from 'ol/geom'
import { fromCircle } from 'ol/geom/Polygon'
import { Feature } from 'ol'

// TODO 3D
// import { transform } from 'ol/proj'
// import olcsCore from 'olcs/core.js';

// TODO 3D
// const ARROW_MODEL_URL = import.meta.env.VITE_ARROW_MODEL_URL

function convertCircleToPolygon(
  feature: Feature<Geometry>,
  featureType: String
) {
  const geom = feature.getGeometry()
  if (featureType == 'drawnCircle' && geom?.getType() == 'Circle') {
    feature.setGeometry(fromCircle(geom as Circle, 64))
  }
}

export { convertCircleToPolygon }
