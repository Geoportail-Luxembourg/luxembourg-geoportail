import { MFPSymbolizer, MFPSymbolizerPoint } from '@geoblocks/mapfishprint'
import { MFPVectorEncoder } from '@geoblocks/mapfishprint'
import { GeoJSONFeature } from 'ol/format/GeoJSON'
import { GeoJSON as olFormatGeoJSON } from 'ol/format'
import {
  Image,
  Circle as olStyleCircle,
  Icon as olStyleIcon,
  RegularShape as olStyleRegularShape,
} from 'ol/style'
import { toDegrees } from 'ol/math'

/**
 * This class temporary, we need some evols to be done in @geoblocks/mapfishprint.
 * Meanwhile, some function have been overriden here to make the print works as before:
 * - encodeVectorStylePoint
 * - encodeVectorStylePointStyleIcon
 * and a new one has beend added:
 * - encodeVectorStylePointRegularShape
 *
 * @deprecated Use MFPVectorEncoder from @geoblocks/mapfishprint instead, when lib is ready to suport external graphic and Regular shapes
 */
export class LuxVectorEncoder extends MFPVectorEncoder {
  protected geojsonFormatCustom = new olFormatGeoJSON()

  protected encodeVectorStylePoint(
    geojsonFeature: GeoJSONFeature,
    symbolizers: MFPSymbolizer[],
    imageStyle: Image
  ) {
    let symbolizer: MFPSymbolizerPoint | undefined
    if (imageStyle instanceof olStyleCircle) {
      symbolizer = this.encodeVectorStylePointStyleCircle(
        geojsonFeature,
        imageStyle
      )
    } else if (imageStyle instanceof olStyleIcon) {
      // FIXME: Update @geoblocks/mapfishprint when support for external graphic ready
      symbolizer = this.encodeVectorStylePointStyleIcon(
        geojsonFeature,
        imageStyle
      )
    } else if (imageStyle instanceof olStyleRegularShape) {
      // FIXME: Update @geoblocks/mapfishprint when support for Regular Shape ready
      symbolizer = this.encodeVectorStylePointRegularShape(
        geojsonFeature,
        imageStyle
      )
    }

    if (symbolizer) {
      // @ts-ignore
      this.customizer_.point(
        // @ts-ignore
        this.layerState_,
        geojsonFeature,
        symbolizer,
        imageStyle
      )
      symbolizers.push(symbolizer)
    }
  }

  protected encodeVectorStylePointRegularShape(
    geojsonFeature: GeoJSONFeature,
    imageStyle: olStyleRegularShape
  ) {
    const symbolizer = {
      type: 'point',
    } as MFPSymbolizerPoint
    const points = imageStyle.getPoints()
    const angle = imageStyle.getAngle()

    if (points === 4 && angle !== 0) {
      symbolizer.graphicName = 'square'
    } else if (points === 4 && angle === 0) {
      symbolizer.graphicName = 'cross'
    } else if (points === 3) {
      symbolizer.graphicName = 'triangle'
    } else if (points === 5) {
      symbolizer.graphicName = 'star'
    } else if (points === 8) {
      symbolizer.graphicName = 'cross'
    }

    const opacity = imageStyle.getOpacity()
    if (opacity !== null) {
      symbolizer.graphicOpacity = opacity
    }

    const size = imageStyle.getSize()
    if (size !== null) {
      let scale = imageStyle.getScale()
      if (Array.isArray(scale)) {
        scale = (scale[0] + scale[1]) / 2
      }
      if (isNaN(scale)) {
        scale = 1
      }

      // Note: 'graphicWidth' is misnamed as of mapfish-console.log 3.14.1, it actually sets the height
      symbolizer.graphicWidth = size[1] * scale
    }

    let rotation = imageStyle.getRotation()
    if (isNaN(rotation)) {
      rotation = 0
    }
    symbolizer.rotation = toDegrees(rotation)

    const fillStyle = imageStyle.getFill()
    const strokeStyle = imageStyle.getStroke()

    if (fillStyle !== null) {
      this.encodeVectorStyleFill(geojsonFeature, symbolizer, fillStyle)
    }

    if (strokeStyle !== null) {
      this.encodeVectorStyleStroke(geojsonFeature, symbolizer, strokeStyle)
    }

    if (symbolizer !== undefined) {
      if (symbolizer.graphicName === 'cross') {
        symbolizer.strokeWidth = 0
        symbolizer.fillOpacity = 1
      }
    }

    return symbolizer
  }

  protected encodeVectorStylePointStyleIcon(
    geojsonFeature: GeoJSONFeature,
    imageStyle: olStyleIcon
  ): MFPSymbolizerPoint | undefined {
    const src = imageStyle.getSrc()
    if (src === undefined) {
      return undefined
    }
    const symbolizer = {
      type: 'point',
      externalGraphic: src,
    } as MFPSymbolizerPoint
    const opacity = imageStyle.getOpacity()
    if (opacity !== null) {
      symbolizer.graphicOpacity = opacity
    }
    const size = imageStyle.getSize()
    if (size !== null) {
      let scale = imageStyle.getScale()
      if (Array.isArray(scale)) {
        scale = (scale[0] + scale[1]) / 2
      }
      if (isNaN(scale)) {
        scale = 1
      }
      const width = size[0] * scale
      const height = size[1] * scale

      // Note: 'graphicWidth' is misnamed as of mapfish-console.log 3.14.1, it actually sets the height
      symbolizer.graphicWidth = height

      this.addGraphicOffset_(symbolizer, imageStyle, width, height)
    }
    let rotation = imageStyle.getRotation()
    if (isNaN(rotation)) {
      rotation = 0
    }
    symbolizer.rotation = toDegrees(rotation)

    if (symbolizer.labelAlign) {
      symbolizer.labelAlign = 'lm'
    }

    if (symbolizer.externalGraphic) {
      symbolizer.graphicFormat = 'image/png'
      if (symbolizer.externalGraphic.indexOf('scale=') > 0) {
        delete symbolizer.graphicWidth
      } else if (symbolizer.externalGraphic.indexOf('getarrow') > 0) {
        symbolizer.graphicWidth = 10
      }
    }

    return symbolizer
  }
}
