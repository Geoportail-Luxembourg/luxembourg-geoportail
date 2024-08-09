import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import featureHash from './utils/FeatureHash'

class StorageFeaturesMapper {
  featuresToUrl(features: Collection<Feature<Geometry>> | null): string {
    console.log('featuresToUrl', features)
    if (!features) return ''
    const featureArray = features.getArray()
    const featuresToEncode = featureArray.filter(function (feature) {
      return !feature.get('__map_id__')
    })
    if (featuresToEncode.length > 0) {
      return featureHash.writeFeatures(featuresToEncode)
    } else {
      return ''
    }
  }

  urlToFeatures(url: string | null): Collection<Feature<Geometry>> {
    console.log('urlToFeatures', url)
    return url
      ? new Collection<Feature<Geometry>>()
      : new Collection<Feature<Geometry>>()
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
