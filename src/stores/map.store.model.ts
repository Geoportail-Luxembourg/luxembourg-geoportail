import type { LayerType, Metadata } from '@/composables/themes/themes.model'
import { TimeResolution } from '@/services/time.utils'

export const LAYER_CURRENT_TIME_SEPARATOR = '/'

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
  time?: LayerTime
  currentTimeMinValue?: string
  currentTimeMaxValue?: string
}

export enum LayerTimeMode {
  VALUE = 'value',
  RANGE = 'range',
}

export enum LayerTimeWidget {
  DATEPICKER = 'datepicker',
  SLIDER = 'slider',
}

export interface LayerTime {
  minValue: string
  maxValue: string
  minDefValue?: string
  maxDefValue?: string
  mode: LayerTimeMode
  resolution: TimeResolution
  widget: LayerTimeWidget
  values?: string[]
  interval?: number[]
}

export interface MapContext {
  layers?: Layer[]
}

export interface LayerComparison {
  layer: Layer
  position: number
}
