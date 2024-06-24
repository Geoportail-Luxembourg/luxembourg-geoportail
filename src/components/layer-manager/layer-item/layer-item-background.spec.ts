import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { useAppStore } from '@/stores/app.store'
import { Layer } from '@/stores/map.store.model'
import LayerItemBackground from './layer-item-background.vue'

const bgLayerMock = {
  id: 1,
  name: 'Mocked bg layer',
  layers: '',
  type: 'WMS',
  imageType: 'img',
} as Layer

const onClickInfo = vi.fn()

describe('LayerItemBackground', () => {
  createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      map: {
        layers: [],
        bgLayer: null,
      },
      app: {
        layersOpen: false,
        myLayersTabOpen: false,
        themeGridOpen: false,
        mapId: undefined,
        remoteLayersOpen: undefined,
        styleEditorOpen: false,
        drawToolbarOpen: false,
        isOffLine: false,
      },
    },
  })

  it('renders properly', () => {
    const wrapper = shallowMount(LayerItemBackground, {
      props: {
        showEditButton: false,
        layer: bgLayerMock,
      },
    })

    expect(wrapper.findAll('button').length).toBe(1)
    expect(wrapper.html()).contains('Mocked bg layer')
  })

  it('renders properly when is editable', () => {
    const wrapper = shallowMount(LayerItemBackground, {
      props: {
        showEditButton: true,
        layer: bgLayerMock,
      },
    })

    expect(wrapper.findAll('button').length).toBe(2)
  })

  describe('actions', () => {
    const wrapper = shallowMount(LayerItemBackground, {
      global: {
        mocks: { onClickInfo },
      },
      props: {
        showEditButton: true,
        layer: bgLayerMock,
      },
    })

    it('triggers #onClickInfo', async () => {
      await wrapper.findAll('button')[0].trigger('click')
      expect(onClickInfo).toBeCalled()
    })

    it('emits #clickEdit', async () => {
      await wrapper.findAll('button')[1].trigger('click')
      expect(wrapper.emitted().clickEdit).toBeTruthy()
    })
  })

  describe('When app is offline', () => {
    it('hides info button', () => {
      const store = useAppStore()
      const wrapper = shallowMount(LayerItemBackground, {
        props: {
          showEditButton: false,
          layer: bgLayerMock,
        },
      })

      store.isOffLine = true

      expect(wrapper.vm.showInfoButton).toBe(false)
    })
  })
})
