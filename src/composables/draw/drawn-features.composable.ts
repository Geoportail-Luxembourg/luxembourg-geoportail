import useMap from '../map/map.composable'
import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

export default function useDrawnFeatures() {
  const map = useMap().getOlMap()

  const features = new Collection<Feature<Geometry>>()
  const drawLayer = new VectorLayer({
    source: new VectorSource({
      features,
    }),
    zIndex: 1000,
    // altitudeMode: 'clampToGround', //used in v3, but causes type error
  })
  //was done in MymapsController in v3
  map.addLayer(drawLayer)

  function addFeature(feature: Feature<Geometry>) {
    //todo: handle mutuability, save to mymaps, encode in URL
    features.push(feature)
  }

  return {
    addFeature,
  }
}
