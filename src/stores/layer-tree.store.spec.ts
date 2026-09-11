import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useLayerTreeStore } from './layer-tree.store'
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

function makeTree(): LayerTreeNodeModel {
  return makeNode(1, true, [
    makeNode(2, false, [makeNode(4, true)]),
    makeNode(3, true),
  ])
}

describe('layer-tree store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('#captureServerDefaults', () => {
    it('records expanded value for each node', () => {
      const store = useLayerTreeStore()
      const tree = makeTree()

      store.captureServerDefaults(tree)

      expect(store.serverDefaults.get(1)).toBe(true)
      expect(store.serverDefaults.get(2)).toBe(false)
      expect(store.serverDefaults.get(3)).toBe(true)
      expect(store.serverDefaults.get(4)).toBe(true)
    })

    it('captures leaf nodes', () => {
      const store = useLayerTreeStore()
      const tree = makeNode(1, false, [makeNode(2, false)])

      store.captureServerDefaults(tree)

      expect(store.serverDefaults.size).toBe(2)
      expect(store.serverDefaults.get(2)).toBe(false)
    })
  })

  describe('#setExpanded', () => {
    it('adds entry when expanded differs from server default', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree()) // node 2: expanded=false

      store.setExpanded(2, true)

      expect(store.expandedNodes['2']).toBe(true)
    })

    it('removes entry when expanded matches server default', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree()) // node 2: expanded=false

      store.setExpanded(2, true) // entry added
      expect(store.expandedNodes['2']).toBe(true)

      store.setExpanded(2, false) // matches default, entry removed
      expect(store.expandedNodes['2']).toBeUndefined()
    })

    it('defaults to false when node not in serverDefaults', () => {
      const store = useLayerTreeStore()

      store.setExpanded(999, true)

      expect(store.expandedNodes['999']).toBe(true)
    })

    it('removes entry when setting back to default (false for unknown node)', () => {
      const store = useLayerTreeStore()

      store.setExpanded(999, true)
      expect(store.expandedNodes['999']).toBe(true)

      store.setExpanded(999, false)
      expect(store.expandedNodes['999']).toBeUndefined()
    })

    it('handles multiple nodes independently', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree())

      store.setExpanded(2, true)
      store.setExpanded(3, false)

      expect(store.expandedNodes).toEqual({
        '2': true,
        '3': false,
      })
    })
  })
})
