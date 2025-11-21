import type { Map } from 'ol'
import { Feature } from 'ol'
import olFormatKML from 'ol/format/KML'
import olFormatGPX from 'ol/format/GPX'
import type {
  Geometry,
  GeometryCollection,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
} from 'ol/geom'
import { PROJECTION_WGS84 } from '@/composables/map/map.composable'

export function kmlToFeatures(content: string, map: Map): Feature<Geometry>[] {
  const format = new olFormatKML({
    extractStyles: true,
    showPointNames: true,
  })
  const features = format.readFeatures(content, {
    dataProjection: PROJECTION_WGS84,
    featureProjection: map.getView().getProjection(),
  })

  return computeFeatures(features)
}

export function gpxToFeatures(content: string, map: Map): Feature<Geometry>[] {
  const format = new olFormatGPX()
  const features = format.readFeatures(content, {
    dataProjection: PROJECTION_WGS84,
    featureProjection: map.getView().getProjection(),
  })

  return computeFeatures(features)
}

function cloneFeature(feature: Feature<Geometry>, geometry: Geometry) {
  const f = feature.clone()
  f.setGeometry(geometry)
  return f
}

/**
 * The Geoportal does not support multi geometries, so we need to split them into single geometries
 * @param features
 * @returns
 */
function computeFeatures(features: Feature<Geometry>[]) {
  const cleanFeatures: Feature<Geometry>[] = []

  features.forEach(feature => {
    const curGeometry = feature.getGeometry()

    switch (curGeometry?.getType()) {
      case 'MultiPolygon':
        const polygons = (<MultiPolygon>curGeometry).getPolygons()
        cleanFeatures.push(
          ...polygons.map(polygon => cloneFeature(feature, polygon))
        )
        break
      case 'MultiLineString':
        const lines = (<MultiLineString>curGeometry).getLineStrings()
        cleanFeatures.push(...lines.map(line => cloneFeature(feature, line)))
        break
      case 'MultiPoint':
        const points = (<MultiPoint>curGeometry).getPoints()
        cleanFeatures.push(...points.map(point => cloneFeature(feature, point)))
        break
      case 'GeometryCollection':
        const geometryCollection = <GeometryCollection>curGeometry
        cleanFeatures.push(
          ...geometryCollection
            .getGeometries()
            .map(geom => cloneFeature(feature, geom))
        )
        break
      default:
        cleanFeatures.push(feature)
        break
    }
  })

  return cleanFeatures
}
