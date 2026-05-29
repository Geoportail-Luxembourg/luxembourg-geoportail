import { onMounted, onUnmounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { transform, transformExtent } from 'ol/proj'
import type OlMap from 'ol/Map'
import {
  PROJECTION_LUX,
  PROJECTION_WGS84,
} from '@/composables/map/map.composable'
import { getElevation } from '@/components/draw/feature-measurements-helper'
import { useMapStore } from '@/stores/map.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { buildObliqueState } from '@/services/vcs.utils'
import { Layer } from '@/stores/map.store.model'
import type { BaseParams, ExportLink } from './export-url.model'
import { TargetExportLayer } from '@/services/ol-layer/ol-layer-target-export.helper'
import { olLayerFactoryService } from '@/services/ol-layer/ol-layer-factory.service'

export function interpolateUrl(
  url: string,
  params: Record<string, number | string>
): string {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, encodeURIComponent(value)),
    url
  )
}

async function computeParams(
  center: number[],
  map: OlMap,
  layers: Layer[]
): Promise<BaseParams> {
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
  const layerIds = layers.map(l => l.id).join(',')
  const elevation = await getElevation(center)

  return {
    LUREF_X: Math.round(luref[0]),
    LUREF_Y: Math.round(luref[1]),
    ZOOM: Math.round(zoom),
    LON: lon,
    LAT: lat,
    BBOX: bboxWgs84.join(','),
    LAYER_IDS: layerIds,
    ELEVATION: elevation ?? 300,
  }
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
 *   `resolvedHrefs` is kept up to date automatically when `locationInfoCoords` changes or the map moves.
 * @param map - The OpenLayers map instance used to compute view-based parameters.
 */
export default function useExportUrl(map?: OlMap) {
  const mapStore = useMapStore()
  const { layers, x, y, zoom } = storeToRefs(mapStore)
  const { locationInfoCoords } = storeToRefs(useLocationInfoStore())
  const { currentUser } = storeToRefs(useUserManagerStore())
  const resolvedHrefs = ref<Record<string, string>>({})
  const links = ref<ExportLink[]>([])
  const allLinks = ref<ExportLink[]>([])

  // Cached params — recomputed at most once per event (moveend / locationInfoCoords change)
  let mapParamsCache: BaseParams | null = null
  let locationParamsCache: BaseParams | null = null
  let targetExportLayer: TargetExportLayer | null = null

  watch([x, y], ([newX, newY]) => targetExportLayer?.positionTarget(newX, newY))

  onMounted(async () => {
    const res = await fetch('/config-export-url.json')
    const config = await res.json()
    allLinks.value = config.exportLinks ?? []

    targetExportLayer = olLayerFactoryService.createOlLayerTargetExport()
    targetExportLayer.positionTarget(x.value, y.value)
    map?.addLayer(targetExportLayer)

    await resolveAllHrefs()
  })

  onUnmounted(() => {
    if (targetExportLayer) {
      map?.removeLayer(targetExportLayer)
      targetExportLayer = null
    }
  })

  async function refreshCache(olMap: OlMap) {
    const mapCenter = olMap.getView().getCenter()
    if (!mapCenter) {
      mapParamsCache = null
      locationParamsCache = null
      return
    }
    const locationCoords = locationInfoCoords.value
    const hasLocationInfoLinks =
      links?.value.some(l => l.useLocationInfoCoords) ?? false
    const [mapParams, locationParams] = await Promise.all([
      computeParams(mapCenter, olMap, layers.value),
      hasLocationInfoLinks && locationCoords
        ? computeParams(locationCoords, olMap, layers.value)
        : Promise.resolve(null),
    ])
    mapParamsCache = mapParams
    locationParamsCache = locationParams
  }

  function resolveUrlFromCache(link: ExportLink): string {
    if (!link.url) return ''
    const base =
      link.useLocationInfoCoords && locationParamsCache
        ? locationParamsCache
        : mapParamsCache
    if (!base) return link.url
    const params: Record<string, number | string> = {
      ...base,
      ...(link.obliqueConfig
        ? {
            VCS_OBLIQUE_STATE: buildObliqueState(
              base.LON,
              base.LAT,
              link.obliqueConfig
            ),
          }
        : {}),
    }

    return interpolateUrl(link.url, params)
  }

  function filterLinks(allLinks: ExportLink[]): ExportLink[] {
    const userType = currentUser.value?.typeUtilisateur
    const userRole = currentUser.value?.role
    return allLinks.filter(link => {
      const hasRestriction = !!(link.userType?.length || link.userRoles?.length)
      if (!hasRestriction) return true
      const okType = !!(userType && link.userType?.includes(userType))
      const okRole = !!(userRole && link.userRoles?.includes(userRole))
      return okType || okRole
    })
  }

  async function resolveUrl(link: ExportLink, olMap: OlMap): Promise<string> {
    await refreshCache(olMap)
    return resolveUrlFromCache(link)
  }

  async function resolveAllHrefs() {
    if (!map) {
      return
    }

    await refreshCache(map)

    resolvedHrefs.value = Object.fromEntries(
      links.value.map(link => [link.labelKey, resolveUrlFromCache(link)])
    )
  }

  watch([locationInfoCoords, layers, x, y, zoom], resolveAllHrefs)
  watch([allLinks, currentUser], ([newLinks]) => {
    links.value = filterLinks(newLinks)
    resolveAllHrefs()
  })

  return {
    interpolateUrl,
    buildObliqueState,
    resolveUrl,
    resolvedHrefs,
    resolveAllHrefs,
    links,
  }
}
