import ngeoFormatFeatureProperties from './FeatureProperties'
import { rgbArrayToHex } from './utils'

import olFeature from 'ol/Feature.js'
import olMap from 'ol/Map.js'
import { includes as arrayIncludes } from 'ol/array.js'
import { asArray as colorAsArray } from 'ol/color.js'
import { ReadOptions, transformGeometryWithOptions } from 'ol/format/Feature.js'
import olGeomGeometryLayout from 'ol/geom/GeometryLayout.js'
import olGeomLineString from 'ol/geom/LineString.js'
import olGeomMultiLineString from 'ol/geom/MultiLineString.js'
import olGeomMultiPoint from 'ol/geom/MultiPoint.js'
import olGeomMultiPolygon from 'ol/geom/MultiPolygon.js'
import olGeomPoint from 'ol/geom/Point.js'
import olGeomPolygon from 'ol/geom/Polygon.js'
import olStyleCircle from 'ol/style/Circle.js'
import olStyleFill from 'ol/style/Fill.js'
import olStyleStroke from 'ol/style/Stroke.js'
import olStyleStyle from 'ol/style/Style.js'
import olStyleText from 'ol/style/Text.js'
import Feature from 'ol/Feature.js'
import {
  Geometry,
  LineString,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
  Point,
  Polygon,
} from 'ol/geom'
import TextFeature from 'ol/format/TextFeature.js'
import Text from 'ol/style/Text.js'
import Stroke from 'ol/style/Stroke.js'
import Fill from 'ol/style/Fill.js'
import Style from 'ol/style/Style.js'
import { createStyleFunction } from '@/composables/draw/draw-utils'

const GeometryTypeValues = {
  LineString: 'LineString',
  Point: 'Point',
  Polygon: 'Polygon',
  MultiLineString: 'MultiLineString',
  MultiPoint: 'MultiPoint',
  MultiPolygon: 'MultiPolygon',
}

type GeometryType = keyof typeof GeometryTypeValues

/**
 * @enum {string}
 */
const FeatureHashStyleType = {
  LINE_STRING: 'LineString',
  POINT: 'Point',
  POLYGON: 'Polygon',
}

/**
 * @type {Object.<ol.geom.GeometryType, FeatureHashStyleType>}
 * @private
 */

const FeatureHashStyleTypes = {
  LineString: FeatureHashStyleType.LINE_STRING,
  Point: FeatureHashStyleType.POINT,
  Polygon: FeatureHashStyleType.POLYGON,
  MultiLineString: FeatureHashStyleType.LINE_STRING,
  MultiPoint: FeatureHashStyleType.POINT,
  MultiPolygon: FeatureHashStyleType.POLYGON,
}

/**
 * @type {Object.<string, string>}
 * @private
 */
let FeatureHashLegacyProperties: any = {}

class FeatureHash extends TextFeature {
  accuracy_: number
  encodeStyles_: boolean
  propertiesFunction_: (feature: olFeature) => {
    [key: string]: string | number
  }
  setStyle_: boolean
  prevX_: number
  prevY_: number
  /**
   * @classdesc
   * Provide an OpenLayers format for encoding and decoding features for use
   * in permalinks.
   *
   * The code is based on Stéphane Brunner's URLCompressed format.
   *
   * TODOs:
   *
   * - The OpenLayers-URLCompressed format has options where the user
   *   can define attribute and style transformers. This is currently
   *   not supported by this format.
   * - The OpenLayers-URLCompressed format has a "simplify" option.
   *   This format does not have it.
   * - ol.style.Icon styles are not supported.
   * - Transformation of coordinates during encoding and decoding is
   *   not supported.
   *
   * @see https://github.com/sbrunner/OpenLayers-URLCompressed
   * @constructor
   * @struct
   * @extends {ol.format.TextFeature}
   * @param {ngeox.format.FeatureHashOptions=} opt_options Options.
   * @export
   */
  constructor(opt_options: any) {
    super()

    const options = opt_options !== undefined ? opt_options : {}

    /**
     * @type {number}
     * @private
     */
    this.accuracy_ =
      options.accuracy !== undefined ? options.accuracy : ACCURACY_

    /**
     * @type {boolean}
     * @private
     */
    this.encodeStyles_ =
      options.encodeStyles !== undefined ? options.encodeStyles : true

    /**
     * @type {function(ol.Feature):Object.<string, (string|number)>}
     * @private
     */
    this.propertiesFunction_ =
      options.properties !== undefined
        ? options.properties
        : defaultPropertiesFunction_

    /**
     * @type {boolean}
     * @private
     */
    this.setStyle_ = options.setStyle !== undefined ? options.setStyle : true

    /**
     * @type {number}
     * @private
     */
    this.prevX_ = 0

    /**
     * @type {number}
     * @private
     */
    this.prevY_ = 0

    FeatureHashLegacyProperties =
      options.propertiesType !== undefined && options.propertiesType
  }

  /**
   * @inheritDoc
   * @export
   */
  //readFeature;

  /**
   * @inheritDoc
   * @export
   */
  //readFeatures;

  /**
   * @inheritDoc
   * @export
   */
  //readGeometry;

  /**
   * @inheritDoc
   * @export
   */
  //writeFeature;

  /**
   * @inheritDoc
   * @export
   */
  //writeFeatures;

  /**
   * @inheritDoc
   * @export
   */
  //writeGeometry;

