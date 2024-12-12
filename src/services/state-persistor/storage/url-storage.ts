import {
  SP_KEY_LOCALFORAGE,
  SP_KEY_APPLOGIN,
  SP_KEY_IPV6,
  SP_KEY_EMBEDDED_SERVER,
  SP_KEY_EMBEDDED_SERVER_PROTOCOL,
} from '@/services/state-persistor/state-persistor.model'

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

  getStrippedUrl(optCoordinate: number[] | undefined) {
    // stripped by embedded app parameters
    const url = new URL(window.location.toString())
    const params = new URLSearchParams(url.search)

    if (optCoordinate !== undefined) {
      params.set('X', Math.round(optCoordinate[0]).toString())
      params.set('Y', Math.round(optCoordinate[1]).toString())
    }
    params.delete(SP_KEY_LOCALFORAGE)
    params.delete(SP_KEY_APPLOGIN)
    params.delete(SP_KEY_IPV6)
    params.delete(SP_KEY_EMBEDDED_SERVER)
    params.delete(SP_KEY_EMBEDDED_SERVER_PROTOCOL)

    url.search = params.toString()

    return url.toString()
  }

  async getShortUrl(optCoordinate: number[] | undefined) {
    const strippedUrl = this.getStrippedUrl(optCoordinate)
      // convert github pages and vite ports localhost 4173 or 5173
      // to hosts accepted by the shortURL entrypoint
      // TODO: remove when there is a v4 API available
      .replace(
        /https:\/\/geoportail-luxembourg.github.io\/luxembourg-geoportail\/.+\//,
        import.meta.env.VITE_V3_API_HOST
      )
      .replace(/http:\/\/localhost:[45]173\//, import.meta.env.VITE_V3_API_HOST)

    const data = new URLSearchParams()

    data.set('url', strippedUrl)

    const response = await fetch(import.meta.env.VITE_SHORT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    })

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
