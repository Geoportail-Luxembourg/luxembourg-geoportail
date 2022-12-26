import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'

import LayerManager from './layer-manager.vue'

describe('LayerManager', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(LayerManager, {
      global: {
        plugins: [ createTestingPinia() ],
      },
    })

  })
})
