import { remoteLayersService } from '@/components/remote-layers/remote-layers.service'
import { IdValues } from '../layer-metadata/layer-metadata.model'

export class WmtsHelper {
  async getMetadata(idValues: IdValues) {
    console.assert(idValues.serviceType === 'WMTS')
    const wmtsEndpoint = remoteLayersService.getWmtsEndpoint(idValues.wmsUrl)
    await wmtsEndpoint.isReady()
    const service = wmtsEndpoint?.getServiceInfo()
    const layer = wmtsEndpoint?.getLayerByName(idValues.layerName)
    return {
      title: layer.Title,
      description: layer.Abstract,
      accessConstraints: service.AccessConstraints,
      serviceDescription: service.Abstract,
    }
  }
}
export const wmtsHelper = new WmtsHelper()
