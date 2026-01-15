/**
 * DrawRoute Interaction
 * Custom OpenLayers interaction for drawing routes with optional map-matching
 *
 * Based on: https://github.com/Geoportail-Luxembourg/geoportailv3/blob/master/geoportal/geoportailv3_geoportal/static-ngeo/js/interaction/DrawRoute.js
 */

import { Pointer as PointerInteraction } from 'ol/interaction'
import Draw from 'ol/interaction/Draw'
import { MapBrowserEvent } from 'ol'
import BaseEvent from 'ol/events/Event'
import Feature from 'ol/Feature'
import { LineString, Point } from 'ol/geom'
import { Coordinate } from 'ol/coordinate'
import VectorSource from 'ol/source/Vector'
import Collection from 'ol/Collection'
import GeoJSON from 'ol/format/GeoJSON'
import { transform } from 'ol/proj'
import MapBrowserEventType from 'ol/MapBrowserEventType'
import { StyleLike } from 'ol/style/Style'
import { createDefaultStyle } from 'ol/style/Style'

export interface DrawRouteOptions {
  /**
   * Vector source for the drawn features
   */
  source?: VectorSource

  /**
   * Collection of features
   */
  features?: Collection<Feature>

  /**
   * Enable map matching (routing)
   */
  mapMatching?: boolean

  /**
   * URL endpoint for route calculation
   */
  getRouteUrl?: string

  /**
   * Maximum number of points allowed
   */
  maxPoints?: number

  /**
   * Enable freehand drawing (disable snapping)
   */
  freehand?: boolean

  /**
   * Style for the sketch feature
   */
  style?: any

  /**
   * Existing sketch feature to continue drawing
   */
  existingSketch?: Feature
}

export class DrawRouteEvent extends BaseEvent {
  feature: Feature

  constructor(type: string, feature: Feature) {
    super(type)
    this.feature = feature
  }
}

/**
 * DrawRoute Interaction
 * Extends OpenLayers Pointer interaction to support route drawing with map-matching
 */
export class DrawRouteInteraction extends PointerInteraction {
  private source_?: VectorSource
  private features_?: Collection<Feature>
  private mapMatching_: boolean
  private getRouteUrl_?: string
  private maxPoints_: number
  private freehand_: boolean
  private style_: StyleLike

  // Drawing state
  private sketchFeature_: Feature | null = null
  private sketchPoint_: Feature | null = null
  private sketchLine_: Feature | null = null
  private sketchCoords_: Coordinate[] = []
  private finishCoordinate_: Coordinate | null = null

  // Map matching state
  private lastWaypoints_: string = ''
  private isRequestingRoute_: boolean = false
  private pointsCnt_: number[] = []
  private finishAfterRoute_: boolean = false

  // Event handling state
  private isDoubleClick_: boolean = false
  private clickTimeout_: number | null = null
  private active_: boolean = true

  constructor(options: DrawRouteOptions = {}) {
    super({
      stopDown: () => false, // Don't stop event propagation on pointer down
      handleDownEvent: handleDownEvent_,
      handleUpEvent: handleUpEvent_,
      handleMoveEvent: handleMoveEvent_,
      handleEvent: handleEvent_,
    })

    this.source_ = options.source
    this.features_ = options.features
    this.mapMatching_ = options.mapMatching ?? false
    this.getRouteUrl_ = options.getRouteUrl
    this.maxPoints_ = options.maxPoints ?? Infinity
    this.freehand_ = options.freehand ?? false

    // Use custom style or get default style from OpenLayers Draw
    // IMPORTANT: Must be set BEFORE adoptExistingSketch_ so the style is applied
    if (options.style) {
      this.style_ = options.style
    } else {
      // Create a temporary Draw interaction to get its default style
      const tempDraw = new Draw({
        type: 'LineString',
        source: new VectorSource(),
      })
      // Get the style function from the overlay (internal OL mechanism)
      const overlay = (tempDraw as any).overlay_
      if (overlay) {
        this.style_ = overlay.getStyleFunction()
      } else {
        // Fallback to createDefaultStyle if available
        this.style_ = createDefaultStyle
      }
    }

    // If there's an existing sketch, adopt it (must be after style_ is set)
    if (options.existingSketch) {
      this.adoptExistingSketch_(options.existingSketch)
    }
  }

