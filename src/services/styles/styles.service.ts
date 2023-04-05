import { bgConfigFixture } from '../../__fixtures__/background.config.fixture'
import { StyleItem as MediumStyle } from '@/composables/mvt-styles/mvt-styles.model'

export function getDefaultMediumStyling(label: string): MediumStyle[] {
  if (label === 'topogr_global' || label === 'topo_bw_jpeg')
    return getDefaultMediumTopoStyling()

  return getDefaultMediumRoadmapStyling() // Default value at init app loading
}

export function getDefaultMediumRoadmapStyling(): MediumStyle[] {
  return bgConfigFixture().medium_default_styles.road as MediumStyle[]
}

export function getDefaultMediumTopoStyling(): MediumStyle[] {
  return bgConfigFixture().medium_default_styles.topo as MediumStyle[]
}
