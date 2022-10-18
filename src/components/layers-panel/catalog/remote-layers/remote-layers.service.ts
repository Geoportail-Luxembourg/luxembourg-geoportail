import { WmsEndpoint } from '@camptocamp/ogc-client'
import { predefinedWmsFixture } from '../../../../../test/fixtures/predefined-wms.fixture'
import { remoteProxyWms } from '../../../../services/map/ol.service'
import {
  OlClientWmsLayerSummary,
  RemoteLayerModel,
  RemoteWmsEndpointModel,
} from './remote-layers.model'

const forceUseProxy = true

export class RemoteLayersService {
  public async getWmsEndpoint(url: string): Promise<Object> {
    return await new WmsEndpoint(this.getProxyfiedUrl(url)).isReady()
  }

  public getProxyfiedUrl(url: string) {
    if (url.indexOf('httpsproxy') > 0) {
      return url
    }

    if (
      forceUseProxy ||
      (window.location.protocol === 'https:' &&
        url.toLowerCase().indexOf('http:') === 0)
    ) {
      return remoteProxyWms + '?url=' + encodeURIComponent(url)
    }

    return url
  }

  async fetchRemoteWmsEndpoint(): Promise<RemoteWmsEndpointModel[]> {
    return new Promise(resolve => resolve(predefinedWmsFixture()))
  }

  async fetchRemoteLayers(
    wmsEndpoint: Object
  ): Promise<OlClientWmsLayerSummary[]> {
    return wmsEndpoint && (wmsEndpoint as any).getLayers()
  }

  async fetchRemoteLayerByName(
    wmsEndpoint: Object,
    layerName: string
  ): Promise<RemoteLayerModel> {
    return wmsEndpoint && (wmsEndpoint as any).getLayerByName(layerName)
  }
}

export const remoteLayersService = new RemoteLayersService()
