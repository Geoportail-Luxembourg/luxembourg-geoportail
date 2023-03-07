import { RulesReadHelper } from '../state-persistor-rules-read.helper'
import { RulesWriteHelper } from '../state-persistor-rules-write.helper'
import {
  SP_AVAILABLE_STORAGES,
  StatePersistorRulesHelper,
  StatePersistorStorage,
} from '../state-persistor.model'
import { UrlStorage, urlStorage } from './url-storage'
import { urlPathStorage } from './url-storage-as-path'

class StorageProxy implements Storage {
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

  removeItem() {
    throw new Error('Method not implemented.')
  }

  setItem(key: string, value: string) {
    this.setValue(key, value)
  }

  getItem(key: string) {
    return this.getValue(key)
  }

  get paramKeys() {
    return urlStorage.getSnappedParamsAsObj()
  }

  getValue(key: string) {
    const readStorage = this.correspondingStorages(
      RulesReadHelper.processRules(this.paramKeys)
    )?.pop()
    const storage = this.storageForKey(key, RulesReadHelper, readStorage)

    return storage ? storage.getItem(key) : null
  }

  setValue(key: string, value: string) {
    const writeStorages = this.correspondingStorages(
      RulesWriteHelper.processRules()
    )
    const storage = this.storageForKey(key, RulesWriteHelper)

    if (storage) {
      storage.setItem(key, value)
    } else {
      writeStorages?.map((storage: StatePersistorStorage) =>
        storage.setItem(key, value)
      )
    }
  }

  storageForKey(
    key: string,
    ruler: StatePersistorRulesHelper,
    defaultStorage?: Storage | UrlStorage
  ) {
    const overriddenStorage = this.correspondingStorages(
      ruler.processRulesForKey(key, this.paramKeys)
    )?.pop()

    return overriddenStorage ?? defaultStorage
  }

  correspondingStorages(
    depositsKey?: SP_AVAILABLE_STORAGES
  ): StatePersistorStorage[] | undefined {
    if (depositsKey === SP_AVAILABLE_STORAGES.permalinkAndLocalStorage) {
      return [urlStorage, localStorage]
    } else if (depositsKey === SP_AVAILABLE_STORAGES.localStorage) {
      return [localStorage]
    } else if (depositsKey === SP_AVAILABLE_STORAGES.permalink) {
      return [urlStorage]
    } else if (depositsKey === SP_AVAILABLE_STORAGES.permalinkAsPath) {
      return [urlPathStorage]
    }

    return void 0
  }
}

export const storageProxy = new StorageProxy()
