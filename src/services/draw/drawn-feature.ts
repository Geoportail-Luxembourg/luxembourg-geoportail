import { Feature } from 'ol'
import { Point, LineString, MultiPoint, Polygon } from 'ol/geom'
import StyleStyle, { StyleLike, StyleFunction } from 'ol/style/Style'
import StyleRegularShape, {
  Options as RegularShapeOptions,
} from 'ol/style/RegularShape'
import StyleCircle, { Options as CircleOptions } from 'ol/style/Circle'
import StyleFill from 'ol/style/Fill'
import StyleStroke from 'ol/style/Stroke'
import StyleIcon from 'ol/style/Icon'
import StyleText from 'ol/style/Text'
import { Extent } from 'ol/extent'

import { DrawnFeatureType, DrawnFeatureStyle } from '@/stores/draw.store.model'
import useMap from '@/composables/map/map.composable'

const MYMAPS_URL = import.meta.env.VITE_MYMAPS_URL
const MYMAPS_SYMBOL_URL = MYMAPS_URL + '/symbol/'
const ARROW_URL = MYMAPS_URL + '/getarrow'

export class DrawnFeature extends Feature {
  id: number
  label: string
  description: string
  display_order: number
  editable: boolean
  selected: boolean
  map_id: string | undefined // mymap uuid
  saving: boolean
  featureType: DrawnFeatureType
  featureStyle: DrawnFeatureStyle
  map = useMap().getOlMap()

  fit() {
    const size = this.map.getSize()
    const extent = <Extent>this.getGeometry()?.getExtent()

    this.map.getView().fit(extent, { size })
  }

  toProperties() {
    return {
      angle: this.featureStyle.angle,
      color: this.featureStyle.color,
      description: this.description,
      stroke: this.featureStyle.stroke,
      isLabel: this.featureType == 'drawnLabel',
      linestyle: this.featureStyle.linestyle,
      name: this.label,
      opacity: this.featureStyle.opacity,
      showOrientation: this.featureStyle.showOrientation,
      shape: this.featureStyle.shape,
      size: this.featureStyle.size,
      isCircle: this.featureType == 'drawnCircle',
    }
  }

  getStyleFunction(): StyleFunction {
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

    const curMap = this.map
    return function (
      this: DrawnFeature,
      feature: DrawnFeature,
      resolution: any
    ) {
      //Bypass the bug : https://github.com/openlayers/ol-cesium/pull/644
      if (resolution === undefined) {
        resolution = feature
        feature = this
      }
      // clear the styles
      styles.length = 0

      if (feature.editable && feature.selected) {
        styles.push(vertexStyle)
      }
      let order = feature.display_order
      if (order === undefined) {
        order = 0
      }
      const color = feature.featureStyle.color || '#FF0000'
      const rgbColor = colorStringToRgba(color, 1)

      let opacity = feature.featureStyle.opacity
      if (opacity === undefined) {
        opacity = 1
      }
      const rgbaColor = rgbColor.slice()
      rgbaColor[3] = opacity

      fillStyle.setColor(rgbaColor)
      if (
        feature.getGeometry()?.getType() === 'LineString' &&
        feature.featureStyle.showOrientation
      ) {
        let prevArrow: Point
        let distance: number
        let arrowColor = feature.featureStyle.arrowcolor
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
      if (feature.featureStyle.linestyle) {
        switch (feature.featureStyle.linestyle) {
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
      let featureStroke = feature.featureStyle.stroke
      if (featureStroke > 0) {
        if (!feature.editable && feature.selected) {
          featureStroke = featureStroke + 3
        }
        stroke = new StyleStroke({
          color: rgbColor,
          width: featureStroke,
          lineDash: lineDash,
        })
      }

      let featureSize = feature.featureStyle.size
      if (!feature.editable && feature.selected) {
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
      if (feature.featureStyle.symbolId) {
        Object.assign(imageOptions, {
          src:
            symbolUrl + feature.featureStyle.symbolId + '?scale=' + featureSize,
          scale: 1,
          rotation: feature.featureStyle.angle,
        })
        image = new StyleIcon(imageOptions as CircleOptions)
      } else {
        let shape = feature.featureStyle.shape
        if (!shape) {
          feature.featureStyle.shape = 'circle'
          shape = 'circle'
        }
        if (shape === 'circle') {
          image = new StyleCircle(imageOptions as CircleOptions)
        } else if (shape === 'square') {
          Object.assign(imageOptions, {
            points: 4,
            angle: Math.PI / 4,
            rotation: feature.featureStyle.angle,
          })
          image = new StyleRegularShape(imageOptions as RegularShapeOptions)
        } else if (shape === 'triangle') {
          Object.assign(imageOptions, {
            points: 3,
            angle: 0,
            rotation: feature.featureStyle.angle,
          })
          image = new StyleRegularShape(imageOptions as RegularShapeOptions)
        } else if (shape === 'star') {
          Object.assign(imageOptions, {
            points: 5,
            angle: Math.PI / 4,
            rotation: feature.featureStyle.angle,
            radius2: featureSize,
          })
          image = new StyleRegularShape(imageOptions as RegularShapeOptions)
        } else if (shape == 'cross') {
          Object.assign(imageOptions, {
            points: 4,
            angle: 0,
            rotation: feature.featureStyle.angle,
            radius2: 0,
          })
          image = new StyleRegularShape(imageOptions as RegularShapeOptions)
        }
      }

      if (feature.featureType === 'drawnLabel') {
        return [
          new StyleStyle({
            text: new StyleText(
              /** @type {olx.style.TextOptions} */ {
                text: feature.label,
                textAlign: 'left',
                font: 'normal ' + featureSize + 'px Sans-serif',
                rotation: feature.featureStyle.angle,
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

      return styles as StyleLike
    } as StyleFunction
  }
}
