import CircleStyle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'

export function getStyleFeaturePosition() {
  return new Style({
    image: geoMarkerStyle,
  })
}

const geoMarkerStyle = new CircleStyle({
  radius: 4,
  fill: new Fill({ color: 'white' }),
  stroke: new Stroke({
    color: 'white',
    width: 1,
  }),
})
