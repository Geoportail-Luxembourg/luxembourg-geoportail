import { FeatureInfoJSON } from '../info/feature-info.model'
import { fetchApi } from './api.service'

const INFO_SERVICE_URL = import.meta.env.VITE_GET_INFO_SERVICE_URL

export async function getFeatureInfoJson(payload: Record<string, any>) {
  const response = await fetchApi(INFO_SERVICE_URL, payload, 'GET')

  if (!response.ok) {
    throw new Error('Error while trying to get profile')
  }

  const json = <FeatureInfoJSON[]>await response.json()

  return json
}
