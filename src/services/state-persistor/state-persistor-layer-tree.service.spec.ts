import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { statePersistorLayerTreeService } from './state-persistor-layer-tree.service'
import { useLayerTreeStore } from '@/stores/layer-tree.store'
import { storageHelper } from './storage/storage.helper'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'

function makeNode(
  id: number,
  expanded = false,
  children?: LayerTreeNodeModel[]
): LayerTreeNodeModel {
  return {
    id,
    name: `node-${id}`,
    checked: false,
    expanded,
    depth: 0,
    children,
  }
}

describe('statePersistorLayerTreeService', () => {
  let fakeStorage: Record<string, string>

  beforeEach(() => {
    setActivePinia(createPinia())
    fakeStorage = {}
    vi.spyOn(storageHelper, 'setValue').mockImplementation(
      (key: string, value: unknown, mapper?: (v: unknown) => string) => {
        fakeStorage[key] = mapper ? mapper(value) : String(value)
      }
    )
    vi.spyOn(storageHelper, 'getValue').mockImplementation(
      (key: string, mapper?: (v: string | null) => unknown) => {
        const raw = fakeStorage[key] ?? null
        return mapper ? mapper(raw) : raw
      }
    )
    vi.spyOn(storageHelper, 'removeItem').mockImplementation((key: string) => {
      delete fakeStorage[key]
    })
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
  })

  describe('#persist', () => {
    it('writes overrides to storage when expandedNodesOverrides changes', async () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeNode(1, true, [makeNode(2, false)]))

      statePersistorLayerTreeService.bootstrap()

      store.setExpanded(2, true)
      await nextTick()

      expect(fakeStorage['expandedNodes']).toBe('2')
    })

    it('removes storage entry when overrides become empty', async () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeNode(1, true, [makeNode(2, false)]))

      statePersistorLayerTreeService.bootstrap()

      store.setExpanded(2, true)
      await nextTick()
      expect(fakeStorage['expandedNodes']).toBe('2')

      store.setExpanded(2, false) // matches default, override removed
      await nextTick()
      expect(fakeStorage['expandedNodes']).toBeUndefined()
    })

    it('does not write when overrides are empty on bootstrap', async () => {
      statePersistorLayerTreeService.bootstrap()

      await nextTick()

      expect(fakeStorage['expandedNodes']).toBeUndefined()
    })
  })
})
