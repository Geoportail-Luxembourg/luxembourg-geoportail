import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'

import MapContainer from './map-container.vue'

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
