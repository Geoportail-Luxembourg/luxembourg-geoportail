import { Map, MapBrowserEvent } from 'ol'
import VectorLayer from 'ol/layer/Vector.js'
import { transform } from 'ol/proj.js'
import VectorSource from 'ol/source/Vector.js'
import CircleStyle from 'ol/style/Circle.js'
import Fill from 'ol/style/Fill.js'
import Stroke from 'ol/style/Stroke.js'
import Style from 'ol/style/Style.js'
import { FeatureJSON, FeatureInfoJSON } from './feature-info.model'
import { Geometry, GeometryCollection } from 'ol/geom'
import { FeatureLike } from 'ol/Feature'
import useThemes from '@/composables/themes/themes.composable'
import { ReadOptions } from 'ol/format/Feature'
import GeoJSON from 'ol/format/GeoJSON'
import { extend, Extent } from 'ol/extent'
import { FitOptions } from 'ol/View'
import { Size } from 'ol/size'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'
import { useAppStore } from '@/stores/app.store'

const INFO_SERVICE_URL = import.meta.env.VITE_GET_INFO_SERVICE_URL

export class FeatureInfoService {
  constructor(map: Map) {
    this.map = map
    this.createFeatureLayer()
  }
  map: Map
  featureLayer: VectorLayer<VectorSource<Geometry>>
  content: FeatureInfoJSON[]
  responses: FeatureInfoJSON[] = []
  lastHighlightedFeatures: FeatureJSON[] = []

  setLoading = useFeatureInfoStore().setLoading
  setInfoPanelHidden = useFeatureInfoStore().setInfoPanelHidden
  toggleInfoOpen = useAppStore().toggleInfoOpen

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

  async getFeatureInfoById(
    fid: string
  ): Promise<FeatureInfoJSON[] | undefined> {
    const fids = fid.split(',')
    for (const curFid of fids) {
      const splittedFid = curFid.split('_')
      const layersList = [splittedFid[0]]
      const layerLabel: { [key: string]: string } = {}

      try {
        if (layersList.length > 0) {
          this.setLoading(true)
          this.map.getViewport().style.cursor = 'wait'
          this.content = []

          const url = new URL(INFO_SERVICE_URL)
          url.searchParams.append('fid', curFid)
          try {
            const resp = await fetch(url.toString())

            let showInfo = false
            if (screenSizeIsAtLeast('sm')) {
              showInfo = true
              this.setInfoPanelHidden(false)
            } else {
              this.setInfoPanelHidden(true)
            }

            const { findById } = useThemes()
            const node = findById(splittedFid[0])

            if (node) {
              layerLabel[splittedFid[0]] = node.layers as string
            }

            if (resp.ok) {
              const data = await resp.json()
              if (data.length > 0) {
                return this.showInfo(true, data, layerLabel, showInfo, true)
              }
            }
          } catch (error) {
            this.clearQueryResult()
            this.toggleInfoOpen(false)
            this.map.getViewport().style.cursor = ''
            this.setLoading(false)
          }
        }
      } catch (error) {
        // console.error('Error fetching flat catalog:', error)
      }
    }
  }

  async singleclickEvent(
    evt: MapBrowserEvent<any>,
    infoMymaps: boolean
  ): Promise<FeatureInfoJSON[] | undefined> {
    const layers = this.map.getLayers().getArray()
    const layersList = []
    const layerLabel: { [key: string]: string } = {}

    for (let i = layers.length - 1; i >= 0; i--) {
      const metadata = layers[i].get('metadata')
      if (metadata !== undefined && metadata !== null) {
        if (
          metadata['is_queryable'] &&
          layers[i].getVisible() &&
          layers[i].getOpacity() > 0
        ) {
          const queryableId = layers[i].get('queryable_id')
          layersList.push(queryableId)
          layerLabel[queryableId] = layers[i].get('label')
        }
      }
    }

    if (layersList.length > 0) {
      const resolution = this.map.getView().getResolution()
      let bigBuffer = 0
      let smallBuffer = 0
      if (resolution) {
        bigBuffer = 20 * resolution
        smallBuffer = 1 * resolution
      }

      const point = transform(
        evt.coordinate,
        this.map.getView().getProjection(),
        'EPSG:2169'
      )
      const big_box = [
        [point[0] - bigBuffer, point[1] + bigBuffer],
        [point[0] + bigBuffer, point[1] - bigBuffer],
      ]
      const small_box = [
        [point[0] - smallBuffer, point[1] + smallBuffer],
        [point[0] + smallBuffer, point[1] - smallBuffer],
      ]

      this.setLoading(true)
      this.map.getViewport().style.cursor = 'wait'

      this.content = []

      const size = this.map.getSize() || [0, 0]
      const extent = this.map.getView().calculateExtent(size)
      const bbox = extent.join(',')
      const params = {
        layers: layersList.join(),
        box1: big_box.join(),
        box2: small_box.join(),
        srs: 'EPSG:3857',
        zoom: this.map.getView().getZoom(),
        .../*(!this.map.get('ol3dm').is3dEnabled() &&*/ {
          BBOX: bbox,
          WIDTH: size[0],
          HEIGHT: size[1],
          X: evt.pixel[0],
          Y: evt.pixel[1],
        },
      }

      const url = new URL(INFO_SERVICE_URL)
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, (params as Record<string, any>)[key])
      )

