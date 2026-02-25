import { Map } from 'ol'
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import CircleStyle from 'ol/style/Circle.js'
import Fill from 'ol/style/Fill.js'
import Stroke from 'ol/style/Stroke.js'
import Style from 'ol/style/Style.js'
import { GeometryCollection } from 'ol/geom'
import { ReadOptions } from 'ol/format/Feature'
import GeoJSON from 'ol/format/GeoJSON'
import { extend, Extent } from 'ol/extent'
import { FitOptions } from 'ol/View'
import { Size } from 'ol/size'
import { PROJECTION_WGS84 } from '@/composables/map/map.composable'
import Feature from 'ol/Feature'
import FeatureLike from 'ol/Feature'

export const FEATURE_LAYER_TYPE = 'searchLayer'
export const HIGHLIGHT_MAX_ZOOM = 17
class OlLayerSearchService {
  map: Map
  featureLayer: VectorLayer<VectorSource>

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
    this.featureLayer.set('cyLayerType', FEATURE_LAYER_TYPE)
    this.featureLayer.setStyle(
      /**
       * @param feature Feature.
       * @return Array of styles.
       */
      function (
        feature: FeatureLike | import('ol/render/Feature').default
      ): Style[] {
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

        const geometryType = feature.getGeometry?.()?.getType?.()
        return geometryType === 'Point' || geometryType === 'MultiPoint'
          ? [new Style({ image })]
          : defaultStyle
      }
    )
    this.map.addLayer(this.featureLayer)
  }

  clearFeatures(): void {
    this.featureLayer.getSource()?.clear()
  }

  clearParcelHighlights(): void {
    const src = this.featureLayer.getSource()
    if (!src) return
    const feats = src.getFeatures() || []
    for (const f of feats) {
      try {
        if (f.get && f.get('isParcel')) {
          src.removeFeature(f)
        }
      } catch (e) {
        // ignore errors while checking feature properties
      }
    }
  }

  fitFeatures(features: any, maxZoom?: number, dataProjection?: string): void {
    const encOpt: ReadOptions = {
      dataProjection: dataProjection || PROJECTION_WGS84,
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
        const curExtent = curFeature.getGeometry()?.getExtent() || [0, 0, 0, 0]
        extent = extend(extent, curExtent)
      }
      if (extent) {
        const fitOptions: FitOptions = {
          size: this.map.getSize() as Size,
          maxZoom: maxZoom || HIGHLIGHT_MAX_ZOOM,
        }
        this.map.getView().fit(extent, fitOptions)
      }
    }
  }
  isGeoJsonArray(features: any[]): boolean {
    return features.length > 0 && typeof features[0].type === 'string'
  }
  isFeatureArray(features: any[]): features is Feature[] {
    return features.length > 0 && typeof features[0].getGeometry === 'function'
  }

  highlightFeatures(
    features: object[],
    fit: boolean,
    maxZoom?: number,
    dataProjection?: string
  ): void {
    this.clearFeatures()
    if (features !== undefined && features !== null) {
      if (this.map.getLayers().getArray().indexOf(this.featureLayer) === -1) {
        this.map.addLayer(this.featureLayer)
      }

      const encOpt: ReadOptions = {
        dataProjection: dataProjection || PROJECTION_WGS84,
        featureProjection: this.map.getView().getProjection(),
      }

      let olFeatures: Feature[] = []
      if (this.isGeoJsonArray(features)) {
        olFeatures = new GeoJSON().readFeatures(
          {
            type: 'FeatureCollection',
            features: features,
          },
          encOpt
        )
      } else if (this.isFeatureArray(features)) {
        olFeatures = features as Feature[]
      }
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
          // mark as parcel when indicated by source properties
          try {
            if (
              curFeature.get('layer_name') === 'Parcelle' ||
              curFeature.get('isParcel')
            ) {
              curFeature.set('isParcel', true)
            }
          } catch (e) {
            // ignore if property access fails
          }

          if (curFeature.getGeometry()?.getType() === 'GeometryCollection') {
            const geomCollection =
              curFeature.getGeometry() as GeometryCollection
            geomCollection.getGeometriesArray().forEach(geometry => {
              const newFeature = curFeature.clone()
              newFeature.setGeometry(geometry)
              // preserve parcel flag on cloned features
              if (curFeature.get('isParcel')) {
                newFeature.set('isParcel', true)
              }
              this.featureLayer.getSource()?.addFeature(newFeature)
            })
          } else {
            this.featureLayer.getSource()?.addFeature(curFeature)
          }
        }
        // (removed debug summary)
        if (fit && extent) {
          const fitOptions: FitOptions = {
            size: this.map.getSize() as Size,
            maxZoom: maxZoom || HIGHLIGHT_MAX_ZOOM,
          }
          this.map.getView().fit(extent, fitOptions)
        }
      }
    }
  }
}
export const olLayerSearchService = new OlLayerSearchService()
