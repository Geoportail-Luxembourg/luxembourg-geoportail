import { proxyUrlHelper } from '@/services/proxyurl/proxyurl.helper'

describe('proxyUrlHelper', () => {
  beforeEach(() => {
    proxyUrlHelper.init_v3('someWmsProxyUrl', 'someRemoteProxyUrl')
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('initialize with the right values', () => {
    expect(proxyUrlHelper.wmsProxyUrl).toEqual('someWmsProxyUrl')
    expect(proxyUrlHelper.remoteProxyUrl).toEqual('someRemoteProxyUrl')
  })

  describe('#getProxyfiedUrl', () => {
    it('returns the url proxified and html encoded', () => {
      expect(proxyUrlHelper.getProxyfiedUrl('my=url&32b')).toEqual(
        'someRemoteProxyUrl?url=my%3Durl%2632b'
      )
    })
  })
})
