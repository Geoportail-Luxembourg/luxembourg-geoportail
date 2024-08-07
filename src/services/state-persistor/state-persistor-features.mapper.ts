import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'

class StorageFeaturesMapper {
  featuresToUrl(features: Collection<Feature<Geometry>> | null): string {
    console.log('featuresToUrl', features)
    if (!features) return ''
    encodeFeaturesInUrl(features.getArray())
    return ''
  }

  urlToFeatures(url: string | null): Collection<Feature<Geometry>> {
    console.log('urlToFeatures', url)
    return url
      ? new Collection<Feature<Geometry>>()
      : new Collection<Feature<Geometry>>()
  }
}

function encodeFeaturesInUrl(features: Feature[]) {
  const featuresToEncode = features.filter(function (feature) {
    return !feature.get('__map_id__')
  })
  if (featuresToEncode.length > 0) {
    // this.ngeoLocation_.updateParams({
    //   'features': this.fhFormat_.writeFeatures(featuresToEncode)
    // });
    console.log('featuresToEncode', featuresToEncode)
  } else {
    // this.ngeoLocation_.deleteParam('features');
    console.log('no features to encode')
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