  /**
   * Set the interaction as active or inactive
   */
  setActive(active: boolean): void {
    this.active_ = active
  }

  /**
   * Get active status
   */
  getActive(): boolean {
    return this.active_
  }

  /**
   * Activate or deactivate map matching
   */
  setMapMatching(active: boolean): void {
    this.mapMatching_ = active
  }

  /**
   * Get map matching status
   */
  getMapMatching(): boolean {
    return this.mapMatching_
  }

  /**
   * Toggle map matching
   */
  toggleMapMatching(): boolean {
    this.mapMatching_ = !this.mapMatching_
    return this.mapMatching_
  }

  /**
   * Start drawing
   */
  private startDrawing_(coordinate: Coordinate): void {
    this.finishCoordinate_ = coordinate
    this.sketchCoords_ = [coordinate.slice(), coordinate.slice()]

    const geometry = new LineString(this.sketchCoords_)
    this.sketchFeature_ = new Feature({ geometry })

    // Apply the same default style as OpenLayers Draw interaction
    this.sketchFeature_.setStyle(this.style_)

    // Create the cursor guide point with the same style
    this.sketchPoint_ = new Feature({
      geometry: new Point(coordinate),
    })
    this.sketchPoint_.setStyle(this.style_)

    // Add sketch feature to source so it's visible
    if (this.source_) {
      this.source_.addFeature(this.sketchFeature_)
      if (this.sketchPoint_) {
        this.source_.addFeature(this.sketchPoint_)
      }
    }

    this.updateSketchFeatures_()
  }

  /**
   * Adopt an existing sketch feature from another interaction
   */
  private adoptExistingSketch_(existingSketch: Feature): void {
    const geometry = existingSketch.getGeometry()

    if (!(geometry instanceof LineString)) {
      return
    }

    // Adopt the feature and its coordinates
    this.sketchFeature_ = existingSketch
    this.sketchCoords_ = geometry.getCoordinates()

    // Apply our style - force the feature to use our style function
    this.sketchFeature_.setStyle(this.style_)

    // Make sure the sketch is in the source (not just in an overlay)
    if (this.source_) {
      // Check if it's already in the source
      const features = this.source_.getFeatures()
      if (!features.includes(this.sketchFeature_)) {
        this.source_.addFeature(this.sketchFeature_)
      }
    }

    // Set finish coordinate to the last point
    if (this.sketchCoords_.length >= 2) {
      this.finishCoordinate_ =
        this.sketchCoords_[this.sketchCoords_.length - 2].slice()
    } else if (this.sketchCoords_.length === 1) {
      this.finishCoordinate_ = this.sketchCoords_[0].slice()
    }

    // Create the cursor guide point
    const lastCoord = this.sketchCoords_[this.sketchCoords_.length - 1]
    this.sketchPoint_ = new Feature({
      geometry: new Point(lastCoord),
    })
    this.sketchPoint_.setStyle(this.style_)

    // Add guide point to source
    if (this.source_ && this.sketchPoint_) {
      this.source_.addFeature(this.sketchPoint_)
    }
  }

  /**
   * Modify the drawing
   */
  private modifyDrawing_(coordinate: Coordinate): void {
    if (!this.sketchFeature_) return

    const geometry = this.sketchFeature_.getGeometry() as LineString
    const coordinates = this.sketchCoords_
    const last = coordinates[coordinates.length - 1]

    last[0] = coordinate[0]
    last[1] = coordinate[1]

    if (!this.isRequestingRoute_) {
      geometry.setCoordinates(this.sketchCoords_)
    }

    if (this.sketchPoint_) {
      const sketchPointGeom = this.sketchPoint_.getGeometry() as Point
      sketchPointGeom.setCoordinates(coordinate)
    }

    this.updateSketchFeatures_()
  }

