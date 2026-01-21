import { nextTick } from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import { Coordinate } from 'ol/coordinate'

import { dataset as datasetFixtures } from '@/__fixtures__/d3-graph-elevation.fixtures'
import formatMeasureDirective from '@/directives/format-measure.directive'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import FeatureElevationProfile from './feature-elevation-profile.vue'
import { exportFeatureService } from '@/services/export-feature/export-feature.service'
import { useProfilePositionStore } from '@/stores/profile-position.store'
import ElevationProfile from '../common/graph/elevation-profile.vue'

const global: GlobalMountOptions | undefined = {
  plugins: [formatMeasureDirective],
}

const mockedFeatureWithData = <DrawnFeature>(<unknown>{
  getProfile: vi.fn(() => Promise.resolve(datasetFixtures)),
  profileData: undefined,
  map: { getView: () => ({ getProjection: () => 'EPSG:4326' }) },
  label: 'Feature Label with data',
})

const mockedFeatureNoData = <DrawnFeature>(<unknown>{
  getProfile: vi.fn(() => new Promise(() => undefined)),
  profileData: undefined,
  map: {},
  label: 'Feature Label with NO data',
})

vi.mock('ol/proj', () => ({
  transform: (coords: Coordinate) => coords,
}))

vi.mock('@/services/export-feature/export-feature.service', () => ({
  exportFeatureService: {
    export: vi.fn(),
  },
}))

vi.mock('@/composables/map/map.composable', () => ({
  default: () => ({
    getOlMap: () => ({
      addLayer: vi.fn(),
      addFeatureLayer: vi.fn(),
      getView: () => ({ getProjection: vi.fn() }),
    }),
  }),
  PROJECTION_LUX: 'EPSG:2169',
}))

vi.mock('@/composables/map/profile-position.composable', () => ({
  default: () => ({
    constructProfileLine: vi.fn(),
    profileData: { value: undefined },
    highlightDistance: { value: undefined },
  }),
}))

describe('FeatureElevationProfile', () => {
  createTestingPinia({
    createSpy: vi.fn,
    stubActions: false,
    initialState: {
      'profile-position': {
        x: 1,
        y: 2,
      },
    },
  })

  it('Display elevation ,cumulation gain and loss according to profileData', async () => {
    const wrapper = shallowMount(FeatureElevationProfile, {
      props: { feature: mockedFeatureWithData },
      global,
    })

    await nextTick()
    // Wait for the promise returned by getProfile to resolve
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(wrapper.text()).toContain('Δ+699')
    expect(wrapper.text()).toContain('Δ-814')
    expect(wrapper.text()).toContain('-115')
  })

  it('Display a waiting message when profileData is still loading', async () => {
    const wrapper = mount(FeatureElevationProfile, {
      props: { feature: mockedFeatureNoData },
      global,
    })

    expect(wrapper.text()).toContain('Please wait, the profile is loading.')
  })

  it('Does not display a close button if there is no listerner for "onClose"', () => {
    const wrapper = mount(FeatureElevationProfile, {
      global,
    })

    expect(wrapper.find('[aria-label="Close"]').exists()).toBe(false)
  })

  it('Display a close button if there is a listerner for "onClose"', () => {
    const wrapper = mount(FeatureElevationProfile, {
      props: {
        onClose: () => alert('My listener on close'),
        feature: mockedFeatureNoData,
      },
      global,
    })

    expect(wrapper.find('[aria-label="Close"]').exists()).toBe(true)
  })

  it("Call 'exportFeatureService.export' when on click export csv button", async () => {
    const wrapper = shallowMount(FeatureElevationProfile, {
      props: { feature: mockedFeatureWithData },
      global,
    })

    await nextTick()
    // Wait for the promise returned by getProfile to resolve
    await new Promise(resolve => setTimeout(resolve, 0))
    await wrapper.vm.$nextTick()
    await wrapper.find('[data-cy="featItemProfileCSV"]').trigger('click')

    expect(exportFeatureService.export).toHaveBeenCalled()
  })

  it("Update 'profilePositionStore' when hovering the graph", async () => {
    const profilePositionStore = useProfilePositionStore()
    const wrapper = mount(FeatureElevationProfile, {
      props: { feature: mockedFeatureWithData },
      global,
    })

    await nextTick()

    const elevationProfile = wrapper.findComponent(ElevationProfile)
    elevationProfile.vm.$emit('hover:profile', { x: 10, y: 20 })

    expect(profilePositionStore.setPosition).toHaveBeenCalledWith(10, 20)
  })
})
