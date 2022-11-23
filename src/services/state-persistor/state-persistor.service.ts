import { statePersistorStorageProxy } from './deposits/state-persistor-storage.proxy'

class StatePersistorService {
  mapToEntity<T>(
    value: string | null,
    mapper?: (value: string | null) => T | T[]
  ) {
    return mapper ? mapper(value) : value
  }

  getValue<T>(key: string, mapper?: (value: string | null) => T | T[]) {
    return this.mapToEntity(statePersistorStorageProxy.getValue(key), mapper)
  }

  mapToDeposit<T>(value: T, mapper?: <T>(value: T) => string) {
    return mapper ? mapper(value) : value
  }

  setValue(key: string, value: string, mapper?: <T>(value: T) => string) {
    statePersistorStorageProxy.setValue(key, this.mapToDeposit(value, mapper))
  }
}

export const statePersistorService = new StatePersistorService()
