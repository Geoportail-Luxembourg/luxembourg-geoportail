import { PointData } from '@/components/common/graph/d3-graph-elevation.d'
import { Coordinate } from 'ol/coordinate'
import { transform } from 'ol/proj'
import i18next from 'i18next'
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

export function getElevation(coordinate: Coordinate) {
  const lonlat = transform(coordinate, MAP_CRS, ELEVATION_CRS)
  return fetch(`${ELEVATION_URL}?lon=${lonlat[0]}&lat=${lonlat[1]}`).then(
    async response => {
      const resp = (await response.json()).dhm
      let text = i18next.t('N/A', { ns: 'client' })
      if (resp) {
        text = `${Number(resp).toFixed(2)} m`
      }
      return { formattedElevation: text, rawElevation: resp }
    }
  )
}

export const getFormattedElevation = async (coordinates: number[]) => {
  return (await getElevation(coordinates)).formattedElevation
}

export const getDebouncedFormattedElevation = debounceAsync(
  getFormattedElevation,
  300
)
