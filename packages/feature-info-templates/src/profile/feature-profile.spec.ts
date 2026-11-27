import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import FeatureProfile from './feature-profile.vue'
import { LUX_TPL_CONTEXT } from '../context'
import { LUX_TPL_I18N } from '../i18n'
import type { FeatureJSON } from '../models'

const feature = {
  id: 1,
  attributes: {},
  geometry: {
    type: 'LineString',
    coordinates: [
      [0, 0],
      [1, 1],
    ],
  },
} as unknown as FeatureJSON

const mountProfile = (context: object, props = { feature }) =>
  mount(FeatureProfile, {
    props,
    global: {
      provide: {
        [LUX_TPL_I18N]: {
          i18next: {},
          getFixedT: () => (key: string) => key,
        },
        [LUX_TPL_CONTEXT]: {
          config: { profileUrl: '/profile.json' },
          user: ref(null),
          notify: () => {},
          ...context,
        },
      },
    },
  })

const profileMapAdapter = {
  setPosition: () => {},
  onPointerMove: () => () => {},
  toLonLat: (xy: number[]) => xy,
}

describe('FeatureProfile', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows no chart without a map adapter, but the exports', () => {
    const wrapper = mountProfile({ exportFeature: () => {} })
    expect(wrapper.find('[data-cy="featItemProfile"]').exists()).toBe(false)
    expect(wrapper.findAll('.lux-feature-info-export')).toHaveLength(2)
  })

  it('shows neither chart nor exports without a line', () => {
    const point = { type: 'Point', coordinates: [0, 0] }
    const wrapper = mountProfile(
      { profileMapAdapter, exportFeature: () => {} },
      { feature: { ...feature, geometry: point } as FeatureJSON }
    )
    expect(wrapper.html()).toBe('<!--v-if-->')
  })

  it('tells when the profile cannot be loaded', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')))
    const wrapper = mountProfile({ profileMapAdapter })
    await flushPromises()
    expect(wrapper.text()).toContain('The profile could not be loaded.')
  })

  it('aborts the request on unmount', () => {
    const fetchMock = vi.fn(() => new Promise(() => {}))
    vi.stubGlobal('fetch', fetchMock)
    const wrapper = mountProfile({ profileMapAdapter })
    wrapper.unmount()
    expect(
      (fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1].signal
        ?.aborted
    ).toBe(true)
  })
})
