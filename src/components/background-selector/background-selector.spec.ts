import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { useThemeStore } from '../../stores/config.store'
import { useMapStore } from '../../stores/map.store'

import BackgroundSelector from './background-selector.vue'

describe('BackgroundSelector', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(BackgroundSelector, {
      props: {
        isOpen: false,
        activeLayerId: 1
      },
      global: {
        plugins: [createTestingPinia()],
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    expect(wrapper.findAll('button').length).toBe(7)
    expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe('false')
  })

  it('#toggleSelector', () => {
    expect(wrapper.vm.isOpen).toBe(false)
    wrapper.vm.toggleSelector()
    expect(wrapper.vm.isOpen).toBe(true)
  })

  it('#setBackgroundLayer', () => {
    wrapper.vm.setBackgroundLayer({id: 123})
    expect(wrapper.vm.isOpen).toBe(false)
  })
})
