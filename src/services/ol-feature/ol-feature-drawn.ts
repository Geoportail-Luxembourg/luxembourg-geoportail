import { v4 as uuidv4 } from 'uuid'
import { Feature } from 'ol'
import {
  Point,
  LineString,
  MultiPoint,
  Polygon,
  Geometry,
  Circle,
} from 'ol/geom'
import StyleStyle, { StyleFunction } from 'ol/style/Style'
import StyleRegularShape, {
  Options as RegularShapeOptions,
} from 'ol/style/RegularShape'
import StyleCircle, { Options as CircleOptions } from 'ol/style/Circle'
import StyleFill from 'ol/style/Fill'
import StyleStroke from 'ol/style/Stroke'
import StyleIcon from 'ol/style/Icon'
import StyleText from 'ol/style/Text'
import { Extent } from 'ol/extent'
import olFormatGeoJSON from 'ol/format/GeoJSON'
import { ObjectWithGeometry } from 'ol/Feature'

import { DrawnFeatureType, DrawnFeatureStyle } from '@/stores/draw.store.model'
import useMap, {
  PROJECTION_LUX,
  PROJECTION_WEBMERCATOR,
} from '@/composables/map/map.composable'
import { fetchProfileJson } from '@/services/api/api-profile.service'
import { colorStringToRgba } from '@/services/colors.utils'
import { ProfileData } from '@/components/common/graph/elevation-profile'
import { getDefaultDrawnFeatureStyle } from './styles.helper'
import GeoJSON from 'ol/format/GeoJSON'
import { convertCircleFeatureToPolygon } from '@/composables/draw/draw-utils.composable'

const MYMAPS_URL = import.meta.env.VITE_MYMAPS_URL
const MYMAPS_SYMBOL_URL = import.meta.env.VITE_SYMBOL_URL
const ARROW_URL = MYMAPS_URL + '/getarrow'

export type DrawnFeatureId = number | string

const encodeOptions = {
  dataProjection: PROJECTION_LUX,
  featureProjection: PROJECTION_WEBMERCATOR,
}

export class DrawnFeature extends Feature {
  // TODO: refactor create a generic type that can be used by Infos panel, Draw, and Measures
  id: DrawnFeatureId
  fid: number | undefined // For mymaps, returned by the server
  label: string
  description: string
  display_order: number
  selected: boolean
  editable: boolean
  map_id: string | undefined // mymap uuid
  saving: boolean
  featureType: DrawnFeatureType

  /**
   * Use setter eg. DrawnFeatureType.featureStyle = {...} to trigger feature change()
   * @see DrawnFeatureType.featureStyle
   */
  _featureStyle: DrawnFeatureStyle

  map = useMap().getOlMap() // FIXME: don't use useMap here
  profileData: ProfileData | undefined = undefined // Is used by linestring geom

  constructor(
    drawnFeature?: DrawnFeature,
    geometryOrProperties?: Geometry | ObjectWithGeometry<Geometry>
  ) {
    if (drawnFeature) {
      super(drawnFeature.getGeometry())
      this.label = drawnFeature.label
      this.featureType = drawnFeature.featureType
      this.map_id = drawnFeature.map_id
      this.description = drawnFeature.description
      this.display_order = drawnFeature.display_order
      this.selected = drawnFeature.selected
      this.editable = drawnFeature.editable
      this._featureStyle = drawnFeature.featureStyle
      this.id = drawnFeature.id
      this.saving = drawnFeature.saving
      this.setProperties(drawnFeature.getProperties())
    } else {
      super(geometryOrProperties)
      this.editable = false
    }
  }

  clone() {
    // TODO: use super.clone()?
    const clone = new DrawnFeature(
      this,
      this.hasProperties() ? this.getProperties() : undefined
    )

    // NB. Following code extracted from ol/Feature
    clone.setGeometryName(this.getGeometryName())
    const geometry = this.getGeometry()
    if (geometry) {
      clone.setGeometry(geometry.clone())
    }

    const style = this.getStyle()
    if (style) {
      clone.setStyle(style)
    }

    // Create new id
    clone.id = uuidv4()

    return clone
  }

  static clone(drawnFeature: DrawnFeature) {
    return drawnFeature.clone()
  }

  static generateFromFeature(feature: Feature<Geometry>, options = {}) {
    const drawnFeature = <DrawnFeature>Object.assign(
      new DrawnFeature(),
      feature,
      {
        id: uuidv4(),
        label: undefined,
        description: '',
        display_order: undefined,
        selected: false,
        editable: false,
        map_id: undefined,
        saving: false,
        featureType: undefined,
      },
      options
    )

    const geometryType = feature.getGeometry()?.getType()!
    const typeMapping: Record<string, string> = {
      Point: 'drawnPoint',
      LineString: 'drawnLine',
      Polygon: 'drawnPolygon',
      Circle: 'drawnCircle',
    }

    if (drawnFeature.featureType === undefined) {
      drawnFeature.featureType = (typeMapping[geometryType] ||
        'drawnPolygon') as DrawnFeatureType
    }

    drawnFeature.featureStyle = getDefaultDrawnFeatureStyle()
    // Always set the style function - don't copy from source feature
    drawnFeature.setStyle(drawnFeature.getStyleFunction())

    return drawnFeature
  }

