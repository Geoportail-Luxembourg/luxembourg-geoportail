import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'
import { wmtsHelper } from './wmts.helper'

const idValuesMock = {
  serviceType: 'WMTS',
  url: 'http://myows.fr/wmts',
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

const wmtsEndpointMock = {
  isReady: vi.fn(() => new Promise(resolve => resolve(true))),
  getServiceInfo: vi.fn(() => serviceInfoMock),
  getLayerByName: vi.fn(() => layerInfoMock),
}

describe('wmtsHelper', () => {
  let spyWmtsMetadata
  beforeEach(() => {
    spyWmtsMetadata = vi
      .spyOn(remoteLayersService, 'getWmtsEndpoint')
      .mockReturnValue(wmtsEndpointMock)
    wmtsHelper.getMetadata(idValuesMock)
  })
  it('calls remoteLayersService.getWmtsEndpoint()', () => {
    expect(spyWmtsMetadata).toHaveBeenCalledOnce()
  })
})
