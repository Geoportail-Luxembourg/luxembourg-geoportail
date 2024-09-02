import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import featureHash from './utils/FeatureHash'
import useMap from '@/composables/map/map.composable'
import { DrawnFeature } from '@/stores/draw.store.model'

const drawnFeatureToFeature = function (
  drawnFeature: DrawnFeature
): Feature<Geometry> {
  const olFeature = drawnFeature.olFeature
  olFeature.set('name', drawnFeature.label)
  return olFeature
}

class StorageFeaturesMapper {
  featuresToUrl(features: DrawnFeature[] | null): string {
    if (!features) return ''
    const featureArray = features.map(f => drawnFeatureToFeature(f))
    const featuresToEncode = featureArray.filter(
      feature => !feature.get('__map_id__')
    )
    return featuresToEncode.length > 0
      ? featureHash.writeFeatures(featuresToEncode)
      : ''
  }

  urlToFeatures(url: string | null): Feature<Geometry>[] {
    const features = url ? featureHash.readFeatures(url) : []
    const olMap = useMap().getOlMap()
    features.forEach((f, i) => {
      featureHash.decodeShortProperties(f, i, olMap)
    })
    return features
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