  static generateFromGeoJson(geoJson: unknown, options = {}) {
    const feature = new GeoJSON(encodeOptions).readFeature(
      geoJson
    ) as Feature<Geometry>
    const drawnFeature = DrawnFeature.generateFromFeature(feature, options)

    // GeoJSON readFeature already sets properties on the feature, so we read from there
    const properties = feature.getProperties()
    drawnFeature.fromProperties(properties)
    // Ensure style function is set after loading properties
    drawnFeature.setStyle(drawnFeature.getStyleFunction())
    return drawnFeature
  }

  public get featureStyle() {
    return this._featureStyle
  }

  public set featureStyle(featureStyle: DrawnFeatureStyle) {
    this._featureStyle = featureStyle
    this.changed()
  }

  /**
   * Fits the map view to the feature's extent
   */
  fit() {
    const size = this.map.getSize()
    const extent = <Extent>this.getGeometry()?.getExtent()

    this.map.getView().fit(extent, { size })
  }

  /**
   * Reset profileData property to "undefined". To update to profile graph, add a watcher in your component
   * on this property and trigger DrawnFeature.getProfile() to retrieve up to date profile data from the server.
   */
  resetProfileData() {
    this.profileData = undefined
  }

  /**
   * Get the profile data (eg. to construct graph or download as a csv),
   * first calls the api profile.json and caculates the cumulative loss/gain elevations
   * for each point. Caches the result in profileData property so the api
   * is called only once for the feature.
   * @returns The calculated profile data
   */
  async getProfile() {
    const geom = this.getGeometry()

    if (
      geom?.getType() !== 'LineString' &&
      geom?.getType() !== 'MultiLineString'
    ) {
      return
    }

    if (this.profileData === undefined) {
      const geomJson = new olFormatGeoJSON().writeGeometry(
        this.getGeometry()!,
        encodeOptions
      )

      const profileData = await fetchProfileJson(geomJson, this.id)

      let elevationGain = 0
      let elevationLoss = 0
      let cumulativeElevation = 0
      let lastElevation: number | undefined

      // Cache result
      this.profileData = profileData.profile.map(d => {
        const row = {
          ...d,
          cumulativeElevation: 0,
          elevationGain: 0,
          elevationLoss: 0,
        }
        const curElevation = row.values.dhm
        if (lastElevation !== undefined) {
          const elevation = curElevation - lastElevation
          cumulativeElevation = cumulativeElevation + elevation
          if (elevation > 0) {
            elevationGain = elevationGain + elevation
          } else {
            elevationLoss = elevationLoss + elevation
          }
        }

        row.cumulativeElevation = cumulativeElevation
        row.elevationGain = elevationGain
        row.elevationLoss = elevationLoss
        lastElevation = curElevation

        return row
      })
    }

    return this.profileData
  }

  toProperties() {
    return {
      angle: this.featureStyle.angle,
      color: this.featureStyle.color,
      description: this.description,
      display_order: this.display_order,
      fid: this.fid,
      stroke: this.featureStyle.stroke,
      isLabel: this.featureType === 'drawnLabel',
      linestyle: this.featureStyle.linestyle,
      name: this.label,
      opacity: this.featureStyle.opacity,
      showOrientation: this.featureStyle.showOrientation,
      shape: this.featureStyle.shape,
      size: this.featureStyle.size,
      isCircle: this.featureType === 'drawnCircle',
      symbolId: this.featureStyle.symbolId,
      symboltype: this.featureStyle.symboltype,
      __map_id__: this.map_id,
    }
  }

  fromProperties(properties: any) {
    if (!properties) return

    this.description = properties.description ?? this.description
    this.display_order = properties.display_order ?? this.display_order
    this.label = properties.name ?? this.label
    this.map_id = properties.__map_id__ ?? this.map_id

    // Determine featureType from properties - check isCircle first, then isLabel
    if (properties.isCircle === true) {
      this.featureType = 'drawnCircle'
    } else if (properties.isLabel === true) {
      this.featureType = 'drawnLabel'
    }

    this.featureStyle = {
      angle: properties.angle ?? this.featureStyle.angle,
      color: properties.color ?? this.featureStyle.color,
      stroke: properties.stroke ?? this.featureStyle.stroke,
      linestyle: properties.linestyle ?? this.featureStyle.linestyle,
      opacity: properties.opacity ?? this.featureStyle.opacity,
      showOrientation:
        properties.showOrientation ?? this.featureStyle.showOrientation,
      shape: properties.shape ?? this.featureStyle.shape,
      size: properties.size ?? this.featureStyle.size,
      symbolId: properties.symbolId ?? this.featureStyle.symbolId,
      symboltype: properties.symboltype ?? this.featureStyle.symboltype,
      arrowcolor: properties.arrowcolor ?? this.featureStyle.arrowcolor,
    }
  }

