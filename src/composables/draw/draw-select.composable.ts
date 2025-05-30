import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { getUid } from 'ol/util'
import { useDrawStore } from '@/stores/draw.store'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

export default function useDrawSelect() {
  const map = useMap().getOlMap()
  const appStore = useAppStore()
  const {
    drawStateActive,
    editStateActive,
    activeFeatureId,
    editingFeatureId,
    drawnFeatures,
  } = storeToRefs(useDrawStore())
  const { layersOpen, myMapsOpen } = storeToRefs(appStore)
  const { layers } = storeToRefs(useMapStore())

  listen(map, 'click', event => handleClick(event))

  watch(activeFeatureId, (newId, oldId) => {
    if (editingFeatureId.value !== newId) {
      editingFeatureId.value = undefined
    }
    drawnFeatures.value
      .filter(f => getUid(f) === oldId)
      .forEach(oldFeature => {
        oldFeature.selected = false
        oldFeature.changed()
      })
    drawnFeatures.value
      .filter(f => getUid(f) === newId)
      .forEach(newFeature => {
        newFeature.selected = true
        newFeature.editable = false
        newFeature.changed()
      })
  })

  const handleClick = function (event: any) {
    const pixel = event.pixel

    if (
      drawStateActive.value !== undefined ||
      editStateActive.value !== undefined
    ) {
      return true
    }
    activeFeatureId.value = undefined
    const featureFound = map.forEachFeatureAtPixel(
      pixel,
      feature => {
        const featureMatch = drawnFeatures.value.includes(<DrawnFeature>feature)
        if (
          (featureMatch &&
            (layersOpen.value || myMapsOpen.value) &&
            drawnFeatures.value.length > 0) ||
          (featureMatch && layers.value.length === 0)
        ) {
          appStore.toggleMyMapsOpen(true)
          activeFeatureId.value = getUid(feature)

          return true
        }
      },
      {
        hitTolerance: 5,
      }
    )

    if (featureFound) {
      return false
    }
  }
}
