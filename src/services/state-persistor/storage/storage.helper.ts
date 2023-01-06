import { storageProxy } from './storage-proxy'

class StorageHelper {
  mapToEntity<T>(
    value: string | null,
    mapper?: (value: string | null) => T | T[]
  ) {
    return mapper ? mapper(value) : value
  }

  mapToStorage<T>(value: T, mapper?: (value: T) => string): string
  mapToStorage<T>(value: T[], mapper?: (value: T[]) => string): string
  mapToStorage<T>(
    value: T | T[] | null,
    mapper?: (value: T | T[] | null) => string
  ): string {
    return mapper ? mapper(value) : String(value)
  }

  getValue<T>(key: string, mapper?: (value: string | null) => T): T | null
  getValue<T>(key: string, mapper?: (value: string | null) => T[]): T[] | null
  getValue<T>(key: string, mapper?: (value: string | null) => T[]): unknown {
    return this.mapToEntity(storageProxy.getValue(key), mapper)
  }

  setValue<T>(
    key: string,
    value: T,
    mapper?: (value: T | undefined) => string
  ): void
  setValue<T>(key: string, value: T, mapper?: (value: T | null) => string): void
  setValue<T>(
    key: string,
    value: T[],
    mapper?: (value: T[] | null) => string
  ): void
  setValue<T>(
    key: string,
    value: T | T[],
    mapper?: (value: T | T[] | null) => string
  ) {
    storageProxy.setValue(key, this.mapToStorage(value, mapper))
  }
}

export const storageHelper = new StorageHelper()
