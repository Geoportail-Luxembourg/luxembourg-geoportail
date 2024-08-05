import OlMap from 'ol/Map'
import LineString from 'ol/geom/LineString.js'
import MultiPoint from 'ol/geom/MultiPoint.js'
import Polygon from 'ol/geom/Polygon.js'
import Point from 'ol/geom/Point.js'
import StyleCircle, { Options as CircleOptions } from 'ol/style/Circle.js'
import StyleFill from 'ol/style/Fill.js'
import StyleIcon from 'ol/style/Icon.js'
import StyleRegularShape, {
  Options as RegularShapeOptions,
} from 'ol/style/RegularShape.js'
import StyleText from 'ol/style/Text.js'
import StyleStroke from 'ol/style/Stroke.js'
import StyleStyle, { StyleLike } from 'ol/style/Style.js'
import { Feature } from 'ol'
// TODO 3D
// import { transform } from 'ol/proj'
// import olcsCore from 'olcs/core.js';

const MYMAPS_URL = import.meta.env.VITE_MYMAPS_URL
const MYMAPS_SYMBOL_URL = MYMAPS_URL + '/symbol/'
const ARROW_URL = MYMAPS_URL + '/getarrow'
// TODO 3D
// const ARROW_MODEL_URL = import.meta.env.VITE_ARROW_MODEL_URL

