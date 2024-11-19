export class UrlStorage implements Storage {
  private snappedUrl: URL

  constructor() {
    this.snappedUrl = new URL(window.location.toString())
  }

  get length() {
    throw new Error('Method not implemented.')
    return 0
  }

  clear(): void {
    throw new Error('Method not implemented.')
  }

  key(index: number): string | null {
    throw new Error('Method key() not implemented. ' + index)
  }

  getStrippedUrl(opt_coordinate: number[] | undefined) {
    // stripped by embedded app parameters
    const url = new URL(window.location.toString())
    const params = new URLSearchParams(url.search)

    if (opt_coordinate !== undefined) {
      params.set('X', Math.round(opt_coordinate[0]).toString())
      params.set('Y', Math.round(opt_coordinate[1]).toString())
    }
    params.delete('localforage')
    params.delete('applogin')
    params.delete('ipv6')
    params.delete('embeddedserver')

    url.search = params.toString()

    return url.toString()
  }

  async getShortUrl(opt_coordinate: number[] | undefined) {
    const strippedUrl = this.getStrippedUrl(opt_coordinate)

    const data = new URLSearchParams()
    data.set('url', strippedUrl.replace('5173', '8080'))

    const response = await fetch(
      'https://migration.geoportail.lu/short/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      }
    )

    return await response.json()
  }

  getSnappedUrl() {
    return this.snappedUrl
  }

  getSnappedParamsAsObj() {
    return this.getSnappedParams().reduce(
      (prevObj: { [key: string]: string }, currParam) => {
        const [currKey, currValue] = currParam.split('=')

        return { ...prevObj, [currKey]: currValue }
      },
      {}
    )
  }

  getSnappedParams() {
    return this.getSnappedUrl()
      .search.replace('?', '')
      .split('&')
      .filter(val => val.split('=')[1])
  }

  setItem(key: string, value: string) {
    const params = new URLSearchParams(
      new URL(window.location.toString()).search
    )
    params.set(encodeURIComponent(key), encodeURIComponent(value))

    try {
      window.history.replaceState(null, '', '?' + params.toString())
    } catch (error) {
      // replaceState fails on some browser if the domain in the state
    }
  }

  getItem(key: string): string | null {
    const value = this.getSnappedUrl().searchParams.get(key)
    return value !== null ? decodeURIComponent(value) : value
  }

  removeItem(key: string) {
    const params = new URLSearchParams(
      new URL(window.location.toString()).search
    )

    params.delete(key)

    try {
      window.history.replaceState(null, '', '?' + params.toString())
    } catch (error) {
      // replaceState fails on some browser if the domain in the state
    }
  }

  encodeQueryParam(key: string, value: string) {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }

  removeQueryParam(param: string): void {
    const url = new URL(window.location.href)
    url.searchParams.delete(param)
    window.history.replaceState({}, document.title, url.toString())
  }
}

export const urlStorage = new UrlStorage()
