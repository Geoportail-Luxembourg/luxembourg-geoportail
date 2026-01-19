import { fetchApi } from './api.service'
import { createLogger } from '@/lib/logging/namespacedLogger'

const PROFILE_URL = import.meta.env.VITE_PROFILE_URL

export interface ProfileJson {
  profile: ProfileJsonEntry[]
}

export interface ProfileJsonEntry {
  dist: number
  values: {
    dhm: number
  }
  x: number
  y: number
}

/**
 * Get the profile of a LineString geom
 * @param geom The LineString geom converted in GeoJSON
 * @param id The feature id if any
 * @param layers Digital Elevation Models: "dhm" by default
 * @param nbPoints Nb points for the profile (100 points => 101 entries)
 * @returns
 */
export async function fetchProfileJson(
  geom: string,
  id?: string | number,
  layers = 'dhm',
  nbPoints = 100
) {
  const payload = { geom, nbPoints: nbPoints + '', layers, id: id + '' }
  const response = await fetchApi(PROFILE_URL, payload, 'POST')

  if (!response.ok) {
    // Try to capture server response body for debugging
    let text = ''
    try {
      text = await response.text()
    } catch (e) {
      // ignore
    }
    const { error: apiError } = createLogger('PROFILE')
    apiError('[fetchProfileJson] non-ok response', {
      status: response.status,
      body: text,
    })
    throw new Error('Error while trying to get profile')
  }

  const json = <ProfileJson>await response.json()

  return json
}
