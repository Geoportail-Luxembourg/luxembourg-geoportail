import { fetchProfile } from '@geoportallux/feature-info-templates'
import { createLogger } from '@/lib/logging/namespacedLogger'

const PROFILE_URL = import.meta.env.VITE_PROFILE_URL
const CREDENTIALS_ORIGIN = import.meta.env.VITE_CREDENTIALS_ORIGIN

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
  try {
    return await fetchProfile(
      PROFILE_URL,
      { geom, id, layers, nbPoints },
      { credentials: CREDENTIALS_ORIGIN }
    )
  } catch (error) {
    createLogger('PROFILE').error('[fetchProfileJson]', error)
    throw new Error('Error while trying to get profile')
  }
}
