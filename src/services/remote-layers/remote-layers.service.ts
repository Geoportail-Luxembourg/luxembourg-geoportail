import { WmsEndpoint } from '@camptocamp/ogc-client'

import { predefinedWmsFixture } from '@/__fixtures__/predefined-wms.fixture'
import { remoteProxyWms } from '@/composables/map/ol.composable'
import {
  OgcClientWmsEndpoint,
  RemoteWmsEndpointModel,
  REMOTE_SERVICE_TYPE,
} from './remote-layers.model'
import { LayerId } from '@/stores/map.store.model'
import { WmtsEndpoint } from '@/services/remote-layers/wmts.endpoint'

const forceUseProxy = true

export class RemoteLayersService {
  public async getRemoteEndpoint(
    url: string
  ): Promise<OgcClientWmsEndpoint | WmtsEndpoint> {
    let wmtsEndpoint
    const wmsEndpoint = await this.getWmsEndpoint(url)
      .isReady()
      .catch(async () => {
        wmtsEndpoint = await this.getWmtsEndpoint(url).isReady()
      })
    return wmsEndpoint || wmtsEndpoint
  }

  public getWmsEndpoint(url: string): OgcClientWmsEndpoint {
    return new WmsEndpoint(this.getProxyfiedUrl(url))
  }

  public getWmtsEndpoint(url: string): WmtsEndpoint {
    return new WmtsEndpoint(this.getProxyfiedUrl(url))
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

  isRemoteLayer(layerId: LayerId) {
    return (
      typeof layerId === 'string' &&
      (layerId.indexOf(REMOTE_SERVICE_TYPE.WMS) === 0 ||
        layerId.indexOf(REMOTE_SERVICE_TYPE.WMTS) === 0)
    )
  }
}

export const remoteLayersService = new RemoteLayersService()
