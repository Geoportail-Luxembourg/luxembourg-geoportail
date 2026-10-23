import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { LayerId } from '@/stores/map.store.model'
import { useLayerTreeStore } from '@/stores/layer-tree.store'
import {
  SP_KEY_FAVOURITE_LAYERS,
  StatePersistorService,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageLayerTreeMapper } from './state-persistor-layer-tree.mapper'

class StatePersistorFavouritesService implements StatePersistorService {
  bootstrap() {
    this.restore()

    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      this.persist()
      stop && stop() // test if exists, for HMR support
    })
  }

  persist() {
    const store = useLayerTreeStore()
    const { favouriteLayerIds } = storeToRefs(store)

    watch(
      favouriteLayerIds,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue<LayerId[]>(
            SP_KEY_FAVOURITE_LAYERS,
            value,
            ids => storageLayerTreeMapper.favouritesToStorage(ids)
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const store = useLayerTreeStore()
    const favouriteLayerIds = storageHelper.getValue<LayerId[]>(
      SP_KEY_FAVOURITE_LAYERS,
      value => storageLayerTreeMapper.storageToFavourites(value)
    )

    if (favouriteLayerIds.length > 0) {
      store.favouriteLayerIds = favouriteLayerIds
    }
  }
}

export const statePersistorFavouritesService =
  new StatePersistorFavouritesService()
