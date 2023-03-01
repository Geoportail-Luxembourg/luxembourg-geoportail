import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'
import { wmsHelper } from './wms.helper'
import { wmtsHelper } from './wmts.helper'

export class RemoteMetadataHelper {
  async getMetadata(
    serviceType: REMOTE_SERVICE_TYPE,
    url: string,
    layerName: string
  ) {
    if (serviceType === REMOTE_SERVICE_TYPE.WMS) {
      return wmsHelper.getMetadata(serviceType, url, layerName)
    } else if (serviceType === REMOTE_SERVICE_TYPE.WMTS) {
      return wmtsHelper.getMetadata(serviceType, url, layerName)
    } else {
      throw new Error(`Unsupported service type: ${serviceType}`)
    }
  }
}
export const remoteMetadataHelper = new RemoteMetadataHelper()
