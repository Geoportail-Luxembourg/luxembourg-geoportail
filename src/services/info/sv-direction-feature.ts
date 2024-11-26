import { Feature } from 'ol'
import { FeatureLike } from 'ol/Feature'
import { Geometry } from 'ol/geom'
import { Style, Icon } from 'ol/style'

const SV_IMAGES_PATH = '/src/assets/images/streetview'
const SV_COMPASS_PATH = SV_IMAGES_PATH + '/direction_sv.png'
const SV_ARROW_PATH = SV_IMAGES_PATH + '/arrow.png'

export class SvDirectionFeature extends Feature {
  // heading: number
  // description: string
  // pano: string

  constructor(geometry: Geometry, public heading: number, public description: string, public pano: string) {
    super(geometry)
    this.setStyle(this.createStyleFunction())
  }

  private createStyleFunction() {
    return function(feature: FeatureLike, resolution: number) {
      return [new Style({image: new Icon({
        anchor: [0.5, 50],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: SV_ARROW_PATH,
        rotation: (feature as SvDirectionFeature).heading * Math.PI / 180
      })})]
    }
  }
}
