import { MapLibreLayer } from '@/bundle/lib'
import { Metadata } from '@/composables/themes/themes.model'
import { DOTS_PER_INCH, INCHES_PER_METER } from '@/lib/ol-mask-layer'
import { useThemeStore } from '@/stores/config.store'
import type { MFPLayer } from '@geoblocks/mapfishprint'
import { BaseCustomizer, MFPEncoder } from '@geoblocks/mapfishprint'
import { Map } from 'ol'
import LayerGroup from 'ol/layer/Group'
import type { State } from 'ol/layer/Layer.js'
import BaseLayer from 'ol/layer/Layer.js'
import { FrameState } from 'ol/PluggableMap'

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
  t: Function
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

export const BASE_URL = 'http://localhost:8080'
const LEGEND_URL = 'https://migration.geoportail.lu/legends/get_html'

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

  async print(options: PrintOptions, map: Map): Promise<string> {
    const spec = await this.getSpec(options, map)
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

  async getSpec(options: PrintOptions, map: Map): Promise<object> {
    const encoder = new LuxEncoder(BASE_URL)
    const customizer = new BaseCustomizer()
    const shortUrl = await this.getShortLink()
    const t = options.t

    const mapSpec = await encoder.encodeMap({
      map,
      scale: options.scale,
      printResolution: map.getView().getResolution()!,
      dpi: 127,
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
      options.framestate
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
        qrimage: `https://map.geoportail.lu/qr?url=${shortUrl}`,
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
    let url = window.location.href.toString()
    //Replace the specific app parameter
    const isApp =
      location.search.includes('localforage=android') ||
      location.search.includes('localforage=ios') ||
      location.search.includes('applogin=yes')

    if (isApp) {
      const paramsToRemove = [
        'localforage=android',
        'localforage=ios',
        'applogin=yes',
        'ipv6=true',
        'embeddedserver=127.0.0.1%3A8765',
        'embeddedserverprotocol=https',
        'embeddedserverprotocol=http',
      ]

      paramsToRemove.forEach(param => {
        url = url.replace(param, '')
      })
    }

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
    const response = await fetch(`${BASE_URL}/short/create`, {
      method: 'POST',
      headers,
      body: `url=${encodeURIComponent(url)}`,
    })
    return ((await response.json()) as { short_url: string }).short_url
  }

  async getLegends(layers: BaseLayer[], lang: string): Promise<Object[]> {
    const legends: PrintLegend[] = []

    let dpi = 127
    const url = LEGEND_URL
    layers.reverse().forEach(layer => {
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
  framestate: any
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

class LuxEncoder extends MFPEncoder {
  async encodeLayerState(
    layerState: State,
    printResolution: number,
    customizer: BaseCustomizer
  ): Promise<MFPLayer[] | MFPLayer | null> {
    const layer = layerState.layer
    if (layer instanceof MapLibreLayer) {
      // @ts-ignore
      return this.encodeXYZLayer_(layer.getXYZ())
    }
    return super.encodeLayerState(layerState, printResolution, customizer)
  }

  encodeXYZLayer_(url: string) {
    // https://vectortiles.geoportail.lu/styles/roadmap/{z}/{x}/{y}.png
    const i = url.indexOf('/{z}/{x}/{y}')
    const j = url.lastIndexOf('.')
    if (i === -1 || j === -1) {
      return
    }
    const baseURL = url.substr(0, i)
    const imageExtension = url.substr(j + 1)
    const styleName = baseURL.substr(
      baseURL.lastIndexOf('/styles/') + '/styles/'.length
    )
    let object: any
    if (
      styleName === 'topomap' ||
      styleName === 'roadmap' ||
      styleName === 'topomap_gray'
    ) {
      object = {
        baseURL: 'https://wms.geoportail.lu/vectortiles_wms_4_print/service',
        imageFormat: 'image/' + imageExtension,
        layers: [styleName],
        customParams: {
          TRANSPARENT: true,
          MAP_RESOLUTION: 127,
        },
        type: 'wms',
        opacity: 1,
        version: '1.1.1',
        useNativeAngle: true,
      }
    } else {
      object = {
        baseURL,
        type: 'OSM',
        imageExtension,
      }
    }
    return object
  }
}

export const printService = new PrintService()
