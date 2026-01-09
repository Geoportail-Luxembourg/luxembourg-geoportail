import { createEditingStyle, StyleFunction } from 'ol/style/Style'
import olFeature from 'ol/Feature'
import olMapBrowserEventType from 'ol/MapBrowserEventType'
import { getChangeEventType } from 'ol/Object'
import { listen } from 'ol/events'
import olEventsEvent from 'ol/events/Event'
import { noModifierKeys, always, shiftKeyOnly } from 'ol/events/condition'
import olFormatGeoJSON from 'ol/format/GeoJSON'
import { TRUE, FALSE } from 'ol/functions'
import olGeomGeometryType from 'ol/geom/GeometryType'
import olGeomLineString from 'ol/geom/LineString'
import olGeomPoint from 'ol/geom/Point'
import olGeomPolygon from 'ol/geom/Polygon'
import { transform } from 'ol/proj'
import Pointer, { Options } from 'ol/interaction/Pointer'
import { Pixel } from 'ol/pixel'
import { Vector } from 'ol/source'
import { Collection, Feature, Map, MapBrowserEvent } from 'ol'
import { Coordinate } from 'ol/coordinate'
import { LineString, Point, SimpleGeometry } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

function getDefaultStyleFunction(): StyleFunction {
  const styles = createEditingStyle()
  return function (feature) {
    return styles[feature.getGeometry()!.getType()]
  }
}

/**
 * Interaction for drawing route geometries
 */
class DrawRoute extends Pointer {
  overlay_: any
  finishAfterRoute_: boolean
  shouldHandle_: boolean
  downPx_: Pixel | null
  freehand_: boolean
  mapMatching_: boolean
  source_: Vector
  features_: Collection<Feature>
  snapTolerance_: number
  type_: any
  mode_: string | undefined

  /**
   * The number of points that must be drawn before a polygon ring or line
   * string can be finished.  The default is 3 for polygon rings and 2 for
   */
  minPoints_: number

  /**
   * The number of points that can be drawn before a polygon ring or line string
   * is finished. The default is no restriction.
   */
  maxPoints_: number

  /**
   * A function to decide if a potential finish coordinate is permissable
   * @type {ol.EventsConditionType}
   */
  finishCondition_: any

  lastWaypoints_: string
  getRouteUrl_: string
  pointsCnt_: number[]
  isRequestingRoute_: boolean
  shouldStopEvent: () => boolean
  geometryFunction_: any
  finishCoordinate_: Coordinate | null
  sketchFeature_: Feature | null
  sketchPoint_: Feature | null

  /**
   * Sketch coordinates. Used when drawing a line or polygon.
   */
  sketchCoords_: Coordinate | null

  /**
   * Sketch line. Used when drawing polygon.
   */
  sketchLine_: Feature | null

  /**
   * Sketch line coordinates. Used when drawing a polygon or circle.
   */
  sketchLineCoords_: Coordinate | null

  /**
   * Squared tolerance for handling up events.  If the squared distance
   * between a down and up event is greater than this tolerance, up events
   * will not be handled.
   */
  squaredClickTolerance_: number

  /**
   * Name of the geometry attribute for newly created features.
   */
  geometryName_: string | undefined
  condition_: any // EventsConditionType
  freehandCondition_: any
  $http_: undefined
  static Event: typeof DrawRouteEvent

