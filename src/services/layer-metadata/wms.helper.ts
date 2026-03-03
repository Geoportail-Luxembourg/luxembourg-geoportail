import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'
import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'
import { OwsHelper } from './ows.helper'

export class WmsHelper extends OwsHelper {
  async getMetadata(
    serviceType: REMOTE_SERVICE_TYPE,
    url: string,
    layerName: string
  ) {
    const wmsEndpoint = remoteLayersService.getWmsEndpoint(url)
    await wmsEndpoint.isReady()
    const service = wmsEndpoint?.getServiceInfo()
    const layer = wmsEndpoint?.getLayerByName(layerName)

    // Extract legend URL from the layer styles (first style with a legendUrl wins,
    // mirroring the v3 behaviour which picks the 'default' style's LegendURL)
    const legendUrl = this.extractLegendUrl(layer?.styles)

    return {
      title: layer.title,
      description: layer.abstract,
      keywords: service.keywords,
      accessConstraints: service.constraints,
      serviceDescription: service.abstract,
      ...(legendUrl && { legendUrl, hasLegend: true }),
      /* The following attributes are present in production,
       ** but no services could be found so far that filled them with values in production
       ** values are not provided by ogc-client, and would need old code => can be ignored?
       */
      // pocs: undefined,
      // revisionDate: '',
      // language: undefined,
      // onlineResource: undefined,
    }
  }

  /**
   * Extracts and proxies the legend URL from a layer's styles array.
   * Prefers the style named 'default', otherwise uses the first available URL.
   */
  extractLegendUrl(
    styles?: { name: string; legendUrl?: string }[]
  ): string | undefined {
    if (!styles?.length) return undefined
    const defaultStyle = styles.find(s => s.name === 'default')
    const legendUrl =
      defaultStyle?.legendUrl ?? styles.find(s => s.legendUrl)?.legendUrl
    return legendUrl ? proxyUrlHelper.getProxyfiedUrl(legendUrl) : undefined
  }
}
export const wmsHelper = new WmsHelper()