  /**
   * Read a logical sequence of characters and return (or complet then return)
   * an array of numbers. The coordinates are assumed to be in
   * two dimensions and in latitude, longitude order.
   * corresponding to a geometry's coordinates.
   * @param {string} text Text.
   * @param {Array.<number>=} opt_flatCoordinates Flat coordinates array.
   * @return {Array.<number>} Flat coordinates.
   * @private
   */
  decodeCoordinates_(text: string, opt_flatCoordinates: number[]) {
    const len = text.length
    let index = 0
    const flatCoordinates =
      opt_flatCoordinates !== undefined ? opt_flatCoordinates : []
    let i = flatCoordinates.length
    while (index < len) {
      let b
      let shift = 0
      let result = 0
      do {
        b = CHAR64_.indexOf(text.charAt(index++))
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 32)
      const dx = result & 1 ? ~(result >> 1) : result >> 1
      this.prevX_ += dx
      shift = 0
      result = 0
      do {
        b = CHAR64_.indexOf(text.charAt(index++))
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 32)
      const dy = result & 1 ? ~(result >> 1) : result >> 1
      this.prevY_ += dy
      flatCoordinates[i++] = this.prevX_ * this.accuracy_
      flatCoordinates[i++] = this.prevY_ * this.accuracy_
    }
    return flatCoordinates
  }

  /**
   * Encode an array of number (corresponding to some coordinates) into a
   * logical sequence of characters. The coordinates are assumed to be in
   * two dimensions and in latitude, longitude order.
   * @param {Array.<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @return {string} String.
   * @private
   */
  encodeCoordinates_(
    flatCoordinates: number[],
    stride: number,
    offset: number,
    end: number
  ): string {
    let encodedCoordinates = ''
    for (let i = offset; i < end; i += stride) {
      let x = flatCoordinates[i]
      let y = flatCoordinates[i + 1]
      x = Math.floor(x / this.accuracy_)
      y = Math.floor(y / this.accuracy_)
      const dx = x - this.prevX_
      const dy = y - this.prevY_
      this.prevX_ = x
      this.prevY_ = y
      encodedCoordinates += encodeSignedNumber_(dx) + encodeSignedNumber_(dy)
    }
    return encodedCoordinates
  }

  /**
   * Read a feature from a logical sequence of characters.
   * @param {string} text Text.
   * @param {olx.format.ReadOptions=} opt_options Read options.
   * @return {ol.Feature} Feature.
   * @override
   * @protected
   */
  readFeatureFromText(text: string /*, opt_options: any*/) {
    console.assert(text.length > 2)
    console.assert(text[1] === '(')
    console.assert(text[text.length - 1] === ')')
    let splitIndex = text.indexOf('~')
    const geometryText =
      splitIndex >= 0 ? text.substring(0, splitIndex) + ')' : text
    const geometry = this.readGeometryFromText(geometryText /*, opt_options*/)
    const feature = new olFeature(geometry)
    if (splitIndex >= 0) {
      const attributesAndStylesText = text.substring(
        splitIndex + 1,
        text.length - 1
      )
      splitIndex = attributesAndStylesText.indexOf('~')
      const attributesText =
        splitIndex >= 0
          ? attributesAndStylesText.substring(0, splitIndex)
          : attributesAndStylesText
      if (attributesText != '') {
        const parts = attributesText.split("'")
        for (let i = 0; i < parts.length; ++i) {
          const part = parts[i]
          const keyVal = part.split('*')
          console.assert(keyVal.length === 2)
          let key = keyVal[0]
          const value = keyVal[1]
          if (!this.setStyle_ && FeatureHashLegacyProperties[key]) {
            key = FeatureHashLegacyProperties[key]
          }
          feature.set(key, value)
        }
      }
      if (splitIndex >= 0) {
        const stylesText = attributesAndStylesText.substring(splitIndex + 1)
        if (this.setStyle_) {
          setStyleInFeature_(stylesText, feature)
        } else {
          setStyleProperties_(stylesText, feature)
        }
      }
    }
    return feature
  }

  /**
   * Read multiple features from a logical sequence of characters.
   * @param {string} text Text.
   * @param {olx.format.ReadOptions=} opt_options Read options.
   * @return {Array.<ol.Feature>} Features.
   * @override
   * @protected
   */
  readFeaturesFromText(text: string /*, opt_options: any*/) {
    console.assert(text[0] === 'F')
    /** @type {Array.<ol.Feature>} */
    const features = []
    text = text.substring(1)
    while (text.length > 0) {
      const index = text.indexOf(')')
      console.assert(index >= 0)
      const feature = this.readFeatureFromText(
        text.substring(0, index + 1)
        /*,opt_options*/
      )
      features.push(feature)
      text = text.substring(index + 1)
    }
    return features
  }

  /**
   * Read a geometry from a logical sequence of characters.
   * @param {string} text Text.
   * @param {olx.format.ReadOptions=} opt_options Read options.
   * @return {ol.geom.Geometry} Geometry.
   * @override
   * @protected
   */
  readGeometryFromText(text: string /*, opt_options: any*/) {
    const geometryReader: any = GEOMETRY_READERS_[text[0] as GeometryReaderKeys]
    console.assert(geometryReader !== undefined)
    this.prevX_ = 0
    this.prevY_ = 0
    return geometryReader.call(this, text)
  }

