import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { FeatureInfoService } from './feature-info.service'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { FeatureInfoJSON, FeatureJSON } from './feature-info.model'
import { MapBrowserEvent } from 'ol'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'
import useThemes from '@/composables/themes/themes.composable'
import { transform } from 'ol/proj'

const INFO_SERVICE_URL = import.meta.env.VITE_GET_INFO_SERVICE_URL

export default function useFeatureInfo() {
  const map = useMap().getOlMap()
  const { setFeatureInfoPanelContent, setLoading, setInfoPanelHidden } =
    useFeatureInfoStore()
  const { fid } = storeToRefs(useFeatureInfoStore())
  const { toggleInfoOpen } = useAppStore()
  const { findById } = useThemes()
  const responses = ref<FeatureInfoJSON[]>([])
  const lastHighlightedFeatures = ref<FeatureJSON[]>([])
  const featureInfoService = new FeatureInfoService(map)

  function init() {
    listen(map, 'pointerup', event => {
      ;(async () => {
        const mapBrowserEvent = event as MapBrowserEvent<any>
        await singleclickEvent(mapBrowserEvent, false)
      })()
    })

    watchEffect(() => {
      if (fid.value) {
        ;(async () => {
          await getFeatureInfoById(fid.value as string)
        })()
      }
    })
  }

  async function getFeatureInfoById(fid: string): Promise<void> {
    const fids = fid.split(',')
    for (const curFid of fids) {
      const splittedFid = curFid.split('_')
      const layersList = [splittedFid[0]]
      const layerLabel: { [key: string]: string } = {}

      try {
        if (layersList.length > 0) {
          setLoading(true)
          map.getViewport().style.cursor = 'wait'

          const url = new URL(INFO_SERVICE_URL)
          url.searchParams.append('fid', curFid)
          try {
            const resp = await fetch(url.toString())

            let openInfoPanel = false
            if (screenSizeIsAtLeast('sm')) {
              openInfoPanel = true
              setInfoPanelHidden(false)
            } else {
              setInfoPanelHidden(true)
            }

            const node = findById(splittedFid[0])
            if (node) {
              layerLabel[splittedFid[0]] = node.layers as string
            }

            if (resp.ok) {
              const data = await resp.json()
              if (data.length > 0) {
                showInfo(true, data, layerLabel, openInfoPanel, true)
              }
            }
          } catch (error) {
            reset()
          }
        }
      } catch (error) {
        // console.error('Error fetching flat catalog:', error)
      }
    }
  }

  async function singleclickEvent(
    evt: MapBrowserEvent<any>,
    infoMymaps: boolean
  ): Promise<void> {
    const layers = map.getLayers().getArray()
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
      const resolution = map.getView().getResolution()
      let bigBuffer = 0
      let smallBuffer = 0
      if (resolution) {
        bigBuffer = 20 * resolution
        smallBuffer = 1 * resolution
      }

      const point = transform(
        evt.coordinate,
        map.getView().getProjection(),
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

      setLoading(true)
      map.getViewport().style.cursor = 'wait'

      const size = map.getSize() || [0, 0]
      const extent = map.getView().calculateExtent(size)
      const bbox = extent.join(',')
      const params = {
        layers: layersList.join(),
        box1: big_box.join(),
        box2: small_box.join(),
        srs: 'EPSG:3857',
        zoom: map.getView().getZoom(),
        .../*(!map.get('ol3dm').is3dEnabled() &&*/ {
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
            showInfo(evt.originalEvent.shiftKey, data, layerLabel, true, false)
          } else {
            lastHighlightedFeatures.value = []
            featureInfoService.highlightFeatures(
              lastHighlightedFeatures.value,
              false
            )
            reset()
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
        reset()

        // throw new Error('Some error occured')
      }
    } else {
      if (infoMymaps) {
        // this.selectMymapsFeature_(evt.pixel)
      }
    }
  }

  function showInfo(
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
        for (let iLayer = 0; iLayer < responses.value.length; iLayer++) {
          if (responses.value[iLayer].layer == item.layer) {
            found = true
            let removed = false
            for (let iItem = 0; iItem < item.features.length; iItem++) {
              for (
                let iFeatures = 0;
                iFeatures < responses.value[iLayer].features.length;
                iFeatures++
              ) {
                if (
                  responses.value[iLayer].features[iFeatures]['fid'] ==
                  item.features[iItem]['fid']
                ) {
                  removed = true
                  responses.value[iLayer].features.splice(iFeatures, 1)
                  break
                }
              }
              if (!removed) {
                responses.value[iLayer].features = responses.value[
                  iLayer
                ].features.concat(item.features[iItem])
              }
            }
            break
          }
        }
        if (!found) {
          responses.value.push(item)
        }
      })
    } else {
      responses.value = data
      responses.value.forEach(item => {
        item['layerLabel'] = layerLabel[item.layer]
      })
    }

    responses.value.forEach(item => {
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

    const content: FeatureInfoJSON[] = responses.value.filter(item => {
      return 'features' in item && item.features.length > 0
    })

    const infoOpen = responses.value.length > 0 ? openInfoPanel : false
    reset(infoOpen)

    lastHighlightedFeatures.value = []
    for (let i = 0; i < responses.value.length; i++) {
      lastHighlightedFeatures.value.push(...responses.value[i].features)
    }
    featureInfoService.highlightFeatures(lastHighlightedFeatures.value, fit)

    setFeatureInfoPanelContent(content)
  }

  function reset(openPanel = false) {
    toggleInfoOpen(openPanel)
    setLoading(false)
    map.getViewport().style.cursor = ''
    featureInfoService.clearFeatures()
  }

  return { init }
}
