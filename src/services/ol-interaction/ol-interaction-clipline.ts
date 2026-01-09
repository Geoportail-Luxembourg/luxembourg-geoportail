import { Collection, Map, MapBrowserEvent } from 'ol'
import {
  closestOnSegment,
  Coordinate,
  squaredDistance,
  squaredDistanceToSegment,
} from 'ol/coordinate'
import { unlistenByKey } from 'ol/events'
import BaseEvent from 'ol/events/Event'
import { boundingExtent, buffer, createOrUpdateFromCoordinate } from 'ol/extent'
import Feature from 'ol/Feature'
import { LineString, Point } from 'ol/geom'
import { Pointer } from 'ol/interaction'
import { ModifyEvent } from 'ol/interaction/Modify'
import VectorLayer from 'ol/layer/Vector'
import { Pixel } from 'ol/pixel'
import RBush from 'ol/structs/RBush'
import ViewHint from 'ol/ViewHint'

import { olLayerFactoryService } from '../ol-layer/ol-layer-factory.service'
import { DrawnFeature } from '../ol-feature/ol-feature-drawn'

class OlInteractionClipLine extends Pointer {
  dragSegments_: null
  features_: Collection<Feature>
  lastPixel_: Pixel = [0, 0]
  listener: any
  modified_ = false
  overlay_: VectorLayer
  pixelTolerance_ = 10
  rBush_ = new RBush()
  snappedToVertex_ = false
  vertexFeature_: Feature | null = null

  constructor() {
    super({ handleDownEvent, handleEvent, handleUpEvent })

    this.overlay_ = <VectorLayer>(
      olLayerFactoryService.createOlLayerInteractionClip()
    )
  }

  get overlay() {
    return this.overlay_
  }

  addFeature_(feature: Feature) {
    if (feature.getGeometry()?.getType() === 'LineString') {
      const geometry = <LineString>feature.getGeometry()
      const map = this.getMap()

      this.writeLineStringGeometry_(feature, geometry)

      if (map && this.lastPixel_[0] !== 0 && this.lastPixel_[1] !== 0) {
        this.handlePointerAtPixel_(this.lastPixel_, map)
      }
    }
  }

  removeFeature_(feature: Feature) {
    this.removeFeatureSegmentData_(feature)
    // Remove the vertex feature if the collection of canditate features
    // is empty.
    if (this.vertexFeature_ && this.features_.getLength() === 0) {
      this.overlay_.getSource()?.removeFeature(this.vertexFeature_)
      this.vertexFeature_ = null
    }

    if (this.listener) {
      unlistenByKey(this.listener)
    }
  }

  removeFeatureSegmentData_(feature: Feature) {
    const rBush = this.rBush_
    const nodesToRemove = []

    rBush.forEach(function (node) {
      if (feature === node.feature) {
        nodesToRemove.push(node)
      }
    })
    for (let i = nodesToRemove.length - 1; i >= 0; --i) {
      rBush.remove(nodesToRemove[i])
    }
  }

  setMap(map: Map | null) {
    this.overlay_.setMap(map)
    super.setMap(map)
  }

  /**
   * @param {ol.events.Event} evt Event.
   * @private
   */
  handleFeatureChange_(evt: BaseEvent) {
    const feature = evt.target
    this.removeFeature_(feature)
    this.addFeature_(feature)
  }

  handleFeatureChanged(feature: DrawnFeature) {
    this.removeFeature_(feature)
    this.addFeature_(feature)
  }

  writeLineStringGeometry_(feature: Feature, geometry: LineString) {
    const coordinates = geometry.getCoordinates()
    let i, ii, segment, segmentData
    for (i = 0, ii = coordinates.length - 1; i < ii; ++i) {
      segment = coordinates.slice(i, i + 2)
      segmentData = {
        feature,
        geometry,
        index: i,
        segment,
      }
      this.rBush_.insert(boundingExtent(segment), segmentData)
    }
  }

  createOrUpdateVertexFeature_(coordinates: Coordinate): Feature {
    let vertexFeature = this.vertexFeature_

    if (!vertexFeature) {
      vertexFeature = new Feature(new Point(coordinates))
      this.vertexFeature_ = vertexFeature
      this.overlay_.getSource()?.addFeature(vertexFeature)
    } else {
      const geometry = <Point>vertexFeature.getGeometry()
      geometry.setCoordinates(coordinates)
    }

    return vertexFeature
  }

  setActive(active: boolean) {
    this.handlingDownUpSequence = false

    if (this.overlay_ !== undefined) {
      if (this.vertexFeature_) {
        this.overlay_.getSource()?.removeFeature(this.vertexFeature_)
        this.vertexFeature_ = null
      }
    }

    // TODO move in watcher
    const map = this.getMap()
    if (map) {
      if (active) {
        map.getTargetElement().style.cursor = 'crosshair'
      } else {
        map.getTargetElement().style.cursor = ''
      }
    }

    super.setActive(active)
  }

  handlePointerMove_(evt: MapBrowserEvent) {
    this.lastPixel_ = evt.pixel
    this.handlePointerAtPixel_(evt.pixel, evt.map)
  }

