import type { LayerId } from '@/stores/map.store.model'

import type { SearchEntry } from './search-entry.model'

export interface SearchResultItem {
  label: string
  url?: string
  text?: string
  layer_id?: LayerId
  name?: string
  layer_name?: string
  language?: string
  entry?: SearchEntry
  showRoutingButton: boolean
  showInfoButton: boolean
  showBookmarkButton?: boolean
}

export interface SearchResultGroup {
  header: string
  groupKey: string
  // Selection handlers have heterogeneous result shapes
  selectResult: Function
  results: SearchResultItem[]
}
