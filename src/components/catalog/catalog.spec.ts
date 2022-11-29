import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Catalog from './catalog-tree.vue'

describe('Catalog', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = shallowMount(Catalog, {
      mocks: {
        t: () => '',
      },
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })
  it('renders properly', () => {
    expect(wrapper.getComponent(LayerTreeNode)).toBeTruthy()
  })
})
