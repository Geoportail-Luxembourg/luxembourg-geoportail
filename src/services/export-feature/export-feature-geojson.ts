import { Feature } from 'ol'
import olFormatGeoJSON from 'ol/format/GeoJSON'
import { Geometry } from 'ol/geom'

import { ExportFeature } from './export-feature'

export class ExportFeatureGeojson extends ExportFeature<Feature<Geometry>[]> {
  /**
   * Export a GeoJSON file
   * @param features The features to export
   * @param fileName The file name without the file extension (file extension ".geojson" will be added here)
   */
  export(features: Feature<Geometry>[], fileName: string) {
    const content = this.generateContent(features)

    this.download(fileName, content, 'geojson', 'application/geo+json')
  }

  generateContent(features: Feature<Geometry>[]) {
    return new olFormatGeoJSON().writeFeatures(
      this.exploseFeatures(features),
      this.encodeOptions
    )
  }
}
