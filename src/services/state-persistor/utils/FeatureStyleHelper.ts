// !!! This is a file ported from v3 and not completely refactored, we accept some linter warnings //
/* eslint-disable @typescript-eslint/no-explicit-any */

import Feature from 'ol/Feature.js'
import Map from 'ol/Map.js'
import { Coordinate } from 'ol/coordinate.js'
import luxFormatFeatureProperties from './FeatureProperties'
import ngeoGeometryType from './GeometryTypes'
import * as olArray from 'ol/array.js'
import * as olColor from 'ol/color.js'
import * as olExtent from 'ol/extent.js'
import olGeomLineString from 'ol/geom/LineString.js'
import olGeomMultiLineString from 'ol/geom/MultiLineString.js'
import olGeomMultiPoint from 'ol/geom/MultiPoint.js'
import olGeomPoint from 'ol/geom/Point.js'
import olGeomPolygon from 'ol/geom/Polygon.js'
import olGeomMultiPolygon from 'ol/geom/MultiPolygon.js'
import olStyleCircle from 'ol/style/Circle.js'
import olStyleFill from 'ol/style/Fill.js'
import olStyleRegularShape from 'ol/style/RegularShape.js'
import olStyleStroke from 'ol/style/Stroke.js'
import olStyleStyle from 'ol/style/Style.js'
import olStyleText from 'ol/style/Text.js'
import * as olProj from 'ol/proj.js'
import {
  getFormattedLength,
  getFormattedArea,
  getFormattedAzimutRadius,
  getFormattedPoint,
} from '@/services/common/measurement.utils'

class FeatureStyleHelper {
  private precision_: number | undefined = undefined
  private projection_: olProj.Projection | undefined
  private decimals_ = 3
  private pointFilterFn_: Function | null = null
  private pointFilterArgs_: number[][] = []

  /**
   * @param {!ol.proj.Projection} projection Projection.
   * @export
   */
  public setProjection(projection: olProj.Projection) {
    this.projection_ = projection
  }

  // === STYLE METHODS ===

  /**
   * Set the style of a feature using its inner properties and depending on
   * its geometry type.
   * @param {!ol.Feature} feature Feature.
   * @param {boolean=} opt_select Whether the feature should be rendered as
   *     selected, which includes additional vertex and halo styles.
   * @export
   */
  public setStyle(feature: Feature, opt_select: boolean) {
    const styles = this.getStyle(feature)
    if (opt_select) {
      if (this.supportsVertex_(feature)) {
        styles.push(this.getVertexStyle())
      }
      styles.unshift(this.getHaloStyle_(feature))
    }
    // TODO TS hack as any
    feature.setStyle(styles as any)
  }

  /**
   * Create and return a style object from a given feature using its inner
   * properties and depending on its geometry type.
   * @param {!ol.Feature} feature Feature.
   * @return {!Array.<!ol.style.Style>} The style object.
   * @export
   */
  public getStyle(feature: Feature) {
    const type = this.getType(feature)
    let style

    switch (type) {
      case ngeoGeometryType.LINE_STRING:
        style = this.getLineStringStyle_(feature)
        break
      case ngeoGeometryType.POINT:
        style = this.getPointStyle_(feature)
        break
      case ngeoGeometryType.CIRCLE:
      case ngeoGeometryType.POLYGON:
      case ngeoGeometryType.RECTANGLE:
        style = this.getPolygonStyle_(feature)
        break
      case ngeoGeometryType.TEXT:
        style = this.getTextStyle_(feature)
        break
      default:
        break
    }

    console.assert(style, 'Style should be thruthy')

    let styles
    if (style instanceof Array) {
      styles = /** @type {!Array.<!ol.style.Style>}*/ style
    } else {
      styles = [style]
    }

    return styles
  }

  /**
   * @param {!ol.Feature} feature Feature with linestring geometry.
   * @return {!Array.<!ol.style.Style>} Style.
   * @private
   */
  public getLineStringStyle_(feature: Feature) {
    const strokeWidth = this.getStrokeProperty(feature)
    const showLabel = this.getShowLabelProperty(feature)
    const showMeasure = this.getShowMeasureProperty(feature)
    const color = this.getRGBAColorProperty(feature)

    const styles = [
      new olStyleStyle({
        stroke: new olStyleStroke({
          color: color,
          width: strokeWidth,
        }),
      }),
    ]
    //Label Style
    const textLabelValues = []
    if (showMeasure) {
      textLabelValues.push(this.getMeasure(feature))
    }
    if (showLabel) {
      textLabelValues.push(this.getNameProperty(feature))
    }
    if (showLabel || showMeasure) {
      // display both label using  \n
      const textLabelValue = textLabelValues.join('\n')
      styles.push(
        new olStyleStyle({
          text: this.createTextStyle_({
            text: textLabelValue,
          }),
        })
      )
    }
    return styles
  }

