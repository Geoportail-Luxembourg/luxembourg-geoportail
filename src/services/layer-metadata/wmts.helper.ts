import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'
import { OwsHelper } from './ows.helper'

export class WmtsHelper extends OwsHelper {
  async getMetadata(
    serviceType: REMOTE_SERVICE_TYPE,
    url: string,
    layerName: string
  ) {
    console.assert(serviceType === REMOTE_SERVICE_TYPE.WMTS)
    const wmtsEndpoint = remoteLayersService.getWmtsEndpoint(url)
    await wmtsEndpoint.isReady()
    const service = wmtsEndpoint?.getServiceInfo()
    const layer = wmtsEndpoint?.getLayerByName(layerName)
    return {
      title: layer.title,
      description: layer.abstract,
      accessConstraints: service.constraints,
      serviceDescription: service.abstract,
    }
  }
}
export const wmtsHelper = new WmtsHelper()
