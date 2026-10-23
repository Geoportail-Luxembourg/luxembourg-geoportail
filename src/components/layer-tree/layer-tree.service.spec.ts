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
    favourite: false,
    depth: 0,
    children: [
      {
        id: 1,
        name: 'parent-a',
        checked: false,
        expanded: false,
        favourite: false,
        depth: 1,
        children: [
          {
            id: 10,
            name: 'leaf-a1',
            checked: false,
            expanded: false,
            favourite: false,
            depth: 2,
          },
          {
            id: 11,
            name: 'leaf-a2',
            checked: false,
            expanded: false,
            favourite: false,
            depth: 2,
          },
        ],
      },
      {
        id: 2,
        name: 'parent-b',
        checked: false,
        expanded: false,
        favourite: false,
        depth: 1,
        children: [
          {
            id: 20,
            name: 'parent-b1',
            checked: false,
            expanded: false,
            favourite: false,
            depth: 2,
            children: [
              {
                id: 200,
                name: 'leaf-b1a',
                checked: false,
                expanded: false,
                favourite: false,
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

describe('layerTreeService.buildFavouritesNode', () => {
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

  it('returns the same tree when no node is favourited', () => {
    const tree = makeTree()

    const result = layerTreeService.buildFavouritesNode(tree, true)

    expect(result).toBe(tree)
  })

  it('prepends a depth-1 favourites node with the favourited leaves', () => {
    const tree = makeTree()
    findNodeById(tree, 10)!.favourite = true

    const result = layerTreeService.buildFavouritesNode(tree, true)
    const favourites = result.children![0]

    expect(favourites.id).toBe('favourites')
    expect(favourites.depth).toBe(1)
    expect(favourites.expanded).toBe(true)
    expect(favourites.children!.map(child => child.id)).toEqual([10])
    expect(favourites.children![0].depth).toBe(2)
  })

  it('collects only favourited leaves', () => {
    const tree = makeTree()
    findNodeById(tree, 10)!.favourite = true
    findNodeById(tree, 200)!.favourite = true
    findNodeById(tree, 1)!.favourite = true // parent node, must be ignored

    const result = layerTreeService.buildFavouritesNode(tree, true)

    expect(result.children![0].children!.map(child => child.id)).toEqual([
      10, 200,
    ])
  })

  it('is idempotent when rebuilt from its own output', () => {
    const tree = makeTree()
    findNodeById(tree, 10)!.favourite = true

    const once = layerTreeService.buildFavouritesNode(tree, true)
    const twice = layerTreeService.buildFavouritesNode(once, true)

    expect(twice.children![0].id).toBe('favourites')
    expect(twice.children).toHaveLength(tree.children!.length + 1)
    expect(twice.children![0].children!.map(child => child.id)).toEqual([10])
  })

  it('re-applies the expanded flag on rebuild', () => {
    const tree = makeTree()
    findNodeById(tree, 10)!.favourite = true

    const open = layerTreeService.buildFavouritesNode(tree, true)
    const closed = layerTreeService.buildFavouritesNode(open, false)

    expect(closed.children![0].expanded).toBe(false)
  })
})

describe('layerTreeService.applyExpandedNodes', () => {
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

  it('applies expanded state to matching node', () => {
    const tree = makeTree()
    const expandedNodes = { '1': true }

    const result = layerTreeService.applyExpandedNodes(tree, expandedNodes)

    expect(findNodeById(result, 1)?.expanded).toBe(true)
  })

  it('does not change nodes without expanded state entries', () => {
    const tree = makeTree()
    const expandedNodes = {}

    const result = layerTreeService.applyExpandedNodes(tree, expandedNodes)

    expect(findNodeById(result, 0)?.expanded).toBe(false)
    expect(findNodeById(result, 1)?.expanded).toBe(false)
  })

  it('applies expanded state recursively to children', () => {
    const tree = makeTree()
    const expandedNodes = { '10': true }

    const result = layerTreeService.applyExpandedNodes(tree, expandedNodes)

    expect(findNodeById(result, 10)?.expanded).toBe(true)
  })

  it('does not mutate the input tree', () => {
    const tree = makeTree()
    const expandedNodes = { '1': true }

    layerTreeService.applyExpandedNodes(tree, expandedNodes)

    expect(findNodeById(tree, 1)?.expanded).toBe(false)
  })

  it('returns copy of tree when no entries exist', () => {
    const tree = makeTree()
    const expandedNodes = {}

    const result = layerTreeService.applyExpandedNodes(tree, expandedNodes)

    expect(result).not.toBe(tree)
    expect(findNodeById(result, 0)?.expanded).toBe(false)
    expect(findNodeById(result, 1)?.expanded).toBe(false)
  })
})
