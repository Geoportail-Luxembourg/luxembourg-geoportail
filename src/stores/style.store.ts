import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import type { LayerId } from '@/stores/map.store.model'
import {
  IMvtConfig,
  SimpleStyle,
  StyleItem,
  VectorSourceDict,
  VectorStyleDict,
  StyleSpecification,
} from '@/composables/mvt-styles/mvt-styles.model'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

export const useStyleStore = defineStore(
  'style',
  () => {
    const styleService = useMvtStyles()
    const bgStyle: ShallowRef<StyleItem[] | undefined | null> = shallowRef()
    const bgVectorSources: ShallowRef<VectorSourceDict> = shallowRef(new Map())
    const bgVectorBaseStyles: ShallowRef<VectorStyleDict> = shallowRef(
      new Map()
    )
    const isExpertStyleActive: ShallowRef<boolean> = shallowRef(false)
    const appliedStyle: ShallowRef<StyleSpecification | undefined> =
      shallowRef()

    const promises: Promise<{ id: LayerId; config: IMvtConfig }>[] = []
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

    function removeBaseStyle(id: LayerId) {
      const styleDict: VectorStyleDict = new Map()
      bgVectorBaseStyles.value.forEach((style, key) => {
        if (key !== id) styleDict.set(key, style)
      })
      bgVectorBaseStyles.value = styleDict
    }

    function setBaseStyle(id: LayerId, baseStyle: StyleSpecification) {
      const styleDict: VectorStyleDict = new Map()
      bgVectorBaseStyles.value.forEach((style, key) =>
        styleDict.set(key, style)
      )
      styleDict.set(id, baseStyle)
      bgVectorBaseStyles.value = styleDict
    }

    function setSimpleStyle(simpleStyle: SimpleStyle | null) {
      bgStyle.value = styleService.getRoadStyleFromSimpleStyle(simpleStyle)
      disableExpertStyle()
    }

    function setStyle(style: StyleItem[] | null) {
      bgStyle.value = style
      disableExpertStyle()
    }

    function disableExpertStyle() {
      isExpertStyleActive.value = false
    }

    function enableExpertStyle() {
      isExpertStyleActive.value = true
    }

    return {
      bgStyle,
      bgVectorSources,
      bgVectorBaseStyles,
      isExpertStyleActive,
      appliedStyle,
      removeBaseStyle,
      setBaseStyle,
      setSimpleStyle,
      setStyle,
      disableExpertStyle,
      enableExpertStyle,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
