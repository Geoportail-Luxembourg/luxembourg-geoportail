import { LayerImageType, LayerId, Layer } from '@/stores/map.store.model'
import { LayerTypeValue } from '@/composables/themes/themes.model'
import { MyMapFetchFeaturesJson } from '@/services/api/api-mymaps.service'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { convertPolygonFeatureToCircle } from '@/composables/draw/draw-utils.composable'

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

export function myMapsLayerIdToLayer(id: string, name = ''): Layer {
  return {
    id,
    name,
    type: LayerTypeValue.MY_MAPS,
    layers: '',
    imageType: LayerImageType.PNG,
    opacity: 1,
  }
}

/**
 * Remove MyMaps read only layers from a list of layers.
 */
export function removeMyMapsLayers(layers: Layer[]): Layer[] {
  return layers.filter(
    l => !l.id.toString().startsWith(MY_MAPS_LAYER_ID_PREFIX)
  )
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
