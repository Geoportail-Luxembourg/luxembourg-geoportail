import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'
import featureHash from './utils/FeatureHash'
import useMap from '@/composables/map/map.composable'

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
    const features = url ? featureHash.readFeatures(url) : []
    features.forEach((f, i) => {
      featureHash.decodeShortProperties(f, i, useMap().getOlMap())
    })
    return features
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
