import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'

import LayerPanel from './layer-panel.vue'
import { useAppStore } from '@/stores/app.store'

describe('LayerPanel', () => {
  const mountComponent = () => shallowMount(LayerPanel)
  let wrapper: ReturnType<typeof mountComponent>

  beforeEach(() => {
    wrapper = shallowMount(LayerPanel, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })

  it('renders properly', async () => {
    const appStore = useAppStore()

    expect(wrapper.findComponent(CatalogTab).exists()).toBe(true)
    expect(wrapper.findComponent(LayerManager).exists()).toBe(false)

    appStore.setMyLayersTabOpen(true)
    await wrapper.vm.$nextTick() // "Wait for the DOM to update before continuing the test"

    expect(wrapper.findComponent(CatalogTab).exists()).toBe(true)
    expect(wrapper.findComponent(LayerManager).exists()).toBe(false)
  })
})
