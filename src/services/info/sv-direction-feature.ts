import { Feature } from 'ol'
import { FeatureLike } from 'ol/Feature'
import { Geometry } from 'ol/geom'
import { Style, Icon } from 'ol/style'
import arrowUrl from '@/assets/images/streetview/arrow.png'

export class SvDirectionFeature extends Feature {
  // heading: number
  // description: string
  // pano: string

  constructor(
    geometry: Geometry,
    public heading: number,
    public description: string,
    public pano: string
  ) {
    super(geometry)
    this.setStyle(this.createStyleFunction())
  }

  private createStyleFunction() {
    return function (feature: FeatureLike /*, resolution: number*/) {
      return [
        new Style({
          image: new Icon({
            anchor: [0.5, 50],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: arrowUrl,
            rotation: ((feature as SvDirectionFeature).heading * Math.PI) / 180,
          }),
        }),
      ]
    }
  }
}
