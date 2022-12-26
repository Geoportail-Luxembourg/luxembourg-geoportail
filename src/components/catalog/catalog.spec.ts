import { createTestingPinia } from '@pinia/testing'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

import Catalog from '@/components/catalog/catalog-tree.vue'
import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'

describe('Catalog', () => {
  let wrapper: VueWrapper
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      theme: {
        theme: {
          id: 116,
          name: 'main',
          icon: 'main',
          children: [],
        },
      },
      map: {
        layers: [],
      },
    },
  })

  beforeEach(() => {
    wrapper = shallowMount(Catalog, {
      global: {
        plugins: [pinia],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', async () => {
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(LayerTreeNode).props('node')).toBeTruthy()
      expect(wrapper.findComponent(LayerTreeNode)).toBeTruthy()
    })
  })
})
