import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { LayerTreeNodeModel } from './layer-tree.model'
import LayerTreeNode from './layer-tree-node.vue'
import { EXCLUDED_PARENT_LAYER_IDS } from './layer-tree.service'

const layerTreeNodeMock = {
  id: 'treenodeid',
  name: 'treenodename',
  checked: false,
  expanded: false,
  favourite: false,
  depth: 0,
  children: [
    {
      id: 'treenodeid_1',
      name: 'treenodename_1',
      checked: false,
      expanded: false,
      favourite: false,
      depth: 1,
    },
  ],
} as LayerTreeNodeModel

describe('LayerTreeNode', () => {
  it('renders properly', () => {
    const wrapper = mount(LayerTreeNode, {
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

  it('marks leaf rows inside the favourites box', () => {
    const wrapper = mount(LayerTreeNode, {
      props: {
        node: layerTreeNodeMock,
        inFavouritesBox: true,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(
      wrapper.find('[data-info="layerRow-treenodeid_1"]').attributes()[
        'data-locate-favourites'
      ]
    ).toBeDefined()
  })

  it('propagates the locate-excluded context to leaf rows', () => {
    const excludedNode = {
      ...layerTreeNodeMock,
      id: EXCLUDED_PARENT_LAYER_IDS[0] ?? 42,
    }
    const wrapper = mount(LayerTreeNode, {
      props: {
        node: excludedNode,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    })

    expect(
      wrapper.find('[data-info="layerRow-treenodeid_1"]').attributes()[
        'data-locate-excluded'
      ]
    ).toBeDefined()
  })
})
