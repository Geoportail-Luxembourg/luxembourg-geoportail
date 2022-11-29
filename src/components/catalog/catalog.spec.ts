import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import Catalog from '@/components/catalog/catalog.vue'

describe('Catalog', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Catalog, {
      mocks: {
        t: () => '',
      },
    })
    expect(wrapper.getComponent(LayerTreeNode)).toBeTruthy()
  })
})
