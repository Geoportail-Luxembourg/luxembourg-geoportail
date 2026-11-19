import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { toLonLat } from 'ol/proj'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { ExportFeature } from './export-feature'
import { PROJECTION_LUX } from '@/composables/map/map.composable'
import { profileCsv } from '@geoportallux/feature-info-templates'

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

    return profileData
      ? profileCsv(profileData, xy => toLonLat(xy, PROJECTION_LUX))
      : ''
  }
}
