import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { IdValues, LayerMetadataModel } from './layer-metadata.model'
import {
  getMetadataLinks,
  getResponsibleParty,
  isoLang2To3,
  stringToHtml,
} from './layer-metadata.utils'
import { wmsHelper } from '../common/wms.helper'
import useThemes from '../../composables/themes/themes.composable'
import { LayerId } from '@/stores/map.store.model'

export class LayerMetadataService {
  // TODO: get urls from a config
  private geonetworkBaseUrl =
    'https://geocatalogue.geoportail.lu/geonetwork/srv'
  private legendBaseUrl = 'https://map.geoportail.lu/legends/get_html'
  // TODO: get from config or relative
  private localMetadataBaseUrl = 'https://map.geoportail.lu/getMetadata'

  async getLayerMetadata(
    id: LayerId,
    currentLanguage: string
  ): Promise<LayerMetadataModel> {
    const layer: ThemeNodeModel | undefined =
      useThemes().findById(+id) || useThemes().findBgLayerById(+id)
    let localMetadata
    let metadata
    if (layer) {
      localMetadata = layer.metadata

      metadata =
        layer.metadata?.metadata_id &&
        (await this.getLocalMetadata(
          this.localMetadataBaseUrl,
          layer.metadata.metadata_id,
          currentLanguage
        ))
      metadata = { ...metadata, title: layer.name }

      //TODO: legend for external layers?
      const layerId = layer?.id
      const legendName =
        localMetadata && 'legend_name' in localMetadata
          ? localMetadata.legend_name
          : ''

      const legendHtml =
        legendName &&
        (await this.getLegendHtml(
          this.legendBaseUrl,
          legendName,
          layerId,
          currentLanguage
        ))
      metadata = legendHtml
        ? {
            ...metadata,
            legendHtml: legendHtml,
            hasLegend: true,
          }
        : (metadata = {
            ...metadata,
            hasLegend: false,
          })
    } else {
      // is this case needed for another case than external layers (which have no theme node in theme service)?
      const values = String(id).split('%2D').join('-').split('||')
      const idValues: IdValues = {
        serviceType: values[0] as 'WMS' | 'WMTS',
        wmsUrl: values[1],
        layerName: values[2],
      }
      if (idValues.serviceType === 'WMS') {
        metadata = await wmsHelper.getMetadata(idValues)
      } else if (idValues.serviceType == 'WMTS') {
        // TODO: handle WMTS
        // metadata = appWmtsHelper.getMetadata(metadataUid)
      }
    }
    return metadata as LayerMetadataModel
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
          metadataLink: `${this.geonetworkBaseUrl}/${isoLang2To3(
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
