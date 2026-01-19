import { ref } from 'vue'
import Draw, { DrawEvent } from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Overlay from 'ol/Overlay'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import Feature from 'ol/Feature'
import { listen } from 'ol/events'
import { unByKey } from 'ol/Observable'

import useMap from '@/composables/map/map.composable'
import drawTooltip from '@/composables/draw/draw-tooltip'
import { useTranslation } from 'i18next-vue'

export default function useMeasure() {
  const { t } = useTranslation()
  const map = useMap().getOlMap()
  const isActive = ref(false)
  const measureLayer = ref<VectorLayer | null>(null)
  const drawInteraction = ref<Draw | null>(null)
  const pointerMoveKey = ref<any>(null)
  const hintOverlay = ref<Overlay | null>(null)
  const persistentRemovers: Array<() => void> = []

  const MEASURE_STYLE = new Style({
    stroke: new Stroke({
      color: '#ff8c00',
      width: 4,
    }),
  })

  function ensureLayer() {
    if (!map) return null
    if (!measureLayer.value) {
      const src = new VectorSource()
      const layer = new VectorLayer({
        source: src,
      })
      layer.set('cyLayerType', 'interactionMeasureLayer')
      map.addLayer(layer)
      measureLayer.value = layer
    }
    return measureLayer.value
  }

  function createHintOverlay(messageKey = 'measure_start_instruction') {
    if (!map) return
    if (hintOverlay.value) {
      const el = hintOverlay.value.getElement()
      if (el) el.innerHTML = t(messageKey, { ns: 'client' })
      return
    }

    const el = document.createElement('div')
    el.className = 'lux-tooltip lux-tooltip--hint'
    el.innerHTML = t(messageKey, { ns: 'client' })
    const ov = new Overlay({
      element: el,
      offset: [12, 0],
      positioning: 'center-left',
      stopEvent: false,
    })
    map.addOverlay(ov)
    hintOverlay.value = ov
  }

  function removeHintOverlay() {
    if (!hintOverlay.value) return
    const el = hintOverlay.value.getElement()
    el?.parentNode?.removeChild(el)
    hintOverlay.value = null
  }

  function activate() {
    if (!map) return
    if (isActive.value) return

    const layer = ensureLayer()
    if (!layer) return

    const source = layer.getSource()!
    const interaction = new Draw({
      source,
      type: 'LineString',
      freehand: false,
      maxPoints: Infinity,
    })
    interaction.setActive(true)

    // drawstart: enable tooltip and hint
    listen(interaction, 'drawstart', evt => {
      drawTooltip.add(map, evt as DrawEvent)
      // switch hint to continuing message
      createHintOverlay('measure_continue_instruction')
    })
    // place hint overlay immediately and start following pointer
    createHintOverlay('measure_start_instruction')
    pointerMoveKey.value = listen(map, 'pointermove', (e: any) => {
      if (hintOverlay.value) hintOverlay.value.setPosition(e.coordinate)
    })

    // drawend: finalize style and keep feature on layer, then deactivate tool
    listen(interaction, 'drawend', evt => {
      // Create persistent measurement overlay anchored at middle of line
      const geom = (evt as DrawEvent).feature?.getGeometry()
      if (geom && map) {
        const disposer = drawTooltip.createPersistentMeasurement(map, geom)
        persistentRemovers.push(disposer)
      }

      // remove transient tooltip and hint
      drawTooltip.remove()
      if (pointerMoveKey.value) {
        unByKey(pointerMoveKey.value)
        pointerMoveKey.value = null
      }
      removeHintOverlay()

      const feature: Feature | undefined = (evt as DrawEvent).feature
      if (feature) {
        feature.setStyle(MEASURE_STYLE)
        // mark as measurement for easy reset
        feature.set('isMeasurement', true)
      }

      // Deactivate and remove the draw interaction so tool is disabled after finishing
      try {
        interaction.setActive(false)
        map.removeInteraction(interaction as unknown as any)
      } catch (e) {
        // ignore errors during cleanup
      }
      drawInteraction.value = null
      isActive.value = false
    })

    map.addInteraction(interaction)
    drawInteraction.value = interaction
    isActive.value = true
  }

  function deactivate() {
    if (!map) return
    if (!isActive.value) return
    if (drawInteraction.value) {
      drawInteraction.value.setActive(false)
      map.removeInteraction(drawInteraction.value as unknown as any)
      drawInteraction.value = null
    }
    drawTooltip.remove()
    if (pointerMoveKey.value) {
      unByKey([pointerMoveKey.value])
      pointerMoveKey.value = null
    }
    removeHintOverlay()
    isActive.value = false
  }

  function reset() {
    // Ensure interaction and overlays removed
    deactivate()

    if (!measureLayer.value) return
    measureLayer.value.getSource()?.clear()

    // remove persistent overlays
    persistentRemovers.forEach(r => r())
    persistentRemovers.length = 0
  }

  return {
    activate,
    deactivate,
    reset,
    isActive,
    measureLayer,
  }
}
