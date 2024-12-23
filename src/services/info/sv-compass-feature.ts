import { Feature } from 'ol'
import { FeatureLike } from 'ol/Feature'
import { Style, Icon } from 'ol/style'
import directionUrls from '@/services/info/sv-direction-urls'

export class SvCompassFeature extends Feature {
  zoom: number
  heading: number
  pitch: number

  getStyleFunction() {
    return function (feature: FeatureLike): Style[] {
      let curZoom = (feature as SvCompassFeature).zoom
      if (curZoom < 1) {
        curZoom = 1
      } else if (curZoom > 4) {
        curZoom = 4
      }
      const curPitch = Math.abs((feature as SvCompassFeature).pitch)
      let pitch = 0
      if (curPitch >= 0 && curPitch <= 23) {
        pitch = 0
      } else if (curPitch > 23 && curPitch <= 45) {
        pitch = 1
      }
      if (curPitch > 45 && curPitch <= 68) {
        pitch = 2
      }
      if (curPitch > 68) {
        pitch = 3
      }
      const directionArrowKey: string = `direction_sv_zl${curZoom}_p${pitch}`

      return [
        new Style({
          image: new Icon({
            src: directionUrls.get(directionArrowKey),
            rotation: ((feature as SvCompassFeature).heading * Math.PI) / 180,
          }),
        }),
      ]
    }
  }
}
