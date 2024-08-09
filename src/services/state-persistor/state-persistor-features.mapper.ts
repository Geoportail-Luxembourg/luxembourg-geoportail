import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import featureHash from './utils/FeatureHash'

class StorageFeaturesMapper {
  featuresToUrl(features: Collection<Feature<Geometry>> | null): string {
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

  urlToFeatures(url: string | null): Feature<Geometry>[] {
    return url ? featureHash.readFeatures(url) : []
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
