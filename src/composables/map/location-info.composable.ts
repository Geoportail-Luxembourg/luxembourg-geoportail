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
import { useInfoStore } from '@/stores/info.store'

export const DEFAULT_INFO_ZINDEX = 1500
export const INFO_FEATURE_LAYER_TYPE = 'infoFeatureLayer'

export default function useLocationInfo() {
  const map = useMap().getOlMap()
  let holdTimeoutId: number | undefined = undefined
  let startPixel: Coordinate | null = null
  const { infoOpen } = storeToRefs(useAppStore())
  const { locationInfo, hidePointer } = storeToRefs(useInfoStore())

  const infoFeatureLayer = new VectorLayer({
    source: new VectorSource({
      features: [] as Feature[],
    }),
    // altitudeMode: 'clampToGround',
    zIndex: DEFAULT_INFO_ZINDEX,
  })
  infoFeatureLayer.set('cyLayerType', INFO_FEATURE_LAYER_TYPE)
  setInfoStyle(infoFeatureLayer)
  map.addLayer(infoFeatureLayer)

  watch(
    [locationInfo, hidePointer],
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
    if (event.originalEvent.button === 2) {
      // if right mouse click
      locationInfo.value = getClickCoordinate(event)
    } else if (event.originalEvent.pointerType === 'touch') {
      window.clearTimeout(holdTimeoutId)
      holdTimeoutId = window.setTimeout(() => {
        locationInfo.value = getClickCoordinate(event)
      })
    }
  }

  listen(map, 'pointerup', (event: any) => {
    if (
      startPixel &&
      (event as MapBrowserEvent<PointerEvent>).originalEvent.button === 0
    ) {
      // if left mouse click
      if (!hidePointer.value) {
        locationInfo.value = undefined
      }
    }
    window.clearTimeout(holdTimeoutId)
    startPixel = null
  })

  listen(map, 'pointermove', (event: any) => {
    if (startPixel !== null) {
      const pixel = (event as MapBrowserEvent<PointerEvent>).pixel
      const deltaX = Math.abs(startPixel[0] - pixel[0])
      const deltaY = Math.abs(startPixel[1] - pixel[1])
      if (deltaX + deltaY > 6) {
        window.clearTimeout(holdTimeoutId)
        startPixel = null
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
