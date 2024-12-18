import {
  MaybeRefOrGetter,
  onMounted,
  onUnmounted,
  ref,
  ShallowRef,
  shallowRef,
  toValue,
  watch,
} from 'vue'
import { storeToRefs } from 'pinia'
import { Map, MapBrowserEvent } from 'ol'
import { EventsKey, listen, unlistenByKey } from 'ol/events'
import { LineString, Point } from 'ol/geom'
import GeometryLayout from 'ol/geom/GeometryLayout'
import { transform } from 'ol/proj'
import { Coordinate } from 'ol/coordinate'

import { ProfileData } from '@/components/common/graph/elevation-profile'
import useOpenLayers from '@/composables/map/ol.composable'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import { useProfilePositionStore } from '@/stores/profile-position.store'
import { LayerFeature } from '@/stores/map.store.model'
import { useDrawStore } from '@/stores/draw.store'
import { PositionVectorLayer } from '@/services/ol-layer/ol-layer-feature-position.helper'
import { throttle } from '@/services/utils'

let overlay: PositionVectorLayer | undefined // Shared overlay between all profile position markers

/**
 * Create a marker on the map that will follow the profile position.
 *
 * NB.If edition mode is 'editLine', the marker is hidden because there is already a default blue marker
 * when modifying feature is active.
 * @param dataset Profile data used to construct and handle the positioning (can be set afterwards by setting directly useProfilePosition().profileData)
 * @param activatePositioning Activate or deactivate positioning (show or hide geomarker), in some case, we need to hide temporarily the geomarker (because the profile line is hidden, or because user is starting a new drawing, etc...)
 * @returns
 */
export default function useProfilePosition(
  dataset?: ProfileData,
  activatePositioning: MaybeRefOrGetter<boolean | undefined> = true
) {
  const openLayers = useOpenLayers()
  const profilePositionStore = useProfilePositionStore()
  const drawStore = useDrawStore()
  const { drawStateActive, editStateActive } = storeToRefs(drawStore)
  const { x, y } = storeToRefs(profilePositionStore)
  const profileData = shallowRef(dataset)
  const highlightDistance: ShallowRef<number | undefined> =
    shallowRef(undefined) // The value to higlight on the graph
  const displayGeoMarker = ref(true) // deactivate geomarker when mode edition
  const virtualLineProfile = new LineString([0, 0], GeometryLayout.XYM) // don't add to the map, it is used to compute the distance between the user cursor and the feature (represented by the virtual line)
  const activePositioning = ref(true)
  const throttledPointerMove = throttle(evt => onPointerMove(evt), 15) // Keep fn def as const for unlisten

  let map: Map
  let listenerIdPointerMove: EventsKey | undefined

  onMounted(() => {
    map = useMap().getOlMap()
    createLayerFeaturePosition()
    attachPointerMove()
  })

  onUnmounted(() => detachPointerMove())

  watch(
    () => toValue(activatePositioning),
    active => {
      activePositioning.value = active ?? true

      if (!active) {
        overlay?.removeGeoMarker()
      }
    }
  )

  watch(profileData, profileData => {
    if (profileData) {
      constructProfileLine(profileData)
    }
  })

  watch([x, y], ([x, y]) => {
    if (
      activePositioning.value &&
      !drawStateActive.value &&
      x &&
      y &&
      displayGeoMarker.value
    ) {
      overlay?.moveGeoMarker(x, y)
    } else {
      overlay?.removeGeoMarker()
    }
  })

  function createLayerFeaturePosition() {
    if (overlay) {
      return
    }

    const layerSpec: LayerFeature = {
      id: 'feat-position',
      type: 'position',
    }

    overlay = <PositionVectorLayer>openLayers.addFeatureLayer(map, layerSpec)
  }

  /**
   * Construct the profile line as an Ol geom (but don't add to the map)
   * allowing the activation of the graph's highlight if the cursor is close enough
   * to the profile line when hover on the map (@see onPointerMove())
   * @param profileData The profile data set
   */
  function constructProfileLine(profileData: ProfileData) {
    const lineCoord = profileData?.map(row => {
      const coords = transform(
        <Coordinate>[row.x, row.y],
        PROJECTION_LUX,
        map.getView().getProjection()
      )
      return new Point(coords).getCoordinates().concat(row.dist)
    })

    virtualLineProfile.setCoordinates(lineCoord)
  }

  /**
   * Create listener on 'pointermove' event on map if not already exists
   */
  function attachPointerMove() {
    if (listenerIdPointerMove === undefined) {
      listenerIdPointerMove = listen(map, 'pointermove', throttledPointerMove)
    }
  }

  /**
   * Unlisten 'pointermove' event on map and remove geomarker
   */
  function detachPointerMove() {
    if (listenerIdPointerMove) {
      unlistenByKey(listenerIdPointerMove)
      listenerIdPointerMove = undefined

      overlay?.removeGeoMarker()
    }
  }

  /**
   * When pointer on map moves, check distance to current drawing/measure feature
   * if close enough, update position cursor to highlight the profile.
   *
   * NB. don't show the marker if hovering the feature when drawing is active
   * (there is already a cursor when modifying the line)
   * @param evt
   * @returns
   */
  function onPointerMove(evt: MapBrowserEvent<MouseEvent>) {
    if (evt.dragging) {
      return
    }

    // Ignore pointerMove for profile if user is drawing a new geom
    if (drawStateActive.value || !activePositioning.value) {
      return
    }

    let newXGeomarker: number | undefined
    let newYGeomarker: number | undefined

    const coordinate = map.getEventCoordinate(evt.originalEvent)
    const closestPoint = virtualLineProfile.getClosestPoint(coordinate)

    // Compute distance to line in pixels
    const dx = closestPoint[0] - coordinate[0]
    const dy = closestPoint[1] - coordinate[1]
    const dist = dx * dx + dy * dy
    const res = map.getView().getResolution()!
    const pixelDist = dist / (res * res)

    if (pixelDist < 64) {
      // Cursor is close enough: display our white marker (if not modifying line mode, otherwises, there is the natif ol cursor)
      highlightDistance.value = closestPoint[2]
      displayGeoMarker.value = editStateActive.value !== 'editLine'
      newXGeomarker = closestPoint[0]
      newYGeomarker = closestPoint[1]
    } else {
      highlightDistance.value = -1
      displayGeoMarker.value = true // true => to restore default, this will display the marker if it is a hover on the chart
    }

    if (newXGeomarker !== undefined && newYGeomarker !== undefined) {
      // /!\ Don't set position if both X and Y undefined, because it may be undefined for a feature,
      // but not for another one (that may overlaps)
      profilePositionStore.setPosition(newXGeomarker, newYGeomarker)
    }
  }

  return {
    profileData,
    highlightDistance,
  }
}
