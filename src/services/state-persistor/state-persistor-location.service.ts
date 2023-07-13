import { useAppStore } from '@/stores/app.store'
import { SP_KEY_LOCATION, StatePersistorService } from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { stringToBoolean } from '../utils'

class StatePersistorLocationService implements StatePersistorService {
  bootstrap() {
    this.restore()
  }

  persist() {
    // Location tracking is not persisted
  }

  restore() {
    const trackingActive = <boolean | undefined>storageHelper.getValue(SP_KEY_LOCATION, stringToBoolean)

    if (trackingActive !== undefined) {
      useAppStore().setTracking(trackingActive)
    }
    
    storageHelper.removeItem(SP_KEY_LOCATION)
  }
}

export const statePersistorLocationService = new StatePersistorLocationService()
