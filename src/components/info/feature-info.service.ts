import { Map, MapBrowserEvent } from 'ol'
import VectorLayer from 'ol/layer/Vector.js'
import { transform } from 'ol/proj.js'
import VectorSource from 'ol/source/Vector.js'
import CircleStyle from 'ol/style/Circle.js'
import Fill from 'ol/style/Fill.js'
import Stroke from 'ol/style/Stroke.js'
import Style from 'ol/style/Style.js'
import { FeatureInfo } from './feature-info.model'
import { Geometry } from 'ol/geom'
import { FeatureLike } from 'ol/Feature'

const INFO_SERVICE_URL = import.meta.env.VITE_GET_INFO_SERVICE_URL

export class FeatureInfoService {
  constructor(
    //   appThemes,
    map: Map
    //   http,
    //   appGetDevice,
    //   getLayerFunc,
    //   getInfoServiceUrl
  ) {
    //   this.appThemes_ = appThemes
    this.map = map
    //   this.http_ = http
    //   this.appGetDevice_ = appGetDevice
    //   this.getLayerFunc_ = getLayerFunc
    //   this.getInfoServiceUrl_ = getInfoServiceUrl
    //   this.content = []
    //   this.QUERYPANEL_ = 'queryPanel'
    this.createFeatureLayer()
  }
  map: Map
  featureLayer: VectorLayer<VectorSource<Geometry>>
  content: FeatureInfo[]
  isQuerying = false
  responses: FeatureInfo[] = []

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

  // getFeatureInfoById(fid) {
  //   const fids = fid.split(',')
  //   fids.forEach(async curFid => {
  //     const splittedFid = curFid.split('_')
  //     const layersList = [splittedFid[0]]
  //     const layerLabel = {}

  //     try {
  //       const flatCatalogue = await this.appThemes_.getFlatCatalog()

  //       if (layersList.length > 0) {
  //         this.isQuerying_ = true
  //         this.map_.getViewport().style.cursor = 'wait'
  //         this.content = []

  //         try {
  //           const resp = await this.http_.get(this.getInfoServiceUrl_, {
  //             params: { fid: curFid },
  //           })

  //           this.appSelector = this.QUERYPANEL_
  //           let showInfo = false
  //           if (!this.appGetDevice_.testEnv('xs')) {
  //             showInfo = true
  //             this.hiddenContent = false
  //           } else {
  //             this.hiddenContent = true
  //           }

  //           const node = flatCatalogue.find(
  //             catItem => catItem.id == splittedFid[0]
  //           )
  //           if (node !== undefined && node !== null) {
  //             const layer = this.getLayerFunc_(node)
  //             const foundLayer = this.map_
  //               .getLayers()
  //               .getArray()
  //               .find(
  //                 curLayer =>
  //                   curLayer.get('queryable_id') === layer.get('queryable_id')
  //               )
  //             const idx = this.map_.getLayers().getArray().indexOf(foundLayer)
  //             if (idx === -1) {
  //               this.map_.addLayer(layer)
  //             }
  //             layerLabel[splittedFid[0]] = layer.get('label')
  //           }
  //           this.showInfo(true, resp, layerLabel, showInfo, true)
  //         } catch (error) {
  //           this.clearQueryResult(this.QUERYPANEL_)
  //           this.infoOpen = false
  //           this.map_.getViewport().style.cursor = ''
  //           this.isQuerying_ = false
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error fetching flat catalog:', error)
  //     }
  //   })
  // }

  async singleclickEvent(
    evt: MapBrowserEvent<any>,
    infoMymaps: boolean
  ): Promise<FeatureInfo[] | undefined> {
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

      this.isQuerying = true
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
              layerLabel
              // true,
              // false
            )
          } else {
            this.isQuerying = false
            this.map.getViewport().style.cursor = ''
            // this.lastHighlightedFeatures_ = []
            // this.highlightFeatures_(this.lastHighlightedFeatures_, false)
            // this.clearQueryResult(this.QUERYPANEL_)
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
        // this.clearQueryResult(this.QUERYPANEL_)
        // this['infoOpen'] = false
        // this.map.getViewport().style.cursor = ''
        // this.isQuerying = false
      }
    } else {
      if (infoMymaps) {
        // this.selectMymapsFeature_(evt.pixel)
      }
    }
  }

  showInfo(
    shiftKey: boolean,
    data: FeatureInfo[],
    layerLabel: { [key: string]: string }
    // openInfoPanel: boolean
    // fit: boolean
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

    // this.clearQueryResult(this.QUERYPANEL_)
    // content to be displayed in the info panel
    this.content = this.responses.filter(item => {
      return 'features' in item && item.features.length > 0
    })

    // this['infoOpen'] = this.responses.length > 0 ? openInfoPanel : false

    // this.lastHighlightedFeatures_ = []
    // for (let i = 0; i < this.responses.length; i++) {
    //   this.lastHighlightedFeatures_.push(...this.responses[i].features)
    // }
    // this.highlightFeatures_(this.lastHighlightedFeatures_, fit)
    this.isQuerying = false
    this.map.getViewport().style.cursor = ''
    //added return here
    return this.content
  }

  clearQueryResult(/*appSelector*/) {
    // this['appSelector'] = appSelector
    this.content = []
    this.clearFeatures()
  }

  clearFeatures() {
    this.featureLayer.getSource()?.clear()
  }
}

// export const featureInfoService = new FeatureInfoService()
