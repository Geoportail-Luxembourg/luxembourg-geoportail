import { storeToRefs } from 'pinia'
import { Feature } from 'ol'
import { Point, Circle, Geometry, LineString } from 'ol/geom'
import Polygon from 'ol/geom/Polygon'
import { useDrawStore } from '@/stores/draw.store'
import { createStyleFunction } from './draw-utils'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'

import { createDrawnFeature } from '@/composables/draw/draw-utils'
import { DrawnFeature } from '@/stores/draw.store.model'

import useMap from '../map/map.composable'
import { Coordinate } from 'ol/coordinate'

export default function useDrawnFeatures() {
  const map = useMap().getOlMap()
  const { drawStateActive, drawnFeatures } = storeToRefs(useDrawStore())
  const { addDrawnFeature } = useDrawStore()
  const { feedbackOpen, feedbackanfOpen, feedbackageOpen, feedbackcruesOpen } =
    storeToRefs(useAppStore())
  const { toggleMyMapsOpen } = useAppStore()

  const features = drawnFeatures.value as DrawnFeature[]

  function addFeature(feature: Feature<Geometry>) {
    //const name = getName(feature)
    const nbFeatures = features.length
    // feature.set('name', name + ' ' + (nbFeatures + 1))
    feature.set('description', '')
    feature.set('__editable__', true)
    feature.set('color', '#ed1c24')
    feature.set('opacity', 0.2)
    feature.set('stroke', 1.25)
    feature.set('size', 10)
    feature.set('angle', 0)
    feature.set('linestyle', 'plain')
    feature.set('shape', 'circle')
    feature.set('isLabel', drawStateActive.value === 'drawLabel')
    feature.set('isCircle', drawStateActive.value === 'drawCircle')
    feature.setStyle(createStyleFunction(map))
    feature.set('display_order', nbFeatures)
    // TODO Mymaps
    // if (this.appMymaps_.isEditable()) {
    //   feature.set('__map_id__', this.appMymaps_.getMapId());
    // } else {
    //   feature.set('__map_id__', undefined);
    // }
    addDrawnFeature(createDrawnFeature(feature)!)
    // TODO Update Profile: v3 sets attribute for watcher
    // feature.set('__refreshProfile__', true)
    // TODO Select feature
    // this.selectedFeatures_.clear()
    // this.selectedFeatures_.push(feature)
    // saveFeature(feature)
    // TODO Modify: Activate
    // this.drawnFeatures_.activateModifyIfNeeded(event.feature)
    if (
      screenSizeIsAtLeast('md') &&
      feedbackOpen.value !== true &&
      feedbackanfOpen.value !== true &&
      feedbackageOpen.value !== true &&
      feedbackcruesOpen.value !== true
    ) {
      toggleMyMapsOpen(true)
    }

    // // TODO: to improve saving
    // const geomType = feature.getGeometry()?.getType()

    // const newFeature = createDrawnFeature(feature)

    // // if (geomType) {
    // //   const newFeature = {
    // //     // TODO: improve feat. creation, move this creation elsewhere
    // //     id: Math.floor(Math.random() * Date.now()),
    // //     label: `${geomType as string} ${drawnFeatures.value.length + 1}`,
    // //     featureType: feature.get('isCircle')
    // //       ? 'drawnCircle'
    // //       : feature.get('isLabel')
    // //       ? 'drawnLabel'
    // //       : `drawn${geomType.replace('String', '')}`,
    // //     olFeature: feature,
    // //   } as unknown as DrawFeature
    // if (newFeature) {
    //   drawnFeatures.value = [...drawnFeatures.value, newFeature]
    // }
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
