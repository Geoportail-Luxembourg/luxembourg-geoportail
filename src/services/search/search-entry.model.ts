import type Feature from 'ol/Feature'
import type Geometry from 'ol/geom/Geometry'

export interface GeoJsonSearchEntry {
  type: string
  geometry?: {
    type: string
    coordinates?: unknown
  }
  properties?: Record<string, unknown>
  bbox?: number[]
}

/**
 * A search result entry, either a raw GeoJSON feature (EPSG:4326)
 * or an OpenLayers feature (already in the map projection).
 */
export type SearchEntry = GeoJsonSearchEntry | Feature<Geometry>

export function isGeoJsonSearchEntry(
  entry: SearchEntry
): entry is GeoJsonSearchEntry {
  return !('getGeometry' in entry)
}

/**
 * Plain GeoJSON view of a search entry, calling `toJSON()` when the
 * entry provides it (e.g. render features).
 */
export function toGeoJsonSearchEntry(entry: SearchEntry): GeoJsonSearchEntry {
  const toJSON = (entry as { toJSON?: () => GeoJsonSearchEntry }).toJSON
  return typeof toJSON === 'function'
    ? toJSON.call(entry)
    : (entry as GeoJsonSearchEntry)
}
