import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useDrawStore } from '@/stores/draw.store'
import { useMapStore } from '@/stores/map.store'
import { useAppStore } from '@/stores/app.store'
import { Layer } from '@/stores/map.store.model'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'

export const LOCAL_DRAW_LAYER_ID = 'draw-local'
export const MYMAP_DRAW_LAYER_PREFIX = 'draw-mymap-'

export function getMyMapLayerId(uuid: string): string {
  return `${MYMAP_DRAW_LAYER_PREFIX}${uuid}`
}

function createDrawLayer(id: string, name: string): Layer {
  return {
    id,
    name,
    layers: '',
    type: 'DRAW',
    imageType: '',
    opacity: 1,
  }
}

export default function useDrawLayerSync() {
  const { t } = useTranslation()
  const drawStore = useDrawStore()
  const mapStore = useMapStore()
  const appStore = useAppStore()
  const { drawnFeaturesExceptMyMaps, drawnFeaturesMyMaps } =
    storeToRefs(drawStore)
  const { myMap } = storeToRefs(appStore)
  const { layers } = storeToRefs(mapStore)

  function hasLayer(layerId: string): boolean {
    return layers.value.some(l => l.id === layerId)
  }

  function addDrawLayer(layer: Layer) {
    mapStore.addLayers(layer)
  }

  function removeDrawLayer(layerId: string) {
    mapStore.removeLayers(layerId)
  }

  // Sync local drawings layer
  watch(
    drawnFeaturesExceptMyMaps,
    features => {
      if (features.length > 0 && !hasLayer(LOCAL_DRAW_LAYER_ID)) {
        addDrawLayer(
          createDrawLayer(LOCAL_DRAW_LAYER_ID, t('Dessins', { ns: 'app' }))
        )
      } else if (features.length === 0 && hasLayer(LOCAL_DRAW_LAYER_ID)) {
        removeDrawLayer(LOCAL_DRAW_LAYER_ID)
      }
    },
    { immediate: true }
  )

  // Sync MyMap layers
  watch(
    drawnFeaturesMyMaps,
    myMapsFeatures => {
      const groups = new Map<string, DrawnFeature[]>()
      for (const f of myMapsFeatures) {
        if (!f.map_id) continue
        if (!groups.has(f.map_id)) {
          groups.set(f.map_id, [])
        }
        groups.get(f.map_id)!.push(f)
      }

      // Add layers for groups that exist in features but not in store
      for (const [uuid, features] of groups) {
        const layerId = getMyMapLayerId(uuid)
        if (!hasLayer(layerId) && features.length > 0) {
          const name =
            myMap.value?.uuid === uuid && myMap.value?.title
              ? myMap.value.title
              : `MyMap ${uuid}`
          addDrawLayer(createDrawLayer(layerId, name))
        }
      }

      // Remove layers for groups that no longer have features
      const myMapLayerIds = layers.value
        .filter(
          l =>
            typeof l.id === 'string' && l.id.startsWith(MYMAP_DRAW_LAYER_PREFIX)
        )
        .map(l => l.id as string)

      for (const layerId of myMapLayerIds) {
        const uuid = layerId.replace(MYMAP_DRAW_LAYER_PREFIX, '')
        if (!groups.has(uuid) || groups.get(uuid)!.length === 0) {
          removeDrawLayer(layerId)
        }
      }
    },
    { immediate: true }
  )

  // Update MyMap layer name when myMap loads
  watch(myMap, newMyMap => {
    if (newMyMap?.uuid) {
      const layerId = getMyMapLayerId(newMyMap.uuid)
      if (hasLayer(layerId)) {
        mapStore.removeLayers(layerId)
        addDrawLayer(createDrawLayer(layerId, newMyMap.title))
      }
    }
  })
}
