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
    console.log(`To implement setPathParam key='${key}', value='${value}'`) // TODO: GSLUX-570
  }

  getPathParam(key: string) {
    console.log(`To implement getPathParam key='${key}'`)
    return this.getSnappedUrl().pathname.indexOf(key) // TODO: GSLUX-570
  }

  setItem(key: string, value: string, fromPath?: boolean) {
    if (fromPath) {
      this.setPathParam(key, value)
    } else {
      this.setQueryParam(key, value)
    }
  }

  getItem(key: string): string | null
  getItem(key: string, fromPath?: boolean) {
    let value

    if (fromPath) {
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
