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
    it('adds override when expanded differs from server default', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree()) // node 2: expanded=false

      store.setExpanded(2, true)

      expect(store.expandedNodesOverrides['2']).toBe(true)
    })

    it('removes override when expanded matches server default', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree()) // node 2: expanded=false

      store.setExpanded(2, true) // override added
      expect(store.expandedNodesOverrides['2']).toBe(true)

      store.setExpanded(2, false) // matches default, override removed
      expect(store.expandedNodesOverrides['2']).toBeUndefined()
    })

    it('defaults to false when node not in serverDefaults', () => {
      const store = useLayerTreeStore()

      store.setExpanded(999, true)

      expect(store.expandedNodesOverrides['999']).toBe(true)
    })

    it('removes override when setting back to default (false for unknown node)', () => {
      const store = useLayerTreeStore()

      store.setExpanded(999, true)
      expect(store.expandedNodesOverrides['999']).toBe(true)

      store.setExpanded(999, false)
      expect(store.expandedNodesOverrides['999']).toBeUndefined()
    })

    it('handles multiple nodes independently', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree())

      store.setExpanded(2, true)
      store.setExpanded(3, false)

      expect(store.expandedNodesOverrides).toEqual({
        '2': true,
        '3': false,
      })
    })
  })

  describe('#applyOverrides', () => {
    it('applies override to matching node', () => {
      const store = useLayerTreeStore()
      store.expandedNodesOverrides = { '2': true }
      const tree = makeTree() // node 2: expanded=false

      const result = store.applyOverrides(tree)

      expect(findNodeById(result, 2)?.expanded).toBe(true)
    })

    it('does not change nodes without overrides', () => {
      const store = useLayerTreeStore()
      store.expandedNodesOverrides = {}
      const tree = makeTree()

      const result = store.applyOverrides(tree)

      expect(findNodeById(result, 1)?.expanded).toBe(true)
      expect(findNodeById(result, 2)?.expanded).toBe(false)
    })

    it('applies overrides recursively to children', () => {
      const store = useLayerTreeStore()
      store.expandedNodesOverrides = { '4': false }
      const tree = makeTree() // node 4: expanded=true

      const result = store.applyOverrides(tree)

      expect(findNodeById(result, 4)?.expanded).toBe(false)
    })

    it('does not mutate the input tree', () => {
      const store = useLayerTreeStore()
      store.expandedNodesOverrides = { '2': true }
      const tree = makeTree()

      store.applyOverrides(tree)

      expect(findNodeById(tree, 2)?.expanded).toBe(false)
    })

    it('returns copy of tree when no overrides exist', () => {
      const store = useLayerTreeStore()
      store.expandedNodesOverrides = {}
      const tree = makeTree()

      const result = store.applyOverrides(tree)

      expect(result).not.toBe(tree)
      expect(findNodeById(result, 1)?.expanded).toBe(true)
      expect(findNodeById(result, 2)?.expanded).toBe(false)
    })
  })
})

function findNodeById(
  tree: LayerTreeNodeModel,
  id: number
): LayerTreeNodeModel | undefined {
  if (tree.id === id) return tree
  return tree.children?.find(child => findNodeById(child, id) !== undefined)
}