      try {
        const resp = await fetch(url.toString())
        if (resp.ok) {
          const data = await resp.json()
          if (data.length > 0) {
            //added return here
            return this.showInfo(
              evt.originalEvent.shiftKey,
              data,
              layerLabel,
              true,
              false
            )
          } else {
            this.setLoading(false)
            this.map.getViewport().style.cursor = ''
            this.lastHighlightedFeatures = []
            this.highlightFeatures(this.lastHighlightedFeatures, false)
            this.clearQueryResult()
            // TODO: temporarily make work with v3 and migrate onse mymaps available
            // if (infoMymaps) {
            //   if (!this.selectMymapsFeature_(evt.pixel)) {
            //     this['infoOpen'] = false
            //   }
            // } else {
            //   this['infoOpen'] = false
            // }
          }
        } else {
          throw new Error('Network response was not ok')
        }
      } catch (error) {
        this.clearQueryResult()
        this.toggleInfoOpen(false)
        this.map.getViewport().style.cursor = ''
        this.setLoading(false)
        // throw new Error('Some error occured')
      }
    } else {
      if (infoMymaps) {
        // this.selectMymapsFeature_(evt.pixel)
      }
    }
  }

  showInfo(
    shiftKey: boolean,
    data: FeatureInfoJSON[],
    layerLabel: { [key: string]: string },
    openInfoPanel: boolean,
    fit: boolean
  ) {
    if (shiftKey) {
      data.forEach(item => {
        item['layerLabel'] = layerLabel[item.layer]
        let found = false
        for (let iLayer = 0; iLayer < this.responses.length; iLayer++) {
          if (this.responses[iLayer].layer == item.layer) {
            found = true
            let removed = false
            for (let iItem = 0; iItem < item.features.length; iItem++) {
              for (
                let iFeatures = 0;
                iFeatures < this.responses[iLayer].features.length;
                iFeatures++
              ) {
                if (
                  this.responses[iLayer].features[iFeatures]['fid'] ==
                  item.features[iItem]['fid']
                ) {
                  removed = true
                  this.responses[iLayer].features.splice(iFeatures, 1)
                  break
                }
              }
              if (!removed) {
                this.responses[iLayer].features = this.responses[
                  iLayer
                ].features.concat(item.features[iItem])
              }
            }
            break
          }
        }
        if (!found) {
          this.responses.push(item)
        }
      })
    } else {
      this.responses = data
      this.responses.forEach(item => {
        item['layerLabel'] = layerLabel[item.layer]
      })
    }

    this.responses.forEach(item => {
      if (item['has_profile']) {
        // TODO: integrate profile
        // item.features.forEach(feature => {
        //   const validGeom = this.filterValidProfileFeatures_(feature)
        //   if (validGeom.geom.getLineStrings().length > 0) {
        //     feature['attributes']['showProfile'] = { active: true }
        //     this.getProfile_(validGeom.geom, validGeom.id).then(profile => {
        //       feature['attributes']['showProfile'] = { active: true }
        //       feature['attributes']['profile'] = profile
        //     })
        //   }
        // })
      }
    })

    this.clearQueryResult()
    // content to be displayed in the info panel
    this.content = this.responses.filter(item => {
      return 'features' in item && item.features.length > 0
    })

    const infoOpen = this.responses.length > 0 ? openInfoPanel : false
    this.toggleInfoOpen(infoOpen)
    this.lastHighlightedFeatures = []
    for (let i = 0; i < this.responses.length; i++) {
      this.lastHighlightedFeatures.push(...this.responses[i].features)
    }
    this.highlightFeatures(this.lastHighlightedFeatures, fit)
    this.setLoading(false)
    this.map.getViewport().style.cursor = ''
    //added return here
    return this.content
  }

  clearQueryResult() {
    this.content = []
    this.featureLayer.getSource()?.clear()
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
}
