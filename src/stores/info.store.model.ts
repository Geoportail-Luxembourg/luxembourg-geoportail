import { SvCompassFeature } from '@/services/info/sv-compass-feature'
import { SvDirectionFeature } from '@/services/info/sv-direction-feature'

export interface SvFeature {
  compass: SvCompassFeature
  directions: SvDirectionFeature[]
}
