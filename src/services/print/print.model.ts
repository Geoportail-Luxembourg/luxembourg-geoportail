import { FrameState } from 'ol/PluggableMap'

export const enum PRINT_FORMAT {
  PDF = 'PDF',
  PNG = 'PNG',
}

export interface PrintLegend {
  name: string | null
  restUrl?: string
  legendTitle?: string
  accessConstraints?: string
  legendUrl?: string
}

export interface PrintOptions {
  appTitle: string
  dateText: string
  disclaimer: string
  format: PRINT_FORMAT
  layout: string
  scale: number
  scaleTitle: string
  resolution: number
  title: string
  lang: string
  legend: boolean
  framestate: FrameState | null
  queryResults: string
}

export interface JobStatus {
  status: string
  done: boolean
  downloadURL?: string
}

export interface ReportResponse {
  statusURL: string
  ref: string
  downloadURL: string
}
