import useMap, {
  PROJECTION_LUX,
  PROJECTION_WEBMERCATOR,
  PROJECTION_WGS84,
} from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { featureInfoLayerService } from '@/services/info/feature-info-layer.service'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { MapBrowserEvent } from 'ol'
import { ref, watch, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'
import useThemes from '@/composables/themes/themes.composable'
import { transform } from 'ol/proj'
import { useDrawStore } from '@/stores/draw.store'
import { FeatureLike } from 'ol/Feature'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { Pixel } from 'ol/pixel'
import { throttle } from '@/services/utils'
import { useMapStore } from '@/stores/map.store'
import { useLocationInfoStore } from '@/stores/location-info.store'
import { useLidarStore } from '@/stores/lidar.store'
import { useElevationProfileStore } from '@/stores/elevation-profile.store'
import { getFeatureInfoJson } from '@/services/api/api-feature-info.service'
import { OLLAYER_PROP_METADATA } from '@/services/ol-layer/ol-layer.model'
import { isParcelLayerIdent } from '@/composables/layers/layers.composable'
import ImageLayer from 'ol/layer/Image'
import { ImageWMS } from 'ol/source'
import { isInActiveMode } from './info.utils'

export default function useFeatureInfo() {
  const map = useMap().getOlMap()
  const { setFeatureInfoPanelContent, setLoading, setDisplayStarOnMobile } =
    useFeatureInfoStore()
  const { fid, isLoading } = storeToRefs(useFeatureInfoStore())
  const { toggleInfoOpen } = useAppStore()
  const { layersOpen, myMapsOpen, infoOpen } = storeToRefs(useAppStore())
  const { findById } = useThemes()
  const { drawStateActive, editStateActive, drawnFeatures } =
    storeToRefs(useDrawStore())
  const { locationInfoCoords, isStreetviewActive } = storeToRefs(
    useLocationInfoStore()
  )
  const { maxZoom, layers: mapLayers } = storeToRefs(useMapStore())
  const {
    measureActive,
    drawLidarActive,
    justFinishedDrawing: justFinishedDrawingLidar,
  } = storeToRefs(useLidarStore())
  const {
    drawElevationProfileActive,
    justFinishedDrawing: justFinishedDrawingElevation,
  } = storeToRefs(useElevationProfileStore())
  const { measureToolbarOpen } = storeToRefs(useAppStore())

  const responses = ref<FeatureInfoJSON[]>([])
  const lastHighlightedFeatures = ref<FeatureJSON[]>([])
  const startPixel = ref<number[] | null>([])
  const stopPixel = ref<number[] | null>([])
  const timeoutId = ref<number | null>(null)

  function init() {
    featureInfoLayerService.init(map)

    listen(map, 'pointerdown', event => {
      ;(() => {
        startPixel.value = (event as MapBrowserEvent<PointerEvent>).pixel
      })()
    })

    listen(
      map,
      'pointerup',
      throttle(
        event => onPointerUp(event as MapBrowserEvent<PointerEvent>),
        499
      )
    )

    listen(map, 'pointermove', event => {
      onPointerMove(event as MapBrowserEvent<PointerEvent>)
    })

    watchEffect(() => {
      if (fid.value) {
        ;(async () => {
          await getFeatureInfoById(fid.value as string)
        })()
      }
    })

    // Clear highlights when the info panel is closed
    watch(infoOpen, isOpen => {
      if (!isOpen) {
        featureInfoLayerService.clearFeatures()
        lastHighlightedFeatures.value = []
        responses.value = []
      }
    })

    // When a layer is removed, remove its highlighted features
    watch(mapLayers, (newLayers, oldLayers) => {
      if (oldLayers && newLayers.length < oldLayers.length) {
        const presentLayerIds = new Set(newLayers.map(l => String(l.id)))
        responses.value = responses.value.filter(r =>
          presentLayerIds.has(String(r.layer))
        )
        lastHighlightedFeatures.value = responses.value.flatMap(r => r.features)
        featureInfoLayerService.highlightFeatures(
          lastHighlightedFeatures.value,
          false,
          maxZoom.value
        )
        if (lastHighlightedFeatures.value.length === 0) {
          featureInfoLayerService.clearFeatures()
        }
        const content = responses.value.filter(
          item => 'features' in item && item.features.length > 0
        )
        setFeatureInfoPanelContent(content)
      }
    })
  }

  function onPointerUp(evt: MapBrowserEvent<PointerEvent>) {
    ;(async () => {
      stopPixel.value = evt.pixel

      if (
        // TODO: integrate in v3 and migrate once available
        // routingOpen ||
        // lidarOpen ||
        // appActivetool.value.isActive() || => corresponds to: measureActive, streetviewActive
        evt.originalEvent.button === 2 || // right click
        (isStreetviewActive.value && locationInfoCoords.value) ||
        isInActiveMode(
          drawStateActive,
          editStateActive,
          measureActive,
          measureToolbarOpen,
          drawLidarActive,
          drawElevationProfileActive,
          justFinishedDrawingLidar,
          justFinishedDrawingElevation
        ) ||
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

  /**
   * On pointer move, detect if layer has data at pixel, if yes, change map viewport cursor to pointer
   * @param evt The mouse event
   * @returns
   */
  async function onPointerMove(evt: MapBrowserEvent<PointerEvent>) {
    if (evt.dragging || isLoading.value) {
      return
    }

    const hitDetected = await Promise.all(
      // keep Promise all because cannot loop on array when async
      map
        .getLayers()
        .getArray()
        .filter(layer => layer instanceof ImageLayer)
        .map(async layer => {
          const dataAtPixel = (<ImageLayer<ImageWMS>>layer).getData(
            evt.pixel
          ) as unknown as number[]

          if (
            layer.getVisible() &&
            layer.getOpacity() > 0 &&
            !dataAtPixel?.every(d => d === 0)
          ) {
            const metadata = layer.get(OLLAYER_PROP_METADATA)
            return metadata && metadata['is_queryable']
          }

          return false
        })
    ).then(results => results.some(Boolean))

    map.getViewport().style.cursor = hitDetected ? 'pointer' : ''
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

  async function getFeatureInfoFromClick(evt: MapBrowserEvent): Promise<void> {
    const layers = map.getLayers().getArray()
    const layersList = []
    const layerLabel: { [key: string]: string } = {}

    for (let i = layers.length - 1; i >= 0; i--) {
      const metadata = layers[i].get(OLLAYER_PROP_METADATA)
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
      const point = transform(
        evt.coordinate,
        map.getView().getProjection(),
        PROJECTION_LUX
      )
      await fetchAndShowFeatureInfo(
        point,
        evt.pixel as [number, number],
        layersList,
        layerLabel,
        evt.originalEvent.shiftKey,
        false
      )
    }
  }

  async function fetchAndShowFeatureInfo(
    pointLux: number[],
    pixel: [number, number],
    layersList: (string | number)[],
    layerLabel: { [key: string]: string },
    shiftKey: boolean,
    fit: boolean
  ): Promise<boolean> {
    const resolution = map.getView().getResolution() || 1
    const bigBuffer = 20 * resolution
    const smallBuffer = 1 * resolution

    const big_box = [
      [pointLux[0] - bigBuffer, pointLux[1] + bigBuffer],
      [pointLux[0] + bigBuffer, pointLux[1] - bigBuffer],
    ]
    const small_box = [
      [pointLux[0] - smallBuffer, pointLux[1] + smallBuffer],
      [pointLux[0] + smallBuffer, pointLux[1] - smallBuffer],
    ]

    setLoading(true)
    map.getViewport().style.cursor = 'wait'

    const size = map.getSize() || [0, 0]
    const extent = map.getView().calculateExtent(size)
    const params = {
      layers: layersList.join(),
      box1: big_box.join(),
      box2: small_box.join(),
      srs: PROJECTION_WEBMERCATOR,
      zoom: map.getView().getZoom(),
      BBOX: extent.join(','),
      WIDTH: size[0],
      HEIGHT: size[1],
      X: Math.round(pixel[0]),
      Y: Math.round(pixel[1]),
    }

    try {
      const data = await getFeatureInfoJson(params)
      if (data.length > 0) {
        showInfo(shiftKey, data, layerLabel, true, fit)
        return true
      } else {
        lastHighlightedFeatures.value = []
        featureInfoLayerService.highlightFeatures(
          lastHighlightedFeatures.value,
          false,
          maxZoom.value
        )
        done()
        return false
      }
    } catch (error) {
      done()
      return false
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
      const resp = responses.value[i]
      const isParcelLayer =
        isParcelLayerIdent(resp.layerLabel) || isParcelLayerIdent(resp.layer)
      // annotate features so downstream highlight service can detect parcels
      resp.features.forEach(f => {
        try {
          if (!f.properties) f.properties = {}
          if (isParcelLayer) {
            f.properties['layer_name'] = 'Parcelle'
            f.properties['isParcel'] = true
          }
        } catch (e) {
          // ignore
        }
      })
      // Debug: response annotated (removed verbose logging)
      lastHighlightedFeatures.value.push(...resp.features)
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

  async function getFeatureInfoAtCoordinate(
    coordWGS84: [number, number],
    layerIds: (string | number)[]
  ): Promise<boolean> {
    if (layerIds.length === 0) return false

    const allOlLayers = map.getLayers().getArray()
    const layerLabel: { [key: string]: string } = {}
    const resolvedIds: (string | number)[] = []

    for (const id of layerIds) {
      const olLayer = allOlLayers.find(l => l.get('queryable_id') == id)
      if (olLayer) {
        resolvedIds.push(id)
        layerLabel[id] = olLayer.get('label') || String(id)
      }
    }

    if (resolvedIds.length === 0) return false

    const coordMap = transform(
      coordWGS84,
      PROJECTION_WGS84,
      map.getView().getProjection()
    )
    const coordLux = transform(
      coordMap,
      map.getView().getProjection(),
      PROJECTION_LUX
    )
    const pixel =
      (map.getPixelFromCoordinate(coordMap) as [number, number]) ??
      ([0, 0] as [number, number])

    return fetchAndShowFeatureInfo(
      coordLux,
      pixel,
      resolvedIds,
      layerLabel,
      false,
      true
    )
  }

  return { init, getFeatureInfoAtCoordinate }
}
