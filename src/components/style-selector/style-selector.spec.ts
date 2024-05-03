import { shallowMount } from '@vue/test-utils'

import StyleSelector from './style-selector.vue'
import { useStyleStore } from '@/stores/style.store'
import { createTestingPinia } from '@pinia/testing'

describe('StyleEditor', () => {
  createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      style: {
        bgStyle: undefined,
        bgVectorSources: [
          {
            556: {
              label: 'road',
              defaultMapBoxStyle: 'http://tiles.lu/style.json',
              defaultMapBoxStyleXYZ: 'http://tiles.lu/{z}/{x}/{y}.png',
              xyz: 'http://tiles.lu/{z}/{x}/{y}.png',
              xyz_custom: undefined,
              style: 'http://tiles.lu/style.json',
            },
          },
        ],
      },
    },
    stubActions: false,
  })
  const styleStore = useStyleStore()

  it('reset expert style test', async () => {
    const wrapper = shallowMount(StyleSelector, {
      props: {
        isOpen: true,
      },
    })

    styleStore.setSimpleStyle(null)
    expect(styleStore.bgStyle).toBeDefined
    if (styleStore.bgStyle) {
      expect(styleStore.bgStyle[0].label).toBe('Roads primary')
      expect(styleStore.bgStyle[0].color).toBe('#f7f7f7')
    }
    expect(wrapper.findAll('button').length).toBe(0)
    styleStore.enableExpertStyle()
    expect(wrapper.findAll('button').length).toBe(1)
    wrapper.vm.resetStyle()
    expect(wrapper.findAll('button').length).toBe(0)
  })
})
