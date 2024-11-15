import { Metadata } from '@/composables/themes/themes.model'
import { useThemeStore } from '@/stores/config.store'
import spec from './spec.json' assert { type: 'json' }

const DEFAULT_MAP_SCALES = [
  1500, 2500, 5000, 10000, 15000, 20000, 25000, 50000, 80000, 100000, 125000,
  200000, 250000, 400000,
]

const MAP_SIZES_ = [
  // A4 portrait and landscape
  [715, 395],
  [470, 650],
  // A3 portrait and landscape
  [1065, 640],
  [715, 975],
  // A2 portrait and landscape
  [1558, 985],
  [1064, 1475],
  // A1 portrait and landscape
  [2255, 1482],
  [1558, 2175],
  // A0 portrait and landscape
  [3241, 2173],
  [2254, 3155],
]

const LAYOUTS = [
  'A4 landscape',
  'A4 portrait',
  'A3 landscape',
  'A3 portrait',
  'A2 landscape',
  'A2 portrait',
  'A1 landscape',
  'A1 portrait',
  'A0 landscape',
  'A0 portrait',
]

export const enum PRINT_FORMAT {
  PDF = 'PDF',
  PNG = 'PNG',
}

export const BASE_URL = 'http://localhost:8080'

export class PrintService {
  getScales(): number[] {
    const metadata: Metadata | undefined = useThemeStore().theme?.metadata
    return (
      metadata?.print_scales
        ?.map((s: string) => +s)
        .sort((a: number, b: number) => a - b) || DEFAULT_MAP_SCALES
    )
  }

  getLayouts(): string[] {
    return LAYOUTS
  }

  async print(format: PRINT_FORMAT): Promise<string> {
    const spec = await this.getSpec(format)
    const response = await fetch(`${BASE_URL}/printproxy/report.pdf`, {
      method: 'POST',
      body: JSON.stringify(spec),
    })
    const url = ((await response.json()) as { statusURL: string }).statusURL
    return BASE_URL + url.replace(/print/, 'printproxy')
  }

  async getJobStatus(statusUrl: string): Promise<JobStatus> {
    const response: JobStatus = await (await fetch(statusUrl)).json()
    if (response.downloadURL) {
      response.downloadURL =
        BASE_URL + response.downloadURL.replace(/print/, 'printproxy')
    }
    return response
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getSpec(format: PRINT_FORMAT): Promise<object> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return spec
  }

  getSize(layout: string): number[] {
    return MAP_SIZES_[LAYOUTS.indexOf(layout)]
  }

  getNearestScale(scales: number[], scale: number): number {
    return scales.reduce((prev, curr) =>
      Math.abs(curr - scale) < Math.abs(prev - scale) ? curr : prev
    )
  }
}

export interface JobStatus {
  status: string
  done: boolean
  downloadURL?: string
}

export const printService = new PrintService()
