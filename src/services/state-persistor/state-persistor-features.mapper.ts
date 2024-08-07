import { Collection, Feature } from 'ol'
import { Geometry } from 'ol/geom'

class StorageFeaturesMapper {
  featuresToUrl(features: any): string {
    console.log('featuresToUrl', features)
    return ''
  }

  urlToFeatures(url: string | null): Collection<Feature<Geometry>> {
    console.log('urlToFeatures', url)
    return url
      ? new Collection<Feature<Geometry>>()
      : new Collection<Feature<Geometry>>()
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
