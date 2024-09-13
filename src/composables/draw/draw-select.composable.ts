import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import * as olArray from 'ol/array.js'
import { getUid } from 'ol/util'
import { useDrawStore } from '@/stores/draw.store'
import { useAppStore } from '@/stores/app.store'

export default function useDrawSelect() {
  const map = useMap().getOlMap()
  const appStore = useAppStore()
  const { activeFeatureId, editingFeatureId, drawnFeatures } = storeToRefs(
    useDrawStore()
  )

  listen(map, 'click', event => handleClick(event))

  watch(activeFeatureId, (newId, oldId) => {
    drawnFeatures.value
      .filter(f => getUid(f) == oldId)
      .forEach(oldFeature => {
        oldFeature.selected = false
        oldFeature.changed()
      })
    drawnFeatures.value
      .filter(f => getUid(f) == newId)
      .forEach(newFeature => {
        newFeature.selected = true
        newFeature.changed()
      })
  })

  const handleClick = function (event: any) {
    const pixel = event.pixel

    const feature = map.forEachFeatureAtPixel(
      pixel,
      feature => {
        const featureMatch = olArray.includes(drawnFeatures.value, feature)
        if (featureMatch) {
          appStore.toggleMyMapsOpen(true)
          activeFeatureId.value = getUid(feature)
          editingFeatureId.value = undefined

          return
        }
      },
      {
        hitTolerance: 5,
      }
    )

    if (feature) {
      return
    }
  }
}
