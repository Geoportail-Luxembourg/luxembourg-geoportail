import { UrlStorage } from './url-storage'
import { UrlStorageAsPath } from './url-storage-as-path'

describe('UrlStorage', () => {
  let urlStorage: UrlStorage

  beforeEach(() => {
    window.location =
      'http://localhost:3000/?param1=value1&empty=&param2=value2' as unknown as Location
    urlStorage = new UrlStorage()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('takes a snapshat of the current url at creation', () => {
    expect(urlStorage.getSnappedUrl().toString()).toBe(
      'http://localhost:3000/?param1=value1&empty=&param2=value2'
    )
  })

  describe('#getSnappedParamsAsObj', () => {
    it('returns a list of params (as an object)', () => {
      expect(urlStorage.getSnappedParamsAsObj()).toStrictEqual({
        param1: 'value1',
        param2: 'value2',
      })
    })
  })

  describe('#getSnappedParams', () => {
    it('returns a list of params (as as array of string) and fitlers empty value', () => {
      expect(urlStorage.getSnappedParams()).toStrictEqual([
        'param1=value1',
        'param2=value2',
      ])
    })
  })

  describe('#setItem', () => {
    vi.spyOn(window.history, 'replaceState')

    it('sets the value as a param in the current url by default', () => {
      urlStorage.setItem('paramNew1', 'valueNew1')
      expect(window.history.replaceState).toHaveBeenCalledWith(
        null,
        '',
        '?param1=value1&empty=&param2=value2&paramNew1=valueNew1'
      )
    })
  })

  describe('#getItem', () => {
    it('gets the value from the current url params by default', () => {
      expect(urlStorage.getItem('param2')).toBe('value2')
    })
  })

  describe('#encodeQueryParam', () => {
    it('encodes the param key and the param value as a URI component', () => {
      expect(
        urlStorage.encodeQueryParam(' ! this is the value ', 'the, !%value=34')
      ).toBe('%20!%20this%20is%20the%20value%20=the%2C%20!%25value%3D34')
    })
  })
})

describe('UrlStorageAsPath', () => {
  let urlStorage: UrlStorageAsPath

  beforeEach(() => {
    window.location =
      'http://localhost:3000/pathParam1/pathParam1Value/?param1=value1&empty=&param2=value2' as unknown as Location
    urlStorage = new UrlStorageAsPath()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('#setItem', () => {
    vi.spyOn(window.history, 'replaceState')
    it('appends a param to the current url (not the snapped)', () => {
      urlStorage.setItem('paramNew', 'valueNew')
      expect(window.history.replaceState).toHaveBeenCalledWith(
        null,
        '',
        '/paramNew/valueNew?param1=value1&empty=&param2=value2'
      )
    })
  })

  describe('#getItem', () => {
    it('returns the param in the snapped url', () => {
      expect(urlStorage.getItem('param1')).toBe('')
      expect(urlStorage.getItem('pathParam1')).toBe('pathParam1Value')
    })
  })
})