  constructor(options: Options) {
    super({
      stopDown: FALSE,
      handleDownEvent: handleDownEvent_,
      handleEvent: handleEvent,
      handleUpEvent: handleUpEvent_,
    })

    this.finishAfterRoute_ = false
    this.shouldHandle_ = false
    this.downPx_ = null
    this.freehand_ = false
    this.mapMatching_ = options.mapMatching
    this.source_ = options.source ? options.source : null
    this.features_ = options.features ? options.features : null
    this.snapTolerance_ = options.snapTolerance ? options.snapTolerance : 12
    this.type_ = /** @type {ol.geom.GeometryType} */ options.type
    this.mode_ = getMode_(this.type_)
    this.minPoints_ = options.minPoints
      ? options.minPoints
      : this.mode_ === Mode_.POLYGON
      ? 3
      : 2
    this.maxPoints_ = options.maxPoints ? options.maxPoints : Infinity
    this.finishCondition_ = options.finishCondition
      ? options.finishCondition
      : TRUE
    this.lastWaypoints_
    this.getRouteUrl_ = options.getRouteUrl
    this.pointsCnt_ = []
    this.isRequestingRoute_ = false
    this.shouldStopEvent = FALSE

    let geometryFunction = options.geometryFunction
    if (!geometryFunction) {
      geometryFunction = (
        coordinates: Coordinate,
        opt_geometry: SimpleGeometry
      ): SimpleGeometry => {
        let geometry = opt_geometry
        if (geometry) {
          if (!this.isRequestingRoute_) {
            geometry.setCoordinates(coordinates)
          }
        } else {
          geometry = new LineString(coordinates)
        }
        return geometry
      }
    }

    /**
     * @type {ol.DrawGeometryFunctionType}
     * @private
     */
    this.geometryFunction_ = geometryFunction

    this.finishCoordinate_ = null
    this.sketchFeature_ = null
    this.sketchPoint_ = null
    this.sketchCoords_ = null
    this.sketchLine_ = null
    this.sketchLineCoords_ = null
    this.squaredClickTolerance_ = options.clickTolerance
      ? options.clickTolerance * options.clickTolerance
      : 36

    this.overlay_ = new VectorLayer({
      role: 'DrawRoute',
      source: new VectorSource({
        useSpatialIndex: false,
        wrapX: options.wrapX ? options.wrapX : false,
      }),
      style: options.style ? options.style : getDefaultStyleFunction(),
    })
    this.geometryName_ = options.geometryName
    this.condition_ = options.condition ? options.condition : noModifierKeys
    this.freehandCondition_

    if (options.freehand) {
      this.freehandCondition_ = always
    } else {
      this.freehandCondition_ = options.freehandCondition
        ? options.freehandCondition
        : shiftKeyOnly
    }

    listen(this, getChangeEventType('active'), this.updateState_, this)
  }

  setMap(map: Map) {
    super.setMap(map)
    this.updateState_()
  }

  /**
   * Handle move events
   */
  handlePointerMove_(event: MapBrowserEvent): boolean {
    if (
      this.downPx_ &&
      ((!this.freehand_ && this.shouldHandle_) ||
        (this.freehand_ && !this.shouldHandle_))
    ) {
      const downPx = this.downPx_
      const clickPx = event.pixel
      const dx = downPx[0] - clickPx[0]
      const dy = downPx[1] - clickPx[1]
      const squaredDistance = dx * dx + dy * dy
      this.shouldHandle_ = this.freehand_
        ? squaredDistance > this.squaredClickTolerance_
        : squaredDistance <= this.squaredClickTolerance_
    }

    if (this.finishCoordinate_) {
      this.modifyDrawing_(event)
    } else {
      this.createOrUpdateSketchPoint_(event)
    }

    return true
  }

  /**
   * Determine if an event is within the snapping tolerance of the start coord.
   * @param event
   * @returns The event is within the snapping tolerance of the start.
   */
  atFinish_(event: MapBrowserEvent): boolean {
    let at = false
    if (this.sketchFeature_) {
      const potentiallyDone = !!(
        this.sketchCoords_?.length || 0 > this.minPoints_
      )
      const potentiallyFinishCoordinates = [this.finishCoordinate_]

      if (potentiallyDone) {
        const map = event.map
        for (let i = 0, ii = potentiallyFinishCoordinates.length; i < ii; i++) {
          const finishCoordinate = potentiallyFinishCoordinates[i]!
          const finishPixel = map.getPixelFromCoordinate(finishCoordinate)
          const pixel = event.pixel
          const dx = pixel[0] - finishPixel[0]
          const dy = pixel[1] - finishPixel[1]
          const snapTolerance = this.freehand_ ? 1 : this.snapTolerance_
          at = Math.sqrt(dx * dx + dy * dy) <= snapTolerance
          if (at) {
            this.finishCoordinate_ = finishCoordinate
            break
          }
        }
      }
    }
    return at
  }

