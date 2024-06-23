import WMTSSource from 'ol/source/WMTS'
import TileWMS from 'ol/source/TileWMS'
import type BaseLayer from 'ol/layer/Base'

import { LayerType } from '@/composables/themes/themes.model'
import { Layer } from '@/stores/map.store.model'

export interface OfflineLayerSpec {
  backgroundLayer: boolean
  key: string
  layerSerialization: string
  layerType: OfflineLayerTypeValue
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

export type OffLineLayer = Layer & {
  options: OffLineLayerOptions
}

export type OffLineLayerOptions = Omit<BaseLayer, 'source'> & {
  source: string | TileWMS | WMTSSource
  sourceType: LayerType
}
