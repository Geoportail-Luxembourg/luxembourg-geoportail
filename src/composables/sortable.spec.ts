import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import Sortable from 'sortablejs'

import useSortable, { SortableParams } from './sortable'

vi.mock('sortablejs', () => ({
  default: {
    create: vi.fn(),
  },
}))

describe('useSortable', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('initializes Sortable with default options', () => {
    const params: SortableParams = {
      onSort: vi.fn(),
    }

    useSortable(element, params)

    expect(Sortable.create).toHaveBeenCalledWith(
      element,
      expect.objectContaining({
        dragClass: 'lux-sortable-drag',
        ghostClass: 'lux-sortable-ghost',
        sort: true,
        handle: '.drag-handle',
        forceFallback: false, // assuming isFireFox is false in this environment
      })
    )
  })

  it('calls onSort when sorting happens', () => {
    const mockOnSort = vi.fn()
    const params: SortableParams = {
      onSort: mockOnSort,
    }

    useSortable(element, params)

    const mockEvent = {
      to: { children: {} },
    } as unknown as Sortable.SortableEvent

    const onSortCallback = (<Mock>Sortable.create).mock.calls[0][1].onSort
    onSortCallback(mockEvent)

    expect(mockOnSort).toHaveBeenCalledWith(mockEvent.to.children)
  })

  it('does not call Sortable.create if element is not provided', () => {
    useSortable(undefined as unknown as HTMLElement)

    expect(Sortable.create).not.toHaveBeenCalled()
  })
})
