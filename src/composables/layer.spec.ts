import { defineComponent } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import { Layer } from '@/stores/map.store.model'
import { LayerTypeValue } from '@/composables/themes/themes.model'
import { IBackgroundLayer } from '@/composables/background-layer/background-layer.model'

import {
  useLayer,
  layerSupportsMetadata,
  layerSupportsCatalogLocate,
} from './layer'

const wmtsLayer: Layer = {
  id: 10,
  name: 'layer10',
  layers: '',
  type: 'WMTS',
  imageType: '',
}

const myMapsLayer: Layer = {
  id: 'mymaps||a1b2-c3d4',
  name: 'my map',
  layers: '',
  type: LayerTypeValue.MY_MAPS,
  imageType: '',
}

const backgroundLayer: IBackgroundLayer = {
  name: 'blank',
  id: 0,
}

describe('layer', () => {
  describe('capability helpers', () => {
    it('supports metadata for a regular layer', () => {
      expect(layerSupportsMetadata(wmtsLayer)).toBe(true)
    })

    it('supports metadata for a background layer without type', () => {
      expect(layerSupportsMetadata(backgroundLayer)).toBe(true)
    })

    it('does not support metadata for a mymaps layer', () => {
      expect(layerSupportsMetadata(myMapsLayer)).toBe(false)
    })

    it('supports catalog locate for a regular layer', () => {
      expect(layerSupportsCatalogLocate(wmtsLayer)).toBe(true)
    })

    it('supports catalog locate for a background layer without type', () => {
      expect(layerSupportsCatalogLocate(backgroundLayer)).toBe(true)
    })

    it('does not support catalog locate for a mymaps layer', () => {
      expect(layerSupportsCatalogLocate(myMapsLayer)).toBe(false)
    })
  })

  describe('#useLayer', () => {
    let wrapper: VueWrapper

    function mountWithLayer(layer: Layer | IBackgroundLayer) {
      const emit = vi.fn()
      const TestComponent = defineComponent({
        template: '<div></div>',
        setup() {
          return {
            ...useLayer(layer, { emit } as never),
          }
        },
      })
      return mount(TestComponent, {
        global: {
          plugins: [createTestingPinia({ createSpy: vi.fn })],
        },
      })
    }

    it('exposes supportsMetadata matching the layer type', () => {
      wrapper = mountWithLayer(myMapsLayer)
      expect(
        (wrapper.vm as unknown as { supportsMetadata: boolean })
          .supportsMetadata
      ).toBe(false)
    })

    it('exposes supportsCatalogLocate matching the layer type', () => {
      wrapper = mountWithLayer(wmtsLayer)
      expect(
        (wrapper.vm as unknown as { supportsCatalogLocate: boolean })
          .supportsCatalogLocate
      ).toBe(true)
    })

    it('emits clickInfo on onClickInfo', () => {
      const emit = vi.fn()
      const TestComponent = defineComponent({
        template: '<div></div>',
        setup() {
          return {
            ...useLayer(wmtsLayer, { emit } as never),
          }
        },
      })
      wrapper = mount(TestComponent, {
        global: {
          plugins: [createTestingPinia({ createSpy: vi.fn })],
        },
      })
      ;(wrapper.vm as unknown as { onClickInfo: () => void }).onClickInfo()
      expect(emit).toHaveBeenCalledWith('clickInfo', wmtsLayer)
    })
  })
})
