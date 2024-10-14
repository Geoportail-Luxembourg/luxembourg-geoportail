import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { LayerMetadataModel } from './layer-metadata.model'
import {
  getMetadataLinks,
  getResponsibleParty,
  isoLang2To3,
  stringToHtml,
} from './layer-metadata.utils'
import useThemes from '@/composables/themes/themes.composable'
import { LayerId } from '@/stores/map.store.model'
import { remoteMetadataHelper } from './remote-metadata.helper'
import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'

const GEONETWORK_URL = import.meta.env.VITE_GEONETWORK_URL
const GET_LEGENDS_URL = import.meta.env.VITE_GET_LEGENDS_URL
const GET_METADATA_URL = import.meta.env.VITE_GET_METADATA_URL

export class LayerMetadataService {
  async getLayerMetadata(id: LayerId, currentLanguage: string) {
    const themesService = useThemes()
    const layer: ThemeNodeModel | undefined =
      themesService.findBgLayerById(+id) ||
      themesService.findById(+id) ||
      themesService.find3dLayerById(+id)

    if (layer) {
      // Internal layer
      const localMetadata = layer.metadata
      const metadataId = localMetadata?.metadata_id

      const metadata =
        metadataId &&
        (await this.getLocalMetadata(
          GET_METADATA_URL,
          metadataId,
          currentLanguage
        ))
      const title = layer.name

      const legendName = localMetadata?.legend_name || ''
      const layerId = layer?.id
      const legendHtml =
        legendName &&
        (await this.getLegendHtml(
          GET_LEGENDS_URL,
          legendName,
          layerId,
          currentLanguage
        ))

      return {
        ...metadata,
        title,
        hasLegend: !!legendHtml,
        ...(legendHtml && { legendHtml }),
      } as LayerMetadataModel
    } else {
      // External layers (which have no theme node in theme service)
      const [serviceType, url, layerName] = String(id)
        .split('%2D')
        .join('-')
        .split('||')
      return remoteMetadataHelper.getMetadata(
        serviceType as REMOTE_SERVICE_TYPE,
        url,
        layerName
      )
    }
  }

  getLocalMetadata(
    baseUrl: string,
    metadataUid: string,
    language: string
  ): Promise<LayerMetadataModel> {
    return fetch(`${baseUrl}?lang=${language}&uid=${metadataUid}`)
      .then(async response => {
        const metadata = (await response.json()).metadata
        return {
          name: metadata.title,
          serviceDescription: metadata.serviceDescription,
          description: metadata.abstract,
          legalConstraints: metadata.legalConstraints,
          link: getMetadataLinks(metadata.link),
          revisionDate: metadata.revisionDate,
          keyword: metadata.keyword,
          responsibleParty: metadata.responsibleParty
            ? getResponsibleParty(metadata.responsibleParty)
            : undefined,
          metadataLink: `${GEONETWORK_URL}/${isoLang2To3(
            language
          )}/catalog.search#/metadata/${metadataUid}`,
          isError: false,
        }
      })
      .catch(() => {
        return { isError: true }
      })
  }

  getLegendHtml(
    legendBaseUrl: string,
    legendName: string,
    layerId: number,
    language: string
  ) {
    const queryParams: {
      lang?: string
      name?: string
      id?: string
      dpi?: string
    } = {
      lang: language,
      ...(legendName && { name: legendName }),
      ...(layerId && { id: layerId.toString() }),
    }
    if (queryParams.name && queryParams.lang) {
      // handle high resolution screens
      if (window.devicePixelRatio > 1) {
        queryParams.dpi = (window.devicePixelRatio * 96).toString()
      }
      const legendUrl = `${legendBaseUrl}?${new URLSearchParams(
        queryParams
      ).toString()}`
      return fetch(legendUrl)
        .then(async response => {
          if (response.status >= 400 && response.status < 600) {
            throw new Error('Server responded with error code')
          }
          const legendString = await response.text()
          return legendString ? stringToHtml(legendString) : undefined
        })
        .catch(() => {
          return undefined
        })
    }
  }
}

export const layerMetadataService = new LayerMetadataService()