  handlePointerAtPixel_(pixel: Pixel, map: Map) {
    if (!this.getActive()) {
      return
    }

    const pixelCoordinate = map.getCoordinateFromPixel(pixel)
    const sortByDistance = function (a, b) {
      return (
        squaredDistanceToSegment(pixelCoordinate, a.segment) -
        squaredDistanceToSegment(pixelCoordinate, b.segment)
      )
    }

    const box = buffer(
      createOrUpdateFromCoordinate(pixelCoordinate),
      map.getView().getResolution()! * this.pixelTolerance_
    )

    const rBush = this.rBush_
    const nodes = rBush.getInExtent(box)

    if (nodes.length > 0) {
      nodes.sort(sortByDistance)
      const node = nodes[0]
      const closestSegment = node.segment
      let vertex = closestOnSegment(pixelCoordinate, closestSegment)
      const vertexPixel = map.getPixelFromCoordinate(vertex)

      if (
        Math.sqrt(squaredDistance(pixel, vertexPixel)) <= this.pixelTolerance_
      ) {
        const pixel1 = map.getPixelFromCoordinate(closestSegment[0])
        const pixel2 = map.getPixelFromCoordinate(closestSegment[1])
        const squaredDist1 = squaredDistance(vertexPixel, pixel1)
        const squaredDist2 = squaredDistance(vertexPixel, pixel2)
        const dist = Math.sqrt(Math.min(squaredDist1, squaredDist2))
        this.snappedToVertex_ = dist <= this.pixelTolerance_

        if (this.snappedToVertex_) {
          vertex =
            squaredDist1 > squaredDist2 ? closestSegment[1] : closestSegment[0]
        }

        this.createOrUpdateVertexFeature_(vertex)

        return
      }
    }

    if (this.vertexFeature_) {
      this.overlay_.getSource()?.removeFeature(this.vertexFeature_)
      this.vertexFeature_ = null
    }
  }
}

function compareIndexes_(a: { index: number }, b: { index: number }): number {
  return a.index - b.index
}

/**
 * @param evt Event.
 * @return Stop drag sequence?
 */
function handleUpEvent(
  this: OlInteractionClipLine,
): boolean {
  this.handlingDownUpSequence = false
  return false
}

/**
 * @param evt Event.
 * @return Start drag sequence?
 * @private
 */
function handleDownEvent(this: OlInteractionClipLine, evt: MapBrowserEvent) {
  this.handlePointerAtPixel_(evt.pixel, evt.map)
  this.dragSegments_ = []
  this.modified_ = false
  const vertexFeature = this.vertexFeature_

  if (vertexFeature) {
    const geometry = <Point>vertexFeature.getGeometry()
    const vertex = geometry.getCoordinates()
    const vertexExtent = boundingExtent([vertex])
    const segmentDataMatches = this.rBush_.getInExtent(vertexExtent)
    segmentDataMatches.sort(compareIndexes_)

    for (let i = 0, ii = segmentDataMatches.length; i < ii; ++i) {
      const segmentDataMatch = segmentDataMatches[i]

      if (
        segmentDataMatch.feature !== undefined &&
        this.features_.getArray().indexOf(segmentDataMatch.feature) >= 0
      ) {
        const closestVertex = closestOnSegment(vertex, segmentDataMatch.segment)
        if (!equals(closestVertex, vertex)) {
          continue
        }

        this.features_.remove(segmentDataMatch.feature)
        const feature1 = segmentDataMatch.feature.clone()
        const feature2 = segmentDataMatch.feature.clone()
        const geometry1 = <LineString>feature1.getGeometry()
        const geometry2 = <LineString>feature2.getGeometry()
        const origLineStringGeom = <LineString>(
          segmentDataMatch.feature.getGeometry()
        )
        const coordsPart1 = origLineStringGeom
          .getCoordinates()
          .slice(0, [segmentDataMatch.index + 1])
        coordsPart1.push(vertex)
        const coordsPart2 = origLineStringGeom
          .getCoordinates()
          .slice([segmentDataMatch.index + 1])

        coordsPart1.push(vertex)
        coordsPart2.splice(0, 0, vertex)
        geometry1.setCoordinates(coordsPart1)
        geometry2.setCoordinates(coordsPart2)
        this.features_.push(feature1)
        this.features_.push(feature2)

        this.dispatchEvent(
          new ModifyEvent(
            'modifyend',
            new Collection([feature1, feature2, segmentDataMatch.feature]),
            evt
          )
        )
        this.modified_ = true
      }
    }
  }

  this.handlePointerAtPixel_(evt.pixel, evt.map)

  return !!this.vertexFeature_
}

/**
 * Handles the MapBrowserEvent and may modify the geometry
 * @param mapBrowserEvent Map browser event
 * @return `false` to stop event propagation
 */
export function handleEvent(
  this: OlInteractionClipLine,
  mapBrowserEvent: MapBrowserEvent
): boolean {
  if (!(mapBrowserEvent instanceof MapBrowserEvent)) {
    return true
  }

  if (
    !mapBrowserEvent.map.getView().getHints()[ViewHint.INTERACTING] &&
    mapBrowserEvent.type == 'pointermove' &&
    !this.handlingDownUpSequence
  ) {
    this.handlePointerMove_(mapBrowserEvent)
  }

  return Pointer.prototype.handleEvent.call(this, mapBrowserEvent)
}

export default OlInteractionClipLine
