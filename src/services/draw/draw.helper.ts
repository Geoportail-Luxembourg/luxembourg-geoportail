import { setCircleRadius } from '@/services/common/measurement.utils'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { Circle } from 'ol/geom'
import { Map } from 'ol'

export function setRadius(
  feature: DrawnFeature,
  radius: number,
  map: Map,
  store: any // passing a store? What on earth...????? // FIXME
) {
  const geometry = feature.getGeometry()
  if (geometry?.getType() === 'Circle') {
    setCircleRadius(geometry as Circle, radius, map)
    store.updateDrawnFeature(feature)
  }
}
