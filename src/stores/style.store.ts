import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'

import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import {
  IMvtConfig,
  SimpleRoadStyle,
  StyleItem,
  VectorSourceDict,
} from '@/composables/mvt-styles/mvt-styles.model'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

export const useStyleStore = defineStore(
  'style',
  () => {
    const styleService = useMvtStyles()
    const bgStyle: ShallowRef<StyleItem[] | undefined> = shallowRef()
    const bgVectorSources: ShallowRef<VectorSourceDict> = shallowRef({})

    const promises: Promise<{ id: string; config: IMvtConfig }>[] = []
    bgConfigFixture().bg_layers.forEach(bgLayer => {
      if (bgLayer.vector_id) {
        const conf = styleService.setConfigForLayer(
          bgLayer.icon_id,
          bgLayer.vector_id
        )
        promises.push(
          conf.then(c => {
            return { id: bgLayer.id.toString(), config: c as IMvtConfig }
          })
        )
      }
    })
    Promise.all(promises).then(styleConfigs => {
      const vectorDict: VectorSourceDict = {}
      styleConfigs.forEach(c => (vectorDict[c.id] = c.config))
      bgVectorSources.value = vectorDict
    })

    function setSimpleStyle(simpleStyle: SimpleRoadStyle | null) {
      bgStyle.value = styleService.getRoadStyleFromSimpleStyle(simpleStyle)
    }

    return { bgStyle, bgVectorSources, setSimpleStyle }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
