import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { REMOTE_SERVICE_TYPE } from '../remote-layers/remote-layers.model'
import { wmsHelper } from './wms.helper'

const serviceInfoMock = {
  keywords: ['traffic', 'jam'],
  constraints: 'none',
  abstract: 'a short one',
}

const layerInfoMock = {
  title: 'Streets of Luxembourg',
  description: 'All the streets of Luxembourg',
}

const wmsEndpointMock = {
  isReady: vi.fn(() => new Promise(resolve => resolve(true))),
  getServiceInfo: vi.fn(() => serviceInfoMock),
  getLayerByName: vi.fn(() => layerInfoMock),
}

describe('WmsHelper', () => {
  let spyWmsMetadata
  beforeEach(() => {
    spyWmsMetadata = vi
      .spyOn(remoteLayersService, 'getWmsEndpoint')
      .mockReturnValue(wmsEndpointMock)
    wmsHelper.getMetadata(
      REMOTE_SERVICE_TYPE.WMS,
      'http://myows.fr/wms',
      'streets'
    )
  })
  it('calls remoteLayersService.getWmsEndpoint()', () => {
    expect(spyWmsMetadata).toHaveBeenCalledOnce()
  })
})
