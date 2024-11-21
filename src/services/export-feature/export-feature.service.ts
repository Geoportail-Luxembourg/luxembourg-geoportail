import { Feature, Map } from 'ol'
import { Geometry } from 'ol/geom'

import { ExportFeatureGpx } from './export-feature-gpx'
import { ExportFeatureKml } from './export-feature-kml'
import { ExportFeatureShapefile } from './export-feature-shapefile'
import { ExportFeatureProfileCsv } from './export-feature-profile-csv'

export type ExportFormat = 'kml' | 'gpx' | 'shapefile' | 'csv'
export type FeatExport = Feature<Geometry> & Feature<Geometry>[]

export class ExportFeatureService {
  export(
    map: Map,
    format: ExportFormat,
    features: FeatExport,
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
      case 'csv': // !!! CSV format exports profile from LineString geom only
        return new ExportFeatureProfileCsv(map)
    }
  }
}

export const exportFeatureService = new ExportFeatureService()