  toGeoJSONString() {
    const feature = this.clone()
    feature.setProperties(this.toProperties())

    // NB. If feature is circle, convert geometry to polygon for GeoJSON export
    return new olFormatGeoJSON().writeFeature(
      feature.getGeometry()?.getType() === 'Circle'
        ? convertCircleFeatureToPolygon(feature)
        : feature,
      encodeOptions
    )
  }

  getStyleFunction(): StyleFunction {
    const styles: StyleStyle[] = []

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

    const circleCenterStyle = new StyleStyle({
      image: new StyleCircle({
        radius: 8,
        fill: new StyleFill({
          color: [0, 0, 255, 0.8],
        }),
        stroke: new StyleStroke({
          color: [255, 255, 255, 1],
          width: 2,
        }),
      }),
      geometry: function (feature) {
        const geom = feature.getGeometry()
        if (geom instanceof Circle) {
          return new Point(geom.getCenter())
        }
        return undefined
      },
    })

    const fillStyle = new StyleFill()
    const arrowUrl = ARROW_URL
    const curMap = this.map

    return function (
      this: DrawnFeature,
      feature: DrawnFeature,
      resolution: any
    ) {
      // Bypass the bug : https://github.com/openlayers/ol-cesium/pull/644
      if (resolution === undefined) {
        resolution = feature
        feature = this
      }

      // Clear the styles array
      styles.length = 0

      // Show vertex handles when feature is being edited
      if (feature.get('__isBeingEdited__')) {
        styles.push(vertexStyle)

        // Show blue center point for circles in edit mode
        if (
          feature.featureType === 'drawnCircle' &&
          feature.getGeometry()?.getType() === 'Circle'
        ) {
          styles.push(circleCenterStyle)
        }
      }

      const order = feature.display_order ?? 0
      const color = feature.featureStyle.color || '#FF0000'
      const rgbColor = colorStringToRgba(color, 1)
      const rgbaColor = colorStringToRgba(
        color,
        feature.featureStyle.opacity ?? 1
      )

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
            styles.push(
              new StyleStyle({
                geometry: arrowPoint,
                zIndex: order,
                image: new StyleIcon({
                  color: arrowColor,
                  rotation,
                  src,
                }),
              })
            )
            // TODO: 3D
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
        if (feature.selected) {
          featureStroke = featureStroke + 3
        }
        stroke = new StyleStroke({
          color: rgbColor,
          width: featureStroke,
          lineDash: lineDash,
        })
      }

      let featureSize = feature.featureStyle.size
      if (feature.selected) {
        featureSize = featureSize + 3
      }
      const imageOptions = {
        fill: fillStyle,
        stroke: new StyleStroke({
          color: rgbColor,
          width: featureSize / 7,
        }),
        radius: featureSize,
      }
      let image = null
      // Only create image for Point and Label features
      if (
        feature.featureType === 'drawnPoint' ||
        feature.featureType === 'drawnLabel'
      ) {
        if (feature.featureStyle.symbolId) {
          const options = {
            ...imageOptions,
            ...{
              src:
                MYMAPS_SYMBOL_URL +
                '/' +
                feature.featureStyle.symbolId +
                '?scale=' +
                featureSize,
              scale: 1,
              rotation: feature.featureStyle.angle,
            },
          }
          image = new StyleIcon(options)
        } else {
          const shape = feature.featureStyle.shape
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
          } else if (shape === 'cross') {
            Object.assign(imageOptions, {
              points: 4,
              angle: 0,
              rotation: feature.featureStyle.angle,
              radius2: 0,
            })
            image = new StyleRegularShape(imageOptions as RegularShapeOptions)
          }
        }
      }

      if (feature.featureType === 'drawnLabel') {
        return [
          new StyleStyle({
            text: new StyleText({
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
            }),
          }),
        ]
      } else {
        if (image) {
          styles.push(
            new StyleStyle({
              image,
              fill: fillStyle,
              stroke,
              zIndex: order,
            })
          )
        } else {
          // For LineString and Polygon without image (no point style)
          styles.push(
            new StyleStyle({
              fill: fillStyle,
              stroke,
              zIndex: order,
            })
          )
        }
      }

      return styles
    } as StyleFunction
  }
}
