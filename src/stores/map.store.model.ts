import type { LayerType, Metadata } from '@/composables/themes/themes.model'
import { TimeResolution } from '@/services/time.utils'

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
  currentTime?: string
  currentTimeMinDefValue?: string
  currentTimeMaxDefValue?: string
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
  resolution: TimeResolution
  minDefValue?: string
  maxDefValue?: string
  mode: LayerTimeMode
  widget: LayerTimeWidget
}

export type LayerTimeSlider = LayerTime & {
  values: string[]
}

export type LayerTimeDatePicker = LayerTime & {
  interval: number[]
}

export interface MapContext {
  layers?: Layer[]
}

export interface LayerComparison {
  layer: Layer
  position: number
}
