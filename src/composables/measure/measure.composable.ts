import { ref, onUnmounted } from 'vue'
import Draw, { DrawEvent } from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Overlay from 'ol/Overlay'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill'
import Text from 'ol/style/Text'
import Feature from 'ol/Feature'
import Geometry from 'ol/geom/Geometry'
import LineString from 'ol/geom/LineString'
import Circle from 'ol/geom/Circle'
import { toLonLat } from 'ol/proj'
import { getLength } from '@/services/common/measurement.utils'
import { formatLength } from '@/services/common/formatting.utils'
import { getElevation } from '@/components/draw/feature-measurements-helper'
import { EventsKey, listen } from 'ol/events'
import { unByKey } from 'ol/Observable'
import { DEFAULT_DRAW_ZINDEX } from '@/services/ol-layer/ol-layer-interaction-draw.helper'

import useMap from '@/composables/map/map.composable'
import drawTooltip from '@/composables/draw/draw-tooltip'
import { useTranslation } from 'i18next-vue'
import { createLogger } from '@/lib/logging/namespacedLogger'
import { useMatomo } from '@/composables/matomo/matomo.composable'
import { MATOMO_CATEGORIES } from '@/composables/matomo/matomo.model'

export default function useMeasure() {
  type Mode = 'length' | 'area' | 'azimuth'
  const currentMode = ref<Mode | undefined>(undefined)
  const azimuthPreviewOverlay = ref<Overlay | null>(null)
  interface AzimuthPreviewState {
    radial: Feature<Geometry> | null
    preview: Feature<Geometry> | null
    key: EventsKey | null
  }

  const azimuthPreviewState = ref<AzimuthPreviewState | null>(null)

  const { t } = useTranslation()
  const { warn: logWarn, error: logError } = createLogger('MEASURE')
  const map = useMap().getOlMap()
  const matomo = useMatomo()
  const isActive = ref(false)
  const measureLayer = ref<VectorLayer | null>(null)
  const drawInteraction = ref<Draw | null>(null)
  const pointerMoveKey = ref<EventsKey | null>(null)
  const lastPointerCoord = ref<[number, number] | null>(null)
  const hintOverlay = ref<Overlay | null>(null)
  const persistentRemovers: Array<() => void> = []
  // persistentRemovers is cleared by `reset()` and also on component unmount
  // to avoid leaks if the composable is used across multiple mount/unmount cycles.

  const AZIMUTH_PREVIEW_STYLE = new Style({
    stroke: new Stroke({ color: '#ff8c00', width: 2, lineDash: [6, 6] }),
  })
  // Overlay offsets & positioning constants (keeps tooltip spacing consistent)
  const TOOLTIP_VERTICAL_OFFSET = -15
  const HINT_VERTICAL_OFFSET = -30
  const TOOLTIP_OFFSET: [number, number] = [0, TOOLTIP_VERTICAL_OFFSET]
  const HINT_OFFSET: [number, number] = [0, HINT_VERTICAL_OFFSET]
  const TOOLTIP_POSITIONING = 'bottom-center' as const

  function removeHintOverlay() {
    if (!hintOverlay.value || !map) return
    try {
      map.removeOverlay(hintOverlay.value as any)
    } catch (e) {
      logWarn('[measure] removeHintOverlay failed', e)
    }
    hintOverlay.value = null
  }

  function showHintOverlay(text: string, position?: [number, number]) {
    if (!map) return
    try {
      // remove existing hint
      removeHintOverlay()
      const el = document.createElement('div')
      el.className = 'lux-tooltip lux-tooltip--hint'
      el.innerHTML = text
      const ov = new Overlay({
        element: el,
        offset: HINT_OFFSET,
        positioning: TOOLTIP_POSITIONING,
        stopEvent: false,
      })
      hintOverlay.value = ov
      map.addOverlay(hintOverlay.value as any)
      const pos = position || (map.getView() && map.getView().getCenter())
      if (pos) hintOverlay.value.setPosition(pos as any)
    } catch (e) {
      logWarn('[measure] showHintOverlay failed', e)
    }
  }

  function computeBearing(
    [lon1, lat1]: [number, number],
    [lon2, lat2]: [number, number]
  ) {
    // returns bearing in degrees from point1 -> point2
    // Converted to signed range [-180, 180]: positive = eastward, negative = westward
    const lat1rad = (lat1 * Math.PI) / 180
    const lat2rad = (lat2 * Math.PI) / 180
    const lon1rad = (lon1 * Math.PI) / 180
    const lon2rad = (lon2 * Math.PI) / 180
    const y = Math.sin(lon2rad - lon1rad) * Math.cos(lat2rad)
    const x =
      Math.cos(lat1rad) * Math.sin(lat2rad) -
      Math.sin(lat1rad) * Math.cos(lat2rad) * Math.cos(lon2rad - lon1rad)
    const ang2rad = Math.atan2(y, x)
    const deg360 = ((ang2rad * 180) / Math.PI + 360) % 360
    // map 0..360 to -180..180
    return deg360 > 180 ? deg360 - 360 : deg360
  }

  function activate(mode: Mode) {
    if (!map) return
    // ensure a single measure layer exists on the map
    // Try to reuse cached reference first, otherwise search the map for a
    // previously created 'interactionMeasureLayer' to avoid adding duplicates
    let src = measureLayer.value?.getSource() as VectorSource | undefined
    if (!src) {
      // search existing layers on the map for the interaction measure layer
      try {
        const layers = map.getLayers().getArray()
        for (const l of layers) {
          try {
            if (
              (l as any).get &&
              (l as any).get('cyLayerType') === 'interactionMeasureLayer'
            ) {
              measureLayer.value = l as VectorLayer
              src = (measureLayer.value as any).getSource() as VectorSource
              break
            }
          } catch (e) {
            // ignore errors checking individual layers
          }
        }
      } catch (e) {
        // ignore if map layers cannot be iterated
      }

      if (!src) {
        src = new VectorSource()
        measureLayer.value = new VectorLayer({
          source: src,
          zIndex: DEFAULT_DRAW_ZINDEX + 1,
        })
        ;(measureLayer.value as any).set(
          'cyLayerType',
          'interactionMeasureLayer'
        )
        map.addLayer(measureLayer.value as any)
        // ...existing code...
      } else {
        // ...existing code...
      }
    }

    const drawType =
      mode === 'azimuth'
        ? ('Circle' as any)
        : mode === 'area'
        ? ('Polygon' as any)
        : ('LineString' as any)
    const interaction = new Draw({ type: drawType, source: src })

    // Keyboard shortcuts: ESC finishes drawing, Backspace removes last point
    const keyupListenerKey = listen(document, 'keyup', (evt: Event) => {
      const event = evt as KeyboardEvent
      if (event.key === 'Escape') {
        drawTooltip.remove()
        interaction.finishDrawing()
      } else if (event.key === 'Backspace' && interaction.getActive()) {
        interaction.removeLastPoint()
      }
    })
    persistentRemovers.push(() => unByKey(keyupListenerKey))

    // pointer move for live preview (also move hint overlay if present)
    pointerMoveKey.value = listen(map, 'pointermove', (event: any) => {
      lastPointerCoord.value = event.coordinate as [number, number]
      try {
        if (hintOverlay.value && map) {
          hintOverlay.value.setPosition(event.coordinate as any)
        }
      } catch (e) {
        logWarn('[measure] pointermove handler failed', e)
      }
    })

    // Show live tooltip for non-azimuth measures
    listen(interaction, 'drawstart', (evt: any) => {
      try {
        if (mode !== 'azimuth') {
          drawTooltip.add(map, evt as DrawEvent)
          // update hint to continue drawing
          try {
            const geom = (evt as DrawEvent).feature?.getGeometry()
            let pos: [number, number] | undefined = undefined
            if (geom && geom.getType && geom.getType() === 'LineString') {
              const _c = (geom as LineString).getCoordinateAt(0.5)
              if (_c && _c.length >= 2) pos = [_c[0], _c[1]]
            }
            showHintOverlay(
              t(
                mode === 'area'
                  ? 'measure_continue_instruction_area'
                  : 'measure_continue_instruction'
              ) as string,
              pos
            )
          } catch (e) {
            logWarn('[measure] drawstart hint update failed', e)
          }
        }
      } catch (e) {
        logWarn('[measure] drawstart handler failed', e)
      }
    })

    // For azimuth, create a preview radial + overlay on drawstart and update it on pointer move
    listen(interaction, 'drawstart', (evt: any) => {
      if (mode !== 'azimuth' || !map) return
      try {
        const sketch: Feature = (evt as DrawEvent).feature
        const geom: any = sketch.getGeometry()
        const center = geom && geom.getCenter ? geom.getCenter() : null
        if (!center) return

        // preview radial feature (center -> edge), initially zero-length
        const previewRadial = new Feature({
          geometry: new LineString([center, center]),
        })
        previewRadial.set('isMeasurement', true)
        previewRadial.set('isAzimuthPreview', true)
        previewRadial.setStyle(AZIMUTH_PREVIEW_STYLE)
        src!.addFeature(previewRadial)

        // small preview circle feature (optional visual cue)
        const previewCircle = new Feature({ geometry: new Circle(center, 0) })
        previewCircle.set('isMeasurement', true)
        previewCircle.set('isAzimuthPreview', true)
        previewCircle.setStyle(AZIMUTH_PREVIEW_STYLE)
        src!.addFeature(previewCircle)

        // overlay for live radius/bearing display
        const el = document.createElement('div')
        el.className = 'lux-tooltip'
        el.innerHTML = ''
        const ov = new Overlay({
          element: el,
          offset: TOOLTIP_OFFSET,
          positioning: TOOLTIP_POSITIONING,
          stopEvent: false,
        })
        azimuthPreviewOverlay.value = ov
        map.addOverlay(azimuthPreviewOverlay.value as any)

        // show continue hint for azimuth drawing
        try {
          showHintOverlay(
            t('measure_continue_instruction_azimuth') as string,
            center
          )
        } catch (e) {
          logWarn('[measure] showHintOverlay (azimuth) failed', e)
        }

        // pointermove handler to update preview geometry/content
        const key = listen(map, 'pointermove', (ev: any) => {
          try {
            const pointer: [number, number] = ev.coordinate
            lastPointerCoord.value = pointer
            const edge: [number, number] = [pointer[0], pointer[1]]
            // update radial
            try {
              ;(previewRadial.getGeometry() as LineString).setCoordinates([
                center,
                edge,
              ])
            } catch (e) {
              logWarn('[measure] previewRadial.setCoordinates failed', e)
            }
            // update circle radius
            try {
              ;(previewCircle.getGeometry() as Circle).setRadius(
                Math.sqrt(
                  (edge[0] - center[0]) ** 2 + (edge[1] - center[1]) ** 2
                )
              )
            } catch (e) {
              logWarn('[measure] previewCircle.setRadius failed', e)
            }
            // update overlay content and position
            try {
              const bearing = computeBearing(
                toLonLat(center) as [number, number],
                toLonLat(edge) as [number, number]
              )
              const radius = formatLength(
                getLength(
                  new LineString([center, edge]),
                  map.getView().getProjection()
                )
              )
              el.innerHTML = `${bearing.toFixed(1)}° — ${radius}`
              const mid: [number, number] = [
                (center[0] + edge[0]) / 2,
                (center[1] + edge[1]) / 2,
              ]
              azimuthPreviewOverlay.value?.setPosition(mid)
            } catch (e) {
              logWarn('[measure] azimuth preview overlay update failed', e)
            }
          } catch (err) {
            logWarn('[measure] azimuth pointermove outer failed', err)
          }
        })

        azimuthPreviewState.value = {
          radial: previewRadial,
          preview: previewCircle,
          key,
        }

        // ensure transient cleanup is run on reset
        persistentRemovers.push(() => {
          try {
            const k = azimuthPreviewState.value?.key
            if (k) unByKey(k as EventsKey)
          } catch (e) {
            logWarn('[measure] unByKey for azimuth preview failed', e)
          }
          try {
            if (azimuthPreviewOverlay.value && map)
              map.removeOverlay(azimuthPreviewOverlay.value as any)
            // ensure we clear the cached ref when persistent cleanup runs
            azimuthPreviewOverlay.value = null
          } catch (e) {
            logWarn('[measure] removing azimuth preview overlay failed', e)
          }
          try {
            if (azimuthPreviewState.value?.radial)
              src!.removeFeature(
                azimuthPreviewState.value.radial as Feature<Geometry>
              )
            if (azimuthPreviewState.value?.preview)
              src!.removeFeature(
                azimuthPreviewState.value.preview as Feature<Geometry>
              )
          } catch (e) {
            logWarn('[measure] removing azimuth preview features failed', e)
          }
        })
      } catch (e) {
        logWarn('[measure] azimuth drawstart handler failed', e)
      }
    })

    // drawend: finalize style and keep feature on layer, then deactivate tool
    listen(interaction, 'drawend', evt => {
      // ...existing code...
      // Create persistent measurement label (OL Text style) for non-azimuth modes
      const drawnFeature = (evt as DrawEvent).feature
      const geom = drawnFeature?.getGeometry()
      if (geom && map && currentMode.value !== 'azimuth') {
        const disposer = drawTooltip.createPersistentMeasurement(
          map,
          geom,
          drawnFeature
        )
        persistentRemovers.push(disposer)
      }

      // remove transient tooltip and hint
      drawTooltip.remove()
      // remove hint overlay when finishing draw
      removeHintOverlay()
      if (pointerMoveKey.value) {
        try {
          unByKey(pointerMoveKey.value as EventsKey)
        } catch (e) {
          logWarn('[measure] unByKey(pointerMoveKey) failed', e)
        }
        pointerMoveKey.value = null
      }

      const feature: Feature | undefined = (evt as DrawEvent).feature
      if (feature) {
        if (mode === 'area') {
          // style already applied by createPersistentMeasurement (stroke + fill + text)
        } else if (mode === 'azimuth') {
          // finalize azimuth: create a proper Circle geometry and a persistent radial line,
          // show radius label and compute elevation diff for Δh
          feature.setStyle(
            new Style({
              stroke: new Stroke({ color: '#ff8c00', width: 3 }),
              fill: new Fill({ color: 'rgba(255,140,0,0.05)' }),
            })
          )

          const geom = feature.getGeometry() as any
          // For azimuth, Draw uses Circle geometry: use center + radius and pointer direction to compute edge
          if (geom && geom.getCenter && geom.getRadius) {
            const center = geom.getCenter()
            const radiusVal = geom.getRadius()
            const pointer = lastPointerCoord.value
            let angle = 0
            if (pointer)
              angle = Math.atan2(pointer[1] - center[1], pointer[0] - center[0])
            const edge: [number, number] = [
              center[0] + radiusVal * Math.cos(angle),
              center[1] + radiusVal * Math.sin(angle),
            ]

            // ensure geometry is a Circle (it should be) and set final style
            const radiusGeom = new Circle(center, radiusVal)
            feature.setGeometry(radiusGeom)

            // add a persistent radial feature (center -> edge) with OL Text style for print
            const radialFeature = new Feature({
              geometry: new LineString([center, edge]),
            })
            radialFeature.set('isMeasurement', true)
            radialFeature.set('isAzimuthRadial', true)
            src!.addFeature(radialFeature)
            // ensure radial removed on reset
            persistentRemovers.push(() => src!.removeFeature(radialFeature))

            // compute bearing and radius label
            const bearing = computeBearing(
              toLonLat(center) as [number, number],
              toLonLat(edge) as [number, number]
            )
            const radius = formatLength(
              getLength(
                new LineString([center, edge]),
                map.getView().getProjection()
              )
            )
            const bearingText = `${bearing.toFixed(1)}°`

            // remove preview overlay before creating final to avoid duplication
            if (azimuthPreviewOverlay.value && map) {
              try {
                map.removeOverlay(azimuthPreviewOverlay.value as any)
              } catch (e) {
                logWarn('[measure] removing azimuth preview overlay failed', e)
              }
              try {
                azimuthPreviewOverlay.value = null
              } catch (e) {
                // ignore
              }
            }

            // Helper: apply OL Text style on radialFeature with the given label
            const applyAzimuthTextStyle = (label: string) => {
              radialFeature.setStyle(
                new Style({
                  stroke: new Stroke({ color: '#ff8c00', width: 2 }),
                  text: new Text({
                    text: label,
                    font: 'bold 13px sans-serif',
                    fill: new Fill({ color: '#333333' }),
                    stroke: new Stroke({ color: '#ffffff', width: 3 }),
                    overflow: true,
                    placement: 'line',
                  }),
                })
              )
            }

            // Set initial label (Δh not yet known)
            applyAzimuthTextStyle(`${bearingText} — ${radius} — Δh: N/A`)

            // ensure the circle feature itself is removed on reset
            try {
              persistentRemovers.push(() => {
                try {
                  src!.removeFeature(feature)
                } catch (e) {
                  logWarn('[measure] removing persistent feature failed', e)
                }
              })
            } catch (e) {
              logWarn('[measure] registering persistent remover failed', e)
            }

            // fetch elevation for center and edge to compute Δh
            const controller = new AbortController()
            const abortRemover = () => {
              try {
                controller.abort()
              } catch (e) {
                /* ignore */
              }
            }
            persistentRemovers.push(abortRemover)
            ;(async () => {
              try {
                const [eCenter, eEdge] = await Promise.all([
                  getElevation(center as [number, number], controller.signal),
                  getElevation(edge as [number, number], controller.signal),
                ])

                // If the radial feature was removed (reset), skip
                if (!src!.getFeatures().includes(radialFeature)) return

                if (eCenter === null || eEdge === null) {
                  logWarn(
                    '[measure][azimuth] elevation data missing for points',
                    { eCenter, eEdge }
                  )
                  applyAzimuthTextStyle(`${bearingText} — ${radius} — Δh: N/A`)
                } else {
                  const dh = Math.round(eEdge - eCenter)
                  applyAzimuthTextStyle(
                    `${bearingText} — ${radius} — Δh: ${dh} m`
                  )
                }
              } catch (err) {
                logError('[measure][azimuth] elevation request failed', err)
                if (src!.getFeatures().includes(radialFeature)) {
                  applyAzimuthTextStyle(`${bearingText} — ${radius} — Δh: N/A`)
                }
              } finally {
                const idx = persistentRemovers.indexOf(abortRemover)
                if (idx !== -1) persistentRemovers.splice(idx, 1)
              }
            })()
          }
        } else {
          // style already applied by createPersistentMeasurement (stroke + text)
        }
        // mark as measurement for easy reset
        feature.set('isMeasurement', true)
      }

      // Deactivate and remove the draw interaction so tool is disabled after finishing
      try {
        interaction.setActive(false)
        map.removeInteraction(interaction as unknown as any)
      } catch (e) {
        logWarn('[measure] removing draw interaction failed', e)
      }
      // cleanup azimuth transient radial feature
      if (azimuthPreviewState.value) {
        try {
          const { radial, preview, key } = azimuthPreviewState.value
          if (key) unByKey(key as EventsKey)
          if (radial) src!.removeFeature(radial as Feature<Geometry>)
          if (preview) src!.removeFeature(preview as Feature<Geometry>)
        } catch (e) {
          logWarn('[measure] cleanup azimuth preview state failed', e)
        }
        azimuthPreviewState.value = null
      }
      drawInteraction.value = null
      currentMode.value = undefined
      isActive.value = false
      // ...existing code...
    })

    map.addInteraction(interaction)
    drawInteraction.value = interaction
    currentMode.value = mode
    isActive.value = true

    // show start instruction hint for this mode
    try {
      const key =
        mode === 'azimuth'
          ? 'measure_start_instruction_azimuth'
          : mode === 'area'
          ? 'measure_start_instruction_area'
          : 'measure_start_instruction'
      const pos =
        lastPointerCoord.value ?? (map.getView() && map.getView().getCenter())
      showHintOverlay(t(key) as string, pos as [number, number])
    } catch (e) {
      logWarn('[measure] showHintOverlay (start hint) failed', e)
    }
    // Track activation of measurement tool in Matomo
    try {
      matomo.trackEvent(MATOMO_CATEGORIES.MAP, 'ActivateMeasure', mode)
    } catch (e) {
      // ignore tracking errors
    }
  }

  function deactivate() {
    // ...existing code...
    if (!map) return
    if (!isActive.value) {
      // ...existing code...
      return
    }
    if (drawInteraction.value) {
      drawInteraction.value.setActive(false)
      map.removeInteraction(drawInteraction.value as unknown as any)
      drawInteraction.value = null
    }
    drawTooltip.remove()
    if (pointerMoveKey.value) {
      try {
        unByKey(pointerMoveKey.value as EventsKey)
      } catch (e) {
        logWarn('[measure] unByKey(pointerMoveKey) failed', e)
      }
      pointerMoveKey.value = null
    }
    removeHintOverlay()
    // cleanup azimuth transient features if present (cancelled drawing)
    if (azimuthPreviewState.value) {
      try {
        const { radial, preview, key } = azimuthPreviewState.value
        if (key) unByKey(key as EventsKey)
        const src = measureLayer.value?.getSource()
        if (src) {
          if (radial) src.removeFeature(radial)
          if (preview) src.removeFeature(preview)
        }
      } catch (e) {
        logWarn(
          '[measure] cleaning up azimuthPreviewState in deactivate failed',
          e
        )
      }
      azimuthPreviewState.value = null
    }
    // remove preview overlay only (keep final overlays persistent until reset is called)
    if (azimuthPreviewOverlay.value && map) {
      try {
        map.removeOverlay(azimuthPreviewOverlay.value as any)
      } catch (e) {
        logWarn(
          '[measure] removing azimuth preview overlay in deactivate failed',
          e
        )
      }
      azimuthPreviewOverlay.value = null
    }
    lastPointerCoord.value = null
    isActive.value = false
    // ...existing code...
    // Note: We keep measureLayer and all finalized features visible on the map
    // They will only be removed when reset() is called
  }

  function reset() {
    // ...existing code...
    // Ensure interaction and overlays removed
    deactivate()

    // First run persistent removers (overlays, radial features, explicit removers)
    try {
      // ...existing code...
      persistentRemovers.forEach(r => r())
    } catch (e) {
      logWarn('[measure] running persistent removers failed', e)
    }
    persistentRemovers.length = 0
    // ...existing code...

    try {
      // Only iterate measure layers, not draw layers (to avoid removing MyMaps features)
      const layers = map.getLayers().getArray().slice()
      layers.forEach(l => {
        try {
          // Only process layers that are measure layers
          const isMeasureLayer =
            (l as any).get &&
            (l as any).get('cyLayerType') === 'interactionMeasureLayer'

          if (isMeasureLayer) {
            // Remove the entire measure layer
            map.removeLayer(l)
          } else {
            // For other layers, only remove explicitly flagged measurement features
            // (but skip draw layers to preserve MyMaps)
            const isDrawLayer =
              (l as any).get &&
              (l as any).get('cyLayerType') === 'interactionDrawLayer'
            if (isDrawLayer) {
              // Skip draw layers entirely - they contain MyMaps features
              return
            }

            const srcLayer = (l as any).getSource && (l as any).getSource()
            if (!srcLayer || !srcLayer.getFeatures) return

            // Remove only explicitly flagged measurement features from non-draw, non-measure layers
            srcLayer
              .getFeatures()
              .slice()
              .forEach((f: any) => {
                try {
                  const isFlaggedMeasurement =
                    f.get &&
                    (f.get('isMeasurement') ||
                      f.get('isAzimuthRadial') ||
                      f.get('isAzimuth') ||
                      f.get('isAzimuthPreview') ||
                      f.get('measurementId') ||
                      f.get('finalOverlayRef'))

                  if (isFlaggedMeasurement) {
                    srcLayer.removeFeature(f)
                  }
                } catch (e) {
                  logWarn('[measure] removing measurement features failed', e)
                }
              })
          }
        } catch (e) {
          logWarn('[measure] iterating layers during reset failed', e)
        }
      })

      // Also remove any overlays that still have a measurementId set
      try {
        removeAllMeasurementOverlays(map)
      } catch (e) {
        logWarn('[measure] removeAllMeasurementOverlays failed', e)
      }
      // ...existing code...
      measureLayer.value = null
      // ...existing code...
    } catch (e) {
      logWarn('[measure] reset encountered an unexpected error', e)
    }
    lastPointerCoord.value = null

    // No-op: final overlays are removed via persistentRemovers; preview overlay handled separately
    // Any leftover overlays (dataset.measurementId or class 'lux-tooltip') are removed
    // by `removeAllMeasurementOverlays` earlier, so no additional pass is necessary here.
  }

  // Note: We intentionally do NOT call reset() on unmount because measurements
  // should persist on the map even if the toolbar component is unmounted.
  // Users must explicitly click the Reset button to clear measurements.
  onUnmounted(() => {
    try {
      // Only deactivate the current tool, but keep measurements visible
      deactivate()
      // ...existing code...
    } catch (e) {
      logWarn('[measure] deactivate on unmount failed', e)
    }
  })

  return {
    activate,
    deactivate,
    reset,
    isActive,
    currentMode,
    measureLayer,
  }
}

// Remove all overlays that have a measurement id (dataset.measurementId set)
export function removeAllMeasurementOverlays(m: any) {
  if (!m) return
  try {
    const overlays = m.getOverlays().getArray().slice()
    overlays.forEach((ov: Overlay) => {
      try {
        const el = (ov as any).getElement && (ov as any).getElement()
        // Remove overlays that are explicitly tagged with a measurement id
        // or that use the 'lux-tooltip' class (safeguard for transient tooltips)
        const hasMeasurementId = el && el.dataset && el.dataset.measurementId
        const isTooltip =
          el && el.classList && el.classList.contains('lux-tooltip')
        if (hasMeasurementId || isTooltip) {
          m.removeOverlay(ov)
        }
      } catch (e) {
        // ignore
      }
    })
  } catch (e) {
    // ignore
  }
}
