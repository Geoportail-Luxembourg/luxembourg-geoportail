import { listen } from 'ol/events'
import Draw, { DrawEvent } from 'ol/interaction/Draw'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Feature, Map } from 'ol'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

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

  // Style for the drawn line
  const lineStyle = new Style({
    stroke: new Stroke({
      color: 'rgba(255, 0, 0, 0.8)',
      width: 3,
      lineCap: 'round',
      lineJoin: 'round',
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

    listen(document, 'keyup', event => {
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

  return {
    drawInteraction,
    drawElevationProfileActive,
    currentProfileFeature,
    init,
    clearFeature,
    hasLineFeature,
  }
}
