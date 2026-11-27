import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ElevationChart from './elevation-chart.vue'
import { LUX_TPL_I18N } from '../i18n'
import { profileCsv, toProfileData } from './profile'
import type { ProfileJsonEntry } from './profile'

const global = {
  provide: {
    [LUX_TPL_I18N]: { i18next: {}, getFixedT: () => (key: string) => key },
  },
}

const point = (dist: number, dhm: number): ProfileJsonEntry => ({
  dist,
  values: { dhm },
  x: dist,
  y: 0,
})

describe('ElevationChart', () => {
  it('displays an image without profile data', () => {
    const wrapper = mount(ElevationChart, {
      props: { profileData: undefined },
      global,
    })
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('displays the graph with profile data', () => {
    const profileData = toProfileData({
      profile: [point(0, 10), point(5, 20)],
    })
    const wrapper = mount(ElevationChart, {
      props: { profileData, highlightDistance: 10 },
      global,
    })
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})

describe('toProfileData', () => {
  it('accumulates gain, loss and balance', () => {
    const data = toProfileData({
      profile: [point(0, 100), point(1, 110), point(2, 105), point(3, 108)],
    })
    expect(data.at(-1)).toMatchObject({
      elevationGain: 13,
      elevationLoss: -5,
      cumulativeElevation: 8,
    })
    expect(data[0]).toMatchObject({ elevationGain: 0, elevationLoss: 0 })
  })
})

describe('profileCsv', () => {
  it('writes one row per point', () => {
    const csv = profileCsv(toProfileData({ profile: [point(0, 100)] }), () => [
      6, 49,
    ])
    expect(csv).toBe('dist,MNT,y,x,lon,lat\n0,100,0,0,6,49\n')
  })
})
