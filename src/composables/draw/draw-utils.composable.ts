import { Feature, Map } from 'ol'
import { Circle, LineString } from 'ol/geom'
import Polygon, { fromCircle } from 'ol/geom/Polygon'
import { getDistance } from 'ol/sphere'
import { toLonLat } from 'ol/proj'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { setCircleRadius } from '@/services/common/measurement.utils'
import { useDrawStore } from '@/stores/draw.store'
import useMap from '../map/map.composable'
import { storeToRefs } from 'pinia'
import { nextTick } from 'vue'

// TODO 3D
// import { transform } from 'ol/proj'
// import olcsCore from 'olcs/core.js';

// TODO 3D
// const ARROW_MODEL_URL = import.meta.env.VITE_ARROW_MODEL_URL

/**
 * Note that feature.featureType and geom?.getType() values mostly correspond to each other.
 * One exception are 'drawnCircle' featureTypes that are managed as 'Polygon' geometries within the URL and during export.
 * (Another exception are 'drawnLabel' featureTypes that are managed as 'Point' geometries throughout the application.)
 * @param feature Feature with a circle geometry
 * @returns The same feature with a polygon geometry
 */
function convertCircleFeatureToPolygon(feature: DrawnFeature): DrawnFeature {
  const geom = feature.getGeometry()
  if (feature.featureType === 'drawnCircle' && geom?.getType() === 'Circle') {
    feature.setGeometry(fromCircle(geom as Circle, 64))
  }
  return feature
}

/**
 * Convert a Polygon feature to a Circle feature (in legacy v3 we used Polygon for Circle)
 * @param feature Feature with a polygon geometry
 * @returns The same feature with a circle geometry
 */
function convertPolygonFeatureToCircle(feature: DrawnFeature): DrawnFeature {
  const map: Map = useMap().getOlMap()
  const polygon = feature.getGeometry() as Polygon
  if (
    feature.featureType === 'drawnCircle' &&
    polygon?.getType() === 'Polygon'
  ) {
    const extent = polygon.getExtent()
    const centroid = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2]
    const coordinates = polygon.getCoordinates()[0]
    let maxDistance = 0
    coordinates.forEach(coord => {
      const distance = getDistance(toLonLat(centroid), toLonLat(coord))
      if (distance > maxDistance) {
        maxDistance = distance
      }
    })
    const circle = new Circle(centroid)
    setCircleRadius(circle, maxDistance, map)
    feature.setGeometry(circle as Circle)
  }
  return feature
}

function lineChangeOrientation(feature: DrawnFeature) {
  const reversedCoordinates = (<LineString>feature.getGeometry())
    .getCoordinates()
    .reverse()
  feature.setGeometry(new LineString(reversedCoordinates))
}

/**
 * Merge multiple drawn line features
 * @param features The drawn feature to be merged (on of type 'Line'), other types will be ignored
 * @returns The first feature to which the other geom have been merged
 */
function mergeGeometryLines(features: DrawnFeature[]) {
  const drawStore = useDrawStore()
  const featureLines = features.filter(f =>
    ['LineString', 'MultiLineString'].includes(f.getGeometry()?.getType()!)
  )
  const firstFeature = featureLines.shift()
  const featureIdsToRemove = featureLines.map(f => f.id)

  if (!firstFeature) {
    return
  }

  const newGeom = <LineString>firstFeature.getGeometry()

  while (featureLines.length > 0) {
    const firstCoordFirstGeom = newGeom.getFirstCoordinate()
    const lastCoordFirstGeom = newGeom.getLastCoordinate()
    let prevLength = undefined
    let idxCanditate = -1
    let exchange = false
    let reverseLine = false

    for (let i = 0; i < featureLines.length; i++) {
      const curFeature = featureLines[i]
      const curGeom = <LineString>curFeature.getGeometry()
      const firstCoordCurGeom = curGeom.getFirstCoordinate()
      const lastCoordCurGeom = curGeom.getLastCoordinate()
      const line1 = new LineString([firstCoordFirstGeom, firstCoordCurGeom])
      const line4 = new LineString([lastCoordFirstGeom, lastCoordCurGeom])

      const line2 = new LineString([lastCoordFirstGeom, firstCoordCurGeom])
      const line3 = new LineString([firstCoordFirstGeom, lastCoordCurGeom])

      const lengthLine1 = line1.getLength()
      const lengthLine2 = line2.getLength()
      const lengthLine3 = line3.getLength()
      const lengthLine4 = line4.getLength()

      if (
        lengthLine1 < lengthLine2 &&
        lengthLine1 < lengthLine3 &&
        lengthLine1 < lengthLine4
      ) {
        if (prevLength === undefined || lengthLine1 < prevLength) {
          prevLength = lengthLine1
          idxCanditate = i
          exchange = true
          reverseLine = true
        }
      } else if (
        lengthLine4 < lengthLine1 &&
        lengthLine4 < lengthLine2 &&
        lengthLine4 < lengthLine3
      ) {
        if (prevLength === undefined || lengthLine4 < prevLength) {
          prevLength = lengthLine4
          idxCanditate = i
          exchange = false
          reverseLine = true
        }
      } else if (
        lengthLine2 < lengthLine1 &&
        lengthLine2 < lengthLine3 &&
        lengthLine2 < lengthLine4
      ) {
        if (prevLength === undefined || lengthLine2 < prevLength) {
          prevLength = lengthLine2
          idxCanditate = i
          exchange = false
          reverseLine = false
        }
      } else if (prevLength === undefined || lengthLine3 < prevLength) {
        prevLength = lengthLine3
        idxCanditate = i
        exchange = true
        reverseLine = false
      }
    }
    const candidateFeature = featureLines.shift()!
    let candidateGeom = <LineString>candidateFeature.getGeometry()

    if (reverseLine) {
      candidateGeom = new LineString(candidateGeom.getCoordinates().reverse())
    }

    newGeom.setCoordinates(
      exchange
        ? candidateGeom.getCoordinates().concat(newGeom.getCoordinates())
        : newGeom.getCoordinates().concat(candidateGeom.getCoordinates())
    )

    firstFeature.resetProfileData()
    drawStore.removeFeature(featureIdsToRemove)

    return firstFeature
  }
}

export {
  lineChangeOrientation,
  convertCircleFeatureToPolygon,
  convertPolygonFeatureToCircle,
  mergeGeometryLines,
}

export default function useDrawUtils() {
  const drawStore = useDrawStore()
  const { activateDrawLineContinue } = drawStore
  const { currentDrawInteraction } = storeToRefs(drawStore)
  const map = useMap().getOlMap()

  function createConcentricCircle(baseFeature: DrawnFeature, radius: number) {
    const newFeatureCircle = DrawnFeature.clone(baseFeature)
    const geometry = <Circle>newFeatureCircle.getGeometry()
    setCircleRadius(geometry, radius, map)

    return newFeatureCircle
  }

  async function continueLine(feature: DrawnFeature) {
    activateDrawLineContinue()

    if (currentDrawInteraction.value) {
      feature.editable = true // to display vertex // TODO: move elsewhere
      feature.changed()

      await nextTick() // mandatory! // FIXME: why?

      currentDrawInteraction.value?.setActive(true)
      currentDrawInteraction.value?.extend(<Feature<LineString>>feature)
    }
  }

  return {
    createConcentricCircle,
    continueLine,
  }
}
