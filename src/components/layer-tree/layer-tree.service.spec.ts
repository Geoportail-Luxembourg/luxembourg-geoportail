// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { layerTreeService } from './layer-tree.service'
import type { LayerTreeNodeModel } from './layer-tree.model'

function makeTree(): LayerTreeNodeModel {
  return {
    id: 0,
    name: 'root',
    checked: false,
    expanded: false,
    depth: 0,
    children: [
      {
        id: 1,
        name: 'parent-a',
        checked: false,
        expanded: false,
        depth: 1,
        children: [
          {
            id: 10,
            name: 'leaf-a1',
            checked: false,
            expanded: false,
            depth: 2,
          },
          {
            id: 11,
            name: 'leaf-a2',
            checked: false,
            expanded: false,
            depth: 2,
          },
        ],
      },
      {
        id: 2,
        name: 'parent-b',
        checked: false,
        expanded: false,
        depth: 1,
        children: [
          {
            id: 20,
            name: 'parent-b1',
            checked: false,
            expanded: false,
            depth: 2,
            children: [
              {
                id: 200,
                name: 'leaf-b1a',
                checked: false,
                expanded: false,
                depth: 3,
              },
            ],
          },
        ],
      },
    ],
  }
}

describe('layerTreeService.expandToLayer', () => {
  it('returns found=true when the target leaf exists', () => {
    const { found } = layerTreeService.expandToLayer(10, makeTree())
    expect(found).toBe(true)
  })

  it('returns found=false when the target does not exist', () => {
    const { found } = layerTreeService.expandToLayer(999, makeTree())
    expect(found).toBe(false)
  })

  it('expands the direct parent of the target leaf', () => {
    const { node } = layerTreeService.expandToLayer(10, makeTree())
    const parentA = node.children![0]
    expect(parentA.expanded).toBe(true)
  })

  it('does not expand unrelated parents', () => {
    const { node } = layerTreeService.expandToLayer(10, makeTree())
    const parentB = node.children![1]
    expect(parentB.expanded).toBe(false)
  })

  it('expands all ancestors for a deeply nested leaf', () => {
    const { node } = layerTreeService.expandToLayer(200, makeTree())
    const parentB = node.children![1]
    const parentB1 = parentB.children![0]
    expect(parentB.expanded).toBe(true)
    expect(parentB1.expanded).toBe(true)
  })

  it('does not mutate the original tree', () => {
    const tree = makeTree()
    layerTreeService.expandToLayer(10, tree)
    expect(tree.children![0].expanded).toBe(false)
  })

  it('preserves already-expanded nodes', () => {
    const tree = makeTree()
    tree.children![1].expanded = true
    const { node } = layerTreeService.expandToLayer(10, tree)
    const parentB = node.children![1]
    expect(parentB.expanded).toBe(true)
  })
})

describe('layerTreeService.applyOverrides', () => {
  function findNodeById(
    tree: LayerTreeNodeModel,
    id: number
  ): LayerTreeNodeModel | undefined {
    if (tree.id === id) return tree
    for (const child of tree.children ?? []) {
      const found = findNodeById(child, id)
      if (found) return found
    }
    return undefined
  }

  it('applies override to matching node', () => {
    const tree = makeTree()
    const overrides = { '1': true }

    const result = layerTreeService.applyOverrides(tree, overrides)

    expect(findNodeById(result, 1)?.expanded).toBe(true)
  })

  it('does not change nodes without overrides', () => {
    const tree = makeTree()
    const overrides = {}

    const result = layerTreeService.applyOverrides(tree, overrides)

    expect(findNodeById(result, 0)?.expanded).toBe(false)
    expect(findNodeById(result, 1)?.expanded).toBe(false)
  })

  it('applies overrides recursively to children', () => {
    const tree = makeTree()
    const overrides = { '10': true }

    const result = layerTreeService.applyOverrides(tree, overrides)

    expect(findNodeById(result, 10)?.expanded).toBe(true)
  })

  it('does not mutate the input tree', () => {
    const tree = makeTree()
    const overrides = { '1': true }

    layerTreeService.applyOverrides(tree, overrides)

    expect(findNodeById(tree, 1)?.expanded).toBe(false)
  })

  it('returns copy of tree when no overrides exist', () => {
    const tree = makeTree()
    const overrides = {}

    const result = layerTreeService.applyOverrides(tree, overrides)

    expect(result).not.toBe(tree)
    expect(findNodeById(result, 0)?.expanded).toBe(false)
    expect(findNodeById(result, 1)?.expanded).toBe(false)
  })
})
