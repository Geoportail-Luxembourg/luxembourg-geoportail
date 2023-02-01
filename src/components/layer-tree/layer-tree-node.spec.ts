import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { LayerTreeNodeModel } from './layer-tree.model'
import LayerTreeNode from './layer-tree-node.vue'

const layerTreeNodeMock = {
  id: 'treenodeid',
  name: 'treenodename',
  checked: false,
  expanded: false,
  depth: 0,
  children: [
    {
      id: 'treenodeid_1',
      name: 'treenodename_1',
      checked: false,
      expanded: false,
      depth: 1,
      children: [],
    },
  ],
} as LayerTreeNodeModel

describe('LayerTreeNode', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(LayerTreeNode, {
      props: {
        node: layerTreeNodeMock,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(wrapper.html()).not.toContain('treenodename_0')
    expect(wrapper.html()).toContain('treenodename_1')
  })
})