  decodeShortProperties(feature: Feature, defaultOrder: number, map: olMap) {
    const properties = feature.getProperties()
    for (const key in SHORT_PARAM_) {
      if (properties[SHORT_PARAM_[key as ShortParamKeys]]) {
        feature.set(key, properties[SHORT_PARAM_[key as ShortParamKeys]])
        feature.unset(SHORT_PARAM_[key as ShortParamKeys])
      }
    }
    const order = feature.get('display_order') || defaultOrder
    feature.set('order', +order)

    let opacity = /** @type {string} */ feature.get('opacity')
    if (opacity === undefined) {
      opacity = 0
    }

    feature.set('opacity', +opacity)
    let stroke = /** @type {string} */ feature.get('stroke')
    if (isNaN(stroke)) {
      stroke = 2
    }
    feature.set('stroke', +stroke)
    let size = /** @type {string} */ feature.get('size')
    if (isNaN(size)) {
      size = 10
    }
    feature.set('size', +size)

    let angle = /** @type {string} */ feature.get('angle')
    if (isNaN(angle)) {
      angle = 0
    }
    feature.set('angle', +angle)
    const isLabel = /** @type {string} */ feature.get('isLabel')
    feature.set('isLabel', isLabel === 'true')
    const isCircle = /** @type {string} */ feature.get('isCircle')
    feature.set('isCircle', isCircle === 'true')
    const showOrientation = /** @type {string} */ feature.get('showOrientation')
    feature.set('showOrientation', showOrientation === 'true')

    feature.set('__map_id__', undefined)
    feature.setStyle(createStyleFunction(map))
  }

