import { shallowMount } from '@vue/test-utils'

import { Layer } from '../../../stores/map.store.model'
import LayerItem from './layer-item.vue'

const layerMock = {
  id: 1,
  name: 'Mocked layer',
  layers: '',
  type: 'WMS',
  imageType: 'img'
}  as Layer

const onClickInfo = vi.fn()
const onClickToggle = vi.fn()

describe('LayerItem', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(LayerItem, {
      props: {
        layer: layerMock,
        draggableClassName: 'classnamedragg',
        isOpen: false
      }
    })

    expect(wrapper.findAll('button').length).toBeGreaterThan(1)
    expect(wrapper.findAll('button[class*=classnamedragg]').length).toBe(1)
    expect(wrapper.html()).contains("Mocked layer")
    expect(wrapper.find('.lux-layer-manager-item-content').attributes('class')).contains('h-0')
  })

  it('renders properly when is open', () => {
    const wrapper = shallowMount(LayerItem, {
      props: {
        layer: layerMock,
        draggableClassName: 'classnamedragg',
        isOpen: true
      }
    })

    expect(wrapper.find('.lux-layer-manager-item-content').attributes('class')).contains('h-6')
  })

  describe('actions', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallowMount(LayerItem, {
        global: {
          mocks: { onClickInfo, onClickToggle }
        },
        props: {
          layer: layerMock,
          draggableClassName: 'classnamedragg',
          isOpen: true
        }
      })
    })

    it('triggers #onClickInfo', async () => {
      await wrapper.findAll('button')[1].trigger('click')
      expect(onClickInfo).toBeCalled()
    })

    it('triggers #onClickToggle', async () => {
      await wrapper.findAll('button')[2].trigger('click')
      expect(onClickToggle).toBeCalled()
    })

    it('emits #onClickRemove', async () => {
      await wrapper.findAll('button')[4].trigger('click')
      expect(wrapper.emitted().clickRemove).toBeTruthy()
    })

    it('triggers #onToggleVisibility emits #changeOpacity', async () => {
      await wrapper.findAll('button')[5].trigger('click')
      expect(wrapper.emitted().changeOpacity).toBeTruthy()
    })

    it('emits #onChangeOpacity', async () => {
      await wrapper.find('input').trigger('change')
      expect(wrapper.emitted().changeOpacity).toBeTruthy()
    })
  })
})
