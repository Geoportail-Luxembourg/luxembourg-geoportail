import { bgConfigFixture } from '../../__fixtures__/background.config.fixture'
import { MediumStyle } from './styles.model'

export function getDefaultMediumStyling(label: string): MediumStyle[] {
  if (label === 'topogr_global' || label === 'topo_bw_jpeg')
    return getDefaultMediumTopoStyling()

  return getDefaultMediumRoadmapStyling() // Default value at init app loading
}

export function getDefaultMediumRoadmapStyling() {
  return bgConfigFixture().medium_default_styles.road
}

export function getDefaultMediumTopoStyling() {
  return bgConfigFixture().medium_default_styles.topo
}
