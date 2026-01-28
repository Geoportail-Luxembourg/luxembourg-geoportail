import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { Coordinate } from 'ol/coordinate'
import { MapBrowserEvent } from 'ol'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import StyleStyle from 'ol/style/Style'
import StyleCircle from 'ol/style/Circle'
import StyleFill from 'ol/style/Fill'
import StyleStroke from 'ol/style/Stroke'
import { useAppStore } from '@/stores/app.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { useDrawStore } from '@/stores/draw.store'
import { useLidarStore } from '@/stores/lidar.store'
import { useElevationProfileStore } from '@/stores/elevation-profile.store'
import { isInActiveMode } from './info.utils'

export const DEFAULT_INFO_ZINDEX = 1501
export const INFO_FEATURE_LAYER_TYPE = 'infoFeatureLayer'

export default function useLocationInfo() {
  const map = useMap().getOlMap()
  let startPixel: Coordinate | null = null
  let startTime: number | null = null // Track when the pointer was pressed
  const { infoOpen, measureToolbarOpen } = storeToRefs(useAppStore())
  const { locationInfoCoords, hidePointer } = storeToRefs(
    useLocationInfoStore()
  )
  const { clearContent } = useFeatureInfoStore()
  const { drawStateActive, editStateActive } = storeToRefs(useDrawStore())
  const {
    measureActive,
    drawLidarActive,
    justFinishedDrawing: justFinishedDrawingLidar,
  } = storeToRefs(useLidarStore())
  const {
    drawElevationProfileActive,
    justFinishedDrawing: justFinishedDrawingElevation,
  } = storeToRefs(useElevationProfileStore())

  const infoFeatureLayer = new VectorLayer({
    source: new VectorSource({
      features: [] as Feature[],
    }),
    zIndex: DEFAULT_INFO_ZINDEX,
  })
  infoFeatureLayer.set('cyLayerType', INFO_FEATURE_LAYER_TYPE)
  setInfoStyle(infoFeatureLayer)
  map.addLayer(infoFeatureLayer)

  watch(infoOpen, open => {
    if (!open) {
      locationInfoCoords.value = undefined
    }
  })

  watch(
    [locationInfoCoords, hidePointer],
    ([location, doHide]) => {
      infoFeatureLayer.getSource()?.clear()
      if (location && !doHide) {
        infoOpen.value = true
        const feature = new Feature(new Point(location))
        infoFeatureLayer.getSource()?.addFeature(feature)
      }
    },
    { immediate: true }
  )

  map
    .getViewport()
    .addEventListener('contextmenu', event => event.preventDefault())

  listen(map, 'pointerdown', event =>
    handleClick(event as MapBrowserEvent<PointerEvent>)
  )

  function getClickCoordinate(event: MapBrowserEvent<PointerEvent>) {
    return map.getEventCoordinate(event.originalEvent)
  }

  function handleClick(event: MapBrowserEvent<PointerEvent>) {
    startPixel = event.pixel
    startTime = Date.now() // Record when pointer down happened
    if (event.originalEvent.button === 2) {
      // if right mouse click
      locationInfoCoords.value = getClickCoordinate(event)
      clearContent()
    }
    // Don't setup hold timeout on pointerdown for touch - it interferes with panning
    // The pointerup handler will check if it was a long hold
  }

  listen(map, 'pointerup', event => {
    // Don't process clicks when in draw, edit, or measure mode
    if (
      isInActiveMode(
        drawStateActive,
        editStateActive,
        measureActive,
        measureToolbarOpen,
        drawLidarActive,
        drawElevationProfileActive,
        justFinishedDrawingLidar,
        justFinishedDrawingElevation
      )
    ) {
      return
    }

    const pointerEvent = (event as MapBrowserEvent<PointerEvent>).originalEvent

    if (startPixel && startTime !== null) {
      const pixel = (event as MapBrowserEvent<PointerEvent>).pixel
      const deltaX = Math.abs(startPixel[0] - pixel[0])
      const deltaY = Math.abs(startPixel[1] - pixel[1])
      const timeDelta = Date.now() - startTime

      // Check if this was a hold (touch press for 400ms without significant movement)
      if (
        pointerEvent.pointerType === 'touch' &&
        deltaX + deltaY < 6 &&
        timeDelta >= 400 // 400ms threshold for long press
      ) {
        locationInfoCoords.value = getClickCoordinate(
          event as MapBrowserEvent<PointerEvent>
        )
        clearContent()
      } else if (
        pointerEvent.button === 0 && // left mouse click
        deltaX + deltaY < 6 // no significant movement
      ) {
        // Left click without movement
        if (!hidePointer.value) {
          locationInfoCoords.value = undefined
        }
      }
    }

    startPixel = null
    startTime = null
  })

  listen(map, 'pointermove', event => {
    if (startPixel !== null) {
      const pixel = (event as MapBrowserEvent<PointerEvent>).pixel
      const deltaX = Math.abs(startPixel[0] - pixel[0])
      const deltaY = Math.abs(startPixel[1] - pixel[1])
      if (deltaX + deltaY > 6) {
        // Movement detected - this is a pan, not a click/hold
        startPixel = null
        startTime = null
      }
    }
  })

  function setInfoStyle(layer: VectorLayer<VectorSource>) {
    const defaultFill = new StyleFill({
      color: [255, 255, 0, 0.6],
    })
    const circleStroke = new StyleStroke({
      color: [255, 155, 55, 1],
      width: 3,
    })

    const pointStyle = new StyleCircle({
      radius: 10,
      fill: defaultFill,
      stroke: circleStroke,
    })

    layer.setStyle([
      new StyleStyle({
        image: pointStyle,
      }),
    ])
  }
}
