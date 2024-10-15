import { Feature, Map } from 'ol'
import { Projection } from 'ol/proj'
import { Geometry, GeometryCollection, MultiLineString } from 'ol/geom'

import { PROJECTION_WGS84 } from '@/composables/map/map.composable'
import { downloadFile, sanitizeFilename } from '@/services/utils'

export abstract class ExportFeature {
  encodeOptions: { dataProjection: string; featureProjection: Projection }

  constructor(map: Map) {
    this.encodeOptions = {
      dataProjection: PROJECTION_WGS84,
      featureProjection: map.getView().getProjection(),
    }
  }

  abstract export(features: Feature<Geometry>[], fileName: string): void
  abstract generateContent(
    features: Feature<Geometry>[],
    fileName: string
  ): void

  download(
    fileName: string,
    content: BlobPart,
    ext = 'txt',
    contentType = 'text/plain'
  ) {
    const file = `${sanitizeFilename(fileName)}.${sanitizeFilename(ext)}`
    downloadFile(file, content, contentType)
  }

  /**
   * Explose the feature into multiple features if the geometry is a
   * collection of geometries.
   * @param features The features to explose.
   * @return The exploded features.
   * @private
   */
  exploseFeatures(features: Feature<Geometry>[]) {
    const explodedFeatures: Feature<Geometry>[] = []

    features.forEach(feature => {
      switch (feature.getGeometry()?.getType()) {
        case 'GeometryCollection': {
          const geometries = (<GeometryCollection>(
            feature.getGeometry()
          )).getGeometriesArray()
          geometries.forEach(geom =>
            explodedFeatures.push(this.cloneFeatureWithGeom(feature, geom))
          )
          break
        }
        case 'MultiLineString': {
          const linestrings = (<MultiLineString>(
            feature.getGeometry()
          )).getLineStrings()
          linestrings.forEach(geom =>
            explodedFeatures.push(this.cloneFeatureWithGeom(feature, geom))
          )
          break
        }
        default:
          explodedFeatures.push(feature)
          break
      }
    })

    return explodedFeatures
  }

  cloneFeatureWithGeom(feature: Feature, geom: Geometry) {
    const newFeature = feature.clone()
    newFeature.setGeometry(geom)
    return newFeature
  }
}
