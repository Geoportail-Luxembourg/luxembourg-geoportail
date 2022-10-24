import i18next from 'i18next'
import { ThemeNodeModel } from '../../../../services/themes/themes.model'
import { Layer } from '../../../../state/map/map.state.model'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { LayerMetadataModel } from './layer-metadata.model'
import { isoLang2To3, stringToHtml } from './layer-metadata.utils'

export class LayerMetadataService {
  private geonetworkBaseUrl =
    'https://geocatalogue.geoportail.lu/geonetwork/srv' //TODO: get from config
  private legendBaseUrl = 'https://map.geoportail.lu/legends/get_html' //TODO: get from config
  private localMetadataBaseUrl = 'https://map.geoportail.lu/getMetadata' //TODO: get from config or relative

  async getLayerMetadata(
    node: LayerTreeNodeModel,
    layer?: ThemeNodeModel
  ): Promise<LayerMetadataModel> {
    console.log(node, layer)
    let title
    let localMetadata
    if (!layer) {
      //when is this case needed?
      title = node.name
      localMetadata = node.metadata // does not exist
    } else {
      title = layer.name
      localMetadata = layer.metadata
    }
    const metadataUid = localMetadata.metadata_id

    const layerId = layer.id
    const legendName =
      'legend_name' in localMetadata ? localMetadata.legend_name : ''
    const currentLanguage = i18next.language

    //TODO: handle WMTS, WMS
    // if (localMetadata.isExternalWmts) {
    //   promises_[promiseKey] = appWmtsHelper.getMetadata(metadataUid);
    // } else if (localMetadata.isExternalWms) {
    //   promises_[promiseKey] = appWmsHelper.getMetadata(metadataUid);
    // } else {

    let metadata = await this.getLocalMetadata(
      this.localMetadataBaseUrl,
      metadataUid,
      currentLanguage
    )
    metadata = { ...metadata, title: title }

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
      link: metadata.link, //TODO: splitLink
      revisionDate: metadata.revisionDate, //TODO: handle date? (WMS, WMTS)
      keyword: metadata.keyword.join(', '),
      responsibleParty: metadata.responsibleParty,
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
