import { setCircleRadius } from '@/services/common/measurement.utils'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { Circle } from 'ol/geom'
import { Map } from 'ol'

export const SYMBOLS_URL = import.meta.env.VITE_SYMBOLS_URL
export const SYMBOL_ICONS_URL = import.meta.env.VITE_SYMBOL_ICONS_URL

export type Symbol = {
  id: number
  name: string
  url: string
  symboltype: 'public'
}

export async function getPublicSymbols(mySymbolsOnly = false) {
  const url = `${SYMBOLS_URL}?symboltype=${mySymbolsOnly ? 'us' : 'public'}`
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export function setRadius(
  feature: DrawnFeature,
  radius: number,
  map: Map,
  store: any
) {
  const geometry = feature.getGeometry()
  if (geometry?.getType() === 'Circle') {
    setCircleRadius(geometry as Circle, radius, map)
    store.updateDrawnFeature(feature)
  }
}
