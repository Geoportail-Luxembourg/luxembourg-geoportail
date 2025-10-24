import { t } from 'i18next'
import { storeToRefs } from 'pinia'

import { Feature } from 'ol'
import { Geometry } from 'ol/geom'

import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { DrawnFeatureType } from '@/stores/draw.store.model'
import useMyMaps from '@/composables/my-maps/my-maps.composable'

export default function useDrawnFeatures() {
  const drawStore = useDrawStore()
  const { drawStateActive, drawnFeatures } = storeToRefs(drawStore)
  const { isMyMapEditable } = useMyMaps()

  function generateDrawnFeature(feature: Feature<Geometry>) {
    const featureGeomName = feature
      .getGeometry()
      ?.getType()
      .replace('String', '')!
    const featureType = (
      drawStateActive.value === 'drawCircle'
        ? 'drawnCircle'
        : drawStateActive.value === 'drawLabel'
        ? 'drawnLabel'
        : `drawn${featureGeomName}`
    ) as DrawnFeatureType

    const label =
      feature.get('name') ||
      `${t(featureGeomName)} ${drawnFeatures.value.length + 1}`

    return DrawnFeature.generateFromFeature(feature, {
      label,
      display_order: drawnFeatures.value.length,
      featureType,
      map_id: isMyMapEditable.value,
    })
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

  return {
    generateDrawnFeature,
  }
}
