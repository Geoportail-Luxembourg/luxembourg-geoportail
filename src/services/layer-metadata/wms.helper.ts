import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'
import { OwsHelper } from './ows.helper'

export class WmsHelper extends OwsHelper {
  async getMetadata(
    serviceType: REMOTE_SERVICE_TYPE,
    url: string,
    layerName: string
  ) {
    console.assert(serviceType === REMOTE_SERVICE_TYPE.WMS)
    const wmsEndpoint = remoteLayersService.getWmsEndpoint(url)
    await wmsEndpoint.isReady()
    const service = wmsEndpoint?.getServiceInfo()
    const layer = wmsEndpoint?.getLayerByName(layerName)
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
