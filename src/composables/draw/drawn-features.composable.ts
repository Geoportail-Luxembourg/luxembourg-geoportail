import { t } from 'i18next'
import { storeToRefs } from 'pinia'
import { Feature } from 'ol'
import { Point, Circle, Geometry, LineString } from 'ol/geom'
import Polygon from 'ol/geom/Polygon'
import { useDrawStore } from '@/stores/draw.store'
import { convertCircleToPolygon } from '@/composables/draw/draw-utils'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import { DrawnFeatureType, DrawnFeatureStyle } from '@/stores/draw.store.model'

import { Coordinate } from 'ol/coordinate'

export default function useDrawnFeatures() {
  const { drawStateActive, drawnFeatures } = storeToRefs(useDrawStore())
  const { addDrawnFeature } = useDrawStore()
  const { feedbackOpen, feedbackanfOpen, feedbackageOpen, feedbackcruesOpen } =
    storeToRefs(useAppStore())
  const { toggleMyMapsOpen } = useAppStore()

  const features = drawnFeatures.value as DrawnFeature[]

  function addFeature(feature: Feature<Geometry>) {
    const nbFeatures = features.length
    // feature.set('name', name + ' ' + (nbFeatures + 1))
    const featureType = (
      drawStateActive.value === 'drawCircle'
        ? 'drawnCircle'
        : drawStateActive.value === 'drawLabel'
        ? 'drawnLabel'
        : `drawn${feature.getGeometry()?.getType().replace('String', '')}`
    ) as DrawnFeatureType

    const name =
      feature.get('name') ||
      `${t(featureType.replace('drawn', ''))} ${drawnFeatures.value.length + 1}`

    const featureStyle = {
      angle: 0,
      color: '#ed1c24',
      arrowcolor: undefined,
      stroke: 1.25,
      linestyle: 'plain',
      opacity: 0.2,
      showOrientation: false,
      shape: 'circle',
      symbolId: undefined,
      size: 10,
    } as DrawnFeatureStyle

    const drawnFeature = Object.assign(new DrawnFeature(), feature, {
      id: Math.floor(Math.random() * Date.now()),
      label: name,
      description: '',
      display_order: nbFeatures,
      editable: true,
      selected: false,
      map_id: undefined, // mymap uuid
      // TODO Mymaps
      // map_id: this.appMymaps_.isEditable() ? this.appMymaps_.getMapId() : undefined,
      saving: false,
      featureType,
      featureStyle,
    })
    convertCircleToPolygon(drawnFeature, featureType)

    addDrawnFeature(drawnFeature)

    if (
      screenSizeIsAtLeast('md') &&
      feedbackOpen.value !== true &&
      feedbackanfOpen.value !== true &&
      feedbackageOpen.value !== true &&
      feedbackcruesOpen.value !== true
    ) {
      toggleMyMapsOpen(true)
    }
  }

  /**
   * Get cordinates of a features, used to get anchor for edition popup on the map
   * @param feature The ol feature to get the coordinates from
   * @returns The coordinates of the feature or undefined
   */
  function getFeatCoordinates(feature: Feature<Geometry>) {
    const geometry = feature.getGeometry()
    let coordinates: Coordinate | undefined = undefined

    if (geometry) {
      switch (geometry.getType()) {
        case 'Point':
          coordinates = (<Point>geometry).getFlatCoordinates()
          break
        case 'LineString':
          coordinates = (<LineString>geometry).getFlatMidpoint()
          break
        case 'Polygon':
          coordinates = (<Polygon>geometry).getFlatInteriorPoint()
          break
        case 'Circle':
          coordinates = (<Circle>geometry).getCenter()
          break
      }
    }

    return coordinates
  }

  // TODO: some geometry validity checks have not been ported to draw-utils

  // function getName(feature: Feature<Geometry>) {
  //   if (feature?.getGeometry()?.getType() === 'Circle') {
  //     const featureGeom = feature.getGeometry() as Circle
  //     feature.set('isCircle', true)
  //     feature.setGeometry(fromCircle(featureGeom, 64))
  //   }

  //   let name
  //   switch (feature.getGeometry()?.getType()) {
  //     case 'Point': {
  //       if (drawStateActive.value === 'drawLabel') {
  //         name = t('Label', { ns: 'client' })
  //       } else {
  //         name = t('Point', { ns: 'client' })
  //       }
  //       break
  //     }
  //     case 'LineString': {
  //       const curLineStringGeom = feature.getGeometry() as LineString
  //       const curLineStringCooridnates = curLineStringGeom.getCoordinates()
  //       if (curLineStringCooridnates.length < 2) {
  //         return
  //       }

  // TODO remove duplicate geometry end point ?
  //       const prevCoord =
  //         curLineStringCooridnates[curLineStringCooridnates.length - 1]
  //       const antePrevCoord =
  //         curLineStringCooridnates[curLineStringCooridnates.length - 2]
  //       if (
  //         prevCoord[0] === antePrevCoord[0] &&
  //         prevCoord[1] === antePrevCoord[1]
  //       ) {
  //         curLineStringCooridnates.pop()
  //         if (curLineStringCooridnates.length < 2) {
  //           return
  //         }
  //         curLineStringGeom.setCoordinates(curLineStringCooridnates)
  //       }
  //       name = t('LineString', { ns: 'client' })
  //       break
  //     }
  //     case 'Polygon': {
  //       if (feature.get('isCircle')) {
  //         name = t('Circle', { ns: 'client' })
  //       } else {
  //         const featureGeom = feature.getGeometry() as Polygon
  //         if (featureGeom.getLinearRing(0)!.getCoordinates().length < 4) {
  //           return
  //         }
  //         name = t('Polygon', { ns: 'client' })
  //       }
  //       break
  //     }
  //     default:
  //       name = feature.getGeometry()?.getType()
  //       break
  //   }
  //   return name
  // }

  // function saveFeature(feature: Feature) {
  //   // TODO Mymaps: saveFeatureInMymaps_
  //   // if (this.appMymaps_.isEditable() &&
  //   //     !!feature.get('__map_id__')) {
  //   //   this.saveFeatureInMymaps_(feature);
  //   // }
  //   // DONE in state persistor
  //   encodeFeaturesInUrl(features.getArray())
  // }

  return {
    addFeature,
    getFeatCoordinates,
  }
}
