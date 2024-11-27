import { watch, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import useMap from '@/composables/map/map.composable'
import { useInfoStore } from '@/stores/info.store'
import { Coordinate } from 'ol/coordinate'
import { fromLonLat, toLonLat } from 'ol/proj'
import { containsCoordinate } from 'ol/extent.js'
import { loadGoogleapis } from '@/services/info/street-view'
import { SvCompassFeature } from '@/services/info/sv-compass-feature'
import { SvDirectionFeature } from '@/services/info/sv-direction-feature'

import { Feature } from 'ol'
import { Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

export const DEFAULT_INFO_ZINDEX = 1500
export const SV_FEATURE_LAYER_TYPE = 'svFeatureLayer'

const SV_RADIUS = 90

export default function useStreeView() {
  const {
    locationInfo,
    isStreetviewActive,
    noDataAtLocation,
    panoPositionChanging,
    svFeature,
  } = storeToRefs(useInfoStore())

  const map = useMap().getOlMap()

  let googleService: any = null
  let streetViewService: any = null
  let panorama: any = null
  let panoramaLinksListener: any = null
  let panoramaPovListener: any = null
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
    if (panorama !== null) {
      if (loc && !panoPositionChanging.value) {
        const lonlat = toLonLat(loc, map.getView().getProjection())
        streetViewService.getPanorama(
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
  }

  function updatePanorama(data: any, status: any) {
    if (status === googleService?.maps.StreetViewStatus.OK) {
      noDataAtLocation.value = false
      nextTick(() => {
        panorama.setPosition(data.location.latLng)
        panorama.setVisible(true)
      })
    } else {
      noDataAtLocation.value = true
      svFeature.value = undefined
      panorama.setVisible(false)
    }
  }

  watch(locationInfo, loc => {
    if (loc) {
      if (isStreetviewActive.value) {
        setLocation(loc)
      }
    } else {
      svFeature.value = undefined
    }
  })

  watch(isStreetviewActive, async act => {
    if (act) {
      await loadGoogleapis()
      if (window.hasOwnProperty('google')) {
        // @ts-ignore
        googleService = window.google
      }
      // todo PIWIK
      if (streetViewService === null) {
        streetViewService = new googleService!.maps.StreetViewService()
      }
      if (panorama === null) {
        panorama = new googleService!.maps.StreetViewPanorama(
          document.getElementById('streetview-div'),
          {
            pov: {
              heading: 0,
              pitch: 0,
              zoom: 1,
            },
            visible: false,
            zoom: 1,
          }
        )
      }
      if (panoramaLinksListener === null) {
        panoramaLinksListener = googleService?.maps.event.addListener(
          panorama,
          'links_changed',
          handlePanoramaPositionChange
        )
      }
      if (panoramaPovListener === null) {
        panoramaPovListener = googleService?.maps.event.addListener(
          panorama,
          'pov_changed',
          handlePanoramaPositionChange
        )
      }
      setLocation(locationInfo.value)
    } else {
      if (panorama !== null) {
        panorama.setVisible(false)
      }
      svFeature.value = undefined
      if (panoramaPovListener) {
        googleService?.maps.event.removeListener(panoramaPovListener)
        panoramaPovListener = null
      }
      if (panoramaLinksListener) {
        googleService?.maps.event.removeListener(panoramaLinksListener)
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
    }
  })

  function setSvFeatures(loc: Coordinate) {
    svPoint.setCoordinates(loc)
    const pov = panorama.getPov()
    svCompassFeature.heading = pov.heading
    svCompassFeature.zoom = Math.floor(pov.zoom)
    svCompassFeature.pitch = pov.pitch
    const dir = new SvDirectionFeature(svPoint, 3, '5', '5')
    dir.heading
    const navigationLinks = panorama.getLinks() || []
    svFeature.value = {
      compass: svCompassFeature,
      directions: navigationLinks.map(
        (link: any) =>
          new SvDirectionFeature(
            svPoint,
            link.heading,
            link.description,
            link.pano
          )
      ),
    }
  }

  function handlePanoramaPositionChange() {
    panoPositionChanging.value = true
    const position = panorama.getPosition()
    const panoLonLat = [position.lng(), position.lat()]
    const loc = fromLonLat(panoLonLat)
    setSvFeatures(loc)

    if (
      locationInfo.value &&
      !containsCoordinate(map.getView().calculateExtent(map.getSize()), loc)
    ) {
      map.getView().setCenter(loc)
    }
    panoPositionChanging.value = false
  }
}