  /**
   * Encode a feature into a logical sequence of characters.
   * @param {ol.Feature} feature Feature.
   * @param {olx.format.ReadOptions=} opt_options Read options.
   * @return {string} Encoded feature.
   * @override
   * @protected
   */
  writeFeatureText(feature: Feature, opt_options: any) {
    const /** @type {Array.<string>} */ encodedParts = []

    // encode geometry

    let encodedGeometry = ''
    const geometry = feature.getGeometry()
    if (geometry !== undefined && geometry !== null) {
      encodedGeometry = this.writeGeometryText(geometry, opt_options)
    }

    if (encodedGeometry.length > 0) {
      // remove the final bracket
      console.assert(encodedGeometry[encodedGeometry.length - 1] === ')')
      encodedGeometry = encodedGeometry.substring(0, encodedGeometry.length - 1)
      encodedParts.push(encodedGeometry)
    }

    // encode properties

    const encodedProperties: string[] = []
    /**
     * @param {*} value Value.
     * @param {string} key Key.
     */
    const f = function (value: any, key: string) {
      if (key !== feature.getGeometryName()) {
        if (encodedProperties.length !== 0) {
          encodedProperties.push("'")
        }
        const encoded =
          key.replace(/[()'*]/g, '_') +
          '*' +
          value.toString().replace(/[()'*]/g, '_')

        encodedProperties.push(encoded)
      }
    }
    const obj = this.propertiesFunction_(feature)
    for (const key in obj) {
      f(obj[key], key)
    }

    if (encodedProperties.length > 0) {
      encodedParts.push('~')
      Array.prototype.push.apply(encodedParts, encodedProperties)
    }

    // encode styles

    if (this.encodeStyles_) {
      const styleFunction = feature.getStyleFunction()
      if (styleFunction !== undefined) {
        let styles = styleFunction.call(this, feature, 0)
        if (styles !== null) {
          const encodedStyles: string[] = []
          styles = Array.isArray(styles)
            ? (styles as Style[])
            : [styles as Style]
          encodeStyles_(
            styles,
            geometry?.getType() as GeometryType,
            encodedStyles
          )
          if (encodedStyles.length > 0) {
            encodedParts.push('~')
            Array.prototype.push.apply(encodedParts, encodedStyles)
          }
        }
      }
    }

    // append the closing bracket and return the encoded feature

    encodedParts.push(')')
    return encodedParts.join('')
  }

  /**
   * Encode an array of features into a logical sequence of characters.
   * @param {Array.<ol.Feature>} features Feature.
   * @param {olx.format.ReadOptions=} opt_options Read options.
   * @return {string} Encoded features.
   * @override
   * @protected
   */
  writeFeaturesText(features: Feature[], opt_options: ReadOptions) {
    const textArray = []
    if (features.length > 0) {
      textArray.push('F')
      for (let i = 0, ii = features.length; i < ii; ++i) {
        textArray.push(this.writeFeatureText(features[i], opt_options))
      }
    }
    return textArray.join('')
  }

  /**
   * Encode a geometry into a logical sequence of characters.
   * @param {ol.geom.Geometry} geometry Geometry.
   * @param {olx.format.ReadOptions=} opt_options Read options.
   * @return {string} Encoded geometry.
   * @override
   * @protected
   */
  writeGeometryText(geometry: Geometry, opt_options: ReadOptions) {
    const geometryWriter = GEOMETRY_WRITERS_[geometry.getType() as GeometryType]
    console.assert(geometryWriter !== undefined)
    const transformedGeometry = transformGeometryWithOptions(
      geometry,
      true,
      opt_options
    )
    this.prevX_ = 0
    this.prevY_ = 0
    return geometryWriter.call(this, transformedGeometry)
  }
}

/**
 * Characters used to encode the coordinates. The characters "~", "'", "("
 * and ")" are not part of this character set, and used as separators (for
 * example to separate the coordinates from the feature properties).
 * @const
 * @private
 */
const CHAR64_ =
  '.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz'

/**
 * @const
 * @private
 */
const ACCURACY_ = 1

/**
 * Get features's properties.
 * @param {ol.Feature} feature Feature.
 * @return {Object.<string, (string|number)>} The feature properties to
 * serialize.
 * @private
 */
function defaultPropertiesFunction_(feature: Feature) {
  return feature.getProperties()
}

/**
 * Sign then encode a number.
 * @param {number} num Number.
 * @return {string} String.
 * @private
 */
function encodeSignedNumber_(num: number) {
  let signedNum = num << 1
  if (num < 0) {
    signedNum = ~signedNum
  }
  return encodeNumber_(signedNum)
}

/**
 * Transform a number into a logical sequence of characters.
 * @param {number} num Number.
 * @return {string} String.
 * @private
 */
function encodeNumber_(num: number) {
  let encodedNumber = ''
  while (num >= 0x20) {
    encodedNumber += CHAR64_.charAt(0x20 | (num & 0x1f))
    num >>= 5
  }
  encodedNumber += CHAR64_.charAt(num)
  return encodedNumber
}

/**
 * For a type of geometry, transforms an array of {@link ol.style.Style} into
 * a logical sequence of characters and put the result into the given encoded
 * styles's array.
 * @param {Array.<ol.style.Style>} styles Styles.
 * @param {ol.geom.GeometryType} geometryType Geometry type.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @private
 */
function encodeStyles_(
  styles: Style[],
  geometryType: GeometryType,
  encodedStyles: string[]
) {
  const styleType = FeatureHashStyleTypes[geometryType]
  console.assert(styleType !== undefined)
  for (let i = 0; i < styles.length; ++i) {
    const style = styles[i]
    const fillStyle = style.getFill()
    const imageStyle = style.getImage()
    const strokeStyle = style.getStroke()
    const textStyle = style.getText()
    if (styleType == FeatureHashStyleType.POLYGON) {
      if (fillStyle !== null) {
        encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles)
      }
    } else if (styleType == FeatureHashStyleType.LINE_STRING) {
      if (strokeStyle !== null) {
        encodeStyleLine_(strokeStyle, encodedStyles)
      }
    } else if (styleType == FeatureHashStyleType.POINT) {
      if (imageStyle !== null) {
        encodeStylePoint_(imageStyle, encodedStyles)
      }
    }
    if (textStyle !== null) {
      encodeStyleText_(textStyle, encodedStyles)
    }
  }
}

/**
 * Transform an {@link ol.style.Stroke} into a logical sequence of
 * characters and put the result into the given encoded styles's array.
 * @param {ol.style.Stroke} strokeStyle Stroke style.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @private
 */
function encodeStyleLine_(strokeStyle: Stroke, encodedStyles: string[]) {
  encodeStyleStroke_(strokeStyle, encodedStyles)
}

/**
 * Transform an {@link ol.style.Circle} into a logical sequence of
 * characters and put the result into the given encoded styles's array.
 * @param {ol.style.Image} imageStyle Image style.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @private
 */
function encodeStylePoint_(imageStyle: any, encodedStyles: string[]) {
  if (imageStyle instanceof olStyleCircle) {
    const radius = imageStyle.getRadius()
    if (encodedStyles.length > 0) {
      encodedStyles.push("'")
    }
    encodedStyles.push('pointRadius*' + radius)
    const fillStyle = imageStyle.getFill()
    if (fillStyle !== null) {
      encodeStyleFill_(fillStyle, encodedStyles)
    }
    const strokeStyle = imageStyle.getStroke()
    if (strokeStyle !== null) {
      encodeStyleStroke_(strokeStyle, encodedStyles)
    }
  }
}

/**
 * Transform an {@link ol.style.Fill} and an {@link ol.style.Stroke} into
 * a logical sequence of characters and put the result into the given
 * encoded styles's array.
 * @param {ol.style.Fill} fillStyle Fill style.
 * @param {ol.style.Stroke} strokeStyle Stroke style.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @private
 */
function encodeStylePolygon_(
  fillStyle: Fill,
  strokeStyle: Stroke,
  encodedStyles: string[]
) {
  encodeStyleFill_(fillStyle, encodedStyles)
  if (strokeStyle !== null) {
    encodeStyleStroke_(strokeStyle, encodedStyles)
  }
}

/**
 * Transform an {@link ol.style.Fill} and optionally its properties into
 * a logical sequence of characters and put the result into the given encoded
 * styles's array.
 * @param {ol.style.Fill} fillStyle Fill style.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @param {string=} opt_propertyName Property name.
 * @private
 */
function encodeStyleFill_(
  fillStyle: Fill,
  encodedStyles: string[],
  opt_propertyName?: string
) {
  const propertyName =
    opt_propertyName !== undefined ? opt_propertyName : 'fillColor'
  const fillColor = fillStyle.getColor()
  if (fillColor !== null) {
    console.assert(Array.isArray(fillColor), 'only supporting fill colors')
    const fillColorRgba = colorAsArray(fillColor as number[])
    console.assert(Array.isArray(fillColorRgba), 'fill color must be an array')
    const fillColorHex = rgbArrayToHex(fillColorRgba as number[])
    if (encodedStyles.length > 0) {
      encodedStyles.push("'")
    }
    encodedStyles.push(propertyName + '*' + fillColorHex)
  }
}

/**
 * Transform an {@link ol.style.Stroke} into a logical sequence of
 * characters and put the result into the given encoded styles's array.
 * @param {ol.style.Stroke} strokeStyle Stroke style.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @private
 */
function encodeStyleStroke_(strokeStyle: Stroke, encodedStyles: string[]) {
  const strokeColor = strokeStyle.getColor()
  if (strokeColor !== null) {
    console.assert(Array.isArray(strokeColor))
    const strokeColorRgba = colorAsArray(strokeColor as number[])
    console.assert(
      Array.isArray(strokeColorRgba),
      'only supporting stroke colors'
    )
    const strokeColorHex = rgbArrayToHex(
      /** @type {!Array<number>} */ strokeColorRgba
    )
    if (encodedStyles.length > 0) {
      encodedStyles.push("'")
    }
    encodedStyles.push('strokeColor*' + strokeColorHex)
  }
  const strokeWidth = strokeStyle.getWidth()
  if (strokeWidth !== undefined) {
    if (encodedStyles.length > 0) {
      encodedStyles.push("'")
    }
    encodedStyles.push('strokeWidth*' + strokeWidth)
  }
}

/**
 * Transform an {@link ol.style.Text} into a logical sequence of characters and
 * put the result into the given encoded styles's array.
 * @param {ol.style.Text} textStyle Text style.
 * @param {Array.<string>} encodedStyles Encoded styles array.
 * @private
 */
function encodeStyleText_(textStyle: Text, encodedStyles: string[]) {
  const fontStyle = textStyle.getFont()
  if (fontStyle !== undefined) {
    const font = fontStyle.split(' ')
    if (font.length >= 3) {
      if (encodedStyles.length > 0) {
        encodedStyles.push("'")
      }
      encodedStyles.push('fontSize*' + font[1])
    }
  }
  const fillStyle = textStyle.getFill()
  if (fillStyle !== null) {
    encodeStyleFill_(fillStyle, encodedStyles, 'fontColor')
  }
}

/**
 * Read a logical sequence of characters and return a corresponding
 * {@link ol.geom.LineString}.
 * @param {string} text Text.
 * @return {ol.geom.LineString} Line string.
 * @this {FeatureHash}
 * @private
 */
function readLineStringGeometry_(this: FeatureHash, text: string) {
  console.assert(text.substring(0, 2) === 'l(')
  console.assert(text[text.length - 1] == ')')
  text = text.substring(2, text.length - 1)
  const flatCoordinates = (this as any)?.decodeCoordinates_(text)
  return new olGeomLineString(flatCoordinates, olGeomGeometryLayout.XY)
}

/**
 * Read a logical sequence of characters and return a corresponding
 * {@link ol.geom.MultiLineString}.
 * @param {string} text Text.
 * @return {ol.geom.MultiLineString} Line string.
 * @this {FeatureHash}
 * @private
 */
function readMultiLineStringGeometry_(this: FeatureHash, text: string) {
  console.assert(text.substring(0, 2) === 'L(')
  console.assert(text[text.length - 1] == ')')
  text = text.substring(2, text.length - 1)
  let flatCoordinates: number[] = []
  const ends = []
  const lineStrings = text.split("'")
  for (let i = 0, ii = lineStrings.length; i < ii; ++i) {
    flatCoordinates = (this as any)?.decodeCoordinates_(
      lineStrings[i],
      flatCoordinates
    )
    ends[i] = flatCoordinates.length
  }
  return new olGeomMultiLineString(
    flatCoordinates,
    olGeomGeometryLayout.XY,
    ends
  )
}

/**
 * Read a logical sequence of characters and return a corresponding
 * {@link ol.geom.Point}.
 * @param {string} text Text.
 * @return {ol.geom.Point} Point.
 * @this {FeatureHash}
 * @private
 */
function readPointGeometry_(this: FeatureHash, text: string) {
  console.assert(text.substring(0, 2) === 'p(')
  console.assert(text[text.length - 1] == ')')
  text = text.substring(2, text.length - 1)
  const flatCoordinates = (this as any)?.decodeCoordinates_(text)
  console.assert(flatCoordinates.length === 2)
  return new olGeomPoint(flatCoordinates, olGeomGeometryLayout.XY)
}

/**
 * Read a logical sequence of characters and return a corresponding
 * {@link ol.geom.MultiPoint}.
 * @param {string} text Text.
 * @return {ol.geom.MultiPoint} MultiPoint.
 * @this {FeatureHash}
 * @private
 */
function readMultiPointGeometry_(this: FeatureHash, text: string) {
  console.assert(text.substring(0, 2) === 'P(')
  console.assert(text[text.length - 1] == ')')
  text = text.substring(2, text.length - 1)
  const flatCoordinates = (this as any)?.decodeCoordinates_(text)
  return new olGeomMultiPoint(flatCoordinates, olGeomGeometryLayout.XY)
}

/**
 * Read a logical sequence of characters and return a corresponding
 * {@link ol.geom.Polygon}.
 * @param {string} text Text.
 * @return {ol.geom.Polygon} Polygon.
 * @this {FeatureHash}
 * @private
 */
function readPolygonGeometry_(this: FeatureHash, text: string) {
  console.assert(text.substring(0, 2) === 'a(')
  console.assert(text[text.length - 1] == ')')
  text = text.substring(2, text.length - 1)
  let flatCoordinates: number[] = []
  const ends = []
  const rings = text.split("'")
  for (let i = 0, ii = rings.length; i < ii; ++i) {
    flatCoordinates = (this as any)?.decodeCoordinates_(
      rings[i],
      flatCoordinates
    )
    let end = flatCoordinates.length
    if (i === 0) {
      flatCoordinates[end++] = flatCoordinates[0]
      flatCoordinates[end++] = flatCoordinates[1]
    } else {
      flatCoordinates[end++] = flatCoordinates[ends[i - 1]]
      flatCoordinates[end++] = flatCoordinates[ends[i - 1] + 1]
    }
    ends[i] = end
  }
  return new olGeomPolygon(flatCoordinates, olGeomGeometryLayout.XY, ends)
}

/**
 * Read a logical sequence of characters and return a corresponding
 * {@link ol.geom.MultiPolygon}.
 * @param {string} text Text.
 * @return {ol.geom.MultiPolygon} MultiPolygon.
 * @this {FeatureHash}
 * @private
 */
function readMultiPolygonGeometry_(this: FeatureHash, text: string) {
  console.assert(text.substring(0, 2) === 'A(')
  console.assert(text[text.length - 1] == ')')
  text = text.substring(2, text.length - 1)
  let flatCoordinates: number[] = []
  const endss = []
  const polygons = text.split(')(')
  for (let i = 0, ii = polygons.length; i < ii; ++i) {
    const rings = polygons[i].split("'")
    const ends: number[] = (endss[i] = [])
    for (let j = 0, jj = rings.length; j < jj; ++j) {
      flatCoordinates = (this as any)?.decodeCoordinates_(
        rings[j],
        flatCoordinates
      )
      let end = flatCoordinates.length
      if (j === 0) {
        flatCoordinates[end++] = flatCoordinates[0]
        flatCoordinates[end++] = flatCoordinates[1]
      } else {
        flatCoordinates[end++] = flatCoordinates[ends[j - 1]]
        flatCoordinates[end++] = flatCoordinates[ends[j - 1] + 1]
      }
      ends[j] = end
    }
  }
  return new olGeomMultiPolygon(flatCoordinates, olGeomGeometryLayout.XY, endss)
}

/**
 * DEPRECATED - Use the `ngeo.FeatureHelper` instead in combination with the
 * `setStyle: false` option.
 *
 * Read a logical sequence of characters and apply the decoded style on the
 * given feature.
 * @param {string} text Text.
 * @param {ol.Feature} feature Feature.
 * @private
 */
function setStyleInFeature_(text: string, feature: Feature) {
  if (text == '') {
    return
  }
  const properties = getStyleProperties_(text /*feature*/)
  const fillColor = properties['fillColor']
  const fontSize = properties['fontSize']
  const fontColor = properties['fontColor']
  const pointRadius = properties['pointRadius']
  const strokeColor = properties['strokeColor']
  const strokeWidth = properties['strokeWidth']

  let fillStyle = undefined
  if (fillColor !== undefined) {
    fillStyle = new olStyleFill({
      color: /** @type {Array<number>|string} */ fillColor,
    })
  }
  let strokeStyle = undefined
  if (strokeColor !== undefined && strokeWidth !== undefined) {
    strokeStyle = new olStyleStroke({
      color: /** @type {Array<number>|string} */ strokeColor,
      width: /** @type {number} */ strokeWidth,
    })
  }
  let imageStyle = undefined
  if (pointRadius !== undefined) {
    imageStyle = new olStyleCircle({
      radius: /** @type {number} */ pointRadius,
      fill: fillStyle,
      stroke: strokeStyle,
    })
    fillStyle = strokeStyle = undefined
  }
  let textStyle = undefined
  if (fontSize !== undefined && fontColor !== undefined) {
    textStyle = new olStyleText({
      font: fontSize + ' sans-serif',
      fill: new olStyleFill({
        color: /** @type {Array<number>|string} */ fontColor,
      }),
    })
  }
  const style = new olStyleStyle({
    fill: fillStyle,
    image: imageStyle,
    stroke: strokeStyle,
    text: textStyle,
  })
  feature.setStyle(style)
}

/**
 * Read a logical sequence of characters and apply the decoded result as
 * style properties for the feature. Legacy keys are converted to the new ones
 * for compatibility.
 * @param {string} text Text.
 * @param {ol.Feature} feature Feature.
 * @private
 */
function setStyleProperties_(text: string, feature: Feature) {
  const properties = getStyleProperties_(text /*feature*/)
  const geometry = feature.getGeometry()

  // Deal with legacy properties
  if (geometry instanceof olGeomPoint) {
    if (
      properties['isLabel'] ||
      properties[ngeoFormatFeatureProperties.IS_TEXT]
    ) {
      delete properties['strokeColor']
      delete properties['fillColor']
    } else {
      delete properties['fontColor']
      delete properties['fontSize']
    }
  } else {
    delete properties['fontColor']

    if (geometry instanceof olGeomLineString) {
      delete properties['fillColor']
      delete properties['fillOpacity']
    }
  }

  // Convert font size from px to pt
  if (properties['fontSize']) {
    let fontSize = parseFloat(properties['fontSize'])
    if (properties['fontSize'].indexOf('px') !== -1) {
      fontSize = Math.round(fontSize / 1.333333)
    }
    properties['fontSize'] = fontSize
  }

  // Convert legacy properties
  const clone: any = {}
  for (const key in properties) {
    const value = properties[key]
    if (FeatureHashLegacyProperties[key]) {
      clone[FeatureHashLegacyProperties[key]] = value
    } else {
      clone[key] = value
    }
  }

  feature.setProperties(clone)
}

/**
 * Cast values in the correct type depending on the property.
 * @param {string} key Key.
 * @param {string} value Value.
 * @return {number|boolean|string} The casted value corresponding to the key.
 * @private
 */
function castValue_(key: string, value: string) {
  const numProperties = [
    ngeoFormatFeatureProperties.ANGLE,
    ngeoFormatFeatureProperties.OPACITY,
    ngeoFormatFeatureProperties.SIZE,
    ngeoFormatFeatureProperties.STROKE,
    'pointRadius',
    'strokeWidth',
  ]
  const boolProperties = [
    ngeoFormatFeatureProperties.IS_CIRCLE,
    ngeoFormatFeatureProperties.IS_RECTANGLE,
    ngeoFormatFeatureProperties.IS_TEXT,
    ngeoFormatFeatureProperties.SHOW_MEASURE,
    'isCircle',
    'isRectangle',
    'isLabel',
    'showMeasure',
  ]

  if (arrayIncludes(numProperties, key)) {
    return +value
  } else if (arrayIncludes(boolProperties, key)) {
    return value === 'true'
  } else {
    return value
  }
}

/**
 * From a logical sequence of characters, create and return an object of
 * style properties for a feature. The values are cast in the correct type
 * depending on the property. Some properties are also deleted when they don't
 * match the geometry of the feature.
 * @param {string} text Text.
 * @param {ol.Feature} feature Feature.
 * @return {Object.<string, boolean|number|string>} The style properties for
 *     the feature.
 * @private
 */
function getStyleProperties_(text: string /*feature: Feature*/) {
  const parts = text.split("'")
  const properties: any = {}

  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i]
    const keyVal = part.split('*')
    console.assert(keyVal.length === 2)
    const key = keyVal[0]
    const val = keyVal[1]

    properties[key] = castValue_(key, val)
  }

  return properties
}

/**
 * Encode a {@link ol.geom.LineString} geometry into a logical sequence of
 * characters.
 * @param {ol.geom.Geometry} geometry Geometry.
 * @return {string} Encoded geometry.
 * @this {FeatureHash}
 * @private
 */
function writeLineStringGeometry_(
  this: FeatureHash,
  geometry: Geometry
): string {
  console.assert(geometry instanceof olGeomLineString)
  const lineString = geometry as LineString
  const flatCoordinates = lineString.getFlatCoordinates()
  const stride = lineString.getStride()
  const end = flatCoordinates.length
  return (
    'l(' +
    (this as any)?.encodeCoordinates_(flatCoordinates, stride, 0, end) +
    ')'
  )
}

/**
 * Encode a {@link ol.geom.MultiLineString} geometry into a logical sequence
 * of characters.
 * @param {ol.geom.Geometry} geometry Geometry.
 * @return {string} Encoded geometry.
 * @this {FeatureHash}
 * @private
 */
function writeMultiLineStringGeometry_(
  this: FeatureHash,
  geometry: Geometry
): string {
  console.assert(geometry instanceof olGeomMultiLineString)
  const multiLineString = geometry as MultiLineString
  const ends = multiLineString.getEnds()
  const lineStringCount = ends.length
  const flatCoordinates = multiLineString.getFlatCoordinates()
  const stride = multiLineString.getStride()
  let offset = 0
  const textArray = ['L(']
  for (let i = 0; i < lineStringCount; ++i) {
    const end = ends[i]
    const text = (this as any)?.encodeCoordinates_(
      flatCoordinates,
      stride,
      offset,
      end
    )
    if (i !== 0) {
      textArray.push("'")
    }
    textArray.push(text)
    offset = end
  }
  textArray.push(')')
  return textArray.join('')
}

/**
 * Encode a {@link ol.geom.Point} geometry into a logical sequence of
 * characters.
 * @param {ol.geom.Geometry} geometry Geometry.
 * @return {string} Encoded geometry.
 * @this {FeatureHash}
 * @private
 */
function writePointGeometry_(this: FeatureHash, geometry: Geometry): string {
  console.assert(geometry instanceof olGeomPoint)
  const point = geometry as Point
  const flatCoordinates = point.getFlatCoordinates()
  const stride = point.getStride()
  const end = flatCoordinates.length
  return (
    'p(' +
    (this as any)?.encodeCoordinates_(flatCoordinates, stride, 0, end) +
    ')'
  )
}

/**
 * Encode an {@link ol.geom.MultiPoint} geometry into a logical sequence
 * of characters.
 * @param {ol.geom.Geometry} geometry Geometry.
 * @return {string} Encoded geometry.
 * @this {FeatureHash}
 * @private
 */
function writeMultiPointGeometry_(
  this: FeatureHash,
  geometry: Geometry
): string {
  console.assert(geometry instanceof olGeomMultiPoint)
  const multiPoint = geometry as MultiPoint
  const flatCoordinates = multiPoint.getFlatCoordinates()
  const stride = multiPoint.getStride()
  const end = flatCoordinates.length
  return (
    'P(' +
    (this as any)?.encodeCoordinates_(flatCoordinates, stride, 0, end) +
    ')'
  )
}

/**
 * Helper to encode an {@link ol.geom.Polygon} geometry.
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} stride Stride.
 * @param {number} offset Offset.
 * @param {Array.<number>} ends Ends.
 * @param {Array.<string>} textArray Text array.
 * @return {number} The new offset.
 * @this {app.draw.FeatureHash}
 * @private
 */
function encodeRings_(
  this: FeatureHash,
  flatCoordinates: number[],
  stride: number,
  offset: number,
  ends: number[],
  textArray: string[]
): number {
  const linearRingCount = ends.length
  for (let i = 0; i < linearRingCount; ++i) {
    // skip the "closing" point
    const end = ends[i] - stride
    const text = (this as any)?.encodeCoordinates_(
      flatCoordinates,
      stride,
      offset,
      end
    )
    if (i !== 0) {
      textArray.push("'")
    }
    textArray.push(text)
    offset = ends[i]
  }
  return offset
}

/**
 * Encode an {@link ol.geom.Polygon} geometry into a logical sequence
 * of characters.
 * @param {ol.geom.Geometry} geometry Geometry.
 * @return {string} Encoded geometry.
 * @this {FeatureHash}
 * @private
 */
function writePolygonGeometry_(this: FeatureHash, geometry: Geometry): string {
  console.assert(geometry instanceof olGeomPolygon)
  const polygon = geometry as Polygon
  const flatCoordinates = polygon.getFlatCoordinates()
  const stride = polygon.getStride()
  const ends = polygon.getEnds()
  const offset = 0
  const textArray = ['a(']
  encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray)
  textArray.push(')')
  return textArray.join('')
}

