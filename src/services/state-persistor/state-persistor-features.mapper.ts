import featureHash from './utils/FeatureHash'
import { DrawnFeature } from '@/services/draw/drawn-feature'

class StorageFeaturesMapper {
  featuresToUrl(features: DrawnFeature[] | null): string {
    if (!features) return ''
    const featuresToEncode = features.filter(feature => !feature.map_id)
    featuresToEncode.forEach(f => f.set('name', f.label))
    return featuresToEncode.length > 0
      ? featureHash.writeFeatures(featuresToEncode)
      : ''
  }

  urlToFeatures(url: string | null): DrawnFeature[] {
    const features = url ? featureHash.readFeatures(url) : []
    const drawnFeatures = features.map((f, i) =>
      featureHash.decodeShortProperties(f, i)
    )
    return drawnFeatures
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
