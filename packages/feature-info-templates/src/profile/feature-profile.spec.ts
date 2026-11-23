import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
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

describe('FeatureProfile', () => {
  it('shows no chart without a map adapter, but the exports', () => {
    const wrapper = mount(FeatureProfile, {
      props: { feature },
      global: {
        provide: {
          [LUX_TPL_I18N]: {
            i18next: {},
            getFixedT: () => (key: string) => key,
          },
          [LUX_TPL_CONTEXT]: {
            config: {},
            user: ref(null),
            notify: () => {},
            exportFeature: () => {},
          },
        },
      },
    })
    expect(wrapper.find('[data-cy="featItemProfile"]').exists()).toBe(false)
    expect(wrapper.findAll('.lux-feature-info-export')).toHaveLength(2)
  })

  it('shows neither chart nor exports without a line', () => {
    const wrapper = mount(FeatureProfile, {
      props: {
        feature: {
          ...feature,
          geometry: { type: 'Point', coordinates: [0, 0] },
        } as FeatureJSON,
      },
      global: {
        provide: {
          [LUX_TPL_I18N]: {
            i18next: {},
            getFixedT: () => (key: string) => key,
          },
          [LUX_TPL_CONTEXT]: {
            config: {},
            user: ref(null),
            notify: () => {},
            exportFeature: () => {},
          },
        },
      },
    })
    expect(wrapper.html()).toBe('<!--v-if-->')
  })
})
