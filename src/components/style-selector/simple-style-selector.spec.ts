import { shallowMount } from '@vue/test-utils'

import SimpleStyleSelector from './simple-style-selector.vue'
import { useStyleStore } from '@/stores/style.store'
import { SimpleRoadStyle } from '@/composables/mvt-styles/mvt-styles.model'
import { createTestingPinia } from '@pinia/testing'

const dummySimpleStyles: SimpleRoadStyle[] = [
  {
    unlocalized_label: 'entity1',
    hillshade: false,
    colors: ['#ffffff', '#000000'],
    selected: false,
  },
]

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

  it('default simple bgStyle test', () => {
    expect(styleStore.bgStyle).toBe(undefined)
    styleStore.setSimpleStyle(dummySimpleStyles[0])
    expect(styleStore.bgStyle?.length).toBe(7)
  })

  it('default select bgStyle test', async () => {
    const wrapper = shallowMount(SimpleStyleSelector, {
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
    expect(wrapper.findAll('button').length).toBe(6)
    await wrapper.vm.onStylingSelected(dummySimpleStyles[0])
    if (styleStore.bgStyle) {
      expect(styleStore.bgStyle[0].label).toBe('Roads primary')
      expect(styleStore.bgStyle[0].color).toBe('#ffffff')
    }
    expect(wrapper.vm.simpleStyles[3].selected).toBe(false)
    await wrapper.vm.onStylingSelected(wrapper.vm.simpleStyles[3])
    expect(wrapper.vm.simpleStyles[3].selected).toBe(true)
    if (styleStore.bgStyle) {
      expect(styleStore.bgStyle[0].label).toBe('Roads primary')
      expect(styleStore.bgStyle[0].color).toBe('#f9c50d')
    }
  })

  it('source test', () => {
    expect(styleStore.bgVectorSources.size).toBe(3)
    expect(styleStore.bgVectorSources.get(556)['style']).toContain('roadmap')
    expect(styleStore.bgVectorSources.get(529)['style']).toContain('topomap')
  })
})
