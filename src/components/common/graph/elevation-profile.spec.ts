import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ElevationProfile from './elevation-profile.vue'
import D3GraphElevation from './d3-graph-elevation.vue'
import { ProfileData } from './elevation-profile'

describe('ElevationProfile', () => {
  it('Display an image when profileData is empty', () => {
    const wrapper = mount(ElevationProfile, {
      props: {
        profileData: undefined,
      },
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.findComponent(D3GraphElevation).exists()).toBe(false)
  })

  it('Display the graph when profileData has values', () => {
    const profileData = <ProfileData>[
      {
        cumulativeElevation: 42,
        elevationGain: 58,
        elevationLoss: 2,
      },
      {
        cumulativeElevation: 250,
        elevationGain: 22,
        elevationLoss: 42,
      },
    ]
    const wrapper = mount(ElevationProfile, {
      props: {
        profileData,
        highlightDistance: 10,
      },
    })

    expect(wrapper.findComponent(D3GraphElevation).exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
  })
})
