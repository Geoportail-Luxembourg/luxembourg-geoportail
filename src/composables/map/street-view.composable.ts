import { watch, nextTick, Ref } from 'vue'
import { storeToRefs } from 'pinia'
import useMap from '@/composables/map/map.composable'
import { useAppStore } from '@/stores/app.store'
import { useInfoStore } from '@/stores/info.store'
import { MapBrowserEvent } from 'ol'
import BaseEvent from 'ol/events/Event'
import { Coordinate } from 'ol/coordinate'
import { Select } from 'ol/interaction'
import { FeatureLike } from 'ol/Feature'
import { fromLonLat, toLonLat } from 'ol/proj'
import { containsCoordinate } from 'ol/extent'
import { loadGoogleapis } from '@/services/info/street-view'
import { SvCompassFeature } from '@/services/info/sv-compass-feature'
import { SvDirectionFeature } from '@/services/info/sv-direction-feature'

import {} from 'google.maps'

import { Feature } from 'ol'
import { Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

export const DEFAULT_INFO_ZINDEX = 1502
export const SV_FEATURE_LAYER_TYPE = 'svFeatureLayer'

const SV_RADIUS = 90

export default function useStreeView(streetViewDiv: Ref<HTMLElement | null>) {
  const { infoOpen } = storeToRefs(useAppStore())
  const {
    locationInfo,
    hidePointer,
    isStreetviewActive,
    noDataAtLocation,
    streetViewLoading,
    panoPositionChanging,
    svFeature,
  } = storeToRefs(useInfoStore())

  const map = useMap().getOlMap()

  let googleMapService: typeof google.maps | null = null
  let streetViewService: google.maps.StreetViewService | null = null
  let panorama: google.maps.StreetViewPanorama | null = null
  let panoramaLinksListener: google.maps.MapsEventListener | null = null
  let panoramaPovListener: google.maps.MapsEventListener | null = null
  const selectFeature = new Select({
    filter: (feature /*, layer*/) => feature instanceof SvDirectionFeature,
  })
  selectFeature.on('select', handleNavigate)

  const svPoint = new Point([0, 0])
  const svCompassFeature = new SvCompassFeature()
  svCompassFeature.setGeometry(svPoint)

  const svFeatureLayer = new VectorLayer({
    source: new VectorSource({
      features: [] as Feature[],
    }),
    // altitudeMode: 'clampToGround',
    zIndex: DEFAULT_INFO_ZINDEX,
  })
  svFeatureLayer.set('cyLayerType', SV_FEATURE_LAYER_TYPE)
  map.addLayer(svFeatureLayer)

  function setLocation(loc: Coordinate | undefined) {
    if (loc && panorama !== null && !panoPositionChanging.value) {
      const lonlat = toLonLat(loc, map.getView().getProjection())
      streetViewService!.getPanorama(
        {
          location: {
            lat: lonlat[1],
            lng: lonlat[0],
          },
          radius: SV_RADIUS,
        },
        updatePanorama
      )
    }
  }

  function updatePanorama(
    data: google.maps.StreetViewPanoramaData | null,
    status: google.maps.StreetViewStatus
  ) {
    if (status === google.maps.StreetViewStatus.OK) {
      noDataAtLocation.value = false
      nextTick(() => {
        panorama!.setPosition(data?.location?.latLng || null)
        panorama!.setVisible(true)
      })
    } else {
      noDataAtLocation.value = true
      streetViewLoading.value = false
      svFeature.value = undefined
      panorama!.setVisible(false)
    }
  }

  watch(infoOpen, open => {
    if (open) {
      if (isStreetviewActive.value && locationInfo.value) {
        setSvFeatures(locationInfo.value)
      }
    } else {
      svFeature.value = undefined
    }
  })

  watch(locationInfo, loc => {
    if (loc) {
      if (isStreetviewActive.value && !panoPositionChanging.value) {
        streetViewLoading.value = true
        setLocation(loc)
      }
    } else {
      svFeature.value = undefined
      // force deactivate pointer style if it is still active from handleHover
      map.getViewport().style.cursor = ''
    }
  })

  watch([isStreetviewActive, streetViewDiv], async ([act, streetViewDiv]) => {
    if (act && streetViewDiv) {
      streetViewLoading.value = true
      await loadGoogleapis()
      if (window.hasOwnProperty('google')) {
        // @ts-ignore
        googleMapService = window.google.maps
      }
      // todo PIWIK
      if (streetViewService === null) {
        streetViewService = new googleMapService!.StreetViewService()
      }
      if (panorama === null) {
        panorama = new googleMapService!.StreetViewPanorama(streetViewDiv, {
          pov: {
            heading: 0,
            pitch: 0,
          },
          visible: false,
          zoom: 1,
        })
      }
      if (panoramaLinksListener === null) {
        panoramaLinksListener = googleMapService!.event.addListener(
          panorama,
          'links_changed',
          () => handlePanoramaPositionChange(true)
        )
      }
      if (panoramaPovListener === null) {
        panoramaPovListener = googleMapService!.event.addListener(
          panorama,
          'pov_changed',
          () => handlePanoramaPositionChange(false)
        )
      }
      setLocation(locationInfo.value)
    } else {
      if (panorama !== null) {
        panorama.setVisible(false)
      }
      svFeature.value = undefined
      if (panoramaPovListener) {
        googleMapService!.event.removeListener(panoramaPovListener)
        panoramaPovListener = null
      }
      if (panoramaLinksListener) {
        googleMapService!.event.removeListener(panoramaLinksListener)
        panoramaLinksListener = null
      }
    }
  })

  watch(svFeature, svf => {
    svFeatureLayer.getSource()?.clear()
    if (svf) {
      svFeatureLayer.getSource()?.addFeature(svf.compass)
      svf.directions.forEach((f: SvDirectionFeature) =>
        svFeatureLayer.getSource()?.addFeature(f)
      )
      hidePointer.value = true
      map.addInteraction(selectFeature)
      map.on('pointermove', handleHover)
      svFeatureLayer.once('postrender', () => {
        streetViewLoading.value = false
      })
    } else {
      map.un('pointermove', handleHover)
      map.removeInteraction(selectFeature)
      hidePointer.value = false
    }
  })

  function handleNavigate(evt: BaseEvent) {
    if (evt.target.getFeatures().getLength() !== 0) {
      const nextDirection = evt.target
        .getFeatures()
        .getArray()[0] as SvDirectionFeature
      if (nextDirection.pano) {
        evt.target.getFeatures().clear()
        panorama!.setPano(nextDirection.pano)
      }
    }
  }

  function handleHover(event: MapBrowserEvent<PointerEvent>) {
    if (isStreetviewActive.value) {
      const hit = map.forEachFeatureAtPixel(
        event.pixel,
        function (feature: FeatureLike) {
          if (feature instanceof SvDirectionFeature) {
            return true
            // TODO: maybe show description (name of next SV node) on hover ??
          }
          return false
        }
      )
      map.getViewport().style.cursor = hit ? 'pointer' : ''
    }
  }

  function setSvFeatures(loc: Coordinate) {
    svPoint.setCoordinates(loc)
    const pov = panorama!.getPov()
    svCompassFeature.heading = pov.heading
    svCompassFeature.zoom = Math.floor(panorama!.getZoom())
    svCompassFeature.pitch = pov.pitch
    const dir = new SvDirectionFeature(svPoint, 3, '5', '5')
    dir.heading
    const navigationLinks = panorama!.getLinks() || []
    svFeature.value = {
      compass: svCompassFeature,
      directions: navigationLinks.map(
        link =>
          new SvDirectionFeature(
            svPoint,
            link?.heading || 0,
            link?.description || '',
            link?.pano
          )
      ),
    }
  }

  function handlePanoramaPositionChange(updateLocation: boolean) {
    panoPositionChanging.value = true
    const position = panorama!.getPosition()
    if (position) {
      const panoLonLat = [position.lng(), position.lat()]
      const loc = fromLonLat(panoLonLat)
      setSvFeatures(loc)

      if (updateLocation) {
        locationInfo.value = loc
      }

      if (
        locationInfo.value &&
        !containsCoordinate(map.getView().calculateExtent(map.getSize()), loc)
      ) {
        map.getView().setCenter(loc)
      }
    }
    nextTick(() => {
      panoPositionChanging.value = false
    })
  }
}
