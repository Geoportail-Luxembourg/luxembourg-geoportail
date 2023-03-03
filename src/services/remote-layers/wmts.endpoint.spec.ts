import { WmtsEndpoint } from './wmts.endpoint'
import {
  wmtsCapabilities,
  parsedServiceInfo,
  parsedLayers,
} from '../../__fixtures__/wmts.fixture'

const url = 'http://example.com/wmts'
const fetchMock = vi.fn(() =>
  Promise.resolve({ text: () => Promise.resolve(wmtsCapabilities) })
)
let endpoint

describe('WmtsEndpoint', () => {
  beforeEach(async () => {
    global.fetch = fetchMock
    endpoint = new WmtsEndpoint(url)
    await endpoint.isReady()
  })
  afterEach(() => {
    global.fetch = undefined
  })
  it('should fetch capabilities and parse them on initialization', async () => {
    expect(fetchMock).toHaveBeenCalledWith(
      `${url}?SERVICE=WMTS&REQUEST=GetCapabilities`
    )
  })
  it('should return service info', () => {
    expect(endpoint.getServiceInfo()).toEqual(parsedServiceInfo)
  })
  it('should return layers', () => {
    expect(endpoint.getLayers()).toEqual(parsedLayers)
  })
  it('should return the layer with the given name', () => {
    const result = endpoint.getLayerByName('ADMIN_EXPRESS')
    expect(result).toEqual(parsedLayers[0].children[0])
  })
})
