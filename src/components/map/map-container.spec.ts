import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'

import { initProjections } from '@/services/projection.utils'
import MapContainer from './map-container.vue'

beforeAll(() => {
  initProjections()
})

describe('MapContainer', () => {
  it('renders properly', async () => {
    const wrapper = shallowMount(MapContainer, {
      global: {
        plugins: [createTestingPinia({})],
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('ol-viewport')
  })
})
