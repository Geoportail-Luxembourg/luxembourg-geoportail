import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import * as olArray from 'ol/array.js'
import { useDrawStore } from '@/stores/draw.store'
import { useAppStore } from '@/stores/app.store'

export default function useDrawSelect() {
  const map = useMap().getOlMap()
  const appStore = useAppStore()
  const { activeFeatureId, drawnFeatures, drawnOlFeatures } = storeToRefs(
    useDrawStore()
  )

  listen(map, 'click', event => handleClick(event))

  watch(activeFeatureId, (newId, oldId) => {
    const oldFeature = drawnFeatures.value.find(
      f => f.olFeature.ol_uid == oldId
    )
    oldFeature?.olFeature.set('__selected__', false)
    const newFeature = drawnFeatures.value.find(
      f => f.olFeature.ol_uid == newId
    )
    newFeature?.olFeature.set('__selected__', true)
  })

  const handleClick = function (event: any) {
    const pixel = event.pixel

    const feature = map.forEachFeatureAtPixel(
      pixel,
      feature => {
        const featureMatch = olArray.includes(drawnOlFeatures.value, feature)
        if (featureMatch) {
          appStore.toggleMyMapsOpen(true)
          activeFeatureId.value = (feature as any).ol_uid

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
