import { SP_KEY_FID } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { urlStorage } from './storage/url-storage'

class StatePersistorFeatureInfoService {
  bootstrap() {
    this.restore()
  }

  restore() {
    const fid = <string | undefined>storageHelper.getValue(SP_KEY_FID)

    if (fid) {
      const { setFid } = useFeatureInfoStore()
      setFid(fid)
      urlStorage.removeQueryParam(SP_KEY_FID)
    }
  }
}

export const statePersistorFeatureInfoService =
  new StatePersistorFeatureInfoService()
