import { remoteLayersService } from '../remote-layers/remote-layers.service'

export class WmsHelperService {
  async getMetadata(id: string) {
    const values = id.split('%2D').join('-').split('||')
    const serviceType = values[0]
    const wmsUrl = values[1]
    const layerName = values[2]
    console.assert(serviceType === 'WMS')
    const wmsEndpoint = remoteLayersService.getWmsEndpoint(wmsUrl)
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
export const wmsHelper = new WmsHelperService()
