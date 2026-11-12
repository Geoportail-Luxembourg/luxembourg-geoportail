import { storeToRefs } from 'pinia'
import { MapBrowserEvent } from 'ol'
import { listen, unlistenByKey } from 'ol/events'
import { getPointResolution, toLonLat, transform } from 'ol/proj'
import type { LuxTplProfileMapAdapter } from '@geoportallux/feature-info-templates'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import useProfilePosition from '@/composables/map/profile-position.composable'
import { useProfilePositionStore } from '@/stores/profile-position.store'
import { useDrawStore } from '@/stores/draw.store'
import { throttle } from '@/services/utils'

/**
 * The 2D map's part of the templates' elevation profile. Must be called from a
 * component `setup()`.
 */
export default function useLuxTplProfileMapAdapter(): LuxTplProfileMapAdapter {
  useProfilePosition()
  const map = useMap().getOlMap()
  const { setPosition } = useProfilePositionStore()
  const { drawStateActive } = storeToRefs(useDrawStore())

  return {
    setPosition: xy =>
      xy
        ? setPosition(
            ...(transform(
              xy,
              PROJECTION_LUX,
              map.getView().getProjection()
            ) as [number, number])
          )
        : setPosition(),
    onPointerMove(cb) {
      const key = listen(
        map,
        'pointermove',
        throttle((evt: MapBrowserEvent<PointerEvent>) => {
          if (evt.dragging || drawStateActive.value) {
            return
          }
          const view = map.getView()
          cb(
            transform(evt.coordinate, view.getProjection(), PROJECTION_LUX),
            getPointResolution(
              view.getProjection(),
              view.getResolution()!,
              evt.coordinate
            )
          )
        }, 15)
      )
      return () => unlistenByKey(key)
    },
    toLonLat: xy => toLonLat(xy, PROJECTION_LUX),
  }
}