  /**
   * @param {!ol.Feature} feature Feature with point geometry.
   * @return {!Array.<!ol.style.Style>} Style.
   * @private
   */
  public getPointStyle_(feature: Feature) {
    const size = this.getSizeProperty(feature)
    const color = this.getRGBAColorProperty(feature)
    const showLabel = this.getShowLabelProperty(feature)
    const showMeasure = this.getShowMeasureProperty(feature)
    const styles = [
      new olStyleStyle({
        image: new olStyleCircle({
          radius: size,
          fill: new olStyleFill({
            color: color,
          }),
        }),
      }),
    ]
    // Label Style
    const textLabelValues = []
    if (showMeasure) {
      textLabelValues.push(this.getMeasure(feature))
    }
    if (showLabel) {
      textLabelValues.push(this.getNameProperty(feature))
    }
    if (showLabel || showMeasure) {
      // display both label using  \n
      const textLabelValue = textLabelValues.join('\n')
      const font_size = 10
      // https://reeddesign.co.uk/test/points-pixels.html
      const point_to_px = 1.3
      styles.push(
        new olStyleStyle({
          text: this.createTextStyle_({
            text: textLabelValue,
            size: font_size,
            offsetY: -(
              size +
              (font_size / 2) * textLabelValues.length * point_to_px +
              4
            ),
          }),
        })
      )
    }
    return styles
  }

  /**
   * Get an optional number feature attribute.
   *
   * @param {!ol.Feature} feature Feature.
   * @param {string} attrib The attribute name.
   * @return {number|undefined}, The attribute value
   */
  public optNumber(feature: Feature, attrib: string) {
    const value = feature.get(attrib)
    if (value !== undefined) {
      if (typeof value == 'string') {
        return +value
      } else {
        console.assert(typeof value === 'number')
        return value
      }
    } else {
      return undefined
    }
  }

  /**
   * Get a number feature attribute.
   *
   * @param {!ol.Feature} feature Feature.
   * @param {string} attrib The attribute name.
   * @return {number}, The attribute value
   */
  public getNumber(feature: Feature, attrib: string) {
    const value = feature.get(attrib)
    if (typeof value == 'string') {
      return +value
    } else {
      console.assert(typeof value === 'number')
      return value
    }
  }

  /**
   * @param {!ol.Feature} feature Feature with polygon geometry.
   * @return {!Array.<!ol.style.Style>} Style.
   * @private
   */
  public getPolygonStyle_(feature: Feature) {
    const strokeWidth = this.getStrokeProperty(feature)
    const opacity = this.getOpacityProperty(feature)
    const color = this.getRGBAColorProperty(feature)
    const showLabel = this.getShowLabelProperty(feature)
    const showMeasure = this.getShowMeasureProperty(feature)

    // fill color with opacity
    const fillColor = color.slice()
    fillColor[3] = opacity

    const azimut = this.optNumber(feature, luxFormatFeatureProperties.AZIMUT)

    const styles = [
      new olStyleStyle({
        fill: new olStyleFill({
          color: fillColor,
        }),
        stroke: new olStyleStroke({
          color: color,
          width: strokeWidth,
        }),
      }),
    ]
    if (showMeasure || showLabel) {
      if (showMeasure && azimut !== undefined) {
        // Radius style:
        const line = this.getRadiusLine(feature, azimut)
        const length = getFormattedLength(line, this.projection_!) //, this.precision_, this.unitPrefixFormat_);

        styles.push(
          new olStyleStyle({
            geometry: line,
            fill: new olStyleFill({
              color: fillColor,
            }),
            stroke: new olStyleStroke({
              color: color,
              width: strokeWidth,
            }),
            text: this.createTextStyle_({
              text: length,
              angle: (((azimut % 180) + 180) % 180) - 90,
            }),
          })
        )

        // Azimut style
        styles.push(
          new olStyleStyle({
            geometry: new olGeomPoint(line.getLastCoordinate()),
            text: this.createTextStyle_({
              text: `${azimut.toPrecision(this.decimals_)}°`,
              size: 10,
              offsetX: Math.cos(((azimut - 90) * Math.PI) / 180) * 20,
              offsetY: Math.sin(((azimut - 90) * Math.PI) / 180) * 20,
            }),
          })
        )

        //Label Style
        if (showLabel) {
          styles.push(
            new olStyleStyle({
              text: this.createTextStyle_({
                text: this.getNameProperty(feature),
                offsetY: -8,
                exceedLength: true,
              }),
            })
          )
        }
      } else {
        //Label Style
        const textLabelValues = []
        if (showMeasure) {
          textLabelValues.push(this.getMeasure(feature))
        }
        if (showLabel) {
          textLabelValues.push(this.getNameProperty(feature))
        }
        if (showLabel || showMeasure) {
          // display both label using  \n
          const textLabelValue = textLabelValues.join('\n')
          styles.push(
            new olStyleStyle({
              text: this.createTextStyle_({
                text: textLabelValue,
                exceedLength: true,
              }),
            })
          )
        }
      }
    }
    return styles
  }

