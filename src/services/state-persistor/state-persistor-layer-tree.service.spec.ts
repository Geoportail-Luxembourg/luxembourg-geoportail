import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { statePersistorLayerTreeService } from './state-persistor-layer-tree.service'
import { useLayerTreeStore } from '@/stores/layer-tree.store'
import { storageHelper } from './storage/storage.helper'

describe('statePersistorLayerTreeService', () => {
  let fakeStorage: Record<string, string>

  beforeEach(() => {
    setActivePinia(createPinia())
    fakeStorage = {}
    vi.spyOn(storageHelper, 'getValue').mockImplementation(
      (key: string, mapper?: (v: string | null) => unknown) => {
        const raw = fakeStorage[key] ?? null
        return mapper ? mapper(raw) : raw
      }
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('#restore', () => {
    it('loads overrides from storage into the store', () => {
      fakeStorage['expandedNodes'] = '-456,123'

      statePersistorLayerTreeService.restore()

      const store = useLayerTreeStore()
      expect(store.expandedNodesOverrides).toEqual({
        '456': false,
        '123': true,
      })
    })

    it('does not modify overrides when storage is empty', () => {
      statePersistorLayerTreeService.restore()

      const store = useLayerTreeStore()
      expect(store.expandedNodesOverrides).toEqual({})
    })

    it('restores overrides from a shared link URL', () => {
      // Simulate a shared link with expandedNodes param
      fakeStorage['expandedNodes'] = '2846,-2841'

      statePersistorLayerTreeService.restore()

      const store = useLayerTreeStore()
      expect(store.expandedNodesOverrides).toEqual({
        '2846': true,
        '2841': false,
      })
    })
  })
})
