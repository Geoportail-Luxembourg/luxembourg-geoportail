import { ProfileJsonEntry } from '@/services/api/api-profile.service'

export type ProfileData = ProfileDataEntry[]

export interface ProfileDataEntry extends ProfileJsonEntry {
  cumulativeElevation: number
  elevationGain: number
  elevationLoss: number
}
