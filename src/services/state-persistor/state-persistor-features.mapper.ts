import {
  convertCircleFeatureToPolygon,
  convertPolygonFeatureToCircle,
} from '@/composables/draw/draw-utils'
import featureHash from './utils/FeatureHash'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

/**
 * Note that the mapper converts circles to polygons and back to circles.
 * This allows one single ol modify interaction to edit all types of geometries
 * and keeps them encoded as polygons in the URL (as in v3).
 * It is important that persist creates seperate feature instances to get rid of the reference to the ol feature
 */
class StorageFeaturesMapper {
  featuresToUrl(features: DrawnFeature[] | null): string {
    if (!features) return ''
    const featuresToEncode = features
      .filter(feature => !feature.map_id)
      .sort((a, b) => a.display_order - b.display_order)
      .map(feature => {
        const newFeature = new DrawnFeature(feature) // create new instance to avoid converting ol feature to polygon
        return convertCircleFeatureToPolygon(newFeature)
      })
    return featuresToEncode.length > 0
      ? featureHash.writeFeatures(featuresToEncode)
      : ''
  }

  urlToFeatures(url: string | null): DrawnFeature[] {
    const features = url ? featureHash.readFeatures(url) : []
    const drawnFeatures = features
      .map((feature, i) => featureHash.decodeShortProperties(feature, i))
      .map(feature => convertPolygonFeatureToCircle(feature))
    return drawnFeatures
  }
}

export const storageFeaturesMapper = new StorageFeaturesMapper()
