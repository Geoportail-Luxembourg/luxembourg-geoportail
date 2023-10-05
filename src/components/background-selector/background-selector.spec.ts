import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import BackgroundSelector from './background-selector.vue'

describe('BackgroundSelector', () => {
  let wrapper: VueWrapper

  describe('for 2d layers and 3d terrain', () => {
    beforeEach(() => {
      wrapper = mount(BackgroundSelector, {
        props: {
          isOpen: false,
          activeLayerId: 1,
        },
        global: {
          plugins: [createTestingPinia()],
        },
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('renders properly', () => {
      expect(wrapper.findAll('button').length).toBe(7)
      expect(wrapper.findAll('button')[0].attributes('aria-expanded')).toBe(
        'false'
      )
    })

    it('#toggleSelector', () => {
      expect(wrapper.vm.isOpen).toBe(false)
      wrapper.vm.toggleSelector()
      expect(wrapper.vm.isOpen).toBe(true)
    })

    it('#setBackgroundLayer', () => {
      wrapper.vm.setBackgroundLayer({ id: 123 })
      expect(wrapper.vm.isOpen).toBe(false)
    })
  })

  describe('for 3d mesh', () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false,
      initialState: {
        map: {
          is3dMesh: true,
        },
      },
    })

    beforeEach(() => {
      wrapper = mount(BackgroundSelector, {
        props: {
          isOpen: false,
          activeLayerId: 1,
        },
        global: {
          plugins: [pinia],
        },
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('does not render background selector', () => {
      expect(wrapper.findAll('button').length).toBe(0)
    })
  })
})
