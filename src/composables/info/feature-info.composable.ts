import useMap, {
  PROJECTION_LUX,
  PROJECTION_WEBMERCATOR,
} from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { featureInfoLayerService } from '../../services/info/feature-info-layer.service'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '../../services/info/feature-info.model'
import { MapBrowserEvent } from 'ol'
import { ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'
import useThemes from '@/composables/themes/themes.composable'
import { transform } from 'ol/proj'
import { useDrawStore } from '@/stores/draw.store'
import { FeatureLike } from 'ol/Feature'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import { Pixel } from 'ol/pixel'
import { throttle } from '@/services/utils'
import { useMapStore } from '@/stores/map.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { getFeatureInfoJson } from '@/services/api/api-feature-info.service'

export default function useFeatureInfo() {
  const map = useMap().getOlMap()
  const { setFeatureInfoPanelContent, setLoading, setDisplayStarOnMobile } =
    useFeatureInfoStore()
  const { fid, isLoading } = storeToRefs(useFeatureInfoStore())
  const { toggleInfoOpen } = useAppStore()
  const { layersOpen, myMapsOpen } = storeToRefs(useAppStore())
  const { findById } = useThemes()
  const { drawStateActive, editStateActive, drawnFeatures } = storeToRefs(
    useDrawStore()
  )
  const { locationInfoCoords, isStreetviewActive } = storeToRefs(
    useLocationInfoStore()
  )
  const { maxZoom } = storeToRefs(useMapStore())

  const responses = ref<FeatureInfoJSON[]>([])
  const lastHighlightedFeatures = ref<FeatureJSON[]>([])
  const startPixel = ref<number[] | null>([])
  const stopPixel = ref<number[] | null>([])
  const timeoutId = ref<number | null>(null)

  function init() {
    featureInfoLayerService.init(map)
    listen(map, 'pointerdown', event => {
      ;(() => {
        startPixel.value = (event as MapBrowserEvent<MouseEvent>).pixel
      })()
    })

    listen(
      map,
      'pointerup',
      throttle(event => onPointerUp(event as MapBrowserEvent<MouseEvent>), 499)
    )

    listen(map, 'pointermove', event =>
      onPointerMove(event as MapBrowserEvent<MouseEvent>)
    )

    watchEffect(() => {
      if (fid.value) {
        ;(async () => {
          await getFeatureInfoById(fid.value as string)
        })()
      }
    })
  }

  function onPointerUp(evt: MapBrowserEvent<MouseEvent>) {
    ;(async () => {
      stopPixel.value = evt.pixel
      if (
        // TODO: integrate in v3 and migrate once available
        // routingOpen ||
        // lidarOpen ||
        // appActivetool.value.isActive() || => corresponds to: measureActive, streetviewActive
        evt.originalEvent.button === 2 || // right click
        (isStreetviewActive.value && locationInfoCoords.value) ||
        drawStateActive.value ||
        editStateActive.value ||
        isLoading.value
      ) {
        return
      }

      timeoutId.value = window.setTimeout(() => {
        let found = false
        if (
          (layersOpen.value || myMapsOpen.value) &&
          drawnFeatures.value.length > 0
        ) {
          found = checkForDrawnFeature(evt.pixel)
        }

        if (!found && startPixel.value && stopPixel.value) {
          const deltaX = Math.abs(startPixel.value[0] - stopPixel.value[0])
          const deltaY = Math.abs(startPixel.value[1] - stopPixel.value[1])
          if (deltaX + deltaY < 6) {
            getFeatureInfoFromClick(evt)
            startPixel.value = null
            stopPixel.value = null
          }
        }
      }, 500)
    })()
  }

  function onPointerMove(evt: MapBrowserEvent<MouseEvent>) {
    if (evt.dragging || isLoading.value) {
      return
    }
    if (drawStateActive.value /*TODO: || measureActive || streetviewActive*/) {
      map.getViewport().style.cursor = ''
    } else {
      const pixel = map.getEventPixel(evt.originalEvent)
      let hit: boolean | undefined = false
      try {
        hit = map.forEachLayerAtPixel(
          pixel,
          layer => {
            if (layer) {
              const metadata = layer.get('metadata')
              if (
                metadata &&
                metadata['is_queryable'] &&
                layer.getVisible() &&
                layer.getOpacity() > 0
              ) {
                return true
              }
            }
            return false
          },
          {
            layerFilter: layer => !!layer.getSource(),
          }
        )
      } catch (error) {
        hit = false
      }
      map.getViewport().style.cursor = hit ? 'pointer' : ''
    }
  }

  async function getFeatureInfoById(fid: string): Promise<void> {
    const fids = fid.split(',')
    for (const curFid of fids) {
      const fId = curFid.split('_')[0]
      const layersList = [fId]
      const layerLabel: { [key: string]: string } = {}

      try {
        if (layersList.length > 0) {
          setLoading(true)
          map.getViewport().style.cursor = 'wait'

          const data = await getFeatureInfoJson({ fid: curFid })

          let openInfoPanel = false
          if (screenSizeIsAtLeast('sm')) {
            openInfoPanel = true
            setDisplayStarOnMobile(false)
          } else {
            setDisplayStarOnMobile(true)
          }

          const node = findById(fId)
          if (node) {
            layerLabel[fId] = node.layers as string
          }

          if (data.length > 0) {
            showInfo(true, data, layerLabel, openInfoPanel, true)
          }
        }
      } catch (error) {
        done()
      }
    }
  }

  async function getFeatureInfoFromClick(
    evt: MapBrowserEvent<MouseEvent>
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
        PROJECTION_LUX
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
        srs: PROJECTION_WEBMERCATOR,
        zoom: map.getView().getZoom(),
        .../*(!map.get('ol3dm').is3dEnabled() &&*/ {
          BBOX: bbox,
          WIDTH: size[0],
          HEIGHT: size[1],
          X: evt.pixel[0],
          Y: evt.pixel[1],
        },
      }
      try {
        const data = await getFeatureInfoJson(params)
        if (data.length > 0) {
          showInfo(evt.originalEvent.shiftKey, data, layerLabel, true, false)
        } else {
          lastHighlightedFeatures.value = []
          featureInfoLayerService.highlightFeatures(
            lastHighlightedFeatures.value,
            false,
            maxZoom.value
          )
          done()
        }
      } catch (error) {
        done()
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
          if (responses.value[iLayer].layer === item.layer) {
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
    const content: FeatureInfoJSON[] = responses.value.filter(item => {
      return 'features' in item && item.features.length > 0
    })

    const infoOpen = responses.value.length > 0 ? openInfoPanel : false
    done(infoOpen)

    lastHighlightedFeatures.value = []
    for (let i = 0; i < responses.value.length; i++) {
      lastHighlightedFeatures.value.push(...responses.value[i].features)
    }
    featureInfoLayerService.highlightFeatures(
      lastHighlightedFeatures.value,
      fit,
      maxZoom.value
    )

    setFeatureInfoPanelContent(content)
  }

  function done(openPanel = false) {
    toggleInfoOpen(openPanel)
    setLoading(false)
    map.getViewport().style.cursor = ''
    featureInfoLayerService.clearFeatures()
  }

  function checkForDrawnFeature(pixel: Pixel): boolean {
    const selected: FeatureLike[] = []
    // TODO: 3D
    // const ol3dm = this.map.get('ol3dm')
    // if (ol3dm.is3dEnabled()) {
    //   const picked = ol3dm
    //     .getCesiumScene()
    //     .drillPick(new Cesium.Cartesian2(pixel[0], pixel[1]))
    //   picked.forEach((pick: any) => {
    //     if (pick && pick.primitive.olFeature) {
    //       selected.push(pick.primitive.olFeature)
    //     }
    //   })
    // } else {
    map.forEachFeatureAtPixel(
      pixel,
      (feature: FeatureLike) => {
        if (drawnFeatures.value.indexOf(feature as DrawnFeature) !== -1) {
          selected.push(feature)
          return false
        }
        return true
      },
      {
        hitTolerance: 5,
      }
    )
    return selected.length > 0
  }

  return { init }
}