  createOrUpdateSketchPoint_(event: MapBrowserEvent) {
    const coordinates = event.coordinate.slice()
    if (!this.sketchPoint_) {
      this.sketchPoint_ = new olFeature(new olGeomPoint(coordinates))
      this.updateSketchFeatures_()
    } else {
      const sketchPointGeom = <Point>this.sketchPoint_.getGeometry()
      sketchPointGeom.setCoordinates(coordinates)
    }
  }

  startDrawing_(event: MapBrowserEvent) {
    const start = event.coordinate
    this.finishCoordinate_ = start

    if (this.mode_ === Mode_.POINT) {
      this.sketchCoords_ = start.slice()
    } else if (this.mode_ === Mode_.POLYGON) {
      this.sketchCoords_ = [[start.slice(), start.slice()]]
      this.sketchLineCoords_ = this.sketchCoords_[0]
    } else {
      this.sketchCoords_ = [start.slice(), start.slice()]
      if (this.mode_ === Mode_.CIRCLE) {
        this.sketchLineCoords_ = this.sketchCoords_
      }
    }

    if (this.sketchLineCoords_) {
      this.sketchLine_ = new olFeature(
        new olGeomLineString(this.sketchLineCoords_)
      )
    }

    const geometry = this.geometryFunction_(this.sketchCoords_)
    this.sketchFeature_ = new olFeature()

    if (this.geometryName_) {
      this.sketchFeature_.setGeometryName(this.geometryName_)
    }

    this.sketchFeature_.setGeometry(geometry)
    this.updateSketchFeatures_()
    this.dispatchEvent(new DrawRouteEvent('drawstart', this.sketchFeature_))
  }

  modifyDrawing_(event: MapBrowserEvent) {
    const coordinate = event.coordinate
    const geometry =
      /** @type {ol.geom.SimpleGeometry} */ this.sketchFeature_.getGeometry()
    let last

    const coordinates = this.sketchCoords_
    if (!coordinates) return
    last = coordinates[coordinates.length - 1]

    last[0] = coordinate[0]
    last[1] = coordinate[1]
    this.geometryFunction_(
      /** @type {!ol.Coordinate|!Array.<ol.Coordinate>|!Array.<Array.<ol.Coordinate>>} */ this
        .sketchCoords_,
      geometry
    )
    if (this.sketchPoint_) {
      const sketchPointGeom =
        /** @type {ol.geom.Point} */ this.sketchPoint_.getGeometry()
      sketchPointGeom.setCoordinates(coordinate)
    }
    let sketchLineGeom
    if (geometry instanceof olGeomPolygon && this.mode_ !== Mode_.POLYGON) {
      if (!this.sketchLine_) {
        this.sketchLine_ = new olFeature(new olGeomLineString(null))
      }
      const ring = geometry.getLinearRing(0)
      sketchLineGeom =
        /** @type {ol.geom.LineString} */ this.sketchLine_.getGeometry()
      sketchLineGeom.setFlatCoordinates(
        ring.getLayout(),
        ring.getFlatCoordinates()
      )
    } else if (this.sketchLineCoords_) {
      sketchLineGeom =
        /** @type {ol.geom.LineString} */ this.sketchLine_.getGeometry()
      sketchLineGeom.setCoordinates(this.sketchLineCoords_)
    }
    this.updateSketchFeatures_()
  }