/**
 * Encode an {@link ol.geom.MultiPoligon} geometry into a logical sequence of
 * characters.
 * @param {ol.geom.Geometry} geometry Geometry.
 * @return {string} Encoded geometry.
 * @this {FeatureHash}
 * @private
 */
function writeMultiPolygonGeometry_(
  this: FeatureHash,
  geometry: Geometry
): string {
  console.assert(geometry instanceof olGeomMultiPolygon)
  const multiPolygon = geometry as MultiPolygon
  const flatCoordinates = multiPolygon.getFlatCoordinates()
  const stride = multiPolygon.getStride()
  const endss = multiPolygon.getEndss()
  const polygonCount = endss.length
  let offset = 0
  const textArray = ['A']
  for (let i = 0; i < polygonCount; ++i) {
    const ends = endss[i]
    textArray.push('(')
    offset = encodeRings_.call(
      this,
      flatCoordinates,
      stride,
      offset,
      ends,
      textArray
    )
    textArray.push(')')
  }
  return textArray.join('')
}

type GeometryReaderKeys = 'P' | 'L' | 'A' | 'l' | 'p' | 'a'
/**
 * @const
 * @private
 * @type {Object.<string, function(string):ol.geom.Geometry>}
 */
const GEOMETRY_READERS_: {
  [key in GeometryReaderKeys]: (this: FeatureHash, text: string) => any
} = {
  P: readMultiPointGeometry_,
  L: readMultiLineStringGeometry_,
  A: readMultiPolygonGeometry_,
  l: readLineStringGeometry_,
  p: readPointGeometry_,
  a: readPolygonGeometry_,
}

