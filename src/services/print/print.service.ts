import { BaseCustomizer } from '@geoblocks/mapfishprint'
import { Map } from 'ol'
import LayerGroup from 'ol/layer/Group'
import BaseLayer from 'ol/layer/Layer.js'
import { DOTS_PER_INCH, INCHES_PER_METER } from '@/lib/ol-mask-layer'
import { urlPathStorage } from '@/services/state-persistor/storage/url-storage-as-path'
import { fetchApi } from '@/services/api/api.service'
import { OLLAYER_PROP_ID } from '@/services/ol-layer/ol-layer.model'
import { useThemeStore } from '@/stores/config.store'
import { Metadata } from '@/composables/themes/themes.model'
import { LAYER_POSITION_ID } from '@/composables/map/profile-position.composable'
import { LuxEncoder } from './mapfishprint/LuxEncoder'
import {
  JobStatus,
  PRINT_FORMAT,
  PrintLegend,
  PrintOptions,
  ReportResponse,
} from './print.model'
import { FrameState } from 'ol/Map'
import { ViewStateLayerStateExtent } from 'ol/View'

export const BASE_URL = import.meta.env.VITE_PRINT_HOST
const LEGEND_URL = import.meta.env.VITE_GET_LEGENDS_URL
const SHORT_URL = import.meta.env.VITE_SHORT_URL
const PROXYURL_PRINT = import.meta.env.VITE_PROXYURL_PRINT
const QR_URL = import.meta.env.VITE_QR_URL

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

const DPI = 127

const getWidth = (scale: number, width: number, resolution: number): number =>
  Math.round(((width / DOTS_PER_INCH / INCHES_PER_METER) * scale) / resolution)

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

  async print(spec: object, format: PRINT_FORMAT): Promise<ReportResponse> {
    const url = `${PROXYURL_PRINT}/report.${
      format.toLocaleLowerCase() || 'pdf'
    }`
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(spec),
    })
    const res = <ReportResponse>await response.json()
    const statusURL = BASE_URL + res.statusURL.replace(/print/, 'printproxy')
    const downloadURL =
      BASE_URL + res.downloadURL.replace(/print/, 'printproxy')
    return {
      downloadURL,
      ref: res.ref,
      statusURL,
    }
  }

  cancel(ref: string) {
    return fetch(`${PROXYURL_PRINT}/cancel/${ref}`, {
      method: 'DELETE',
    })
  }

  async getJobStatus(statusUrl: string): Promise<JobStatus> {
    const response: JobStatus = await (await fetch(statusUrl)).json()
    if (response.downloadURL) {
      response.downloadURL =
        BASE_URL + response.downloadURL.replace(/print/, 'printproxy')
    }
    return response
  }

  async getSpec(options: PrintOptions, map: Map): Promise<object> {
    const encoder = new LuxEncoder(BASE_URL)
    const customizer = new BaseCustomizer()
    const shortUrl = await this.getShortLink()

    const mapSpec = await encoder.encodeMap({
      map,
      scale: options.scale,
      printResolution: map.getView().getResolution()!,
      dpi: DPI,
      customizer,
    })
    mapSpec.layers = mapSpec.layers.filter(layer => layer !== null)
    const legend = await this.getLegends(
      map.getLayers().getArray() as BaseLayer[],
      options.lang
    )
    const dataOwners: string[] = []
    recursiveGetLayerAttributions(
      map.getLayerGroup(),
      dataOwners,
      <FrameState>options.framestate
    )

    const spec = {
      attributes: {
        map: mapSpec,
        disclaimer: options.disclaimer,
        scaleTitle: options.scaleTitle,
        appTitle: options.appTitle,
        scale: options.scale,
        name: options.title,
        url: shortUrl,
        qrimage: `${QR_URL}?url=${shortUrl}`,
        lang: options.lang,
        legend: options.legend ? legend : null,
        scalebar: {
          geodetic: true,
        },
        dataOwner: [...new Set(dataOwners)].join(' '),
        dateText: options.dateText,
        queryResults: options.queryResults,
      },
      format: options.format.toLowerCase(),
      layout: options.layout,
    }
    return spec
  }

  /**
   * Get layers for print, filter layers that should not be printed (eg. profile position)
   * @param map The ol map object
   * @returns The filtered layers
   */
  getLayersForPrint(map: Map) {
    const layers = map
      .getLayers()
      .getArray()
      .filter(l => l.get(OLLAYER_PROP_ID) !== LAYER_POSITION_ID)
    return <BaseLayer[]>layers
  }

  getSize(layout: string): number[] {
    return MAP_SIZES_[LAYOUTS.indexOf(layout)]
  }

  getNearestScale(width: number, layout: string, resolution: number): number {
    const scales = this.getScales()
    const layoutWidth: number =
      MAP_SIZES_[LAYOUTS.indexOf(layout)][0] || MAP_SIZES_[0][0]

    return (
      scales
        .reverse()
        .find(
          (scale: number) => getWidth(scale, layoutWidth, resolution) < width
        ) || scales[0]
    )
  }

  async getShortLink(): Promise<string> {
    const url = BASE_URL + urlPathStorage.getRelativeUrl()
    const payload = { url }
    const response = await fetchApi(SHORT_URL, payload, 'POST')

    return ((await response.json()) as { short_url: string }).short_url
  }

  async getLegends(layers: BaseLayer[], lang: string): Promise<Object[]> {
    const legends: PrintLegend[] = []

    let dpi = DPI
    const url = LEGEND_URL
    layers.reverse().forEach(layer => {
      // TODO: use existing getMetadata from Metadata service instead
      const curMetadata = layer.get('metadata')
      const metaMaxDpi = curMetadata?.max_dpi
      if (metaMaxDpi !== undefined) {
        const maxDpi = parseInt(metaMaxDpi, 10)
        if (dpi > maxDpi) {
          dpi = maxDpi
        }
      }
      const name = curMetadata?.legend_name
      if (name !== undefined) {
        legends.push({ name: name })
      } else {
        const id = layer.get('queryable_id')
        if (curMetadata?.isExternalWms) {
          const legendUrl = curMetadata?.legendUrl
          const accessConstraints = curMetadata?.legendAccessConstraints
          const legendTitle = curMetadata?.legendTitle

          if (legendUrl !== undefined) {
            legends.push({
              name: null,
              legendUrl,
              accessConstraints,
              legendTitle,
            })
          }
        } else if (id !== undefined) {
          const queryParams = new URLSearchParams({
            lang,
            id: id,
            dpi: dpi.toString(),
            legend_title: layer.get('label'),
          })
          legends.push({
            name: layer.get('label'),
            restUrl: url + '?' + queryParams.toString(),
            legendTitle: layer.get('label'),
          })
        }
      }
    })

    return legends
  }
}

function recursiveGetLayerAttributions(
  layer: BaseLayer | LayerGroup,
  dataOwners: string[],
  framestate: FrameState
) {
  if (layer instanceof LayerGroup) {
    ;(layer as LayerGroup)
      .getLayers()
      .forEach(l =>
        recursiveGetLayerAttributions(l as BaseLayer, dataOwners, framestate)
      )
  } else {
    const attributions = layer.getSource()?.getAttributions()
    const attribution = layer.get('metadata')?.attribution
    const htmls: string[] = []
    if (attributions) {
      htmls.push(
        ...attributions(framestate as unknown as ViewStateLayerStateExtent)
      ) // FIXME: better typing? following migration from v6
    }
    if (attribution) {
      htmls.push(attribution)
    }

    dataOwners.push(...htmls)
  }
}

export const printService = new PrintService()
