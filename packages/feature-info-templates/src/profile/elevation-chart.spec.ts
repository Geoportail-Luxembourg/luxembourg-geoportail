import { existsSync } from 'node:fs'
import { join } from 'node:path'
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

  it('points the placeholder at an existing image', () => {
    const wrapper = mount(ElevationChart, {
      props: { profileData: undefined },
      global,
    })
    const src = wrapper.find('img').attributes('src')!
    // Vite serves it from the project root, which vitest runs in.
    expect(existsSync(join(process.cwd(), new URL(src).pathname))).toBe(true)
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
  it('writes one row per point, columns matching the header', () => {
    const csv = profileCsv(
      toProfileData({
        profile: [{ dist: 0, values: { dhm: 100 }, x: 70000, y: 80000 }],
      }),
      () => [6, 49]
    )
    expect(csv).toBe('dist,MNT,x,y,lon,lat\n0,100,70000,80000,6,49\n')
  })
})