/**
 * @const
 * @private
 * @type {Object.<string, function(ol.geom.Geometry):string>}
 */
const GEOMETRY_WRITERS_ = {
  MultiLineString: writeMultiLineStringGeometry_,
  MultiPoint: writeMultiPointGeometry_,
  MultiPolygon: writeMultiPolygonGeometry_,
  LineString: writeLineStringGeometry_,
  Point: writePointGeometry_,
  Polygon: writePolygonGeometry_,
}

type ShortParamKeys =
  | 'angle'
  | 'color'
  | 'description'
  | 'stroke'
  | 'isLabel'
  | 'linestyle'
  | 'name'
  | 'opacity'
  | 'showOrientation'
  | 'shape'
  | 'size'
  | 'isCircle'

const SHORT_PARAM_: { [key in ShortParamKeys]: string } = {
  angle: 'a',
  color: 'c',
  description: 'd',
  stroke: 'e',
  isLabel: 'i',
  linestyle: 'l',
  name: 'n',
  opacity: 'o',
  showOrientation: 'r',
  shape: 's',
  size: 't',
  isCircle: 'u',
}

const featureHash = new FeatureHash({
  encodeStyles: false,
  properties:
    /**
     * @param {ol.Feature} feature Feature.
     * @return {Object.<string, (string|number)>} Properties to encode.
     */
    function (feature: Feature) {
      // Do not encode the __editable__ and __selected__ properties.
      const properties = feature.getProperties()
      delete properties['__editable__']
      delete properties['__selected__']
      delete properties['__map_id__']
      delete properties['__saving__'] // ugly hack?
      for (const key in properties) {
        if (properties[key] === null || properties[key] === undefined) {
          delete properties[key]
        } else {
          if (SHORT_PARAM_[key as ShortParamKeys]) {
            const value = properties[key]
            delete properties[key]
            properties[SHORT_PARAM_[key as ShortParamKeys]] = value
          }
        }
      }
      return properties
    },
})

export default featureHash
