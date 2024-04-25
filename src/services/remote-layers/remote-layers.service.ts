import { WmsEndpoint } from '@camptocamp/ogc-client'

import { predefinedWmsFixture } from '@/__fixtures__/predefined-wms.fixture'
import {
  OgcClientWmsEndpoint,
  RemoteWmsEndpointModel,
  REMOTE_SERVICE_TYPE,
} from './remote-layers.model'
import { LayerId } from '@/stores/map.store.model'
import { WmtsEndpoint } from '@/services/remote-layers/wmts.endpoint'
import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'

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
    return new WmsEndpoint(proxyUrlHelper.getProxyfiedUrl(url))
  }

  public getWmtsEndpoint(url: string): WmtsEndpoint {
    return new WmtsEndpoint(proxyUrlHelper.getProxyfiedUrl(url))
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
