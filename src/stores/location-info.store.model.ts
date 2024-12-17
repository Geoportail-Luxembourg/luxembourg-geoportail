import { SvCompassFeature } from '@/services/info/sv-compass-feature'
import { SvDirectionFeature } from '@/services/info/sv-direction-feature'

export interface SvFeature {
  compass: SvCompassFeature
  directions: SvDirectionFeature[]
}

export interface AddressResult {
  formattedAddress: string
  distance: number
  number: number
  street: string
  postal_code: number
  locality: string
}
