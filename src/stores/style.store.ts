import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'

import useMvtStyles from '@/composables/mvt-styles/mvt-styles.composable'
import {
  IMvtStyle,
  SimpleRoadStyle,
  StyleItem,
} from '@/composables/mvt-styles/mvt-styles.model'
import { bgConfigFixture } from '@/__fixtures__/background.config.fixture'

export const useStyleStore = defineStore(
  'style',
  () => {
    const styleService = useMvtStyles()
    const bgStyle: ShallowRef<StyleItem[] | undefined> = shallowRef()
    const bgStyles: ShallowRef<{ [id: string]: IMvtStyle }> = shallowRef({})

    const promises: Promise<{ id: string; style: IMvtStyle }>[] = []
    bgConfigFixture().bg_layers.forEach(bgLayer => {
      if (bgLayer.style_id) {
        const conf = styleService.setConfigForLayer(
          bgLayer.icon_id,
          bgLayer.style_id
        )
        if (conf) {
          promises.push(
            conf.then(c => {
              return { id: bgLayer.id.toString(), style: c as IMvtStyle }
            })
          )
        }
      }
    })
    Promise.all(promises).then(
      (styleConfigs: { id: string; style: IMvtStyle }[]) => {
        console.log('set styles')
        const styleDict: { [id: string]: IMvtStyle } = {}
        styleConfigs.forEach(c => (styleDict[c.id] = c.style))
        bgStyles.value = styleDict
      }
    )
    // automatic style change for test purpose
    const changeStylePromise = new Promise(r => setTimeout(r, 5000))
    changeStylePromise.then(() => {
      bgStyle.value = styleService.getStyleFromId('556')
    })

    function setSimpleStyle(simpleStyle: SimpleRoadStyle | null) {
      bgStyle.value = styleService.getRoadStyleFromSimpleStyle(simpleStyle)
    }

    return { bgStyle, bgStyles, setSimpleStyle }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
