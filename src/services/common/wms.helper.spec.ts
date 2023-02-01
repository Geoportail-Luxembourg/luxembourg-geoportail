import { remoteLayersService } from '@/components/remote-layers/remote-layers.service'
import { wmsHelper } from './wms.helper'

const idValuesMock = {
  serviceType: 'WMS',
  wmsUrl: 'http://myows.fr/wms',
  layerName: 'streets',
}

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
  let spyLocalMetadata
  beforeEach(() => {
    spyLocalMetadata = vi
      .spyOn(remoteLayersService, 'getWmsEndpoint')
      .mockReturnValue(wmsEndpointMock)
    wmsHelper.getMetadata(idValuesMock)
  })
  it('calls remoteLayersService.getWmsEndpoint()', () => {
    expect(spyLocalMetadata).toHaveBeenCalledOnce()
  })
})
