import { transform, toLonLat } from 'ol/proj'
import type { Extent } from 'ol/extent'
import type View from 'ol/View'

const MAX_FIT_ZOOM = 17

type Coordinate = [number, number]

function collectPoints(coords: unknown, out: Coordinate[]): void {
  if (!Array.isArray(coords)) return
  if (
    typeof coords[0] === 'number' &&
    typeof coords[1] === 'number' &&
    coords.length >= 2
  ) {
    out.push([coords[0], coords[1]])
    return
  }
  coords.forEach(point => collectPoints(point, out))
}

function isGeoJsonFeature(entry: unknown): entry is {
  geometry?: { coordinates?: unknown }
} {
  return (
    typeof entry === 'object' &&
    entry !== null &&
    !('getGeometry' in entry) &&
    'geometry' in entry
  )
}

/**
 * Bounding box of a search result entry in the map projection.
 * Raw GeoJSON entries are EPSG:4326 and get transformed; OL features
 * already live in the map projection.
 * Returns null when the entry carries no geometry.
 */
export function entryExtent(
  entry: unknown,
  viewProjCode: string
): Extent | null {
  if (isGeoJsonFeature(entry)) {
    const points: Coordinate[] = []
    collectPoints(entry.geometry?.coordinates, points)
    if (points.length === 0) return null
    const projected = points.map(
      point => transform(point, 'EPSG:4326', viewProjCode) as Coordinate
    )
    return bboxOf(projected)
  }

  const geometry = (
    entry as { getGeometry?: () => { getExtent?: () => Extent } | null }
  )?.getGeometry?.()
  const extent = geometry?.getExtent?.()
  return extent ?? null
}

function bboxOf(points: Coordinate[]): Extent {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const [x, y] of points) {
    minX = Math.min(minX, x)
    minY = Math.min(minY, y)
    maxX = Math.max(maxX, x)
    maxY = Math.max(maxY, y)
  }
  return [minX, minY, maxX, maxY]
}

function isPointExtent(extent: Extent): boolean {
  return extent[0] === extent[2] && extent[1] === extent[3]
}

export interface BookmarkLocation {
  center: Coordinate
  zoom: number
}

/**
 * Location to store for a bookmark: point results keep the current zoom,
 * area results are fitted (clamped to MAX_FIT_ZOOM).
 */
export function bookmarkLocation(
  entry: unknown,
  view: View,
  mapSize: number[] | undefined
): BookmarkLocation | undefined {
  const extent = entryExtent(entry, view.getProjection().getCode())
  if (!extent) return undefined

  const center: Coordinate = [
    (extent[0] + extent[2]) / 2,
    (extent[1] + extent[3]) / 2,
  ]
  const currentZoom = view.getZoom() ?? 10

  if (isPointExtent(extent) || !mapSize) {
    return { center, zoom: currentZoom }
  }

  const resolution = view.getResolutionForExtent(extent, mapSize)
  if (resolution === undefined) return { center, zoom: currentZoom }
  const zoom = view.getZoomForResolution(resolution)
  if (zoom === undefined) return { center, zoom: currentZoom }
  return { center, zoom: Math.min(zoom, MAX_FIT_ZOOM) }
}

/**
 * Stable key for a location (independent of zoom level), used to toggle
 * search-result bookmarks on and off.
 */
export function entryLocationKey(
  entry: unknown,
  viewProjCode: string
): string | undefined {
  const extent = entryExtent(entry, viewProjCode)
  if (!extent) return undefined
  const center: Coordinate = [
    (extent[0] + extent[2]) / 2,
    (extent[1] + extent[3]) / 2,
  ]
  return `${Math.round(center[0])},${Math.round(center[1])}`
}

/**
 * Display name extracted from the entry itself, falling back to the
 * preformatted result label.
 */
export function entryName(entry: unknown, fallback: string): string {
  if (isGeoJsonFeature(entry)) {
    const properties = (entry as { properties?: { label?: unknown } })
      .properties
    if (typeof properties?.label === 'string' && properties.label) {
      return properties.label
    }
  } else {
    const feature = entry as {
      get?: (key: string) => unknown
    }
    if (typeof feature?.get === 'function') {
      const label = feature.get('label')
      if (typeof label === 'string' && label) return label
    }
  }
  return fallback
}

/**
 * Human-readable fallback name for view bookmarks: "6.13456, 49.61234".
 */
export function coordinateName(center: Coordinate): string {
  const [lon, lat] = toLonLat(center)
  return `${lon.toFixed(5)}, ${lat.toFixed(5)}`
}
