import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'
import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import type { LayerId } from '@/stores/map.store.model'
import {
  SimpleStyle,
  StyleItem,
  VectorSourceDict,
  VectorStyleDict,
  StyleSpecification,
} from '@/composables/mvt-styles/mvt-styles.model'

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
    const styleSerial: ShallowRef<String | null> = shallowRef(null)
    const appliedStyle: ShallowRef<StyleSpecification | undefined> =
      shallowRef()

    function setBgVectorSources(vectorDict: VectorSourceDict) {
      bgVectorSources.value = vectorDict
    }

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
      setBgVectorSources,
      setSimpleStyle,
      setStyle,
      disableExpertStyle,
      enableExpertStyle,
      styleSerial,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