  /**
   * Add a point to the drawing
   */
  private async addToDrawing_(coordinate: Coordinate): Promise<void> {
    if (!this.sketchFeature_) return

    const geometry = this.sketchFeature_.getGeometry() as LineString
    const coordinates = this.sketchCoords_

    this.finishCoordinate_ = coordinate.slice()

    // Check max points
    if (coordinates.length >= this.maxPoints_) {
      this.finishDrawing()
      return
    }

    // Replace the last coordinate (cursor guide) with the clicked point
    // then add a new cursor guide point
    coordinates[coordinates.length - 1] = coordinate.slice()
    coordinates.push(coordinate.slice())

    // If map matching is disabled or we're in freehand mode, just add the point
    if (!this.mapMatching_ || this.freehand_ || !this.getRouteUrl_) {
      this.pointsCnt_.push(1)
      geometry.setCoordinates(coordinates)
      this.updateSketchFeatures_()
      return
    }

    // Map matching logic
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

      const waypoints = `${antepenultimate[1]},${antepenultimate[0]},${penultimate[1]},${penultimate[0]}`

      if (waypoints !== this.lastWaypoints_ && !this.isRequestingRoute_) {
        this.lastWaypoints_ = waypoints
        await this.requestRoute_(waypoints, geometry, coordinate)
      }
    }

    if (!this.isRequestingRoute_) {
      const curCoordinates = geometry.getCoordinates().slice(0, -1)
      curCoordinates.push(coordinate)
      geometry.setCoordinates(curCoordinates)
    }
  }

  /**
   * Request route from API
   */
  private async requestRoute_(
    waypoints: string,
    geometry: LineString,
    lastCoordinate: Coordinate
  ): Promise<void> {
    if (!this.getRouteUrl_) return

    this.isRequestingRoute_ = true
    const url = `${this.getRouteUrl_}?waypoints=${waypoints}`

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.success) {
        const parser = new GeoJSON()
        const routedGeometry = parser.readGeometry(data.geom) as LineString

        this.pointsCnt_.push(routedGeometry.getCoordinates().length)

        const curCoordinates = geometry
          .getCoordinates()
          .slice(0, -2)
          .concat(
            routedGeometry.transform('EPSG:4326', 'EPSG:3857').getCoordinates()
          )

        if (!this.finishAfterRoute_) {
          curCoordinates.push(lastCoordinate)
        }

        geometry.setCoordinates(curCoordinates)
        this.sketchCoords_ = curCoordinates

        if (this.finishAfterRoute_) {
          this.finishAfterRoute_ = false
          this.finishCoordinate_ = null
          this.finishDrawing()
        } else {
          this.updateSketchFeatures_()
          if (curCoordinates.length >= 2) {
            this.finishCoordinate_ =
              curCoordinates[curCoordinates.length - 2].slice()
          }
        }
      }
    } catch (error) {
      // Route calculation failed, continue without routing
    } finally {
      this.isRequestingRoute_ = false
    }
  }

  /**
   * Remove the last point
   */
  removeLastPoint(): void {
    if (!this.sketchFeature_) return

    const geometry = this.sketchFeature_.getGeometry() as LineString
    const coordinates = this.sketchCoords_

    if (this.mapMatching_ && this.pointsCnt_.length > 0) {
      const curNb = this.pointsCnt_.pop()!
      coordinates.splice(-1 * curNb - 1, curNb)
    } else {
      coordinates.splice(-2, 1)
    }

    geometry.setCoordinates(coordinates)

    if (coordinates.length >= 2) {
      this.finishCoordinate_ = coordinates[coordinates.length - 2].slice()
    } else {
      this.finishCoordinate_ = null
    }

    this.updateSketchFeatures_()
  }

  /**
   * Finish the drawing
   */
  finishDrawing(): void {
    const sketchFeature = this.abortDrawing_()
    if (!sketchFeature) {
      return
    }

    // Dispatch drawend event
    this.dispatchEvent(new DrawRouteEvent('drawend', sketchFeature))

    // Add feature to source or collection
    if (this.features_) {
      this.features_.push(sketchFeature)
    }
    if (this.source_) {
      this.source_.addFeature(sketchFeature)
    }
  }

  /**
   * Suspend drawing without finishing - leaves sketch in place for another interaction
   */
  suspendDrawing(): void {
    // Remove only the guide point, keep the sketch line
    if (this.sketchPoint_ && this.source_) {
      this.source_.removeFeature(this.sketchPoint_)
    }

    // Clear references but don't remove the sketch feature
    this.sketchPoint_ = null
    this.finishCoordinate_ = null
    // Keep sketchFeature_ so Draw can continue with it
  }

  /**
   * Abort drawing and return the sketch feature
   */
  private abortDrawing_(): Feature | null {
    this.finishCoordinate_ = null
    const sketchFeature = this.sketchFeature_

    // Clear any pending click timeout
    if (this.clickTimeout_ !== null) {
      window.clearTimeout(this.clickTimeout_)
      this.clickTimeout_ = null
    }

    if (sketchFeature) {
      // Remove sketch features from source
      if (this.source_) {
        this.source_.removeFeature(sketchFeature)
        if (this.sketchPoint_) {
          this.source_.removeFeature(this.sketchPoint_)
        }
      }

      this.sketchFeature_ = null
      this.sketchPoint_ = null
      this.sketchLine_ = null
      this.updateSketchFeatures_()
    }

    return sketchFeature
  }

  /**
   * Update sketch features overlay
   */
  private updateSketchFeatures_(): void {
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

    // TODO: Update overlay layer with sketch features
    // This will depend on how overlays are managed in the v4 app
  }

  /**
   * Handle pointer move
   */
  private handlePointerMove_(event: MapBrowserEvent<any>): boolean {
    if (this.sketchFeature_) {
      this.modifyDrawing_(event.coordinate)
    }
    return true
  }
}

