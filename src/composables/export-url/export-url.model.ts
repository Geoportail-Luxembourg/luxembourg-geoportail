import { ObliqueConfig } from '@/services/vcs.utils'

export interface BaseParams {
  LUREF_X: number
  LUREF_Y: number
  ZOOM: number
  LON: number
  LAT: number
  BBOX: string
  LAYER_IDS: string
  ELEVATION: number
}

export interface ExportLink {
  labelKey: string
  icon: string
  url?: string
  target?: string
  useLocationInfoCoords?: boolean
  obliqueConfig?: ObliqueConfig
  userType?: string[]
  userRoles?: string[]
}
