import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { listen } from 'ol/events'

import useMap from '@/composables/map/map.composable'
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

  watch(
    [activeFeatureId, editingFeatureId],
    ([newActiveId, newEditId], [oldActiveId, oldEditId]) => {
      if (oldEditId !== newEditId && newEditId !== newActiveId) {
        editingFeatureId.value = undefined
      }

      drawnFeatures.value
        .filter(f => f.id === oldActiveId)
        .forEach(oldFeature => {
          oldFeature.selected = false
          oldFeature.editable = false
          oldFeature.changed()
        })

      drawnFeatures.value
        .filter(f => f.id === newActiveId)
        .forEach(newFeature => {
          newFeature.selected = true
          newFeature.editable = !!newEditId
          newFeature.changed()

          console.log('newFeature.editable = ', newFeature.editable)
        })
    }
  )

  const handleClick = function (event: any) {
    const pixel = event.pixel

    if (
      drawStateActive.value !== undefined ||
      editStateActive.value !== undefined
    ) {
      return true
    }

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
          activeFeatureId.value = (<DrawnFeature>feature).id

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
