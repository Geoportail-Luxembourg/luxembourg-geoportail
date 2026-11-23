import { MaybeRefOrGetter, onMounted, toValue, watch } from 'vue'
import { storeToRefs } from 'pinia'

import useOpenLayers from '@/composables/map/ol.composable'
import useMap from '@/composables/map/map.composable'
import { useProfilePositionStore } from '@/stores/profile-position.store'
import { LayerFeature } from '@/stores/map.store.model'
import { useDrawStore } from '@/stores/draw.store'
import { PositionVectorLayer } from '@/services/ol-layer/ol-layer-feature-position.helper'

export const LAYER_POSITION_ID = 'lux-feat-position'

let overlay: PositionVectorLayer | undefined // Shared overlay between all profile position markers

/**
 * Show a marker on the map at the profile position of the store. The
 * pointer/chart interaction setting that position is the templates package's
 * `useProfileMapHover`.
 *
 * NB. The marker is hidden while drawing, and while editing a line (OL shows its own cursor there).
 * @param activatePositioning Activate or deactivate positioning (show or hide geomarker), in some case, we need to hide temporarily the geomarker (because the profile line is hidden, or because user is starting a new drawing, etc...)
 */
export default function useProfilePosition(
  activatePositioning: MaybeRefOrGetter<boolean | undefined> = true
) {
  const openLayers = useOpenLayers()
  const { drawStateActive, editStateActive } = storeToRefs(useDrawStore())
  const { x, y } = storeToRefs(useProfilePositionStore())

  onMounted(() => {
    if (!overlay) {
      const layerSpec: LayerFeature = {
        id: LAYER_POSITION_ID,
        type: 'position',
      }
      overlay = <PositionVectorLayer>(
        openLayers.addFeatureLayer(useMap().getOlMap(), layerSpec)
      )
    }
  })

  watch(
    () => toValue(activatePositioning),
    active => {
      if (!active) {
        overlay?.removeGeoMarker()
      }
    }
  )

  // sync: a profile clears the position as it unmounts, when pre-flush jobs are dropped
  watch(
    [x, y],
    ([x, y]) => {
      if (
        (toValue(activatePositioning) ?? true) &&
        !drawStateActive.value &&
        editStateActive.value !== 'editLine' &&
        x &&
        y
      ) {
        overlay?.moveGeoMarker(x, y)
      } else {
        overlay?.removeGeoMarker()
      }
    },
    { flush: 'sync' }
  )
}
