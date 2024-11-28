import { Map } from 'ol'
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import CircleStyle from 'ol/style/Circle.js'
import Fill from 'ol/style/Fill.js'
import Stroke from 'ol/style/Stroke.js'
import Style from 'ol/style/Style.js'
import { FeatureJSON } from './feature-info.model'
import { Geometry, GeometryCollection } from 'ol/geom'
import { FeatureLike } from 'ol/Feature'
import { ReadOptions } from 'ol/format/Feature'
import GeoJSON from 'ol/format/GeoJSON'
import { extend, Extent } from 'ol/extent'
import { FitOptions } from 'ol/View'
import { Size } from 'ol/size'

//TODO: potentially move to ol services
class FeatureInfoService {
  map: Map
  featureLayer: VectorLayer<VectorSource<Geometry>>

  init(map: Map) {
    this.map = map
    this.createFeatureLayer()
  }

  createFeatureLayer() {
    this.featureLayer = new VectorLayer({
      source: new VectorSource(),
      zIndex: 1000,
      // altitudeMode: 'clampToGround',
    })
    const defaultFill = new Fill({
      color: [255, 255, 0, 0.6],
    })
    const circleStroke = new Stroke({
      color: [255, 155, 55, 1],
      width: 3,
    })

    const image = new CircleStyle({
      radius: 10,
      fill: defaultFill,
      stroke: circleStroke,
    })

    this.featureLayer.setStyle(
      /**
       * @param {ol.Feature|ol.render.Feature} feature Feature.
       * @param {number} resolution Resolution.
       * @return {Array.<ol.style.Style>} Array of styles.
       */
      function (feature: FeatureLike) {
        const lineColor = feature.get('color') || '#ffcc33'
        const lineWidth = /** @type {number} */ feature.get('width') || 3
        const defaultStyle = [
          new Style({
            fill: new Fill({
              color: [255, 255, 0, 0.6],
            }),
          }),
          new Style({
            stroke: new Stroke({
              color: '#ffffff',
              width: 5,
            }),
          }),
          new Style({
            stroke: new Stroke({
              color: lineColor,
              width: lineWidth,
            }),
          }),
        ]

        const geometryType = feature.getGeometry()?.getType()
        return geometryType == 'Point' || geometryType == 'MultiPoint'
          ? [new Style({ image: image })]
          : defaultStyle
      }
    )
    this.map.addLayer(this.featureLayer)
  }

  highlightFeatures(features: FeatureJSON[], fit: boolean): void {
    if (features !== undefined && features !== null) {
      if (this.map.getLayers().getArray().indexOf(this.featureLayer) === -1) {
        this.map.addLayer(this.featureLayer)
      }

      const encOpt: ReadOptions = {
        dataProjection: 'EPSG:2169',
        featureProjection: this.map.getView().getProjection(),
      }

      const olFeatures = new GeoJSON().readFeatures(
        {
          type: 'FeatureCollection',
          features: features,
        },
        encOpt
      )

      if (olFeatures.length > 0) {
        let extent: Extent = olFeatures[0].getGeometry()?.getExtent() || [
          0, 0, 0, 0,
        ]
        for (const curFeature of olFeatures) {
          const curExtent = curFeature.getGeometry()?.getExtent() || [
            0, 0, 0, 0,
          ]
          extent = extend(extent, curExtent)
          if (curFeature.getId() == null) {
            curFeature.setId(undefined)
          }
          if (curFeature.getGeometry()?.getType() === 'GeometryCollection') {
            const geomCollection =
              curFeature.getGeometry() as GeometryCollection
            geomCollection
              .getGeometriesArray()
              .forEach((geometry: Geometry) => {
                const newFeature = curFeature.clone()
                newFeature.setGeometry(geometry)
                this.featureLayer.getSource()?.addFeature(newFeature)
              })
          } else {
            this.featureLayer.getSource()?.addFeature(curFeature)
          }
        }
        if (fit && extent) {
          const fitOptions: FitOptions = {
            size: this.map.getSize() as Size,
            maxZoom: 17,
          }
          this.map.getView().fit(extent, fitOptions)
        }
      }
    }
  }

  clearFeatures(): void {
    this.featureLayer.getSource()?.clear()
  }
}
export const featureInfoService = new FeatureInfoService()
