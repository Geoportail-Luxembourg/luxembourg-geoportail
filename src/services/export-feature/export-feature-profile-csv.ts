import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { toLonLat } from 'ol/proj'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import { ExportFeature } from './export-feature'
import { PROJECTION_LUX } from '@/composables/map/map.composable'
import {
  ProfileData,
  ProfileDataEntry,
} from '@/components/common/graph/elevation-profile'

export class ExportFeatureProfileCsv extends ExportFeature<Feature<Geometry>> {
  /**
   * Export a profile as a CSV file WARNING: feature MUST have getProfile() function
   * @param features The features to export
   * @param fileName The file name without the file extension (file extension ".csv" will be added here)
   */
  async export(features: Feature<Geometry>, fileName: string) {
    const content = await this.generateContent(features)

    this.download(fileName, content, 'csv', 'application/csv')
  }

  async generateContent(feature: Feature<Geometry>) {
    const profileData = await (<DrawnFeature>feature).getProfile()

    return profileData ? this.getCsvContent(profileData) : ''
  }

  private getCsvContent(profileData: ProfileData) {
    const csvHeader = 'dist,MNT,y,x,lon,lat\n'

    return profileData.reduce(
      (acc: string, item) => acc + this.getCsvContentRow(item),
      csvHeader
    )
  }

  private getCsvContentRow(item: ProfileDataEntry) {
    const lonlat = toLonLat([item.x, item.y], PROJECTION_LUX)

    return `${item.dist},${item.values.dhm},${item.x},${item.y},${lonlat[0]},${lonlat[1]}\n`
  }
}