  /**
   * Add a new coordinate to the drawing.
   */
  addToDrawing_(event: MapBrowserEvent) {
    const coordinate = event.coordinate
    const geometry =
      /** @type {ol.geom.SimpleGeometry} */ this.sketchFeature_.getGeometry()
    let done
    let coordinates

    this.finishCoordinate_ = coordinate.slice()
    coordinates = this.sketchCoords_
    if (coordinates.length >= this.maxPoints_) {
      if (this.freehand_) {
        coordinates.pop()
      } else {
        done = true
      }
    }
    coordinates.push(coordinate.slice())
    if (
      !this.mapMatching_ ||
      this.freehand_ ||
      this.getRouteUrl_ === undefined ||
      this.$http_ === undefined
    ) {
      this.pointsCnt_.push(1)
      this.geometryFunction_(coordinates, geometry)
      this.updateSketchFeatures_()
    } else {
      const last = coordinates[coordinates.length - 1]
      if (coordinates.length > 2) {
        const penultimate = transform(
          coordinates[coordinates.length - 2],
          'EPSG:3857',
          'EPSG:4326'
        )
        const antepenultimate = transform(
          coordinates[coordinates.length - 3],
          'EPSG:3857',
          'EPSG:4326'
        )
        const waypoints =
          antepenultimate[1] +
          ',' +
          antepenultimate[0] +
          ',' +
          penultimate[1] +
          ',' +
          penultimate[0]
        if (waypoints !== this.lastWaypoints_ && !this.isRequestingRoute_) {
          this.lastWaypoints_ = waypoints
          const url = this.getRouteUrl_ + '?waypoints=' + waypoints
          this.isRequestingRoute_ = true
          this.$http_.get(url).then(
            function (resp) {
              const parser = new olFormatGeoJSON()
              if (resp['data']['success']) {
                const routedGeometry = parser.readGeometry(resp['data']['geom'])
                this.pointsCnt_.push(
                  /** @type {ol.geom.LineString} */ routedGeometry.getCoordinates()
                    .length
                )
                const curCoordinates = geometry
                  .getCoordinates()
                  .slice(0, geometry.getCoordinates().length - 2)
                  .concat(
                    /** @type {ol.geom.LineString} */ routedGeometry
                      .transform('EPSG:4326', 'EPSG:3857')
                      .getCoordinates()
                  )
                if (!this.finishAfterRoute_) {
                  curCoordinates.push(last)
                }
                geometry.setCoordinates(curCoordinates)
                this.sketchCoords_ = curCoordinates
              } else {
                console.log('Erreur de calcul de la route')
              }
              if (this.finishAfterRoute_) {
                this.finishAfterRoute_ = false
                this.finishCoordinate_ = null
                this.finishDrawing()
              } else {
                this.updateSketchFeatures_()
                if (coordinates.length >= 2) {
                  this.finishCoordinate_ =
                    coordinates[coordinates.length - 2].slice()
                }
              }
              this.isRequestingRoute_ = false
            }.bind(this)
          )
        }
      }
      if (!this.isRequestingRoute_) {
        const curCoordinates = geometry
          .getCoordinates()
          .slice(0, geometry.getCoordinates().length - 1)
        curCoordinates.push(last)
        geometry.setCoordinates(curCoordinates)
      }
    }
    if (done) {
      this.finishDrawing()
    }
  }

  /**
   * Activate or deactivate Map matching.
   * @param actif Set to true to activate mapmatching.
   */
  setMapMatching(actif: boolean) {
    this.mapMatching_ = actif
  }

  /**
   * Get the status of mapmatching.
   * @return Return true if mapMatching is active.
   */
  getMapMatching() {
    return this.mapMatching_
  }

  /**
   * Toggle the mapmatching status.
   * @return Return true if mapMatching is active.
   */
  toggleMapMatching() {
    this.mapMatching_ = !this.mapMatching_
    return this.mapMatching_
  }

