import { useTranslation } from 'i18next-vue'
import { ThemeNodeModel } from '../themes/themes.model'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { IdValues, LayerMetadataModel } from './layer-metadata.model'
import {
  getMetadataLinks,
  getResponsibleParty,
  isoLang2To3,
  stringToHtml,
} from './layer-metadata.utils'
import useThemes from '../themes/themes.composable'

export default function useLayerMetadata() {
  // TODO: get urls from a config
  const geonetworkBaseUrl = 'https://geocatalogue.geoportail.lu/geonetwork/srv'
  const legendBaseUrl = 'https://map.geoportail.lu/legends/get_html'
  // TODO: get from config or relative
  const localMetadataBaseUrl = 'https://map.geoportail.lu/getMetadata'
  const themes = useThemes()
  const { i18next } = useTranslation()

  async function getLayerMetadata(
    node: LayerTreeNodeModel
  ): Promise<LayerMetadataModel> {
    const layer: ThemeNodeModel = themes.findById(parseInt(node.id, 10))
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
    } else {
      localMetadata = layer.metadata

      const currentLanguage = i18next.language
      metadata = await this.getLocalMetadata(
        localMetadataBaseUrl,
        layer.metadata?.metadata_id,
        currentLanguage
      )
      metadata = { ...metadata, title: layer.name }

      //TODO: legend for external layers?
      const layerId = layer?.id
      const legendName =
        'legend_name' in localMetadata ? localMetadata.legend_name : ''

      const legendHtml = await this.getLegendHtml(
        legendBaseUrl,
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

  async function getLocalMetadata(
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
      description: metadata.abstract,
      legalConstraints: metadata.legalConstraints,
      link: getMetadataLinks(metadata.link),
      revisionDate: metadata.revisionDate,
      keyword: metadata.keyword,
      responsibleParty: metadata.responsibleParty
        ? getResponsibleParty(metadata.responsibleParty)
        : [],
      metadataLink: `${geonetworkBaseUrl}/${isoLang2To3(
        language
      )}/catalog.search#/metadata/${metadataUid}`,
      isError: false,
    }
  }

  async function getLegendHtml(
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
      // handle high resolution screens
      if (window.devicePixelRatio > 1) {
        queryParams.dpi = window.devicePixelRatio * 96
      }
      const legendUrl = `${legendBaseUrl}?${new URLSearchParams(
        queryParams
      ).toString()}`
      const response = await fetch(legendUrl)
      const legendString = await response.text()
      if (legendString) legendHtml = stringToHtml(legendString)
    }
    return legendHtml
  }
  return {
    getLayerMetadata,
    getLocalMetadata,
    getLegendHtml,
  }
}
