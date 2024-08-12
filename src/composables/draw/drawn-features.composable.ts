import { storeToRefs } from 'pinia'
import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

import { useDrawStore } from '@/stores/draw.store'
import { DrawFeature } from '@/stores/draw.store.model'

import useMap from '../map/map.composable'

const DEFAULT_DRAW_ZINDEX = 1000

export default function useDrawnFeatures() {
  const drawStore = useDrawStore()
  const map = useMap().getOlMap()

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
      } as unknown as DrawFeature
      drawFeatures.value = [...drawFeatures.value, newFeature]
    }
  }

  return {
    addFeature,
  }
}
