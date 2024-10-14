import { PointData } from '@/components/common/graph/d3-graph-elevation.d'
import { Coordinate } from 'ol/coordinate'
import { transform } from 'ol/proj'
import { debounceAsync } from '@/services/utils'

const ELEVATION_URL = import.meta.env.VITE_ELEVATION_URL
const MAP_CRS = 'EPSG:3857'
const ELEVATION_CRS = 'EPSG:2169'
/**
 * Request the csv profile with the current profile data.
 * @param profileData The current profile data
 */
export function downloadCsv(profileData: PointData[]) {
  if (profileData.length === 0) {
    return
  }
}

export const getElevation = async (coordinate: Coordinate) => {
  const lonlat = transform(coordinate, MAP_CRS, ELEVATION_CRS)
  try {
    const response = await fetch(
      `${ELEVATION_URL}?lon=${lonlat[0]}&lat=${lonlat[1]}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.dhm
  } catch (error) {
    return null //return null on error, like API when no data
  }
}

export const getDebouncedElevation = debounceAsync(getElevation, 300)
