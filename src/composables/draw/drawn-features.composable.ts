import useMap from '../map/map.composable'
import { Collection } from 'ol'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

export default function useDrawnFeatures() {
  const map = useMap().getOlMap()

  const features = new Collection()
  const drawLayer = new VectorLayer({
    source: new VectorSource({
      features,
    }),
    zIndex: 1000,
    altitudeMode: 'clampToGround',
  })
  //was done in MymapsController in v3
  map.addLayer(drawLayer)

  function addFeature(feature) {
    //todo: handle mutuability, save to mymaps, encode in URL
    features.push(feature)
  }

  return {
    addFeature,
  }
}
