import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import type OlMap from 'ol/Map'

import useExportUrl, {
  interpolateUrl,
  buildObliqueState,
} from './export-url.composable'
import type { ExportLink, ObliqueConfig } from './export-url.model'
import { useMapStore } from '@/stores/map.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import type { Layer } from '@/stores/map.store.model'

let resolveUrl: Awaited<ReturnType<typeof useExportUrl>>['resolveUrl']

vi.mock('ol/proj', () => ({
  transform: vi.fn((coord: number[], _from: unknown, to: unknown) => {
    if (to === 'EPSG:4326') return [6.13, 49.61]
    if (to === 'EPSG:2169') return [75432, 75891]
    return coord
  }),
  transformExtent: vi.fn(() => [6.0, 49.5, 6.3, 49.7]),
}))

vi.mock('@/composables/map/map.composable', () => ({
  default: vi.fn(),
  PROJECTION_WGS84: 'EPSG:4326',
  PROJECTION_LUX: 'EPSG:2169',
}))

vi.mock('@/components/draw/feature-measurements-helper', () => ({
  getElevation: vi.fn(() => Promise.resolve(332)),
}))

function makeMockMap(overrides?: {
  center?: number[] | null
  zoom?: number
  size?: number[] | null
}): OlMap {
  const center =
    overrides?.center !== undefined ? overrides.center : [681000, 6400000]
  const zoom = overrides?.zoom ?? 15
  const size = overrides?.size !== undefined ? overrides.size : [800, 600]

  return {
    getView: () => ({
      getCenter: () => center,
      getProjection: () => 'EPSG:3857',
      getZoom: () => zoom,
      calculateExtent: () => [670000, 6390000, 692000, 6410000],
    }),
    getSize: () => size,
  } as unknown as OlMap
}

const layerMock1 = { id: 'layer_a', name: 'Layer A' } as Layer
const layerMock2 = { id: 42, name: 'Layer B' } as Layer

const obliqueConfig: ObliqueConfig = {
  cameraAltitude: 692,
  targetHeight: 292,
  distance: 400,
  heading: 0,
  pitch: -90,
  roll: 0,
  label: 'Oblique Map',
  modules: ['LuxConfig', 'catalogConfig'],
  plugins: [['@geoportallux/lux-3dviewer-themesync', { prop: '*' }]],
  collection: 'ACT2023_ImagesObliques_all',
}

describe('interpolateUrl', () => {
  it('replaces a single token', () => {
    const result = interpolateUrl('https://example.com?x={X}', { X: 123 })
    expect(result).toBe('https://example.com?x=123')
  })

  it('replaces multiple tokens', () => {
    const result = interpolateUrl('https://example.com?x={X}&y={Y}', {
      X: 1,
      Y: 2,
    })
    expect(result).toBe('https://example.com?x=1&y=2')
  })

  it('url-encodes each value', () => {
    const result = interpolateUrl('https://example.com?bbox={BBOX}', {
      BBOX: '6.0,49.5,6.3,49.7',
    })
    expect(result).toBe('https://example.com?bbox=6.0%2C49.5%2C6.3%2C49.7')
  })

  it('leaves unreferenced tokens untouched', () => {
    const result = interpolateUrl('https://example.com?x={X}&y={Y}', { X: 1 })
    expect(result).toBe('https://example.com?x=1&y={Y}')
  })

  it('returns url unchanged when params is empty', () => {
    const url = 'https://example.com?foo=bar'
    expect(interpolateUrl(url, {})).toBe(url)
  })
})

describe('buildObliqueState', () => {
  it('returns a valid JSON string', () => {
    const result = buildObliqueState(6.13, 49.61, obliqueConfig)
    expect(() => JSON.parse(result)).not.toThrow()
  })

  it('includes camera position at index 0', () => {
    const result = JSON.parse(buildObliqueState(6.13, 49.61, obliqueConfig))
    const cameraPos = result[0][0]
    expect(cameraPos).toEqual([6.13, 49.61, obliqueConfig.cameraAltitude])
  })

  it('includes target position at index 1 of first element', () => {
    const result = JSON.parse(buildObliqueState(6.13, 49.61, obliqueConfig))
    const targetPos = result[0][1]
    expect(targetPos).toEqual([6.13, 49.61, obliqueConfig.targetHeight])
  })

  it('includes camera params (distance, heading, pitch, roll)', () => {
    const result = JSON.parse(buildObliqueState(6.13, 49.61, obliqueConfig))
    const [, , distance, heading, pitch, roll] = result[0]
    expect(distance).toBe(obliqueConfig.distance)
    expect(heading).toBe(obliqueConfig.heading)
    expect(pitch).toBe(obliqueConfig.pitch)
    expect(roll).toBe(obliqueConfig.roll)
  })

  it('includes label, modules, plugins and collection at expected indices', () => {
    const result = JSON.parse(buildObliqueState(6.13, 49.61, obliqueConfig))
    expect(result[1]).toBe(obliqueConfig.label)
    expect(result[2]).toEqual(obliqueConfig.modules)
    expect(result[5]).toEqual(obliqueConfig.plugins)
    expect(result[6]).toBe(obliqueConfig.collection)
  })
})

