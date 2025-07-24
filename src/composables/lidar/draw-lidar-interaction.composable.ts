import { listen } from 'ol/events'
import Draw, { DrawEvent } from 'ol/interaction/Draw'
import useMap from '@/composables/map/map.composable'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill.js'
import Stroke from 'ol/style/Stroke'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.store'
import { useLidarStore } from '@/stores/lidar.store'
import { Feature, Map } from 'ol'
import LineString from 'ol/geom/LineString'
import { transform } from 'ol/proj'
import { Coordinate } from 'ol/coordinate'
import olGeomPolygon from 'ol/geom/Polygon'
import { LidarManager } from '@/services/lidar/lidar-manager'
import drawTooltip from '@/composables/draw/draw-tooltip'

let lidarManager: LidarManager
export default function useDrawLidarInteraction() {
  const appStore = useAppStore()
  const lidarStore = useLidarStore()
  const { drawLidarActive, currentProfileFeature, profileWidth, lidarConfig } =
    storeToRefs(lidarStore)
  const { lidarOpen } = storeToRefs(appStore)
  let map: Map
  const drawInteraction = new Draw({ type: 'LineString' })
  const lineStyle = new Style({
    fill: new Fill({ color: 'rgba(255,204,51,0.5)' }),
    stroke: new Stroke({
      color: 'rgba(255,204,51,0.5)',
      width: 4,
      lineCap: 'square',
    }),
  })
  const vectorLayer = new VectorLayer({
    source: new VectorSource(),
    zIndex: 1001,
  })

  function init() {
    map = useMap().getOlMap()
    lidarManager = new LidarManager()
    lidarManager.init(lidarConfig)
    watch(lidarOpen, lidarOpen => {
      if (lidarOpen) {
        drawLidarActive.value = true
      } else {
        drawLidarActive.value = false
        const source = vectorLayer.getSource()
        if (source) {
          source.clear()
        }
      }
    })
    watch(
      () => currentProfileFeature.value,
      feature => {
        const source = vectorLayer.getSource()
        if (source) {
          source.clear()
          if (feature) {
            //source.addFeature(feature as Feature);
            drawRectangle(feature.getGeometry() as LineString)
          }
        }
      }
    )
    watch(
      () => profileWidth.value,
      () => {
        const source = vectorLayer.getSource()
        if (source) {
          source.clear()
          if (currentProfileFeature.value) {
            if (currentProfileFeature.value) {
              //source.addFeature(currentProfileFeature.value as Feature);
              drawRectangle(
                currentProfileFeature.value.getGeometry() as LineString
              )
            }
          }
        }
      }
    )

    drawInteraction.setActive(false)
    watch(drawLidarActive, drawLidarActive => {
      drawInteraction.setActive(drawLidarActive)
    })

    map.addInteraction(drawInteraction)
    map.addLayer(vectorLayer)
    vectorLayer.setStyle(lineStyle)
    listen(drawInteraction, 'drawstart', event =>
      drawTooltip.add(map, event as DrawEvent)
    )
    listen(drawInteraction, 'drawend', event => {
      onDrawEnd(event as DrawEvent)
    })
    listen(document, 'keyup', event => {
      onKeyUp(event as KeyboardEvent)
    })
  }
  function onDrawEnd(event: DrawEvent) {
    drawInteraction.finishDrawing()
    drawLidarActive.value = false
    event.stopPropagation()
    currentProfileFeature.value = event!.feature
    generatePlot()
  }

  /**
   * Deactivate this interaction if the ESC key is pressed.
   * @param event
   */
  function onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      drawInteraction.finishDrawing()
      drawInteraction.setActive(false)
    }
  }
  function drawRectangle(line: LineString) {
    const coords = line.getCoordinates()
    for (let i = 0; i < coords.length - 1; i++) {
      const p1 = transform(
        coords[i],
        map.getView().getProjection(),
        'EPSG:2169'
      )
      const p2 = transform(
        coords[i + 1],
        map.getView().getProjection(),
        'EPSG:2169'
      )
      const rectangle = getRectangle(p1, p2, profileWidth.value / 2)
      const rectangle3857 = rectangle.transform(
        'EPSG:2169',
        map.getView().getProjection()
      )
      const f1 = new Feature({ geometry: rectangle3857 })
      vectorLayer.getSource()!.addFeature(f1)
    }
  }
  function getRectangle(p1: Coordinate, p2: Coordinate, d: number) {
    const [x1, y1] = p1
    const [x2, y2] = p2
    const m = (x2 - x1) / (y2 - y1)
    const dy = Math.sqrt(Math.pow(d, 2) / (Math.pow(m, 2) + 1))
    const dx = -m * dy
    const x3 = x1 + dy
    const y3 = y1 + dx
    const x4 = x2 - dy
    const y4 = y2 - dx
    const x5 = x1 - dy
    const y5 = y1 - dx
    const x6 = x2 + dy
    const y6 = y2 + dx
    return new olGeomPolygon([
      [
        [x3, y3],
        [x5, y5],
        [x4, y4],
        [x6, y6],
        [x3, y3],
      ],
    ])
  }
  function resetPlot() {
    lidarManager.clearBuffer()
    lidarManager.resetPlot()
    lidarManager.getProfileByLOD(
      [],
      0,
      lidarConfig.value.serverConfig.minLOD,
      false,
      profileWidth.value
    )
  }
  function generatePlot() {
    lidarManager.resetPlot()
    lidarManager.clearBuffer()
    lidarManager.setLine(
      currentProfileFeature
        .value!.clone()!
        .getGeometry()!
        .transform('EPSG:3857', 'EPSG:2169') as LineString
    )
    lidarManager.getProfileByLOD(
      [],
      0,
      lidarConfig.value.serverConfig.minLOD,
      false,
      profileWidth.value
    )
    // todo PIWIK
  }

  function exportCsv() {
    lidarManager.exportCsv()
  }
  function exportPng() {
    lidarManager.exportPng()
  }
  function exportLas() {
    lidarManager.exportLas()
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
  function updateData() {
    lidarManager.resetPlot()
    lidarManager.updateData()
  }
  function setMeasureActive() {
    lidarManager.clearMeasure()
    lidarManager.setMeasureActive()
  }
  function clearMeasure() {
    lidarManager.clearMeasure()
  }
  return {
    drawInteraction,
    drawLidarActive,
    resetPlot,
    lidarManager,
    hasLineFeature,
    exportCsv,
    exportPng,
    exportLas,
    init,
    updateData,
    setMeasureActive,
    clearMeasure,
  }
}
