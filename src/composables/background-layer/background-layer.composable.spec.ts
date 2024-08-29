import { defineComponent } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { useMapStore } from '@/stores/map.store'
import { useThemeStore } from '@/stores/config.store'
import { themesApiFixture } from '@/__fixtures__/themes.api.fixture'

import useBackgroundLayer from './background-layer.composable'
import { BackgroundLayerConfig } from './background-layer.model'

describe('useBackgroundLayer', () => {
  let wrapper: VueWrapper
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    stubActions: false,
  })

  const mapStore = useMapStore(pinia)
  const themeStore = useThemeStore(pinia)
  themeStore.setThemes(themesApiFixture())
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
  })

  describe('#setBgLayer', () => {
    it('sets the bg layer in the store', () => {
      ;(wrapper as VueWrapper<typeof TestComponent>).vm.setBgLayer(123)
      expect(mapStore.setBgLayer).toHaveBeenCalled()
    })
  })

  describe('#setMapBackground', () => {
    describe('When given a blank bg layer', () => {
      it('sets the bg layer as null in the store', () => {
        ;(wrapper as VueWrapper<typeof TestComponent>).vm.setMapBackground(null)
        expect(mapStore.setBgLayer).toHaveBeenCalledWith(null)
      })
    })
  })

  describe('#defaultSelectedBgId', () => {
    describe('When asked the return the default bg', () => {
      it('returns the default bg to be selected', () => {
        expect(
          (wrapper as VueWrapper<typeof TestComponent>).vm.defaultSelectedBgId
        ).toEqual(556)
      })
    })

    describe("When the theme in store is 'tourisme'", () => {
      beforeEach(() => {
        themeStore.setTheme('tourisme')
      })

      it('returns the default bg to be selected', () => {
        expect(
          (wrapper as VueWrapper<typeof TestComponent>).vm.defaultSelectedBgId
        ).toEqual(502)
      })
    })
  })

  describe('#getBgLayersFromConfig', () => {
    it('returns the bg layers from the config', () => {
      expect(
        (wrapper as VueWrapper<typeof TestComponent>).vm
          .getBgLayersFromConfig()
          .map((bgLayer: BackgroundLayerConfig) => {
            return { name: bgLayer.icon_id, id: bgLayer.id }
          })
      ).toEqual([
        {
          name: 'route',
          id: 556,
        },
        {
          name: 'topo',
          id: 529,
        },
        {
          name: 'topo_bw',
          id: 502,
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
