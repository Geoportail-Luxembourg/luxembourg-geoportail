import i18next from 'i18next'
import { ThemeNodeModel } from '../../../../services/themes/themes.model'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { IdValues, LayerMetadataModel } from './layer-metadata.model'
import {
  getMetadataLinks,
  getResponsibleParty,
  isoLang2To3,
  stringToHtml,
} from './layer-metadata.utils'
import { wmsHelper } from './wms-helper.service'

export class LayerMetadataService {
  private geonetworkBaseUrl =
    'https://geocatalogue.geoportail.lu/geonetwork/srv' //TODO: get from config
  private legendBaseUrl = 'https://map.geoportail.lu/legends/get_html' //TODO: get from config
  private localMetadataBaseUrl = 'https://map.geoportail.lu/getMetadata' //TODO: get from config or relative

  async getLayerMetadata(
    node: LayerTreeNodeModel,
    layer?: ThemeNodeModel
  ): Promise<LayerMetadataModel> {
    let localMetadata
    let metadata
    if (!layer) {
      // is this case needed for another case than external layers (which have no theme node in theme service)?
      const values = node.id.split('%2D').join('-').split('||')
      const idValues: IdValues = {
        serviceType: values[0],
        wmsUrl: values[1],
        layerName: values[2],
      }
      if (idValues.serviceType === 'WMS') {
        metadata = await wmsHelper.getMetadata(idValues)
      } else if (idValues.serviceType == 'WMTS') {
        // metadata = appWmtsHelper.getMetadata(metadataUid)
      }
    } else {
      localMetadata = layer.metadata

      const currentLanguage = i18next.language
      metadata = await this.getLocalMetadata(
        this.localMetadataBaseUrl,
        layer.metadata?.metadata_id,
        currentLanguage
      )
      metadata = { ...metadata, title: layer.name }

      //TODO: legend for external layers?
      const layerId = layer?.id
      const legendName =
        'legend_name' in localMetadata ? localMetadata.legend_name : ''

      //could be sent in parallel
      const legendHtml = await this.getLegendHtml(
        this.legendBaseUrl,
        legendName,
        layerId,
        currentLanguage
      )
      if (legendHtml) {
        metadata = {
          ...metadata,
          legendHtml: legendHtml,
          hasLegend: true,
        }
      } else {
        metadata = {
          ...metadata,
          hasLegend: false,
        }
      }
    }
    return metadata
  }

  async getLocalMetadata(
    baseUrl: string,
    metadataUid: string,
    language: string
  ): Promise<LayerMetadataModel> {
    const response = await fetch(
      `${baseUrl}?lang=${language}&uid=${metadataUid}`
    )
    const metadata = (await response.json()).metadata

    return {
      name: metadata.title,
      serviceDescription: metadata.serviceDescription,
      description: metadata.abstract, //TODO: trustAsHtml? (currently short_trusted_description, trusted_description for teaser)
      legalConstraints: metadata.legalConstraints,
      link: getMetadataLinks(metadata.link),
      revisionDate: metadata.revisionDate, //TODO: handle date? (WMS, WMTS)
      keyword: metadata.keyword,
      responsibleParty: metadata.responsibleParty
        ? getResponsibleParty(metadata.responsibleParty)
        : [],
      metadataLink: `${this.geonetworkBaseUrl}/${isoLang2To3(
        language
      )}/catalog.search#/metadata/${metadataUid}`,
      isError: false, //TODO: catch errors
    }
  }

  async getLegendHtml(
    legendBaseUrl: string,
    legendName: string,
    layerId: number,
    language: string
  ) {
    let legendHtml = undefined
    const queryParams = {
      lang: language,
      ...(legendName && { name: legendName }),
      ...(layerId && { id: layerId.toString() }),
    }
    if (queryParams.name && queryParams.lang) {
      // TODO: handle high resolution screens?
      // if ($window_.devicePixelRatio > 1) {
      //   queryParams['dpi'] = $window_.devicePixelRatio * 96
      // }
      const legendUrl = `${legendBaseUrl}?${new URLSearchParams(
        queryParams
      ).toString()}`
      const response = await fetch(legendUrl)
      const legendString = await response.text()
      if (legendString) legendHtml = stringToHtml(legendString)
    }
    return legendHtml
  }
}

export const layerMetadataService = new LayerMetadataService()
