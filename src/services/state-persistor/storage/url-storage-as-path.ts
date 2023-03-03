import { UrlStorage } from './url-storage'

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

export const urlPathStorage = new UrlStorageAsPath()
