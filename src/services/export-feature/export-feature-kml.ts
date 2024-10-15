import { Feature } from 'ol'
import olFormatKML from 'ol/format/KML'
import { Geometry } from 'ol/geom'

import { ExportFeature } from './export-feature'

export class ExportFeatureKml extends ExportFeature {
  /**
   * Export a Kml file
   * @param features The features to export
   * @param fileName The file name without the file extension (file extension ".kml" will be added here)
   */
  export(features: Feature<Geometry>[], fileName: string) {
    const content = this.generateContent(features)

    this.download(
      fileName,
      content,
      'kml',
      'application/vnd.google-earth.kml+xml'
    )
  }

  generateContent(features: Feature<Geometry>[]) {
    return new olFormatKML().writeFeatures(
      this.exploseFeatures(features),
      this.encodeOptions
    )
  }
}
