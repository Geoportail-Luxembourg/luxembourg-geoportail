import CircleStyle from 'ol/style/Circle'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'

export function getStyleFeaturePosition() {
  return new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: 'red' }),
      stroke: new Stroke({
        color: 'white',
        width: 2,
      }),
    }),
  })
}
