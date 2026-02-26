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

describe('WmsHelper.extractLegendUrl', () => {
  it('returns undefined when styles is undefined', () => {
    expect(wmsHelper.extractLegendUrl(undefined)).toBeUndefined()
  })

  it('returns undefined when styles is empty', () => {
    expect(wmsHelper.extractLegendUrl([])).toBeUndefined()
  })

  it('returns undefined when no style has a legendUrl', () => {
    expect(
      wmsHelper.extractLegendUrl([{ name: 'default' }, { name: 'other' }])
    ).toBeUndefined()
  })

  it('prefers the legendUrl of the "default" style', () => {
    const styles = [
      { name: 'other', legendUrl: 'http://example.com/legend-other' },
      { name: 'default', legendUrl: 'http://example.com/legend-default' },
    ]
    expect(wmsHelper.extractLegendUrl(styles)).toBe(
      'http://example.com/legend-default'
    )
  })

  it('falls back to the first style with a legendUrl when no "default" style exists', () => {
    const styles = [
      { name: 'style1', legendUrl: 'http://example.com/legend-style1' },
      { name: 'style2', legendUrl: 'http://example.com/legend-style2' },
    ]
    expect(wmsHelper.extractLegendUrl(styles)).toBe(
      'http://example.com/legend-style1'
    )
  })
})
