import { Circle } from 'ol/geom'
import Polygon, { fromCircle } from 'ol/geom/Polygon'
import { getDistance } from 'ol/sphere'
import { toLonLat } from 'ol/proj'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { setCircleRadius } from '@/services/common/measurement.utils'
import useMap from '../map/map.composable'
import { Map } from 'ol'

// TODO 3D
// import { transform } from 'ol/proj'
// import olcsCore from 'olcs/core.js';

// TODO 3D
// const ARROW_MODEL_URL = import.meta.env.VITE_ARROW_MODEL_URL

function convertCircleFeatureToPolygon(feature: DrawnFeature): DrawnFeature {
  const geom = feature.getGeometry()
  if (feature.featureType == 'drawnCircle' && geom?.getType() == 'Circle') {
    feature.setGeometry(fromCircle(geom as Circle, 64))
  }
  return feature
}

function convertPolygonFeatureToCircle(feature: DrawnFeature): DrawnFeature {
  const map: Map = useMap().getOlMap()
  const polygon = feature.getGeometry() as Polygon
  if (
    feature.featureType === 'drawnCircle' &&
    polygon?.getType() === 'Polygon'
  ) {
    const extent = polygon.getExtent()
    const centroid = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2]
    const coordinates = polygon.getCoordinates()[0]
    let maxDistance = 0
    coordinates.forEach(coord => {
      const distance = getDistance(toLonLat(centroid), toLonLat(coord))
      if (distance > maxDistance) {
        maxDistance = distance
      }
    })
    const circle = new Circle(centroid)
    setCircleRadius(circle, maxDistance, map)
    feature.setGeometry(circle as Circle)
  }
  return feature
}

export { convertCircleFeatureToPolygon, convertPolygonFeatureToCircle }
