export class UrlStorage implements Storage {
  private snappedUrl: URL
  private asPath: boolean

  constructor(asPath = false) {
    this.snappedUrl = new URL(window.location.toString())
    this.asPath = asPath
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

  setQueryParam(key: string, value: string) {
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

  getQueryParam(key: string) {
    return this.getSnappedUrl().searchParams.get(key)
  }

  setPathParam(key: string, value: string) {
    const queryParams = new URL(window.location.toString()).search
    const url = `${import.meta.env.BASE_URL}${key}/${value}${queryParams}`

    try {
      window.history.replaceState(null, '', url)
    } catch (error) {
      // replaceState fails on some browser if the domain in the state
    }
  }

  getPathParam(key: string) {
    const paths = this.getSnappedUrl().pathname.split('/')
    const keyPathIndex = paths.findIndex(path => path === key)

    return paths[keyPathIndex + 1]
  }

  setItem(key: string, value: string) {
    if (this.asPath) {
      this.setPathParam(key, value)
    } else {
      this.setQueryParam(key, value)
    }
  }

  getItem(key: string): string | null {
    let value

    if (this.asPath) {
      value = this.getPathParam(key)
    } else {
      value = this.getQueryParam(key)
    }

    return value
  }

  removeItem() {}

  encodeQueryParam(key: string, value: string) {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }
}

export const urlStorage = new UrlStorage()
export const urlPathStorage = new UrlStorage(true)
