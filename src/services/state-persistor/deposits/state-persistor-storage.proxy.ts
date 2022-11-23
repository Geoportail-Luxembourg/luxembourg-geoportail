import { urlStorage } from './state-persistor-url.storage'
import {
  ParamKeys,
  SP_AVAILABLE_STORAGES,
  StatePersistorRules,
} from '../state-persistor.model'
import RulesRead from '../state-persistor-rules-read'
import RulesWrite from '../state-persistor-rules-write'

class StatePersistorStorageProxy {
  private readStorage?: Storage
  private writeStorages?: Storage[]
  private paramKeys: ParamKeys

  constructor() {
    this.paramKeys = urlStorage.getCurrentParamsAsObj()
    this.readStorage = this.storageMapper(
      RulesRead.processRules(this.paramKeys)
    )?.pop()
    this.writeStorages = this.storageMapper(RulesWrite.processRules())

    console.log(this.paramKeys)
    console.log(this.readStorage)
    console.log(this.writeStorages)
  }

  storageForKey(
    key: string,
    ruler: StatePersistorRules,
    defaultStorage?: Storage
  ) {
    const overriddenStorage = this.storageMapper(
      ruler.processRulesForKey(key, this.paramKeys)
    )?.pop()

    return overriddenStorage ?? defaultStorage
  }

  getValue(key: string) {
    const storage = this.storageForKey(key, RulesRead, this.readStorage)

    return storage ? storage.getItem(key) : null
  }

  setValue(key: string, value: string) {
    const storage = this.storageForKey(key, RulesWrite)

    if (storage) {
      storage.setItem(key, value)
    } else {
      this.writeStorages?.map((storage: Storage) => storage.setItem(key, value))
    }
  }

  storageMapper(depositsKey?: SP_AVAILABLE_STORAGES) {
    if (depositsKey === SP_AVAILABLE_STORAGES.both) {
      return [urlStorage, localStorage]
    } else if (depositsKey === SP_AVAILABLE_STORAGES.localStorage) {
      return [localStorage]
    } else if (depositsKey === SP_AVAILABLE_STORAGES.permalink) {
      return [urlStorage]
    }

    return void 0
  }
}

export const statePersistorStorageProxy = new StatePersistorStorageProxy()
