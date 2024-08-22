import { PointData } from '@/components/common/graph/d3-graph-elevation.d'

/**
 * Request the csv profile with the current profile data.
 * @param profileData The current profile data
 */
export function downloadCsv(profileData: PointData[]) {
  if (profileData.length === 0) {
    return
  }
}
