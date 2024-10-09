import { Feature, Map } from 'ol'
import olFormatGeoJSON from 'ol/format/GeoJSON'
import { Geometry } from 'ol/geom'

import { ExportFeature } from './export-feature'
import { PROJECTION_LUX } from '@/composables/map/map.composable'

export const URL_MYMAPS_EXPORT_FILE = import.meta.env
  .VITE_URL_MYMAPS_EXPORT_FILE

export class ExportFeatureShapefile extends ExportFeature {
  constructor(map: Map) {
    super(map)

    this.encodeOptions.dataProjection = PROJECTION_LUX
  }

  /**
   * Export a Kml file
   * @param features The features to export
   * @param fileName The file name without the file extension (file extension ".kml" will be added here)
   */
  async export(features: Feature<Geometry>[], fileName: string) {
    const content = this.generateContent(features)
    const url = URL_MYMAPS_EXPORT_FILE
    const payload = new URLSearchParams({
      format: 'shape',
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
      throw new Error('Error while requesting shapefile')
    }

    const blob = await response.blob()

    this.download(fileName, blob, 'zip', 'application/octet-stream')
  }

  generateContent(features: Feature<Geometry>[]) {
    return new olFormatGeoJSON().writeFeatures(
      this.exploseFeatures(features),
      this.encodeOptions
    )
  }

  async fetchFileContent(content: string, fileName: string) {
    const url = 'mymaps/exportgpxkml'
    const data = {
      doc: content,
      format: 'shape',
      name: fileName,
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    })
    const blob = await response.blob()

    return blob
  }
}
