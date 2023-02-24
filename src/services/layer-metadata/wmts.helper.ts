import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'

export class WmtsHelper {
  async getMetadata(serviceType: string, url: string, layerName: string) {
    console.assert(serviceType === 'WMTS')
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
