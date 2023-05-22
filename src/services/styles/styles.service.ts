import { bgConfigFixture } from '../../__fixtures__/background.config.fixture'
import {
  BgLayerDef,
  StyleItem,
} from '@/composables/mvt-styles/mvt-styles.model'
import type { Layer } from '@/stores/map.store.model'

export function getDefaultMediumStyling(bgLayer: Layer): StyleItem[] {
  const layerDef = getLayerDef(bgLayer)
  if (!layerDef || !layerDef.medium_style_class) return []
  return (bgConfigFixture().medium_default_styles as any)[
    layerDef.medium_style_class
  ] as any
}

function getLayerDef(
  bgLayer: Layer | undefined | null
): BgLayerDef | undefined {
  return bgConfigFixture().bg_layers.find(l => l.id == bgLayer?.id)
}
