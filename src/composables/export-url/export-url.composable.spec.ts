import { describe, it, expect, afterEach, vi } from 'vitest'
import { defineComponent, nextTick } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import useExportUrl, { interpolateUrl } from './export-url.composable'
import {
  buildObliqueState,
  LUX_VCS_MODULES,
  LUX_VCS_PLUGINS,
} from '@/services/vcs.utils'
import type { ObliqueConfig } from '@/services/vcs.utils'
import type { ExportLink } from './export-url.model'
import { useUserManagerStore } from '@/stores/user-manager.store'

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

vi.mock('@/services/ol-layer/ol-layer-factory.service', () => ({
  olLayerFactoryService: {
    createOlLayerTargetExport: vi.fn(() => ({
      positionTarget: vi.fn(),
    })),
  },
}))

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
    expect(result[2]).toEqual(
      expect.arrayContaining([...obliqueConfig.modules, ...LUX_VCS_MODULES])
    )
    expect(result[2].length).toBe(
      new Set([...obliqueConfig.modules, ...LUX_VCS_MODULES]).size
    )
    expect(result[5].map((p: unknown[]) => p[0])).toEqual(
      expect.arrayContaining([
        ...obliqueConfig.plugins.map(p => p[0]),
        ...LUX_VCS_PLUGINS.map(p => p[0]),
      ])
    )
    expect(result[6]).toBe(obliqueConfig.collection)
  })
})

// ---------------------------------------------------------------------------
// links — filtering by userType / userRoles
// ---------------------------------------------------------------------------

function mountExportUrl(pinia: ReturnType<typeof createTestingPinia>) {
  let composable!: ReturnType<typeof useExportUrl>
  const TestComponent = defineComponent({
    setup() {
      composable = useExportUrl()
      return {}
    },
    template: '<div></div>',
  })
  const wrapper = mount(TestComponent, { global: { plugins: [pinia] } })
  return {
    get composable() {
      return composable
    },
    unmount: () => wrapper.unmount(),
  }
}

describe('links', () => {
  const linkOpen: ExportLink = { labelKey: 'OpenLink', icon: 'fa-globe' }
  const linkForEtat: ExportLink = {
    labelKey: 'EtatLink',
    icon: 'fa-lock',
    userType: ['etat'],
  }
  const linkForRole: ExportLink = {
    labelKey: 'RoleLink',
    icon: 'fa-lock',
    userRoles: ['MinTour'],
  }
  const linkForBoth: ExportLink = {
    labelKey: 'BothLink',
    icon: 'fa-lock',
    userType: ['commune'],
    userRoles: ['MinTour'],
  }

  function setupWithLinks(links: ExportLink[], currentUser?: unknown) {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ exportLinks: links }),
      })
    )
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: {
        map: { layers: [] },
        'user-manager': { currentUser },
      },
    })
    return mountExportUrl(pinia)
  }

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('includes all links without restrictions regardless of auth state', async () => {
    const { composable, unmount } = setupWithLinks([linkOpen])
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).toContain('OpenLink')
    unmount()
  })

  it('hides restricted links when user is not logged in', async () => {
    const { composable, unmount } = setupWithLinks(
      [linkOpen, linkForEtat],
      undefined
    )
    await flushPromises()
    const keys = composable.links.value.map(l => l.labelKey)
    expect(keys).toContain('OpenLink')
    expect(keys).not.toContain('EtatLink')
    unmount()
  })

  it('shows link when userType matches', async () => {
    const { composable, unmount } = setupWithLinks([linkOpen, linkForEtat], {
      login: 'user1',
      typeUtilisateur: 'etat',
      role: '',
    })
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).toContain('EtatLink')
    unmount()
  })

  it('hides link when userType does not match', async () => {
    const { composable, unmount } = setupWithLinks([linkForEtat], {
      login: 'user1',
      typeUtilisateur: 'commune',
      role: '',
    })
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).not.toContain(
      'EtatLink'
    )
    unmount()
  })

  it('shows link when userRoles matches', async () => {
    const { composable, unmount } = setupWithLinks([linkForRole], {
      login: 'user1',
      typeUtilisateur: 'other',
      role: 'MinTour',
    })
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).toContain('RoleLink')
    unmount()
  })

  it('hides link when userRoles does not match', async () => {
    const { composable, unmount } = setupWithLinks([linkForRole], {
      login: 'user1',
      typeUtilisateur: 'other',
      role: 'OtherRole',
    })
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).not.toContain(
      'RoleLink'
    )
    unmount()
  })

  it('shows link when either userType or userRoles matches', async () => {
    const { composable, unmount } = setupWithLinks([linkForBoth], {
      login: 'user1',
      typeUtilisateur: 'commune',
      role: 'OtherRole',
    })
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).toContain('BothLink')
    unmount()
  })

  it('updates links reactively when currentUser changes', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ exportLinks: [linkOpen, linkForEtat] }),
      })
    )
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      initialState: {
        map: { layers: [] },
        'user-manager': { currentUser: undefined },
      },
    })
    const { composable, unmount } = mountExportUrl(pinia)
    await flushPromises()
    expect(composable.links.value.map(l => l.labelKey)).not.toContain(
      'EtatLink'
    )

    const userStore = useUserManagerStore()
    userStore.$patch({
      currentUser: { login: 'u', typeUtilisateur: 'etat', role: '' },
    })
    await nextTick()

    expect(composable.links.value.map(l => l.labelKey)).toContain('EtatLink')
    unmount()
  })
})
