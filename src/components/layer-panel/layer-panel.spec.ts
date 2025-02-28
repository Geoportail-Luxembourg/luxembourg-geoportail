import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import CatalogTab from '@/components/catalog/catalog-tab.vue'
import LayerManager from '@/components/layer-manager/layer-manager.vue'

import LayerPanel from './layer-panel.vue'

describe('LayerPanel', () => {
  const mountComponent = () => mount(LayerPanel)
  let wrapper: ReturnType<typeof mountComponent>

  beforeEach(() => {
    wrapper = mount(LayerPanel, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })

  it('renders properly', async () => {
    expect(wrapper.findComponent(CatalogTab).exists()).toBe(true)
    expect(wrapper.findComponent(LayerManager).exists()).toBe(true)
    expect(wrapper.findComponent(CatalogTab).isVisible()).toBe(true)
    // NB. LayerManager is present but not visible,
    // CatalogTab is present even if LayerManager is visible,
    // to keep accordions state (opened or closed) according to the user's navigation in the catalog
    expect(wrapper.findComponent(LayerManager).isVisible()).toBe(false)
  })
})
