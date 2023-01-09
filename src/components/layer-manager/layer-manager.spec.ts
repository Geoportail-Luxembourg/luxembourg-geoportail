import { createTestingPinia } from '@pinia/testing'
import { mount, shallowMount, VueWrapper } from '@vue/test-utils'

import { Layer } from '@/stores/map.store.model'
import { useMapStore } from '@/stores/map.store'

import LayerManager from './layer-manager.vue'
import LayerItem from './layer-item/layer-item.vue'
import LayerItemBackground from './layer-item/layer-item-background.vue'

const layerMock1 = {
  id: 1,
  name: 'Mocked layer',
  layers: '',
  type: 'WMS',
  imageType: 'img',
} as Layer

const layerMock2 = {
  id: 2,
  name: 'Mocked layer 2',
  layers: '',
  type: 'WMS',
  imageType: 'img',
} as Layer

const bgLayerMock = {
  id: 1,
  name: 'Mocked bg layer',
  layers: '',
  type: 'WMS',
  imageType: 'img',
} as Layer

describe('LayerManager', () => {
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      map: {
        layers: [layerMock1, layerMock2],
        bgLayer: bgLayerMock,
      },
    },
  })
  const mapStore = useMapStore()

  it('renders properly', () => {
    const wrapper = shallowMount(LayerManager, {
      global: {
        plugins: [createTestingPinia({})],
      },
    })

    expect(wrapper.findComponent(LayerItemBackground).exists()).toBe(true)
  })

  describe('renders layer list', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(LayerManager, {
        global: {
          plugins: [pinia],
        },
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('renders 2 layers', () => {
      expect(wrapper.findAllComponents(LayerItem).length).toBe(2)
      expect(wrapper.findComponent(LayerItemBackground).exists()).toBe(true)
    })

    it('layers order is reversed for display', () => {
      expect(wrapper.findAll('li')[0].attributes('id')).toBe('2')
      expect(wrapper.findAll('li')[1].attributes('id')).toBe('1')
      expect(wrapper.findComponent(LayerItemBackground).exists()).toBe(true)
    })

    describe('actions', () => {
      it('#toggleAccordionItem', async () => {
        await wrapper.vm.toggleAccordionItem(layerMock1)
        await wrapper.vm.$nextTick() // "Wait for the DOM to update before continuing the test"

        expect(wrapper.findAllComponents(LayerItem)[0].props('isOpen')).toBe(
          false
        )
        expect(wrapper.findAllComponents(LayerItem)[1].props('isOpen')).toBe(
          true
        )
      })

      it('#removeLayer', async () => {
        await wrapper.vm.removeLayer(layerMock1)
        await wrapper.vm.$nextTick() // "Wait for the DOM to update before continuing the test"
        expect(mapStore.removeLayers).toHaveBeenCalledTimes(1)
      })

      it('#changeOpacityLayer', async () => {
        await wrapper.vm.changeOpacityLayer(layerMock1, 20)
        expect(mapStore.setLayerOpacity).toHaveBeenLastCalledWith(
          layerMock1.id,
          20 / 100
        )
      })

      it('#sortMethod', async () => {
        await wrapper.vm.sortMethod({ to: { children: [] } })
        expect(mapStore.reorderLayers).toHaveBeenCalledTimes(1)
      })
    })
  })
})
