import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import {
  computeOverrides,
  statePersistorLayerTreeService,
} from './state-persistor-layer-tree.service'
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

describe('computeOverrides', () => {
  it('records node when expanded differs from default', () => {
    const tree = makeNode(1, true)
    const defaults = new Map([[1, false]])

    expect(computeOverrides(tree, defaults)).toEqual({ '1': true })
  })

  it('does not record node when expanded matches default', () => {
    const tree = makeNode(1, true)
    const defaults = new Map([[1, true]])

    expect(computeOverrides(tree, defaults)).toEqual({})
  })

  it('defaults to false when node not in map', () => {
    const tree = makeNode(1, true)
    const defaults = new Map<string | number, boolean>()

    expect(computeOverrides(tree, defaults)).toEqual({ '1': true })
  })

  it('walks deeply nested children', () => {
    const tree = makeNode(1, true, [
      makeNode(2, false, [makeNode(3, true)]),
      makeNode(4, true),
    ])
    const defaults = new Map([
      [1, true],
      [2, false],
      [3, false],
      [4, false],
    ])

    const result = computeOverrides(tree, defaults)

    expect(result).toEqual({ '3': true, '4': true })
  })

  it('returns empty object for leaf matching default', () => {
    const tree = makeNode(1, false)
    const defaults = new Map([[1, false]])

    expect(computeOverrides(tree, defaults)).toEqual({})
  })

  it('handles multiple overrides across tree', () => {
    const tree = makeNode(1, true, [
      makeNode(2, true),
      makeNode(3, false),
      makeNode(4, true),
    ])
    const defaults = new Map([
      [1, true],
      [2, false],
      [3, true],
      [4, false],
    ])

    const result = computeOverrides(tree, defaults)

    expect(result).toEqual({ '2': true, '3': false, '4': true })
  })
})

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
    it('writes overrides to storage when tree changes', async () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeNode(1, true, [makeNode(2, false)]))

      statePersistorLayerTreeService.persist()

      store.setLayerTree(makeNode(1, true, [makeNode(2, true)]))
      await nextTick()

      expect(fakeStorage['expandedNodes']).toBe('2')
    })

    it('merges 2D and 3D overrides', async () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeNode(1, true, [makeNode(2, false)]))
      store.captureServerDefaults(makeNode(10, true, [makeNode(20, false)]))

      statePersistorLayerTreeService.persist()

      store.setLayerTree(makeNode(1, true, [makeNode(2, true)]))
      store.setLayerTree3d(makeNode(10, true, [makeNode(20, true)]))
      await nextTick()

      const written = fakeStorage['expandedNodes']
      expect(written).toContain('2')
      expect(written).toContain('20')
    })

    it('does not write when tree is undefined', async () => {
      statePersistorLayerTreeService.persist()

      await nextTick()

      expect(fakeStorage['expandedNodes']).toBeUndefined()
    })
  })
})
