import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useBookmarkStore } from '@/stores/bookmark.store'
import {
  SP_KEY_BOOKMARKS,
  StatePersistorService,
} from './state-persistor.model'
import { storageHelper } from './storage/storage.helper'
import { storageBookmarkMapper } from './state-persistor-bookmark.mapper'

class StatePersistorBookmarkService implements StatePersistorService {
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
    const store = useBookmarkStore()
    const { bookmarks } = storeToRefs(store)

    watch(
      bookmarks,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(SP_KEY_BOOKMARKS, value, items =>
            storageBookmarkMapper.bookmarksToStorage(items)
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const store = useBookmarkStore()
    const bookmarks = storageHelper.getValue(SP_KEY_BOOKMARKS, value =>
      storageBookmarkMapper.storageToBookmarks(value)
    )

    if (bookmarks.length > 0) {
      store.bookmarks = bookmarks
    }
  }
}

export const statePersistorBookmarkService = new StatePersistorBookmarkService()
