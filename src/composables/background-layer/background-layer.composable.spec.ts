import { describe } from 'vitest'
import { defineComponent } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'

import useBackgroundLayer from './background-layer.composable'

describe('useBackgroundLayer', () => {
  let wrapper: VueWrapper
  let wrapperVM: any
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    stubActions: false,
  })

  const mapStore = useMapStore(pinia)
  const themeStore = useThemeStore(pinia)

  const TestComponent = defineComponent({
    template: '<div>My test component</div>',
    setup() {
      return {
        // Call the composable and expose all return values into our
        // component instance so we can access them with wrapper.vm
        ...useBackgroundLayer(),
      }
    },
  })

  beforeEach(() => {
    wrapper = mount(TestComponent, {
      global: {
        plugins: [pinia],
      },
    })
    wrapperVM = wrapper.vm
  })

  describe('#setBgLayer', () => {
    it('sets the bg layer in the store', () => {
      wrapperVM.setBgLayer(123)
      expect(mapStore.setBgLayer).toHaveBeenCalled()
    })
  })

  describe('#setMapBackground', () => {
    describe('When given a blank bg layer', () => {
      it('sets the bg layer as null in the store', () => {
        wrapperVM.setMapBackground(null)
        expect(mapStore.setBgLayer).toHaveBeenCalledWith(null)
      })
    })
  })

  describe('#defaultSelectedBgId', () => {
    describe('When asked the return the default bg', () => {
      it('returns the default bg to be selected', () => {
        expect(wrapperVM.defaultSelectedBgId).toEqual(556)
      })
    })

    describe("When the theme in store is 'tourisme'", () => {
      beforeEach(() => {
        themeStore.setTheme('tourisme')
      })

      it('returns the default bg to be selected', () => {
        expect(wrapperVM.defaultSelectedBgId).toEqual(502)
      })
    })
  })

  describe('#getBgLayersFromConfig', () => {
    it('returns the bg layers from the config', () => {
      expect(wrapperVM.getBgLayersFromConfig()).toEqual([
        {
          name: 'route',
          id: 556,
        },
        {
          name: 'topo_bw',
          id: 502,
        },
        {
          name: 'topo',
          id: 529,
        },
        {
          name: 'ortho',
          id: 530,
        },
        {
          name: 'hybrid',
          id: 501,
        },
        {
          name: 'blank',
          id: 0,
        },
      ])
    })
  })
})
