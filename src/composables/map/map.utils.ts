import { Extent } from 'ol/extent'
import { createEmpty, extend } from 'ol/extent'
import type { Feature } from 'ol'

import useMap from '@/composables/map/map.composable'

export function getFeaturesExtent(features: Feature[]): Extent | null {
  if (features.length === 0) {
    return null
  }

  const extent = createEmpty()
  features.forEach(f => {
    if (f.getGeometry()) {
      extend(extent, f.getGeometry()!.getExtent())
    }
  })

  if (
    extent[0] === Infinity ||
    extent[1] === Infinity ||
    extent[2] === -Infinity ||
    extent[3] === -Infinity ||
    extent[0] >= extent[2] ||
    extent[1] >= extent[3]
  ) {
    return null
  }

  return extent
}

export function fitToView(extent: Extent | null | undefined) {
  if (!extent) {
    return
  }

  const olMap = useMap().getOlMap()
  if (!olMap) {
    return
  }

  olMap.getView().fit(extent, { size: olMap.getSize() })
}
