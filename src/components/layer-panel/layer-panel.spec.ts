import { shallowMount } from '@vue/test-utils'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'

import LayerPanel from './layer-panel.vue'
import { createTestingPinia } from '@pinia/testing'

describe('LayerPanel', () => {
  it('renders properly', async () => {
    const wrapper = shallowMount(LayerPanel, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(wrapper.findComponent(CatalogTab).exists()).toBe(true)
    expect(wrapper.findComponent(LayerManager).exists()).toBe(false)

    wrapper.vm.myLayersOpen = true
    await wrapper.vm.$nextTick() // "Wait for the DOM to update before continuing the test"

    expect(wrapper.findComponent(CatalogTab).exists()).toBe(false)
    expect(wrapper.findComponent(LayerManager).exists()).toBe(true)
  })
})