  /**
   * Remove last point of the feature currently being drawn.
   */
  removeLastPoints() {
    if (!this.sketchFeature_) {
      return
    }

    const geometry = this.sketchFeature_.getGeometry()
    const coordinates = this.sketchCoords_
    const curNb = this.pointsCnt_.pop()
    coordinates.splice(-1 * curNb - 1, curNb)
    this.geometryFunction_(coordinates, geometry)
    if (coordinates.length >= 2) {
      this.finishCoordinate_ = coordinates[coordinates.length - 2].slice()
    }

    if (coordinates.length === 0) {
      this.finishCoordinate_ = null
    }

    this.updateSketchFeatures_()
  }

  /**
   * Remove last point of the feature currently being drawn.
   */
  removeLastPoint() {
    if (!this.sketchFeature_) {
      return
    }

    const geometry = this.sketchFeature_.getGeometry()
    let coordinates, sketchLineGeom
    if (this.mode_ === Mode_.LINE_STRING) {
      coordinates = this.sketchCoords_
      coordinates.splice(-2, 1)
      this.geometryFunction_(coordinates, geometry)
      if (coordinates.length >= 2) {
        this.finishCoordinate_ = coordinates[coordinates.length - 2].slice()
      }
    } else if (this.mode_ === Mode_.POLYGON) {
      coordinates = this.sketchCoords_[0]
      coordinates.splice(-2, 1)
      sketchLineGeom =
        /** @type {ol.geom.LineString} */ this.sketchLine_.getGeometry()
      sketchLineGeom.setCoordinates(coordinates)
      this.geometryFunction_(this.sketchCoords_, geometry)
    }

    if (coordinates.length === 0) {
      this.finishCoordinate_ = null
    }

    this.updateSketchFeatures_()
  }

  /**
   * Stop drawing and add the sketch feature to the target layer.
   * The drawend event is dispatched before
   * inserting the feature.
   */
  finishDrawing() {
    const sketchFeature = this.abortDrawing_()

    // First dispatch event to allow full set up of feature
    this.dispatchEvent(new DrawRouteEvent('drawend', sketchFeature))

    // Then insert feature
    if (this.features_) {
      this.features_.push(sketchFeature)
    }
    if (this.source_) {
      this.source_.addFeature(sketchFeature)
    }
  }

  /**
   * Stop drawing without adding the sketch feature to the target layer.
   * @return The sketch feature (or null if none).
   */
  abortDrawing_(): Feature | null {
    const sketchFeature = this.sketchFeature_
    this.finishCoordinate_ = null
    this.pointsCnt_ = []

    if (sketchFeature) {
      this.sketchFeature_ = null
      this.sketchPoint_ = null
      this.sketchLine_ = null
      this.overlay_.getSource().clear(true)
    }

    return sketchFeature
  }

  /**
   * Extend an existing geometry by adding additional points. This only works
   * on features with `LineString` geometries, where the interaction will
   * extend lines by adding points to the end of the coordinates array.
   * @param feature Feature to be extended.
   */
  extend(feature: Feature) {
    const geometry = feature.getGeometry()
    const lineString = /** @type {ol.geom.LineString} */ geometry
    this.sketchFeature_ = feature
    this.sketchCoords_ = lineString.getCoordinates()
    const last = this.sketchCoords_[this.sketchCoords_.length - 1]
    this.finishCoordinate_ = last.slice()
    this.sketchCoords_.push(last.slice())
    this.updateSketchFeatures_()
    this.dispatchEvent(new DrawRouteEvent('drawstart', this.sketchFeature_))
  }

  /**
   * Redraw the sketch features.
   */
  updateSketchFeatures_() {
    const sketchFeatures = []

    if (this.sketchFeature_) {
      sketchFeatures.push(this.sketchFeature_)
    }
    if (this.sketchLine_) {
      sketchFeatures.push(this.sketchLine_)
    }
    if (this.sketchPoint_) {
      sketchFeatures.push(this.sketchPoint_)
    }

    const overlaySource = this.overlay_.getSource()
    overlaySource.clear(true)
    overlaySource.addFeatures(sketchFeatures)
  }

