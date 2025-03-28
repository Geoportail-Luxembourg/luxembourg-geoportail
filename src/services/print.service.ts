import { Metadata } from '@/composables/themes/themes.model'
import MapLibreLayer from '@/lib/ol-mapbox-layer'
import { DOTS_PER_INCH, INCHES_PER_METER } from '@/lib/ol-mask-layer'
import { useThemeStore } from '@/stores/config.store'
import type {
  MFPLayer,
  MFPOSMLayer,
  MFPWmsLayer,
} from '@geoblocks/mapfishprint'
import { BaseCustomizer, MFPEncoder } from '@geoblocks/mapfishprint'
import { Map } from 'ol'
import LayerGroup from 'ol/layer/Group'
import type { State } from 'ol/layer/Layer.js'
import BaseLayer from 'ol/layer/Layer.js'
import { FrameState } from 'ol/PluggableMap'
import { urlPathStorage } from './state-persistor/storage/url-storage-as-path'
import { fetchApi } from './api/api.service'

export const BASE_URL = import.meta.env.VITE_PRINT_HOST
const LEGEND_URL = import.meta.env.VITE_GET_LEGENDS_URL
const SHORT_URL = import.meta.env.VITE_SHORT_URL
const PROXYURL_PRINT = import.meta.env.VITE_PROXYURL_PRINT
const QR_URL = import.meta.env.VITE_QR_URL

export interface PrintLegend {
  name: string | null
  restUrl?: string
  legendTitle?: string
  accessConstraints?: string
  legendUrl?: string
}
export interface PrintOptions {
  format: PRINT_FORMAT
  layout: string
  scale: number
  resolution: number
  title: string
  lang: string
  legend: boolean
  framestate: FrameState | null
}

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

  async print(
    options: PrintOptions,
    map: Map,
    t: Function
  ): Promise<ReportResponse> {
    const spec = await this.getSpec(options, map, t)
    const url = `${PROXYURL_PRINT}/report.${
      options.format.toLocaleLowerCase() || 'pdf'
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

  async getSpec(options: PrintOptions, map: Map, t: Function): Promise<object> {
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
        disclaimer: t(
          "www.geoportail.lu est un portail d'accès aux informations géolocalisées, données et services qui sont mis à disposition par les administrations publiques luxembourgeoises. Responsabilité: Malgré la grande attention qu’elles portent à la justesse des informations diffusées sur ce site, les autorités ne peuvent endosser aucune responsabilité quant à la fidélité, à l’exactitude, à l’actualité, à la fiabilité et à l’intégralité de ces informations. Information dépourvue de foi publique. \nDroits d'auteur: Administration du Cadastre et de la Topographie. http://g-o.lu/copyright",
          { ns: 'app' }
        ),
        scaleTitle: t('Echelle approximative 1:', { ns: 'app' }),
        appTitle: t('Le géoportail national du Grand-Duché du Luxembourg', {
          ns: 'app',
        }),
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
        dateText: t("Date d'impression: ", { ns: 'app' }),
        queryResults: null,
      },
      format: options.format.toLowerCase(),
      layout: options.layout,
    }
    return spec
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
      htmls.push(...attributions(framestate))
    }
    if (attribution) {
      htmls.push(attribution)
    }

    dataOwners.push(...htmls)
  }
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

export class LuxEncoder extends MFPEncoder {
  async encodeLayerState(
    layerState: State,
    printResolution: number,
    customizer: BaseCustomizer
  ) {
    let encoded: MFPLayer[] | MFPLayer | null
    const layer = layerState.layer
    if (layer instanceof MapLibreLayer) {
      // @ts-ignore
      encoded = this.encodeXYZLayer_(layer.getXYZ())
    } else {
      encoded = await super.encodeLayerState(
        layerState,
        printResolution,
        customizer
      )
    }

    if (Array.isArray(encoded)) {
      encoded = <MFPLayer[]>encoded.map(this.legacyMFPAppendCustomParams)
    } else if (encoded) {
      encoded = this.legacyMFPAppendCustomParams(encoded)
    }

    return encoded
  }

  legacyMFPAppendCustomParams(encoded: MFPLayer | MFPLayer[] | null) {
    return encoded
      ? {
          ...encoded,
          ...{
            customParams: {
              TRANSPARENT: true,
              MAP_RESOLUTION: DPI,
            },
          },
        }
      : null
  }

  encodeXYZLayer_(url: string) {
    // https://vectortiles.geoportail.lu/styles/roadmap/{z}/{x}/{y}.png
    const i = url.indexOf('/{z}/{x}/{y}')
    const j = url.lastIndexOf('.')
    if (i === -1 || j === -1) {
      return
    }
    const baseURL = url.substring(0, i)
    const imageExtension = url.substring(j + 1)
    const styleName = baseURL.substring(
      baseURL.lastIndexOf('/styles/') + '/styles/'.length
    )
    if (
      styleName === 'topomap' ||
      styleName === 'roadmap' ||
      styleName === 'topomap_gray'
    ) {
      return {
        baseURL: 'https://wms.geoportail.lu/vectortiles_wms_4_print/service',
        imageFormat: 'image/' + imageExtension,
        layers: [styleName],
        customParams: {
          TRANSPARENT: true,
          MAP_RESOLUTION: DPI,
        },
        type: 'wms',
        opacity: 1,
        version: '1.1.1',
        useNativeAngle: true,
      } as unknown as MFPWmsLayer
    } else {
      return {
        baseURL,
        type: 'OSM',
        imageExtension,
      } as unknown as MFPOSMLayer
    }
  }
}

export const printService = new PrintService()