describe('resolveUrl', () => {
  beforeEach(() => {
    setActivePinia(
      createTestingPinia({
        createSpy: vi.fn,
        initialState: { map: { layers: [layerMock1, layerMock2] } },
      })
    )
    resolveUrl = useExportUrl().resolveUrl
  })

  it('uses locationInfoCoords when useLocationInfoCoords is true and coords are set', async () => {
    const locationInfoStore = useLocationInfoStore()
    locationInfoStore.locationInfoCoords = [700000, 6420000]
    const link: ExportLink = {
      labelKey: 'Lidar',
      icon: 'fa-mountain',
      useLocationInfoCoords: true,
      url: 'https://lidar.geoportail.lu?COORD_X={LUREF_X}&COORD_Y={LUREF_Y}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('COORD_X=75432')
    expect(result).toContain('COORD_Y=75891')
  })

  it('falls back to map center when useLocationInfoCoords is true but no location info coords', async () => {
    const locationInfoStore = useLocationInfoStore()
    locationInfoStore.locationInfoCoords = undefined
    const link: ExportLink = {
      labelKey: 'Lidar',
      icon: 'fa-mountain',
      useLocationInfoCoords: true,
      url: 'https://lidar.geoportail.lu?COORD_X={LUREF_X}&COORD_Y={LUREF_Y}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('COORD_X=75432')
    expect(result).toContain('COORD_Y=75891')
  })

  it('uses map center when useLocationInfoCoords is false', async () => {
    const locationInfoStore = useLocationInfoStore()
    locationInfoStore.locationInfoCoords = [700000, 6420000]
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      useLocationInfoCoords: false,
      url: 'https://example.com?x={LUREF_X}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('x=75432')
  })

  it('returns empty string when link has no url', async () => {
    const link: ExportLink = { labelKey: 'Test', icon: 'fa-test' }
    expect(await resolveUrl(link, makeMockMap())).toBe('')
  })

  it('returns url as-is when map has no center', async () => {
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      url: 'https://example.com?x={LUREF_X}',
    }
    expect(await resolveUrl(link, makeMockMap({ center: null }))).toBe(
      'https://example.com?x={LUREF_X}'
    )
  })

  it('replaces {LUREF_X} and {LUREF_Y}', async () => {
    const link: ExportLink = {
      labelKey: 'Lidar',
      icon: 'fa-mountain',
      url: 'https://lidar.geoportail.lu?COORD_X={LUREF_X}&COORD_Y={LUREF_Y}&COORD_Z={ELEVATION}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('COORD_X=75432')
    expect(result).toContain('COORD_Y=75891')
  })

  it('replaces {ELEVATION} with terrain altitude', async () => {
    const link: ExportLink = {
      labelKey: 'Lidar',
      icon: 'fa-mountain',
      url: 'https://lidar.geoportail.lu?COORD_Z={ELEVATION}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('COORD_Z=332')
  })

  it('replaces {LON} and {LAT}', async () => {
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      url: 'https://example.com?lon={LON}&lat={LAT}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('lon=6.13')
    expect(result).toContain('lat=49.61')
  })

  it('replaces {ZOOM}', async () => {
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      url: 'https://example.com?zoom={ZOOM}',
    }
    const result = await resolveUrl(link, makeMockMap({ zoom: 14.7 }))
    expect(result).toContain('zoom=15')
  })

  it('replaces {BBOX} with encoded extent', async () => {
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      url: 'https://example.com?bbox={BBOX}',
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('bbox=')
    expect(result).not.toContain(',')
  })

  it('replaces {LAYER_IDS} with encoded layer ids', async () => {
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      url: 'https://example.com?layers={LAYER_IDS}',
    }
    const mapStore = useMapStore()
    mapStore.layers = [layerMock1, layerMock2] as typeof mapStore.layers
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('layers=')
    expect(result).toContain(encodeURIComponent('layer_a,42'))
  })

  it('replaces {VCS_STATE} with encoded JSON state', async () => {
    const link: ExportLink = {
      labelKey: 'Vue Oblique',
      icon: 'fa-street-view',
      url: 'https://3d.geoportail.lu?state={VCS_STATE}',
      obliqueConfig,
    }
    const result = await resolveUrl(link, makeMockMap())
    expect(result).toContain('state=')
    const encoded = result.split('state=')[1]
    const decoded = JSON.parse(decodeURIComponent(encoded))
    expect(decoded[6]).toBe(obliqueConfig.collection)
  })

  it('returns static url unchanged when no tokens are present', async () => {
    const url = 'https://3dprint.geoportail.lu'
    const link: ExportLink = { labelKey: '3D Print', icon: 'fa-cube', url }
    expect(await resolveUrl(link, makeMockMap())).toBe(url)
  })

  it('returns url as-is when map size is null', async () => {
    const link: ExportLink = {
      labelKey: 'Test',
      icon: 'fa-test',
      url: 'https://example.com?bbox={BBOX}',
    }
    const result = await resolveUrl(link, makeMockMap({ size: null }))
    expect(result).toContain('bbox=')
  })
})