  updateState_() {
    const map = this.getMap()
    const active = this.getActive()

    if (!map || !active) {
      this.abortDrawing_()
    }

    this.overlay_.setMap(active ? map : null)
  }
}

/**
 * Handles the MapBrowserEvent and may actually
 * draw or finish the drawing.
 * @param event Map browser event.
 * @return `false` to stop event propagation.
 */
function handleEvent(event: MapBrowserEvent): boolean {
  this.freehand_ = this.mode_ !== Mode_.POINT && this.freehandCondition_(event)
  let pass = !this.freehand_
  if (
    this.freehand_ &&
    event.type === olMapBrowserEventType.POINTERDRAG &&
    this.sketchFeature_ !== null
  ) {
    this.addToDrawing_(event)
    pass = false
  } else if (event.type === 'pointermove') {
    pass = this.handlePointerMove_(event)
  } else if (event.type === olMapBrowserEventType.DBLCLICK) {
    pass = false
  }

  return olInteractionPointer.prototype.handleEvent.call(this, event)
}

function handleDownEvent_(event: MapBrowserEvent): boolean {
  this.shouldHandle_ = !this.freehand_

  if (this.freehand_) {
    this.downPx_ = event.pixel
    if (!this.finishCoordinate_) {
      this.startDrawing_(event)
    }
    return true
  } else if (this.condition_(event)) {
    this.downPx_ = event.pixel
    return true
  }

  return false
}

function handleUpEvent_(event: MapBrowserEvent): boolean {
  let pass = true

  this.handlePointerMove_(event)

  const circleMode = this.mode_ === Mode_.CIRCLE

  if (this.shouldHandle_) {
    if (!this.finishCoordinate_) {
      this.startDrawing_(event)
      if (this.mode_ === Mode_.POINT) {
        this.finishDrawing()
      }
    } else if (this.freehand_ || circleMode) {
      this.finishDrawing()
    } else if (this.atFinish_(event)) {
      if (this.finishCondition_(event)) {
        if (this.isRequestingRoute_) {
          this.finishAfterRoute_ = true
        } else {
          this.finishDrawing()
        }
      }
    } else {
      this.addToDrawing_(event)
    }
    pass = false
  } else if (this.freehand_) {
    this.finishCoordinate_ = null
    this.abortDrawing_()
  }

  return pass
}

/**
 * Get the drawing mode.  The mode for mult-part geometries is the same as for
 * their single-part cousins.
 */
export const getMode_ = (type: string) => {
  let mode

  if (
    type === olGeomGeometryType.POINT ||
    type === olGeomGeometryType.MULTI_POINT
  ) {
    mode = Mode_.POINT
  } else if (
    type === olGeomGeometryType.LINE_STRING ||
    type === olGeomGeometryType.MULTI_LINE_STRING
  ) {
    mode = Mode_.LINE_STRING
  } else if (
    type === olGeomGeometryType.POLYGON ||
    type === olGeomGeometryType.MULTI_POLYGON
  ) {
    mode = Mode_.POLYGON
  } else if (type === olGeomGeometryType.CIRCLE) {
    mode = Mode_.CIRCLE
  }

  return mode
}

/**
 * Draw mode.  This collapses multi-part geometry types with their single-part
 * cousins.
 */
export const Mode_ = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  POLYGON: 'Polygon',
  CIRCLE: 'Circle',
}

class DrawRouteEvent extends olEventsEvent {
  feature: any
  constructor(type, feature) {
    super(type)

    /**
     * The feature being drawn.
     * @type {ol.Feature}
     * @api
     */
    this.feature = feature
  }
}

DrawRoute.Event = DrawRouteEvent

export default DrawRoute
