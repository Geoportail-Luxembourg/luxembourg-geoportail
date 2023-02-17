import { WmsEndpoint } from '@camptocamp/ogc-client'

import { predefinedWmsFixture } from '@/__fixtures__/predefined-wms.fixture'
import { remoteProxyWms } from '@/composables/map/ol.composable'
import {
  OgcClientWmsEndpoint,
  RemoteWmsEndpointModel,
} from './remote-layers.model'
import { LayerId } from '@/stores/map.store.model'
import { WmtsEndpoint } from '@/services/remote-layers/wmts.endpoint'

const forceUseProxy = true

export class RemoteLayersService {
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
    return typeof layerId === 'string' && layerId.indexOf('WMS') === 0
  }
}

export const remoteLayersService = new RemoteLayersService()
