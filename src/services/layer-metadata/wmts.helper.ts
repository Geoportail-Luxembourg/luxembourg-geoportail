import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { IdValues } from './layer-metadata.model'

export class WmtsHelper {
  async getMetadata(idValues: IdValues) {
    console.assert(idValues.serviceType === 'WMTS')
    const wmtsEndpoint = remoteLayersService.getWmtsEndpoint(idValues.wmsUrl)
    await wmtsEndpoint.isReady()
    const service = wmtsEndpoint?.getServiceInfo()
    const layer = wmtsEndpoint?.getLayerByName(idValues.layerName)
    return {
      title: layer.title,
      description: layer.abstract,
      accessConstraints: service.constraints,
      serviceDescription: service.abstract,
    }
  }
}
export const wmtsHelper = new WmtsHelper()
