import { onMounted, onUnmounted, ref, ShallowRef, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Map, MapBrowserEvent } from 'ol'
import { EventsKey, listen, ListenerFunction, unlistenByKey } from 'ol/events'
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

let overlay: PositionVectorLayer | undefined // Shared overlay between all profile position markers

/**
 * Create a marker on the map that will follow the profile position.
 *
 * NB.If edition mode is 'editLine', the marker is hidden because there is already a default blue marker
 * when modifying feature is active.
 * @param dataset
 * @returns
 */
export default function useProfilePosition(dataset?: ProfileData) {
  const openLayers = useOpenLayers()
  const profilePositionStore = useProfilePositionStore()
  const drawStore = useDrawStore()
  const { editStateActive } = storeToRefs(drawStore)
  const { x, y } = storeToRefs(profilePositionStore)
  const profileData = shallowRef(dataset)
  const highlightDistance: ShallowRef<number | undefined> =
    shallowRef(undefined) // The value to higlight on the graph
  const displayGeoMarker = ref(true) // deactivate geomarker when mode edition
  const virtualLineProfile = new LineString([0, 0], GeometryLayout.XYM) // don't add to the map, it is used to compute the distance between the user cursor and the feature (represented by the virtual line)

  let map: Map
  let listenerIdPointerMove: EventsKey | undefined

  onMounted(() => {
    map = useMap().getOlMap()
    createLayerFeaturePosition()
  })
  onUnmounted(() => detachPointerMove())

  watch(profileData, profileData => {
    if (profileData) {
      constructProfileLine(profileData)
      attachPointerMove()
    }
  })

  watch([x, y], ([x, y]) => {
    if (x && y && displayGeoMarker.value) {
      overlay?.moveGeoMarker(x, y)
    } else {
      overlay?.removeGeomarker()
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
      listenerIdPointerMove = listen(
        map,
        'pointermove',
        <ListenerFunction>onPointerMove
      )
    }
  }

  /**
   * Unlisten 'pointermove' event on map
   */
  function detachPointerMove() {
    if (listenerIdPointerMove) {
      unlistenByKey(listenerIdPointerMove)
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
      // Cursor is close enough: display marker (if not edition line mode)
      const newCoords = transform(
        <Coordinate>[closestPoint[0], closestPoint[1]],
        map.getView().getProjection(),
        PROJECTION_LUX
      )
      highlightDistance.value = closestPoint[2]
      displayGeoMarker.value = editStateActive.value !== 'editLine'
      newXGeomarker = newCoords[0]
      newYGeomarker = newCoords[1]
    } else {
      highlightDistance.value = -1
      displayGeoMarker.value = true // true => to restore default
      newXGeomarker = undefined
      newYGeomarker = undefined
    }

    profilePositionStore.setPosition(newXGeomarker, newYGeomarker)
  }

  return {
    profileData,
    highlightDistance,
  }
}
