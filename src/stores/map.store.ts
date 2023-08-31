import { dateToISOString } from '@/services/time.utils'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref, ShallowRef, shallowRef } from 'vue'

import { LayerId, Layer, MapContext } from './map.store.model'

export const useMapStore = defineStore('map', () => {
  const map: Ref<MapContext> = ref({})
  const layers: ShallowRef<Layer[]> = shallowRef([])
  const bgLayer: Ref<Layer | undefined | null> = ref(undefined) // undefined => at start app | null => blank bgLayer

  function setBgLayer(layer: Layer | null) {
    bgLayer.value = layer
  }

  function addLayers(...newLayers: Layer[]) {
    layers.value = [...new Set([...layers.value, ...newLayers])]
  }

  function removeLayers(...layerIds: LayerId[]) {
    layers.value = layers.value.filter(
      layer => layerIds.indexOf(layer.id) === -1
    )
  }

  function hasLayer(layerId: LayerId) {
    return !!layers.value?.find(layer => layer.id === layerId)
  }

  function reorderLayers(layersId: LayerId[]) {
    layers.value = [
      ...(layers.value?.sort(
        (a, b) => layersId.indexOf(a.id) - layersId.indexOf(b.id)
      ) || []),
    ]
  }

  function setLayerOpacity(layerId: LayerId, opacity: number) {
    layers.value = layers.value.map(elt => {
      if (elt.id === layerId) {
        return { ...elt, opacity: opacity, previousOpacity: elt.opacity }
      }
      return elt
    })
  }

  function setLayerTime(
    layerId: LayerId,
    dateStart?: string,
    dateEnd?: string
  ) {
    layers.value = layers.value.map(elt => {
      if (elt.id === layerId) {
        return {
          ...elt,
          ...{
            currentTimeMinValue: dateStart
              ? dateToISOString(dateStart)
              : undefined,
            currentTimeMaxValue: dateEnd ? dateToISOString(dateEnd) : undefined,
          },
        }
      }
      return elt
    })
  }

  return {
    map,
    layers,
    bgLayer,
    addLayers,
    removeLayers,
    reorderLayers,
    setLayerOpacity,
    setLayerTime,
    setBgLayer,
    hasLayer,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
}
