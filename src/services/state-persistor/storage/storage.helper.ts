import { stringToNumber } from '@/services/utils'
import { SP_KEY_VERSION } from '../state-persistor.model'
import { storageProxy } from './storage-proxy'

class StorageHelper {
  private intialVersion: number

  constructor() {
    this.intialVersion = this.getValue(SP_KEY_VERSION, stringToNumber) || 3
  }

  getInitialVersion() {
    return this.intialVersion
  }

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

  getValue<T>(key: string, mapper?: (value: string | null) => T): T
  getValue<T>(key: string, mapper?: (value: string | null) => T): T | undefined
  getValue<T>(key: string, mapper?: (value: string | null) => T[]): T[]
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

  removeItem(key: string) {
    storageProxy.removeItem(key)
  }
}

export const storageHelper = new StorageHelper()
