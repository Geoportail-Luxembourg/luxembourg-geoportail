import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'

import LayerManager from './layer-manager.vue'
import LayerItemBackground from './layer-item/layer-item-background.vue'

describe('LayerManager', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(LayerManager, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(wrapper.findComponent(LayerItemBackground).exists()).toBe(true)
  })
})
