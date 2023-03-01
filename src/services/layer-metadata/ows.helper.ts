import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'

export abstract class OwsHelper {
  abstract getMetadata(
    serviceType: REMOTE_SERVICE_TYPE,
    url: string,
    layerName: string
  ): Promise<{
    title?: string
    description?: string
    keywords?: string[]
    accessConstraints?: string
    serviceDescription?: string
  }>
}
