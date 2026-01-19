import { ref } from 'vue'
import Draw, { DrawEvent } from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Overlay from 'ol/Overlay'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import Feature from 'ol/Feature'
import LineString from 'ol/geom/LineString'
import Circle from 'ol/geom/Circle'
import { toLonLat } from 'ol/proj'
import { getLength } from '@/services/common/measurement.utils'
import { formatLength } from '@/services/common/formatting.utils'
import { getElevation } from '@/components/draw/feature-measurements-helper'
import { listen } from 'ol/events'
import { unByKey } from 'ol/Observable'
import { v4 as uuidv4 } from 'uuid'

import useMap from '@/composables/map/map.composable'
import drawTooltip from '@/composables/draw/draw-tooltip'
import { useTranslation } from 'i18next-vue'
import { createLogger } from '@/lib/logging/namespacedLogger'

export default function useMeasure() {
  type Mode = 'length' | 'area' | 'azimuth'
  const currentMode = ref<Mode | undefined>(undefined)
  const azimuthPreviewOverlay = ref<Overlay | null>(null)
  const azimuthTransient = ref<any>(null)

  const { t } = useTranslation()
  const { warn: logWarn, error: logError } = createLogger('MEASURE')
  const map = useMap().getOlMap()
  const isActive = ref(false)
  const measureLayer = ref<VectorLayer | null>(null)
  const drawInteraction = ref<Draw | null>(null)
  const pointerMoveKey = ref<any>(null)
  const lastPointerCoord = ref<[number, number] | null>(null)
  const hintOverlay = ref<Overlay | null>(null)
  const persistentRemovers: Array<() => void> = []

  const MEASURE_STYLE = new Style({
    stroke: new Stroke({
      color: '#ff8c00',
      width: 4,
    }),
  })
  const AZIMUTH_PREVIEW_STYLE = new Style({
    stroke: new Stroke({ color: '#ff8c00', width: 2, lineDash: [6, 6] }),
  })

  function removeHintOverlay() {
    if (!hintOverlay.value || !map) return
    try {
      map.removeOverlay(hintOverlay.value as any)
    } catch (e) {
      // ignore
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
        offset: [0, -30],
        positioning: 'bottom-center',
        stopEvent: false,
      })
      hintOverlay.value = ov
      map.addOverlay(hintOverlay.value as any)
      const pos = position || (map.getView() && map.getView().getCenter())
      if (pos) hintOverlay.value.setPosition(pos as any)
    } catch (e) {
      // ignore
    }
  }

  function computeBearing(
    [lon1, lat1]: [number, number],
    [lon2, lat2]: [number, number]
  ) {
    // returns bearing in degrees from point1 -> point2
    const φ1 = (lat1 * Math.PI) / 180
    const φ2 = (lat2 * Math.PI) / 180
    const λ1 = (lon1 * Math.PI) / 180
    const λ2 = (lon2 * Math.PI) / 180
    const y = Math.sin(λ2 - λ1) * Math.cos(φ2)
    const x =
      Math.cos(φ1) * Math.sin(φ2) -
      Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1)
    const θ = Math.atan2(y, x)
    const deg = ((θ * 180) / Math.PI + 360) % 360
    return deg
  }

  function createFinalAzimuthOverlay(
    text: string,
    coord: [number, number],
    measurementId?: string
  ): Overlay {
    const el = document.createElement('div')
    el.className = 'lux-tooltip'
    el.innerHTML = text
    if (measurementId && el.dataset) el.dataset.measurementId = measurementId
    const ov = new Overlay({
      element: el,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
    })
    ov.setPosition(coord)
    // No debug logging here by default
    try {
      map
        .getOverlays()
        .getArray()
        .forEach(o => {
          try {
            const _el2 = (o as any).getElement && (o as any).getElement()
            void _el2
          } catch (e) {
            // ignore
          }
        })
    } catch (e) {
      // ignore
    }
    map.addOverlay(ov as any)
    return ov
  }

  function activate(mode: Mode) {
    if (!map) return
    // ensure measure layer exists
    let src = measureLayer.value?.getSource() as VectorSource | undefined
    if (!src) {
      src = new VectorSource()
      measureLayer.value = new VectorLayer({ source: src })
      ;(measureLayer.value as any).set('cyLayerType', 'interactionMeasureLayer')
      map.addLayer(measureLayer.value as any)
    }

    const drawType =
      mode === 'azimuth'
        ? ('Circle' as any)
        : mode === 'area'
        ? ('Polygon' as any)
        : ('LineString' as any)
    const interaction = new Draw({ type: drawType, source: src })

    // pointer move for live preview (also move hint overlay if present)
    pointerMoveKey.value = listen(map, 'pointermove', (event: any) => {
      lastPointerCoord.value = event.coordinate as [number, number]
      try {
        if (hintOverlay.value && map) {
          hintOverlay.value.setPosition(event.coordinate as any)
        }
      } catch (e) {
        // ignore
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
            // ignore
          }
        }
      } catch (e) {
        // ignore
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
          offset: [0, -15],
          positioning: 'bottom-center',
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
          // ignore
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
              // ignore
            }
            // update circle radius
            try {
              ;(previewCircle.getGeometry() as Circle).setRadius(
                Math.sqrt(
                  (edge[0] - center[0]) ** 2 + (edge[1] - center[1]) ** 2
                )
              )
            } catch (e) {
              // ignore
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
              // ignore
            }
          } catch (err) {
            // ignore
          }
        })

        azimuthTransient.value = {
          radial: previewRadial,
          preview: previewCircle,
          key,
        }

        // ensure transient cleanup is run on reset
        persistentRemovers.push(() => {
          try {
            unByKey(azimuthTransient.value?.key)
          } catch (e) {
            // ignore
          }
          try {
            if (azimuthPreviewOverlay.value && map)
              map.removeOverlay(azimuthPreviewOverlay.value as any)
          } catch (e) {
            // ignore
          }
          try {
            if (azimuthTransient.value?.radial)
              src!.removeFeature(azimuthTransient.value.radial)
            if (azimuthTransient.value?.preview)
              src!.removeFeature(azimuthTransient.value.preview)
          } catch (e) {
            // ignore
          }
        })
      } catch (e) {
        // ignore
      }
    })

    // drawend: finalize style and keep feature on layer, then deactivate tool
    listen(interaction, 'drawend', evt => {
      // Create persistent measurement overlay anchored at middle of line for non-azimuth modes
      const geom = (evt as DrawEvent).feature?.getGeometry()
      if (geom && map && currentMode.value !== 'azimuth') {
        const disposer = drawTooltip.createPersistentMeasurement(map, geom)
        persistentRemovers.push(disposer)
      }

      // remove transient tooltip and hint
      drawTooltip.remove()
      // remove hint overlay when finishing draw
      removeHintOverlay()
      if (pointerMoveKey.value) {
        unByKey(pointerMoveKey.value)
        pointerMoveKey.value = null
      }
      removeHintOverlay()

      const feature: Feature | undefined = (evt as DrawEvent).feature
      if (feature) {
        if (mode === 'area') {
          // apply polygon style with translucent fill (dynamic import for Fill)
          import('ol/style').then(({ Fill }) => {
            feature.setStyle(
              new Style({
                stroke: new Stroke({ color: '#ff8c00', width: 3 }),
                fill: new (Fill as any)({ color: 'rgba(255,140,0,0.15)' }),
              })
            )
          })
        } else if (mode === 'azimuth') {
          // finalize azimuth: create a proper Circle geometry and a persistent radial line,
          // show radius label and compute elevation diff for Δh
          import('ol/style').then(({ Fill }) => {
            feature.setStyle(
              new Style({
                stroke: new Stroke({ color: '#ff8c00', width: 3 }),
                fill: new (Fill as any)({ color: 'rgba(255,140,0,0.05)' }),
              })
            )
          })

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

            // add a persistent radial feature (center -> edge)
            const radialFeature = new Feature({
              geometry: new LineString([center, edge]),
            })
            radialFeature.setStyle(
              new Style({ stroke: new Stroke({ color: '#ff8c00', width: 2 }) })
            )
            radialFeature.set('isMeasurement', true)
            radialFeature.set('isAzimuthRadial', true)
            src!.addFeature(radialFeature)
            // ensure radial removed on reset
            persistentRemovers.push(() => src!.removeFeature(radialFeature))

            // place azimuth overlay at the midpoint of the radial (show radius/bearing/Δh)
            const mid: [number, number] = [
              (center[0] + edge[0]) / 2,
              (center[1] + edge[1]) / 2,
            ]
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
                // ignore
              }
              azimuthPreviewOverlay.value = null
            }

            // avoid creating a final overlay twice for the same feature
            let alreadyFinalized = false
            try {
              alreadyFinalized =
                (feature as any)?.get &&
                (feature as any).get('finalOverlayCreated')
            } catch (e) {
              // ignore
            }

            let finalOv: Overlay | null = null
            if (!alreadyFinalized) {
              try {
                void src!.getFeatures().length
              } catch (e) {
                // ignore
              }
              // create a final persistent overlay for this azimuth
              const measurementId = uuidv4()
              try {
                ;(feature as any).set('measurementId', measurementId)
              } catch (e) {
                // ignore
              }
              try {
                radialFeature.set('measurementId', measurementId)
              } catch (e) {
                // ignore
              }
              finalOv = createFinalAzimuthOverlay(
                `${bearingText} — ${radius} — Δh: N/A`,
                mid,
                measurementId
              )
              try {
                // annotate overlay element so reset can find it
                const el = finalOv?.getElement()
                if (el && (el as any).dataset)
                  (el as any).dataset.measurementId = measurementId
              } catch (e) {
                // ignore
              }
              try {
                ;(feature as any).set('finalOverlayRef', finalOv)
              } catch (e) {
                // ignore
              }
              // ensure the feature itself is removed on reset
              try {
                const feat = feature
                persistentRemovers.push(() => {
                  try {
                    src!.removeFeature(feat)
                  } catch (e) {
                    // ignore
                  }
                })
              } catch (e) {
                // ignore
              }
            } else {
              // final overlay already created for this feature, skipping creation
            }

            // fetch elevation for center and edge to compute Δh
            ;(async () => {
              try {
                const [eCenter, eEdge] = await Promise.all([
                  getElevation(center as [number, number]),
                  getElevation(edge as [number, number]),
                ])
                if (eCenter === null || eEdge === null) {
                  logWarn(
                    '[measure][azimuth] elevation data missing for points',
                    {
                      eCenter,
                      eEdge,
                      center,
                      edge,
                    }
                  )
                  if (finalOv) {
                    const el = finalOv.getElement()
                    if (el)
                      el.innerHTML = `${bearing.toFixed(
                        1
                      )}° — ${radius} — Δh: N/A`
                    finalOv.setPosition(mid)
                  }
                } else {
                  const dh = Math.round(eEdge - eCenter)
                  if (finalOv) {
                    const el = finalOv.getElement()
                    if (el)
                      el.innerHTML = `${bearing.toFixed(
                        1
                      )}° — ${radius} — Δh: ${dh} m`
                    finalOv.setPosition(mid)
                  }
                }
              } catch (err) {
                logError('[measure][azimuth] elevation request failed', err)
                if (finalOv) {
                  const el = finalOv.getElement()
                  if (el)
                    el.innerHTML = `${bearing.toFixed(
                      1
                    )}° — ${radius} — Δh: N/A`
                  finalOv.setPosition(mid)
                }
              }
            })()
          }
        } else {
          feature.setStyle(MEASURE_STYLE)
        }
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
      // cleanup azimuth transient radial feature
      if (azimuthTransient.value) {
        try {
          const { radial, preview, key } = azimuthTransient.value as any
          unByKey(key)
          if (radial) src!.removeFeature(radial)
          if (preview) src!.removeFeature(preview)
        } catch (e) {
          // ignore
        }
        azimuthTransient.value = null
      }
      drawInteraction.value = null
      currentMode.value = undefined
      isActive.value = false
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
      // ignore
    }
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
      unByKey(pointerMoveKey.value)
      pointerMoveKey.value = null
    }
    removeHintOverlay()
    // cleanup azimuth transient features if present (cancelled drawing)
    if (azimuthTransient.value) {
      try {
        const { radial, preview, key } = azimuthTransient.value as any
        unByKey(key)
        const src = measureLayer.value?.getSource()
        if (src) {
          if (radial) src!.removeFeature(radial)
          if (preview) src!.removeFeature(preview)
        }
      } catch (e) {
        // ignore
      }
      azimuthTransient.value = null
    }
    // remove preview overlay only (keep final overlays persistent)
    if (azimuthPreviewOverlay.value && map) {
      try {
        map.removeOverlay(azimuthPreviewOverlay.value as any)
      } catch (e) {
        // ignore
      }
      azimuthPreviewOverlay.value = null
    }
    lastPointerCoord.value = null
    isActive.value = false
  }

  function reset() {
    // Ensure interaction and overlays removed
    deactivate()

    // First run persistent removers (overlays, radial features, explicit removers)
    try {
      try {
        void map.getOverlays().getArray().length
      } catch (e) {
        // ignore
      }
      persistentRemovers.forEach(r => r())
      try {
        void map.getOverlays().getArray().length
      } catch (e) {
        // ignore
      }
    } catch (e) {
      // ignore
    }
    persistentRemovers.length = 0

    try {
      // Iterate all layers and remove measurement features from any vector source.
      const layers = map.getLayers().getArray().slice()
      layers.forEach(l => {
        try {
          const srcLayer = (l as any).getSource && (l as any).getSource()
          if (!srcLayer || !srcLayer.getFeatures) return

          // remove measurement-related features
          srcLayer
            .getFeatures()
            .slice()
            .forEach((f: any) => {
              try {
                if (
                  f.get &&
                  (f.get('isMeasurement') ||
                    f.get('isAzimuthRadial') ||
                    f.get('isAzimuth') ||
                    f.get('isAzimuthPreview') ||
                    (f.get('finalOverlayCreated') &&
                      f.get('isMeasurement') === undefined))
                ) {
                  srcLayer.removeFeature(f)
                }
              } catch (e) {
                // ignore
              }
            })

          // Force remove any Circle geometries
          srcLayer
            .getFeatures()
            .slice()
            .forEach((f: any) => {
              try {
                if (
                  f.getGeometry &&
                  f.getGeometry().getType &&
                  f.getGeometry().getType() === 'Circle'
                ) {
                  srcLayer.removeFeature(f)
                }
              } catch (e) {
                // ignore
              }
            })

          // If this is a measure layer, remove it entirely to avoid duplicates on next activate
          try {
            if (
              (l as any).get &&
              (l as any).get('cyLayerType') === 'interactionMeasureLayer'
            ) {
              map.removeLayer(l)
            }
          } catch (e) {
            // ignore
          }
        } catch (e) {
          // ignore
        }
      })

      // Also remove any overlays that still have a measurementId set
      try {
        removeAllMeasurementOverlays(map)
      } catch (e) {
        // ignore
      }

      // ensure our cached reference is cleared so the layer will be recreated on next use
      measureLayer.value = null
    } catch (e) {
      // ignore
    }
    lastPointerCoord.value = null

    // remove persistent overlays
    persistentRemovers.forEach(r => r())
    // No-op: final overlays are removed via persistentRemovers; preview overlay handled separately
    // Remove any leftover measurement overlays (safeguard) — overlays created for measures use
    // the 'lux-tooltip' class so we can safely remove them here during reset
    try {
      const overlays = map.getOverlays().getArray().slice()
      overlays.forEach((ov: Overlay) => {
        try {
          const el = (ov as any).getElement && (ov as any).getElement()
          if (el && el.classList && el.classList.contains('lux-tooltip')) {
            map.removeOverlay(ov as any)
          }
        } catch (e) {
          // ignore
        }
      })
    } catch (e) {
      // ignore
    }
    persistentRemovers.length = 0
  }

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
        if (el && el.dataset && el.dataset.measurementId) {
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