  /**
   * @param {!ol.Feature} feature Feature with point geometry, rendered as text.
   * @return {!ol.style.Style} Style.
   * @private
   */
  public getTextStyle_(feature: Feature) {
    return new olStyleStyle({
      text: this.createTextStyle_({
        text: this.getNameProperty(feature),
        size: this.getSizeProperty(feature),
        angle: this.getAngleProperty(feature),
        color: this.getRGBAColorProperty(feature),
        width: this.getStrokeProperty(feature),
      }),
    })
  }

  /**
   * @param {!ol.Feature} feature Feature to create the editing styles with.
   * @return {!Array.<!ol.style.Style>} List of style.
   * @export
   */
  public createEditingStyles(feature: Feature) {
    // (1) Style definition depends on geometry type
    const white = [255, 255, 255, 1]
    const blue = [0, 153, 255, 1]
    const width = 3
    const styles = []

    const geom = feature.getGeometry()
    console.assert(geom)
    const type = geom!.getType()

    if (type === 'Point') {
      styles.push(
        new olStyleStyle({
          image: new olStyleCircle({
            radius: width * 2,
            fill: new olStyleFill({
              color: blue,
            }),
            stroke: new olStyleStroke({
              color: white,
              width: width / 2,
            }),
          }),
          zIndex: Infinity,
        })
      )
    } else {
      if (type === 'LineString') {
        styles.push(
          new olStyleStyle({
            stroke: new olStyleStroke({
              color: white,
              width: width + 2,
            }),
          })
        )
        styles.push(
          new olStyleStyle({
            stroke: new olStyleStroke({
              color: blue,
              width: width,
            }),
          })
        )
      } else {
        styles.push(
          new olStyleStyle({
            stroke: new olStyleStroke({
              color: blue,
              width: width / 2,
            }),
            fill: new olStyleFill({
              color: [255, 255, 255, 0.5],
            }),
          })
        )
      }

      // (2) Anything else than 'Point' requires the vertex style as well
      styles.push(this.getVertexStyle(true))
    }

    return styles
  }

