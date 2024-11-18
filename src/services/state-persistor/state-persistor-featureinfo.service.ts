import { SP_KEY_FID } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { useFeatureInfoStore } from '@/stores/feature-info.store'

class StatePersistorFeatureInfoService {
  bootstrap() {
    this.restore()
  }

  restore() {
    const fid = <string | undefined>storageHelper.getValue(SP_KEY_FID)

    if (fid) {
      const { setFid } = useFeatureInfoStore()
      setFid(fid)
      this.removeQueryParam(SP_KEY_FID)
    }
  }

  removeQueryParam(param: string): void {
    const url = new URL(window.location.href)
    url.searchParams.delete(param)
    window.history.replaceState({}, document.title, url.toString())
  }
}

export const statePersistorFeatureInfoService =
  new StatePersistorFeatureInfoService()
