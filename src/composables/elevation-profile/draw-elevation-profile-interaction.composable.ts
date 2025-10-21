import { listen, unlistenByKey } from 'ol/events'
import { EventsKey } from 'ol/events'
import Draw, { DrawEvent } from 'ol/interaction/Draw'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Feature, Map } from 'ol'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import olStyleFill from 'ol/style/Fill.js'
import olStyleStroke from 'ol/style/Stroke.js'
import olStyleText from 'ol/style/Text.js'
import olStyleStyle from 'ol/style/Style.js'
import olStyleCircle from 'ol/style/Circle.js'
import useMap from '@/composables/map/map.composable'
import { useElevationProfileStore } from '@/stores/elevation-profile.store'
import { useAppStore } from '@/stores/app.store'
import drawTooltip from '@/composables/draw/draw-tooltip'

/**
 * Composable for drawing a line to display elevation profile
 * Follows pattern from draw-lidar-interaction.composable.ts
 */
export default function useDrawElevationProfileInteraction() {
  const appStore = useAppStore()
  const elevationProfileStore = useElevationProfileStore()
  const { drawElevationProfileActive, currentProfileFeature } = storeToRefs(
    elevationProfileStore
  )
  const { elevationProfileToolbarOpen } = storeToRefs(appStore)

  let map: Map
  const drawInteraction = new Draw({ type: 'LineString' })
  let keyupListenerKey: EventsKey | undefined

  const lineStyle = new olStyleStyle({
    fill: new olStyleFill({
      color: 'rgba(255, 204, 51, 0.2)',
    }),
    stroke: new olStyleStroke({
      color: 'rgba(255, 204, 51, 1)',
      width: 2,
    }),
    image: new olStyleCircle({
      radius: 7,
      fill: new olStyleFill({
        color: 'rgba(255, 204, 51, 0.3)',
      }),
    }),
    text: new olStyleText({
      font: 'bold 12px Calibri,sans-serif',
      fill: new olStyleFill({
        color: 'rgb(0 0 0)',
      }),
      stroke: new olStyleStroke({
        color: 'rgba(255, 204, 51, 1)',
        width: 4,
      }),
      overflow: true,
    }),
  })

  const vectorLayer = new VectorLayer({
    source: new VectorSource(),
    zIndex: 1001,
  })

  function init() {
    map = useMap().getOlMap()

    // Watch toolbar state to activate/deactivate drawing
    watch(elevationProfileToolbarOpen, isOpen => {
      if (isOpen) {
        drawElevationProfileActive.value = true
      } else {
        drawElevationProfileActive.value = false
        const source = vectorLayer.getSource()
        if (source) {
          source.clear()
        }
        currentProfileFeature.value = null
      }
    })

    // Watch current feature to display it on the map
    watch(
      () => currentProfileFeature.value,
      feature => {
        const source = vectorLayer.getSource()
        if (source) {
          source.clear()
          if (feature && feature instanceof Feature) {
            source.addFeature(feature as Feature)
          }
        }
      }
    )

    drawInteraction.setActive(false)

    watch(drawElevationProfileActive, isActive => {
      drawInteraction.setActive(isActive)
    })

    map.addInteraction(drawInteraction)
    map.addLayer(vectorLayer)
    vectorLayer.setStyle(lineStyle)

    listen(drawInteraction, 'drawstart', event => {
      // Clear previous feature when starting a new draw
      const source = vectorLayer.getSource()
      if (source) {
        source.clear()
      }
      currentProfileFeature.value = null
      drawTooltip.add(map, event as DrawEvent)
    })

    listen(drawInteraction, 'drawend', event => {
      onDrawEnd(event as DrawEvent)
    })

    // Store the listener key for cleanup
    keyupListenerKey = listen(document, 'keyup', event => {
      onKeyUp(event as KeyboardEvent)
    })
  }

  function onDrawEnd(event: DrawEvent) {
    drawTooltip.remove()
    drawInteraction.finishDrawing()
    drawElevationProfileActive.value = false
    event.stopPropagation()
    currentProfileFeature.value = event.feature
  }

  /**
   * Deactivate this interaction if the ESC key is pressed.
   * @param event
   */
  function onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      drawTooltip.remove()
      drawInteraction.finishDrawing()
      drawInteraction.setActive(false)
    }
  }

  function clearFeature() {
    const source = vectorLayer.getSource()
    if (source) {
      source.clear()
    }
    currentProfileFeature.value = null
  }

  function hasLineFeature() {
    const feature = currentProfileFeature.value
    return (
      !!feature &&
      typeof feature.getGeometry === 'function' &&
      feature.getGeometry() &&
      feature.getGeometry()!.getType &&
      feature.getGeometry()!.getType() === 'LineString'
    )
  }

  /**
   * Cleanup function to remove event listeners and prevent memory leaks
   * Should be called when the composable is no longer needed
   */
  function destroy() {
    // Remove the keyup event listener
    if (keyupListenerKey) {
      unlistenByKey(keyupListenerKey)
      keyupListenerKey = undefined
    }

    // Clear the vector layer source
    const source = vectorLayer.getSource()
    if (source) {
      source.clear()
    }

    // Remove the layer from the map
    if (map) {
      map.removeLayer(vectorLayer)
      map.removeInteraction(drawInteraction)
    }
  }

  return {
    drawInteraction,
    drawElevationProfileActive,
    currentProfileFeature,
    init,
    clearFeature,
    hasLineFeature,
    destroy,
  }
}