/**
 * Handle all map browser events - intercept double-click to finish drawing
 */
function handleEvent_(
  this: DrawRouteInteraction,
  event: MapBrowserEvent<any>
): boolean {
  const self = this as any

  // Don't process events if interaction is not active
  if (!self.active_) {
    return true // Let other interactions handle the event
  }

  // Handle double-click to finish drawing
  if (event.type === MapBrowserEventType.DBLCLICK) {
    self.isDoubleClick_ = true

    // Clear any pending singleclick timeout
    if (self.clickTimeout_ !== null) {
      window.clearTimeout(self.clickTimeout_)
      self.clickTimeout_ = null
    }

    self.finishDrawing()

    // Reset flag after a short delay
    setTimeout(() => {
      self.isDoubleClick_ = false
    }, 300)

    return false // Stop event propagation
  }

  // Handle single click to add points
  if (event.type === 'singleclick') {
    // Ignore singleclick if it's part of a double-click
    if (self.isDoubleClick_) {
      return false
    }

    const coordinate = event.coordinate

    if (!self.sketchFeature_) {
      // Start new drawing
      self.startDrawing_(coordinate)
    } else {
      // Add point to existing drawing
      self.addToDrawing_(coordinate)
    }
    return false
  }

  // Handle pointer move for sketch update
  if (event.type === 'pointermove') {
    if (self.finishCoordinate_) {
      self.modifyDrawing_(event.coordinate)
    }
  }

  // Let the pointer interaction handle other events
  return true
}

/**
 * Handle down event
 */
function handleDownEvent_(
  this: DrawRouteInteraction,
): boolean {
  return true
}

/**
 * Handle up event
 */
function handleUpEvent_(
  this: DrawRouteInteraction,
): boolean {
  // All click handling is done in handleEvent_ via singleclick/dblclick
  return false
}

/**
 * Handle move event
 */
function handleMoveEvent_(
  this: DrawRouteInteraction,
  event: MapBrowserEvent<any>
): boolean {
  return (this as any).handlePointerMove_(event)
}
