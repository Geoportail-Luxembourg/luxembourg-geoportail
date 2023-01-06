import rulesReadHelper from '../state-persistor-rules-read.helper'
import rulesWriteHelper from '../state-persistor-rules-write.helper'
import { SP_AVAILABLE_STORAGES, StatePersistorRules } from '../state-persistor.model'
import { urlStorage } from './url-storage'

export default function useStorageProxy() {
    const rulesRead = rulesReadHelper()
    const rulesWrite = rulesWriteHelper()

    const writeStorages = storageMapper(rulesWrite.processRules())
    const paramKeys = urlStorage.getCurrentParamsAsObj()
    const readStorage = storageMapper(
        rulesRead.processRules(paramKeys)
      )?.pop()

    function getValue(key: string) {
        const storage = storageForKey(key, rulesRead, readStorage)

        return storage ? storage.getItem(key) : null
    }

    function setValue(key: string, value: string) {
        const storage = storageForKey(key, rulesWrite)

        if (storage) {
            storage.setItem(key, value)
        } else {
            writeStorages?.map((storage: Storage) => storage.setItem(key, value))
        }
    }

    function storageForKey(
        key: string,
        ruler: StatePersistorRules,
        defaultStorage?: Storage
    ) {
        const overriddenStorage = storageMapper(
            ruler.processRulesForKey(key, paramKeys)
        )?.pop()

        return overriddenStorage ?? defaultStorage
    }

    function storageMapper(depositsKey?: SP_AVAILABLE_STORAGES) {
        if (depositsKey === SP_AVAILABLE_STORAGES.both) {
            return [urlStorage, localStorage]
        } else if (depositsKey === SP_AVAILABLE_STORAGES.localStorage) {
            return [localStorage]
        } else if (depositsKey === SP_AVAILABLE_STORAGES.permalink) {
            return [urlStorage]
        }

        return void 0
    }

    return {
        storageForKey,
        getValue,
        setValue,
        storageMapper
    }
}