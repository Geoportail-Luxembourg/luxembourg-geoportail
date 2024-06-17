import { LoadFunction } from 'ol/Tile'
import TileGrid from 'ol/tilegrid/TileGrid'
import WmtsTileGrid from 'ol/tilegrid/WMTS'
import WMTSSource from 'ol/source/WMTS'
import TileWMSSource from 'ol/source/TileWMS'

import { Layer } from '@/stores/map.store.model'
import { LayerType } from '@/composables/themes/themes.model'

export interface OfflineLayerSpec {
  id: string
  backgroundLayer: boolean
  key: string
  layerSerialization: string
  layerType: 'tile' | 'vector'
}

export enum OfflineLayerTypeValue {
  LAYER_OFFLINE_TILE = 'tile', // Comming from offline specs in localforage
  LAYER_OFFLINE_VECTOR = 'vector', // Comming from offline specs in localforage
}

export type OfflineLayerType = `${OfflineLayerTypeValue}`

// Indexdb, ngeoOfflineStorage/offlineStorage => for rasters
export interface OfflineContent {
  extent: number[]
  layers: OfflineLayerSpec[]
  zooms: number[]
}

export type OffLineSerializationBase = {
  extent?: number[]
  minZoom?: number
  origin?: number[]
  resolutions: number[]
  source: WMTSSource | TileWMSSource,
  sourceType: LayerType,
  tileLoadFunction: LoadFunction
  tileSize: any
}

export type OffLineSerializationTile = OffLineSerializationBase & {
  params: any
  tileGrid?: TileGrid
  urls: any
  gutter: any
}

export type OffLineSerializationWMTS = OffLineSerializationBase & {  
  dimensions: any
  format: any
  layer: any
  matrixIds: any
  matrixSet: any
  projection: any
  requestEncoding: any
  style: any
  tileGrid: WmtsTileGrid
  urls: any
  version: any
}

export type OffLineSerialization = OffLineSerializationTile | OffLineSerializationWMTS

export type OffLineLayer = Layer & {
  options: OffLineSerialization
}