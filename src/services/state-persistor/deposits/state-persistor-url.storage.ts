export class UrlStorage implements Storage {
  get length() {
    throw new Error('Method not implemented.')
    return 0
  }

  clear(): void {
    throw new Error('Method not implemented.')
  }

  key(index: number): string | null {
    throw new Error('Method not implemented.')
  }

  getCurrentUrl() {
    return new URL(window.location.toString())
  }

  getCurrentParamsAsObj() {
    return this.getCurrentParams().reduce(
      (prevObj: { [key: string]: string }, currParam) => {
        const [currKey, currValue] = currParam.split('=')

        return { ...prevObj, [currKey]: currValue }
      },
      {}
    )
  }

  getCurrentParams() {
    return this.getCurrentUrl()
      .search.replace('?', '')
      .split('&')
      .filter(val => val)
  }

  setQueryParam(key: string, value: string) {
    window.location.assign(
      'https://developer.mozilla.org/en-US/docs/Web/API/Location/reload'
    )
  }

  getQueryParam(key: string) {
    return this.getCurrentUrl().searchParams.get(key)
  }

  setPathParam(key: string, value: string) {
    window.location.assign(
      'https://developer.mozilla.org/en-US/docs/Web/API/Location/reload'
    )
  }

  getPathParam(key: string) {
    return this.getCurrentUrl().pathname // TODO
  }

  setItem(key: string, value: string, fromPath?: boolean) {
    if (fromPath) {
      this.setPathParam(key, value)
    } else {
      this.setQueryParam(key, value)
    }
  }

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
}

export const urlStorage = new UrlStorage()
