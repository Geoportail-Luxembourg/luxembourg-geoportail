import { Feature, Map } from 'ol'

import { ExportFeatureGpx } from './export-feature-gpx'
import { ExportFeatureKml } from './export-feature-kml'
import { ExportFeatureShapefile } from './export-feature-shapefile'

export type exportFormat = 'kml' | 'gpx' | 'shapefile'

export class ExportFeatureService {
  export(
    map: Map,
    format: exportFormat,
    features: Feature[],
    fileName: string,
    isTrack = false
  ) {
    this.getExporter(map, format)?.export(features, fileName, isTrack)
  }

  private getExporter(map: Map, format: string) {
    switch (format) {
      case 'gpx':
        return new ExportFeatureGpx(map)
      case 'kml':
        return new ExportFeatureKml(map)
      case 'shapefile':
        return new ExportFeatureShapefile(map)
    }
  }
}

export const exportFeatureService = new ExportFeatureService()
