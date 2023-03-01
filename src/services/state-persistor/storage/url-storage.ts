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
    return this.getSnappedUrl().searchParams.get(key)
  }

  removeItem() {}

  encodeQueryParam(key: string, value: string) {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }
}

export class UrlStorageAsPath extends UrlStorage {
  override getItem(key: string): string | null {
    const paths = this.getSnappedUrl().pathname.split('/')
    const keyPathIndex = paths.findIndex(path => path === key)

    return paths[keyPathIndex + 1]
  }

  override setItem(key: string, value: string) {
    const queryParams = new URL(window.location.toString()).search
    const url = `${import.meta.env.BASE_URL}${key}/${value}${queryParams}`

    try {
      window.history.replaceState(null, '', url)
    } catch (error) {
      // replaceState fails on some browser if the domain in the state
    }
  }
}

export const urlStorage = new UrlStorage()
export const urlPathStorage = new UrlStorageAsPath()
