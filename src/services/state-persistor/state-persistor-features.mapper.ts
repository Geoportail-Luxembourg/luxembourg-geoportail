import featureHash from './utils/FeatureHash'
import { DrawnFeature } from '@/services/draw/drawn-feature'

class StorageFeaturesMapper {
  featuresToUrl(features: DrawnFeature[] | null): string {
    if (!features) return ''
    // const featureArray = features.map(f => drawnFeatureToFeature(f))
    const featuresToEncode = features.filter(feature => !feature.map_id)
    // todo: implement and call encoding
    // featuresToEncode.forEach(f => featureHash.setShortProperties(f))
    // for now just transmit name
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
