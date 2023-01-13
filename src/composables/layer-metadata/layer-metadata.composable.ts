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
import useWmsHelper from '../common/wms-helper.composable'
import useThemes from '../themes/themes.composable'

export default function useLayerMetadata() {
  // TODO: get urls from a config
  const geonetworkBaseUrl = 'https://geocatalogue.geoportail.lu/geonetwork/srv'
  const legendBaseUrl = 'https://map.geoportail.lu/legends/get_html'
  // TODO: get from config or relative
  const localMetadataBaseUrl = 'https://map.geoportail.lu/getMetadata'
  const themes = useThemes()
  const wmsHelper = useWmsHelper()
  const { i18next } = useTranslation()

  async function getLayerMetadata(
    node: LayerTreeNodeModel
  ): Promise<LayerMetadataModel> {
    const layer: ThemeNodeModel | undefined = themes.findById(
      parseInt(node.id, 10)
    )
    let localMetadata
    let metadata
    if (layer) {
      localMetadata = layer.metadata

      const currentLanguage = i18next.language

      metadata =
        layer.metadata &&
        layer.metadata.metadata_id &&
        (await getLocalMetadata(
          localMetadataBaseUrl,
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
        (await getLegendHtml(
          legendBaseUrl,
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
      const values = node.id.split('%2D').join('-').split('||')
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
