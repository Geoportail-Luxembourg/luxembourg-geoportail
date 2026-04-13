import { Feature, Map } from 'ol'
import olFormatGeoJSON from 'ol/format/GeoJSON'
import { Geometry } from 'ol/geom'

import { ExportFeature } from './export-feature'
import { PROJECTION_LUX } from '@/composables/map/map.composable'
import { URL_MYMAPS_EXPORT_FILE } from './export-feature-shapefile'

export class ExportFeatureGpkg extends ExportFeature<
  Feature<Geometry> | Feature<Geometry>[]
> {
  constructor(map: Map) {
    super(map)

    this.encodeOptions.dataProjection = PROJECTION_LUX
  }

  /**
   * Export a GeoPackage file
   * @param features The features to export
   * @param fileName The file name without the file extension (file extension ".gpkg" will be added here)
   */
  async export(features: Feature<Geometry>[], fileName: string) {
    const content = this.generateContent(features)
    const url = URL_MYMAPS_EXPORT_FILE
    const payload = new URLSearchParams({
      format: 'gpkg',
      name: fileName,
      doc: content,
    })
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    })

    if (!response.ok) {
      throw new Error('Error while requesting gpkg')
    }

    const blob = await response.blob()

    this.download(fileName, blob, 'gpkg', 'application/geopackage+sqlite3')
  }

  generateContent(features: Feature<Geometry>[]) {
    return new olFormatGeoJSON().writeFeatures(
      this.exploseFeatures(features),
      this.encodeOptions
    )
  }
}
