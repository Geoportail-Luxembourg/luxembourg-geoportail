import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { transform, transformExtent } from 'ol/proj'
import type { Ref } from 'vue'
import type OlMap from 'ol/Map'
import {
  PROJECTION_LUX,
  PROJECTION_WGS84,
} from '@/composables/map/map.composable'
import { getElevation } from '@/components/draw/feature-measurements-helper'
import { useMapStore } from '@/stores/map.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import type { ExportLink, ObliqueConfig } from './export-url.model'

export function interpolateUrl(
  url: string,
  params: Record<string, number | string>
): string {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, encodeURIComponent(value)),
    url
  )
}

export function buildObliqueState(
  lon: number,
  lat: number,
  cfg: ObliqueConfig
): string {
  const state = [
    [
      [lon, lat, cfg.cameraAltitude],
      [lon, lat, cfg.targetHeight],
      cfg.distance,
      cfg.heading,
      cfg.pitch,
      cfg.roll,
    ],
    cfg.label,
    cfg.modules,
    [],
    [],
    cfg.plugins,
    cfg.collection,
    [],
  ]
  return JSON.stringify(state)
}

/**
 * Composable for resolving export URLs with dynamic map parameters.
 *
 * URL templates support the following tokens:
 * - `{LUREF_X}` — X coordinate in LUREF (EPSG:2169), rounded to the nearest meter
 * - `{LUREF_Y}` — Y coordinate in LUREF (EPSG:2169), rounded to the nearest meter
 * - `{LON}` — Longitude in WGS84 (EPSG:4326)
 * - `{LAT}` — Latitude in WGS84 (EPSG:4326)
 * - `{ZOOM}` — Current map zoom level, rounded to the nearest integer
 * - `{BBOX}` — Bounding box of the current view in WGS84, as `minLon,minLat,maxLon,maxLat` (URL-encoded)
 * - `{LAYER_IDS}` — Comma-separated list of active layer IDs (URL-encoded)
 * - `{ELEVATION}` — Terrain altitude in meters at the resolved coordinate (from the elevation service)
 * - `{VCS_STATE}` — JSON state for the oblique viewer, built from `ExportLink.obliqueConfig`
 *
 * When `ExportLink.useLocationInfoCoords` is `true` and a location-info coordinate is selected,
 * it is used instead of the map center for computing `LUREF_X/Y`, `LON`, `LAT` and `ELEVATION`.
 *
 * @param links - Reactive list of export links to resolve. When provided alongside `map`,
 *   `resolvedHrefs` is kept up to date automatically when `locationInfoCoords` changes.
 * @param map - The OpenLayers map instance used to compute view-based parameters.
 */
export default function useExportUrl(links?: Ref<ExportLink[]>, map?: OlMap) {
  const mapStore = useMapStore()
  const { locationInfoCoords } = storeToRefs(useLocationInfoStore())
  const resolvedHrefs = ref<Record<string, string>>({})

  async function resolveAllHrefs() {
    if (!links || !map) return
    const entries = await Promise.all(
      links.value.map(
        async link => [link.labelKey, await resolveUrl(link, map)] as const
      )
    )
    resolvedHrefs.value = Object.fromEntries(entries)
  }

  watch(locationInfoCoords, resolveAllHrefs)

  async function resolveUrl(link: ExportLink, map: OlMap): Promise<string> {
    if (!link.url) return ''

    const mapCenter = map.getView().getCenter()
    const { locationInfoCoords } = storeToRefs(useLocationInfoStore())
    const center =
      link.useLocationInfoCoords && locationInfoCoords.value
        ? locationInfoCoords.value
        : mapCenter
    if (!center) return link.url

    const proj = map.getView().getProjection()
    const luref = transform(center, proj, PROJECTION_LUX)
    const wgs84 = transform(center, proj, PROJECTION_WGS84)
    const [lon, lat] = wgs84

    const zoom = map.getView().getZoom() ?? 0
    const size = map.getSize()
    const bboxWgs84 = size
      ? transformExtent(
          map.getView().calculateExtent(size),
          proj,
          PROJECTION_WGS84
        )
      : [0, 0, 0, 0]

    const { layers } = storeToRefs(mapStore)
    const layerIds = layers.value.map(l => l.id).join(',')

    const elevation = await getElevation(center)

    const params: Record<string, number | string> = {
      LUREF_X: Math.round(luref[0]),
      LUREF_Y: Math.round(luref[1]),
      ZOOM: Math.round(zoom),
      LON: lon,
      LAT: lat,
      BBOX: bboxWgs84.join(','),
      LAYER_IDS: layerIds,
      ELEVATION: elevation ?? 300, // default to 300m if elevation is unavailable
      ...(link.obliqueConfig
        ? { VCS_STATE: buildObliqueState(lon, lat, link.obliqueConfig) }
        : {}),
    }

    return interpolateUrl(link.url, params)
  }

  return {
    interpolateUrl,
    buildObliqueState,
    resolveUrl,
    resolvedHrefs,
    resolveAllHrefs,
  }
}