export function createStyleFunction(curMap: OlMap) {
  const styles = new Array<StyleStyle>()

  const vertexStyle = new StyleStyle({
    image: new StyleRegularShape({
      radius: 6,
      points: 4,
      angle: Math.PI / 4,
      fill: new StyleFill({
        color: [255, 255, 255, 0.5],
      }),
      stroke: new StyleStroke({
        color: [0, 0, 0, 1],
      }),
    }),
    geometry: function (feature) {
      const geom = feature.getGeometry()

      let coordinates
      if (geom instanceof LineString) {
        coordinates = geom.getCoordinates()
        return new MultiPoint(coordinates)
      } else if (geom instanceof Polygon) {
        coordinates = geom.getCoordinates()[0]
        return new MultiPoint(coordinates)
      } else {
        return geom
      }
    },
  })

  const fillStyle = new StyleFill()
  const symbolUrl = MYMAPS_SYMBOL_URL
  const arrowUrl = ARROW_URL
  // TODO 3D
  // const arrowModelUrl = ARROW_MODEL_URL
  const colorStringToRgba = (colorString: string, opacity = 1) => {
    const r = parseInt(colorString.substr(1, 2), 16)
    const g = parseInt(colorString.substr(3, 2), 16)
    const b = parseInt(colorString.substr(5, 2), 16)
    return [r, g, b, opacity]
  }

  return function (this: Feature, feature: Feature, resolution: any) {
    //Bypass the bug : https://github.com/openlayers/ol-cesium/pull/644
    if (resolution === undefined) {
      resolution = feature
      feature = this
    }
    // clear the styles
    styles.length = 0

    if (feature.get('__editable__') && feature.get('__selected__')) {
      styles.push(vertexStyle)
    }
    let order = feature.get('display_order')
    if (order === undefined) {
      order = 0
    }
    const color = feature.get('color') || '#FF0000'
    const rgbColor = colorStringToRgba(color, 1)
    let opacity = feature.get('opacity')
    if (opacity === undefined) {
      opacity = 1
    }
    const rgbaColor = rgbColor.slice()
    rgbaColor[3] = opacity

    fillStyle.setColor(rgbaColor)
    if (
      feature.getGeometry()?.getType() === 'LineString' &&
      feature.get('showOrientation') === true
    ) {
      let prevArrow: Point
      let distance: number
      let arrowColor = feature.get('arrowcolor')
      if (arrowColor === undefined || arrowColor === null) {
        arrowColor = color
      }
      ;(feature.getGeometry() as LineString)?.forEachSegment(function (
        start,
        end
      ) {
        const arrowPoint = new Point([
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
        ])
        const dx = end[0] - start[0]
        const dy = end[1] - start[1]

        if (prevArrow != undefined) {
          const pt1 = curMap.getPixelFromCoordinate(
              arrowPoint.getCoordinates()
            ),
            pt2 = curMap.getPixelFromCoordinate(prevArrow.getCoordinates()),
            w = pt2[0] - pt1[0],
            h = pt2[1] - pt1[1]
          distance = Math.sqrt(w * w + h * h)
        }
        if (!prevArrow || distance > 600) {
          const src = arrowUrl
          const rotation = Math.PI / 2 - Math.atan2(dy, dx)
          // arrows
          styles.push(
            new StyleStyle({
              geometry: arrowPoint,
              zIndex: order,
              image: new StyleIcon(
                /** @type {olx.style.IconOptions} */ {
                  color: arrowColor,
                  rotation,
                  src,
                }
              ),
            })
          )
          // TODO 3D
          // const modelColor = colorStringToRgba(arrowColor, 1)
          // arrowPoint.set('olcs_model', () => {
          //   const coordinates = arrowPoint.getCoordinates()
          //   const center = transform(coordinates, 'EPSG:3857', 'EPSG:4326')
          //   return {
          //     cesiumOptions: {
          //       url: arrowModelUrl,
          //       // Adding a tiny translation along Z would allow the arrows not to sink into the terrain.
          //       // However it does not work, the model is always clamped to the ground.
          //       modelMatrix: olcsCore.createMatrixAtCoordinates(
          //         center,
          //         rotation
          //       ),
          //       heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          //       minimumPixelSize: 80,
          //       color: olcsCore.convertColorToCesium(modelColor),
          //       // It would be great to have a silouhette around the 3d arrow to better distinguish it from the underlying line.
          //       // But for some reason Cesium is throwing an error with the model we are using.
          //       // silhouetteColor: Cesium.Color.WHITE,
          //       // silhouetteSize: 3
          //     },
          //   }
          // })
          prevArrow = arrowPoint
        }
      })
    }
    let lineDash
    if (feature.get('linestyle')) {
      switch (feature.get('linestyle')) {
        case 'dashed':
          lineDash = [10, 10]
          break
        case 'dotted':
          lineDash = [1, 6]
          break
        default:
          break
      }
    }

    let stroke
    let featureStroke = feature.get('stroke')
    if (featureStroke > 0) {
      if (!feature.get('__editable__') && feature.get('__selected__')) {
        featureStroke = featureStroke + 3
      }
      stroke = new StyleStroke({
        color: rgbColor,
        width: featureStroke,
        lineDash: lineDash,
      })
    }

    let featureSize = feature.get('size')
    if (!feature.get('__editable__') && feature.get('__selected__')) {
      featureSize = featureSize + 3
    }
    const imageOptions = {
      fill: fillStyle,
      stroke: new StyleStroke({
        color: rgbColor,
        width: featureSize / 7,
      }),
      radius: featureSize,
      // points: [0, 0],
    }
    let image = null
    if (feature.get('symbolId')) {
      Object.assign(imageOptions, {
        src: symbolUrl + feature.get('symbolId') + '?scale=' + featureSize,
        scale: 1,
        rotation: feature.get('angle'),
      })
      image = new StyleIcon(imageOptions as CircleOptions)
    } else {
      let shape = feature.get('shape')
      if (!shape) {
        feature.set('shape', 'circle')
        shape = 'circle'
      }
      if (shape === 'circle') {
        image = new StyleCircle(imageOptions as CircleOptions)
      } else if (shape === 'square') {
        Object.assign(imageOptions, {
          points: 4,
          angle: Math.PI / 4,
          rotation: feature.get('angle'),
        })
        image = new StyleRegularShape(imageOptions as RegularShapeOptions)
      } else if (shape === 'triangle') {
        Object.assign(imageOptions, {
          points: 3,
          angle: 0,
          rotation: feature.get('angle'),
        })
        image = new StyleRegularShape(imageOptions as RegularShapeOptions)
      } else if (shape === 'star') {
        Object.assign(imageOptions, {
          points: 5,
          angle: Math.PI / 4,
          rotation: feature.get('angle'),
          radius2: featureSize,
        })
        image = new StyleRegularShape(imageOptions as RegularShapeOptions)
      } else if (feature.get('shape') == 'cross') {
        Object.assign(imageOptions, {
          points: 4,
          angle: 0,
          rotation: feature.get('angle'),
          radius2: 0,
        })
        image = new StyleRegularShape(imageOptions as RegularShapeOptions)
      }
    }

    if (feature.get('isLabel')) {
      return [
        new StyleStyle({
          text: new StyleText(
            /** @type {olx.style.TextOptions} */ {
              text: feature.get('name'),
              textAlign: 'left',
              font: 'normal ' + featureSize + 'px Sans-serif',
              rotation: feature.get('angle'),
              fill: new StyleFill({
                color: rgbColor,
              }),
              stroke: new StyleStroke({
                color: [255, 255, 255],
                width: 2,
              }),
            }
          ),
        }),
      ]
    } else {
      if (image) {
        styles.push(
          new StyleStyle({
            image: image,
            fill: fillStyle,
            stroke: stroke,
            zIndex: order,
          })
        )
      }
    }

    return styles
  } as StyleLike
}
