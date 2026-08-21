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

  describe('#toggleParentNode', () => {
    it('does nothing when 2D tree is undefined', () => {
      const store = useLayerTreeStore()
      store.toggleParentNode(1, false)
      expect(store.layerTree).toBeUndefined()
      expect(store.expandedNodesOverrides).toEqual({})
    })

    it('does nothing when 3D tree is undefined', () => {
      const store = useLayerTreeStore()
      store.toggleParentNode(1, true)
      expect(store.layerTree3d).toBeUndefined()
      expect(store.expandedNodesOverrides).toEqual({})
    })

    it('toggles expanded state on 2D tree', () => {
      const store = useLayerTreeStore()
      store.captureServerDefaults(makeTree())
      store.setLayerTree(makeTree())

      store.toggleParentNode(2, false)

      const node2 = findNodeById(store.layerTree!, 2)
      expect(node2?.expanded).toBe(true)
    })

    it('toggles expanded state on 3D tree', () => {
      const store = useLayerTreeStore()
      const tree = makeNode(1, true, [makeNode(2, false)])
      store.captureServerDefaults(tree)
      store.setLayerTree3d(tree)

      store.toggleParentNode(2, true)

      const node2 = findNodeById(store.layerTree3d!, 2)
      expect(node2?.expanded).toBe(true)
    })

    it('adds override when toggled state differs from server default', () => {
      const store = useLayerTreeStore()
      const tree = makeTree() // node 2: expanded=false (server default)
      store.captureServerDefaults(tree)
      store.setLayerTree(tree)

      store.toggleParentNode(2, false) // toggles to true, differs from default false

      expect(store.expandedNodesOverrides['2']).toBe(true)
    })

    it('removes override when toggled state matches server default', () => {
      const store = useLayerTreeStore()
      const tree = makeTree() // node 2: expanded=false (server default)
      store.captureServerDefaults(tree)
      store.setLayerTree(tree)

      store.toggleParentNode(2, false) // toggles to true, override added
      expect(store.expandedNodesOverrides['2']).toBe(true)

      store.toggleParentNode(2, false) // toggles back to false, matches default
      expect(store.expandedNodesOverrides['2']).toBeUndefined()
    })

    it('selects 2D tree when is3d is false', () => {
      const store = useLayerTreeStore()
      const tree2d = makeNode(1, true, [makeNode(2, false)])
      const tree3d = makeNode(10, true, [makeNode(20, false)])
      store.captureServerDefaults(tree2d)
      store.captureServerDefaults(tree3d)
      store.setLayerTree(tree2d)
      store.setLayerTree3d(tree3d)

      store.toggleParentNode(2, false)

      expect(findNodeById(store.layerTree!, 2)?.expanded).toBe(true)
      expect(findNodeById(store.layerTree3d!, 20)?.expanded).toBe(false)
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
