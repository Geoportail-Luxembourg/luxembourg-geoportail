import Sortable from 'sortablejs'

import { isFireFox } from '@/services/utils'

export interface SortableParams extends Omit<Sortable.Options, 'onSort'> {
  onSort: (elements: HTMLCollection) => void
}

export default function useSortable(
  element: HTMLElement,
  params?: SortableParams
) {
  let sortable: Sortable | undefined
  const sortableParams = <Sortable.Options>{
    dragClass: 'lux-sortable-drag',
    ghostClass: 'lux-sortable-ghost',
    sort: true,
    handle: '.drag-handle',
    forceFallback: isFireFox, // Otherwise, doesnt work for FF
  }

  if (params?.onSort) {
    sortableParams.onSort = event => params.onSort(event.to.children)
  }

  element &&
    (sortable = Sortable.create(element, {
      ...sortableParams,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...((params && (({ onSort, ...rest }) => rest)(params)) || {}), // inline synthax to extract onSort
    }))

  return sortable
}
