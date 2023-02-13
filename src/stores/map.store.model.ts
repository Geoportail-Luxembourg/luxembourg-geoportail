import { IMvtStyle } from '@/composables/mvt-styles/mvt-styles.model'
import type { LayerType, Metadata } from '@/composables/themes/themes.model'

export enum LayerImageType {
  PNG = 'image/png',
  JPG = 'image/jpeg',
}

export type LayerId = number | string

export interface Layer {
  id: LayerId
  name: string
  layers: string
  url?: string
  type: LayerType
  imageType: string
  metadata?: Metadata
  dimensions?: {}
  style?: string
  opacity?: number
  previousOpacity?: number
  mvtData?: IMvtStyle
}

export interface MapContext {
  layers?: Layer[]
}

export interface LayerComparison {
  layer: Layer
  position: number
}
