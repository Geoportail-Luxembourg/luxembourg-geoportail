import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'

import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import {
  IMvtConfig,
  SimpleStyle,
  StyleItem,
  VectorSourceDict,
} from '@/composables/mvt-styles/mvt-styles.model'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

export const useStyleStore = defineStore(
  'style',
  () => {
    const styleService = useMvtStyles()
    const bgStyle: ShallowRef<StyleItem[] | undefined | null> = shallowRef()
    const bgVectorSources: ShallowRef<VectorSourceDict> = shallowRef(new Map())

    const promises: Promise<{ id: string; config: IMvtConfig }>[] = []
    bgConfigFixture().bg_layers.forEach(bgLayer => {
      if (bgLayer.vector_id) {
        const conf = styleService.setConfigForLayer(
          bgLayer.icon_id,
          bgLayer.vector_id
        )
        promises.push(
          conf.then(c => {
            return { id: bgLayer.id, config: c as IMvtConfig }
          })
        )
      }
    })
    Promise.all(promises).then(styleConfigs => {
      const vectorDict: VectorSourceDict = new Map()
      styleConfigs.forEach(c => vectorDict.set(c.id, c.config))
      bgVectorSources.value = vectorDict
    })

    function setSimpleStyle(simpleStyle: SimpleStyle | null) {
      bgStyle.value = styleService.getRoadStyleFromSimpleStyle(simpleStyle)
    }

    function setStyle(style: StyleItem[] | null) {
      bgStyle.value = style
    }

    return { bgStyle, bgVectorSources, setSimpleStyle, setStyle }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
