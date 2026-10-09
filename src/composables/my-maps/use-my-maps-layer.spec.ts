import { setActivePinia, createPinia } from 'pinia'

import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { LayerTypeValue } from '@/composables/themes/themes.model'

import useMyMapsLayer from './use-my-maps-layer'

const uuid = 'a1b2-c3d4'
const layerId = `mymaps||${uuid}`

describe('useMyMapsLayer', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('#toggleMyMapsLayer', () => {
    it('adds the layer and opens the my layers tab when not loaded', () => {
      const mapStore = useMapStore()
      const appStore = useAppStore()
      const { toggleMyMapsLayer } = useMyMapsLayer()

      toggleMyMapsLayer(uuid, 'my map title')

      expect(mapStore.layers.length).toBe(1)
      expect(mapStore.layers[0]).toMatchObject({
        id: layerId,
        name: 'my map title',
        type: LayerTypeValue.MY_MAPS,
      })
      expect(appStore.myLayersTabOpen).toBe(true)
    })

    it('removes the layer when already loaded', () => {
      const mapStore = useMapStore()
      const { toggleMyMapsLayer } = useMyMapsLayer()

      toggleMyMapsLayer(uuid, 'my map title')
      toggleMyMapsLayer(uuid, 'my map title')

      expect(mapStore.layers.length).toBe(0)
      expect(mapStore.hasLayer(layerId)).toBe(false)
    })

    it('toggles layers independently per uuid', () => {
      const mapStore = useMapStore()
      const { toggleMyMapsLayer } = useMyMapsLayer()

      toggleMyMapsLayer(uuid, 'map 1')
      toggleMyMapsLayer('other-uuid', 'map 2')
      toggleMyMapsLayer(uuid, 'map 1')

      expect(mapStore.layers.length).toBe(1)
      expect(mapStore.layers[0].id).toBe('mymaps||other-uuid')
    })
  })
})
