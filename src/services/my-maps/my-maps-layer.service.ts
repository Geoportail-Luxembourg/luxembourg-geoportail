import { Extent } from 'ol/extent'
import { createEmpty, extend } from 'ol/extent'
import olFormatGeoJSON from 'ol/format/GeoJSON'

import { LayerImageType, LayerId, Layer } from '@/stores/map.store.model'
import { LayerTypeValue } from '@/composables/themes/themes.model'
import {
  fetchMyMap,
  fetchMyMapFeatures,
  MyMapFetchFeaturesJson,
} from '@/services/api/api-mymaps.service'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { convertPolygonFeatureToCircle } from '@/composables/draw/draw-utils.composable'
import {
  PROJECTION_LUX,
  PROJECTION_WEBMERCATOR,
} from '@/composables/map/map.composable'

export const MY_MAPS_LAYER_ID_PREFIX = 'mymaps||'

export function myMapsLayerId(uuid: string): string {
  return `${MY_MAPS_LAYER_ID_PREFIX}${uuid}`
}

export function isMyMapsLayerId(id: LayerId): boolean {
  return typeof id === 'string' && id.startsWith(MY_MAPS_LAYER_ID_PREFIX)
}

export function uuidFromMyMapsLayerId(id: LayerId): string {
  return String(id).slice(MY_MAPS_LAYER_ID_PREFIX.length)
}

export function buildMyMapsLayer({
  uuid,
  title,
  featuresGeoJson,
}: {
  uuid: string
  title: string
  featuresGeoJson: MyMapFetchFeaturesJson
}): Layer {
  return {
    id: myMapsLayerId(uuid),
    name: title,
    type: LayerTypeValue.MY_MAPS,
    layers: '',
    imageType: LayerImageType.PNG,
    opacity: 1,
    geojson: JSON.stringify(featuresGeoJson),
  }
}

export function buildMyMapsLayerStub(layerId: string): Layer {
  return {
    id: layerId,
    name: '',
    type: LayerTypeValue.MY_MAPS,
    layers: '',
    imageType: LayerImageType.PNG,
    opacity: 1,
  }
}

export async function fetchMyMapsLayer(uuid: string): Promise<Layer> {
  const [map, features] = await Promise.all([
    fetchMyMap(uuid),
    fetchMyMapFeatures(uuid),
  ])

  return buildMyMapsLayer({
    uuid: map.uuid,
    title: map.title,
    featuresGeoJson: features,
  })
}

export function myMapsFeaturesExtent(
  features: MyMapFetchFeaturesJson
): Extent | null {
  const olFeatures = new olFormatGeoJSON().readFeatures(features, {
    dataProjection: PROJECTION_LUX,
    featureProjection: PROJECTION_WEBMERCATOR,
  })

  if (olFeatures.length === 0) {
    return null
  }

  const extent = createEmpty()
  olFeatures.forEach(f => {
    if (f.getGeometry()) {
      extend(extent, f.getGeometry()!.getExtent())
    }
  })

  if (
    extent[0] === Infinity ||
    extent[1] === Infinity ||
    extent[2] === -Infinity ||
    extent[3] === -Infinity ||
    extent[0] >= extent[2] ||
    extent[1] >= extent[3]
  ) {
    return null
  }

  return extent
}

/**
 * Single entry point to build MyMaps DrawnFeatures.
 * Same style pipeline as regular drawing; edit-mode styles stay gated on
 * __isBeingEdited__ (never set outside edit.composable).
 */
export function buildMyMapsDrawnFeatures(
  features: MyMapFetchFeaturesJson,
  options: { map_id?: string; editable?: boolean } = {}
): DrawnFeature[] {
  const drawnFeatures = (features.features || []).map(f => {
    const feature = DrawnFeature.generateFromGeoJson(f, {
      map_id: options.map_id,
      id: f.id!, // !!! Force reattribution of id from backend
      fid: f.id!, // !!! Force reattribution of fid from backend
      display_order: f.properties?.display_order,
    })
    // Circles are saved as polygons in MyMaps
    return convertPolygonFeatureToCircle(feature)
  })

  if (options.editable !== undefined) {
    drawnFeatures.forEach(f => {
      f.editable = options.editable!
    })
  }

  return drawnFeatures
}
