import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, shallowRef, ShallowRef } from 'vue'

import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import { IMvtStyle } from '@/composables/mvt-styles/mvt-styles.model'
import { useThemeStore } from '@/stores/config.store'
import { Layer } from './map.store.model'
import { bgConfig } from '@/__fixtures__/background.config.fixture'

export const useStyleStore = defineStore(
  'style',
  () => {
    const styleService = useMvtStyles()
    const { bgLayers } = storeToRefs(useThemeStore())
    const style: ShallowRef<IMvtStyle[]> = shallowRef([])

    const styledBgLayers = computed(() => {
      const filteredLayers = bgLayers.value.map(bgl => {
        const layer: Layer = bgl as Layer
        const curStyle = style.value.find(st => st.label == layer.name)
        if (curStyle) {
          layer.type = 'BG MVT'
          layer.mvtData = curStyle
        }
        return layer
      })
      return filteredLayers || []
    })

    const layerLabelList = bgConfig.vector_layers

    const promises: Promise<IMvtStyle>[] = []
    layerLabelList.forEach(label => {
      const conf = styleService.setConfigForLayer(label)
      if (conf) {
        promises.push(conf)
      }
    })
    Promise.all(promises).then((styleConfigs: IMvtStyle[]) => {
      style.value = styleConfigs
    })

    return { style, styledBgLayers }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