  /**
   * Create and return a style object to be used for vertex.
   * @param {boolean=} opt_incGeomFunc Whether to include the geometry function
   *     or not. One wants to use the geometry function when you want to draw
   *     the vertex of features that don't have point geometries. One doesn't
   *     want to include the geometry function if you just want to have the
   *     style object itself to be used to draw features that have point
   *     geometries. Defaults to `true`.
   * @return {!ol.style.Style} Style.
   * @export
   */
  public getVertexStyle(opt_incGeomFunc?: boolean) {
    const incGeomFunc = opt_incGeomFunc !== undefined ? opt_incGeomFunc : true

    const options: { [key: string]: any } = {
      image: new olStyleRegularShape({
        radius: 6,
        points: 4,
        angle: Math.PI / 4,
        fill: new olStyleFill({
          color: [255, 255, 255, 0.5],
        }),
        stroke: new olStyleStroke({
          color: [0, 0, 0, 1],
        }),
      }),
    }

    if (incGeomFunc) {
      options.geometry = function (feature: Feature) {
        const geom = feature.getGeometry()

        if (geom!.getType() == 'Point') {
          return
        }

        let innerMultiCoordinates
        let multiCoordinates: Coordinate[][] = []
        let coordinates: Coordinate[] = []
        let i, ii
        if (geom instanceof olGeomLineString) {
          coordinates = geom.getCoordinates()
        } else if (geom instanceof olGeomMultiLineString) {
          multiCoordinates = geom.getCoordinates()
        } else if (geom instanceof olGeomPolygon) {
          coordinates = geom.getCoordinates()[0]
        } else if (geom instanceof olGeomMultiPolygon) {
          innerMultiCoordinates = geom.getCoordinates()
        }

        if (innerMultiCoordinates) {
          for (i = 0, ii = innerMultiCoordinates.length; i < ii; i++) {
            multiCoordinates = multiCoordinates.concat(innerMultiCoordinates[i])
          }
        }
        for (i = 0, ii = multiCoordinates.length; i < ii; i++) {
          coordinates = coordinates.concat(multiCoordinates[i])
        }

        if (coordinates.length) {
          return new olGeomMultiPoint(coordinates)
        } else {
          return geom
        }
      }
    }

    return new olStyleStyle(options)
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {boolean} Whether the feature supports vertex or not.
   * @private
   */
  public supportsVertex_(feature: Feature) {
    const supported = [
      ngeoGeometryType.LINE_STRING,
      ngeoGeometryType.POLYGON,
      ngeoGeometryType.RECTANGLE,
    ]
    const type = this.getType(feature)
    return olArray.includes(supported, type)
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {!ol.style.Style} Style.
   * @private
   */
  public getHaloStyle_(feature: Feature) {
    const type = this.getType(feature)
    let style
    const haloSize = 3

    switch (type) {
      case ngeoGeometryType.POINT:
        style = new olStyleStyle({
          image: new olStyleCircle({
            radius: this.getSizeProperty(feature) + haloSize,
            fill: new olStyleFill({
              color: [255, 255, 255, 1],
            }),
          }),
        })
        break
      case ngeoGeometryType.LINE_STRING:
      case ngeoGeometryType.CIRCLE:
      case ngeoGeometryType.POLYGON:
      case ngeoGeometryType.RECTANGLE:
        style = new olStyleStyle({
          stroke: new olStyleStroke({
            color: [255, 255, 255, 1],
            width: this.getStrokeProperty(feature) + haloSize * 2,
          }),
        })
        break
      case ngeoGeometryType.TEXT:
        style = new olStyleStyle({
          text: this.createTextStyle_({
            text: this.getNameProperty(feature),
            size: this.getSizeProperty(feature),
            angle: this.getAngleProperty(feature),
            width: haloSize * 3,
          }),
        })
        break
      default:
        break
    }

    console.assert(style, 'Style should be thruthy')

    return style
  }

  // === PROPERTY GETTERS ===

  // /**
  //  * Delete the unwanted ol3 properties from the current feature then return the
  //  * properties.
  //  * Also delete the 'ngeo_feature_type_' from the ngeo query system.
  //  * @param {!ol.Feature} feature Feature.
  //  * @return {!Object.<string, *>} Filtered properties of the current feature.
  //  * @export
  //  */
  // exports.getFilteredFeatureValues(feature: Feature) {
  //   const properties = feature.getProperties();
  //   delete properties['boundedBy'];
  //   delete properties[feature.getGeometryName()];
  //   delete properties['ngeo_feature_type_'];
  //   return properties;
  // };

  /**
   * @param {ol.Feature} feature Feature.
   * @return {number} Angle.
   * @export
   */
  public getAngleProperty(feature: Feature) {
    const angle = +(
      /** @type {string} */ feature.get(luxFormatFeatureProperties.ANGLE)
    )
    console.assert(typeof angle === 'number')
    return angle
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {string} Color.
   * @export
   */
  public getColorProperty(feature: Feature) {
    const color = feature.get(luxFormatFeatureProperties.COLOR)

    console.assert(typeof color === 'string')

    return color
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {ol.Color} Color.
   * @export
   */
  public getRGBAColorProperty(feature: Feature) {
    return olColor.fromString(this.getColorProperty(feature))
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {string} Name.
   * @export
   */
  public getNameProperty(feature: Feature) {
    const name = feature.get(luxFormatFeatureProperties.NAME)
    console.assert(typeof name === 'string')
    return name
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {number} Opacity.
   * @export
   */
  public getOpacityProperty(feature: Feature) {
    return this.getNumber(feature, luxFormatFeatureProperties.OPACITY)
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {boolean} Show measure.
   * @export
   */
  public getShowMeasureProperty(feature: Feature) {
    let showMeasure = feature.get(luxFormatFeatureProperties.SHOW_MEASURE)
    if (showMeasure === undefined) {
      showMeasure = false
    } else if (typeof showMeasure === 'string') {
      showMeasure = showMeasure === 'true' ? true : false
    }
    console.assert(typeof showMeasure === 'boolean')
    return showMeasure
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {boolean} Show feature label.
   * @export
   */
  public getShowLabelProperty(feature: Feature) {
    let showLabel = feature.get(luxFormatFeatureProperties.SHOW_LABEL)
    if (showLabel === undefined) {
      showLabel = false
    } else if (typeof showLabel === 'string') {
      showLabel = showLabel === 'true' ? true : false
    }
    console.assert(typeof showLabel === 'boolean')
    return showLabel
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {number} Size.
   * @export
   */
  public getSizeProperty(feature: Feature) {
    return this.getNumber(feature, luxFormatFeatureProperties.SIZE)
  }

  /**
   * @param {!ol.Feature} feature Feature.
   * @return {number} Stroke.
   * @export
   */
  public getStrokeProperty(feature: Feature) {
    return this.getNumber(feature, luxFormatFeatureProperties.STROKE)
  }

  // === OTHER UTILITY METHODS ===

  /**
   * @param {!ngeox.style.TextOptions} options Options.
   * @return {!ol.style.Text} Style.
   * @private
   */
  public createTextStyle_(options: { [key: string]: any }) {
    if (options.angle) {
      const angle = options.angle !== undefined ? options.angle : 0
      const rotation = (angle * Math.PI) / 180
      options.rotation = rotation
      delete options.angle
    }

    options.font = ['normal', `${options.size || 10}pt`, 'Arial'].join(' ')

    if (options.color) {
      options.fill = new olStyleFill({ color: options.color || [0, 0, 0, 1] })
      delete options.color
    }

    options.stroke = new olStyleStroke({
      color: [255, 255, 255, 1],
      width: options.width || 3,
    })
    delete options.width

    return new olStyleText(options)
  }

  /**
   * Get the measure of the given feature as a string. For points, you can format
   * the result by setting a filter to apply on the coordinate with the function
   * {@link ngeo.misc.FeatureHelper.prototype.setPointFilterFn}.
   * @param {!ol.Feature} feature Feature.
   * @return {string} Measure.
   * @export
   */
  public getMeasure(feature: Feature) {
    const geometry = feature.getGeometry()
    console.assert(geometry, 'Geometry should be truthy')

    let measure = ''

    if (geometry instanceof olGeomPolygon) {
      if (this.getType(feature) === ngeoGeometryType.CIRCLE) {
        const azimut = this.optNumber(
          feature,
          luxFormatFeatureProperties.AZIMUT
        )
        console.assert(typeof azimut === 'number')
        const line = this.getRadiusLine(feature, azimut || 10)

        measure = getFormattedAzimutRadius(
          line,
          this.projection_!,
          this.decimals_,
          this.precision_ || 3
        )
      } else {
        measure = getFormattedArea(geometry) //, this.projection_, this.precision_, this.unitPrefixFormat_);
      }
    } else if (geometry instanceof olGeomLineString) {
      measure = getFormattedLength(geometry, this.projection_!) //, this.precision_, this.unitPrefixFormat_);
    } else if (geometry instanceof olGeomPoint) {
      if (this.pointFilterFn_ === null) {
        measure = getFormattedPoint(geometry, this.decimals_)
      } else {
        const coordinates = geometry.getCoordinates()
        const args = this.pointFilterArgs_.slice(0)
        args.unshift(coordinates)
        measure = (this.pointFilterFn_ || ((c: boolean) => (c ? '' : '')))(
          ...args
        )
      }
    }

    return measure
  }

  /**
   * Return the type of geometry of a feature using its geometry property and
   * some inner properties.
   * @param {!ol.Feature} feature Feature.
   * @return {string} The type of geometry.
   * @export
   */
  public getType(feature: Feature) {
    const geometry = feature.getGeometry()
    console.assert(geometry, 'Geometry should be thruthy')

    let type

    if (geometry instanceof olGeomPoint) {
      if (feature.get(luxFormatFeatureProperties.IS_TEXT)) {
        type = ngeoGeometryType.TEXT
      } else {
        type = ngeoGeometryType.POINT
      }
    } else if (geometry instanceof olGeomMultiPoint) {
      type = ngeoGeometryType.MULTI_POINT
    } else if (geometry instanceof olGeomPolygon) {
      if (feature.get(luxFormatFeatureProperties.IS_CIRCLE)) {
        type = ngeoGeometryType.CIRCLE
      } else if (feature.get(luxFormatFeatureProperties.IS_RECTANGLE)) {
        type = ngeoGeometryType.RECTANGLE
      } else {
        type = ngeoGeometryType.POLYGON
      }
    } else if (geometry instanceof olGeomMultiPolygon) {
      type = ngeoGeometryType.MULTI_POLYGON
    } else if (geometry instanceof olGeomLineString) {
      type = ngeoGeometryType.LINE_STRING
    } else if (geometry instanceof olGeomMultiLineString) {
      type = ngeoGeometryType.MULTI_LINE_STRING
    }

    console.assert(type, 'Type should be thruthy')

    return type
  }

  /**
   * This method first checks if a feature's extent intersects with the map view
   * extent. If it doesn't, then the view gets recentered with an animation to
   * the center of the feature.
   * @param {!ol.Feature} feature Feature.
   * @param {!ol.Map} map Map.
   * @param {number=} opt_panDuration Pan animation duration. Defaults to `250`.
   * @export
   */
  public panMapToFeature(feature: Feature, map: Map, opt_panDuration?: number) {
    const panDuration = opt_panDuration !== undefined ? opt_panDuration : 250
    const size = map.getSize()
    console.assert(size instanceof Array)
    const view = map.getView()
    const extent = view.calculateExtent(size)
    const geometry = feature.getGeometry()

    if (!geometry!.intersectsExtent(extent)) {
      const mapCenter = view.getCenter()
      console.assert(mapCenter instanceof Array)

      let featureCenter
      if (geometry instanceof olGeomLineString) {
        featureCenter = geometry.getCoordinateAt(0.5)
      } else if (geometry instanceof olGeomPolygon) {
        featureCenter = geometry.getInteriorPoint().getCoordinates()
      } else if (geometry instanceof olGeomPoint) {
        featureCenter = geometry.getCoordinates()
      } else {
        featureCenter = olExtent.getCenter(geometry!.getExtent())
      }

      view.animate(
        {
          center: mapCenter,
          duration: panDuration,
        },
        {
          center: featureCenter,
          duration: panDuration,
        }
      )
    }
  }

  /**
   * This method generates a line string geometry that represents the radius for
   * a given azimut. It expects the input geometry to be a circle.
   * @param {!ol.Feature} feature Feature.
   * @param {number} azimut Azimut in degrees.
   * @return {!ol.geom.LineString} The line geometry.
   */
  public getRadiusLine(feature: Feature, azimut: number) {
    const geometry = feature.getGeometry()
    // Determine the radius for the circle
    const extent = geometry!.getExtent()
    const radius = (extent[3] - extent[1]) / 2

    const center = olExtent.getCenter(geometry!.getExtent())

    const x = Math.cos(((azimut - 90) * Math.PI) / 180) * radius
    const y = -Math.sin(((azimut - 90) * Math.PI) / 180) * radius
    const endPoint = [x + center[0], y + center[1]]
    return new olGeomLineString([center, endPoint])
  }

  /**
   * Return the properties of a feature, with the exception of the geometry.
   * @param {!ol.Feature} feature Feature.
   * @return {!Object.<string, *>} Object.
   * @export
   */
  public getNonSpatialProperties(feature: Feature) {
    const geometryName = feature.getGeometryName()
    const nonSpatialProperties: { [id: string]: string } = {}
    const properties = feature.getProperties()
    for (const key in properties) {
      if (key !== geometryName) {
        nonSpatialProperties[key] = properties[key]
      }
    }
    return nonSpatialProperties
  }

  /**
   * Clear all properties of a feature, with the exception of the geometry.
   * @param {!ol.Feature} feature Feature.
   * @export
   */
  public clearNonSpatialProperties(feature: Feature) {
    const geometryName = feature.getGeometryName()
    const properties = feature.getProperties()
    for (const key in properties) {
      if (key !== geometryName) {
        feature.set(key, undefined)
      }
    }
  }
}

export default FeatureStyleHelper
