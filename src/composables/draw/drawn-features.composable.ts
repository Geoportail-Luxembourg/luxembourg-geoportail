import { storeToRefs } from 'pinia'
import { t } from 'i18next'
import { Collection, Feature } from 'ol'
import { Point, Circle, Geometry, LineString } from 'ol/geom'
import Polygon, { fromCircle } from 'ol/geom/Polygon'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { storeToRefs } from 'pinia'
import { useDrawStore } from '@/stores/draw.store'
import { createStyleFunction } from './draw-utils'

import { useDrawStore } from '@/stores/draw.store'
import { DrawFeature } from '@/stores/draw.store.model'

import useMap from '../map/map.composable'
import { Coordinate } from 'ol/coordinate'

const DEFAULT_DRAW_ZINDEX = 1000

export default function useDrawnFeatures() {
  const drawStore = useDrawStore()
  const map = useMap().getOlMap()
  const { drawStateActive } = storeToRefs(useDrawStore())

  const features = new Collection<Feature<Geometry>>()
  const drawLayer = new VectorLayer({
    source: new VectorSource({
      features,
    }),
    zIndex: DEFAULT_DRAW_ZINDEX,
    // altitudeMode: 'clampToGround', //used in v3, but causes type error
  })
  //was done in MymapsController in v3
  map.addLayer(drawLayer)

  function addFeature(feature: Feature<Geometry>) {
    //todo: handle mutuability, save to mymaps, encode in URL
    const name = getName(feature)
    console.log('name', name)

    const nbFeatures = features.getLength()
    feature.set('name', name + ' ' + (nbFeatures + 1))
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
    feature.setStyle(createStyleFunction(map))
    feature.set('display_order', nbFeatures)
    // this.drawnFeatures_.getLayer().changed()

    features.push(feature)

    // TODO: to improve saving
    const geomType = feature.getGeometry()?.getType()

    if (geomType) {
      const { drawFeatures } = storeToRefs(drawStore)
      const newFeature = {
        // TODO: improve feat. creation, move this creation elsewhere
        id: Math.floor(Math.random() * Date.now()),
        label: `${geomType as string} ${drawFeatures.value.length + 1}`,
        geom: geomType,
        olFeature: feature,
      } as unknown as DrawFeature
      drawFeatures.value = [...drawFeatures.value, newFeature]
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
    console.log('features', features)
  }

  function getName(feature: Feature<Geometry>) {
    if (feature?.getGeometry()?.getType() === 'Circle') {
      const featureGeom = feature.getGeometry() as Circle
      feature.set('isCircle', true)
      feature.setGeometry(fromCircle(featureGeom, 64))
    }

    let name
    switch (feature.getGeometry()?.getType()) {
      case 'Point': {
        if (drawStateActive.value === 'drawLabel') {
          name = t('Label', { ns: 'client' })
        } else {
          name = t('Point', { ns: 'client' })
        }
        break
      }
      case 'LineString': {
        const curLineStringGeom = feature.getGeometry() as LineString
        const curLineStringCooridnates = curLineStringGeom.getCoordinates()
        if (curLineStringCooridnates.length < 2) {
          return
        }
        const prevCoord =
          curLineStringCooridnates[curLineStringCooridnates.length - 1]
        const antePrevCoord =
          curLineStringCooridnates[curLineStringCooridnates.length - 2]
        if (
          prevCoord[0] === antePrevCoord[0] &&
          prevCoord[1] === antePrevCoord[1]
        ) {
          curLineStringCooridnates.pop()
          if (curLineStringCooridnates.length < 2) {
            return
          }
          curLineStringGeom.setCoordinates(curLineStringCooridnates)
        }
        name = t('LineString', { ns: 'client' })
        break
      }
      case 'Polygon': {
        if (feature.get('isCircle')) {
          name = t('Circle', { ns: 'client' })
        } else {
          const featureGeom = feature.getGeometry() as Polygon
          if (featureGeom.getLinearRing(0)!.getCoordinates().length < 4) {
            return
          }
          name = t('Polygon', { ns: 'client' })
        }
        break
      }
      default:
        name = feature.getGeometry()?.getType()
        break
    }
    return name
  }

  return {
    addFeature,
    getFeatCoordinates,
  }
}
