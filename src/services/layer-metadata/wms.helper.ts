import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { IdValues } from './layer-metadata.model'

export class WmsHelper {
  async getMetadata(idValues: IdValues) {
    console.assert(idValues.serviceType === 'WMS')
    const wmsEndpoint = remoteLayersService.getWmsEndpoint(idValues.url)
    await wmsEndpoint.isReady()
    const service = wmsEndpoint?.getServiceInfo()
    const layer = wmsEndpoint?.getLayerByName(idValues.layerName)
    return {
      title: layer.title,
      description: layer.abstract,
      keywords: service.keywords,
      accessConstraints: service.constraints,
      serviceDescription: service.abstract,
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
}
export const wmsHelper = new WmsHelper()
