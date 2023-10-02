import { dateToISOString } from '@/services/time.utils'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref, ShallowRef, shallowRef } from 'vue'

import { LayerId, Layer, MapContext } from './map.store.model'

export const useMapStore = defineStore('map', () => {
  const map: Ref<MapContext> = ref({})
  const layers: ShallowRef<Layer[]> = shallowRef([])
  const layers_3d: ShallowRef<any[]> = shallowRef([])
  const is_3d_active: Ref<boolean> = ref(false)
  const is_3d_mesh: Ref<boolean> = ref(true)
  const bgLayer: Ref<Layer | undefined | null> = ref(undefined) // undefined => at start app | null => blank bgLayer

  function setBgLayer(layer: Layer | null) {
    bgLayer.value = layer
  }

  function addLayers(...newLayers: Layer[]) {
    layers.value = [...new Set([...layers.value, ...newLayers])]
  }

  function add3dLayers(...newLayers: Layer[]) {
    layers_3d.value = [...new Set([...layers_3d.value, ...newLayers])]
  }

  function removeLayers(...layerIds: LayerId[]) {
    layers.value = layers.value.filter(
      layer => layerIds.indexOf(layer.id) === -1
    )
    layers_3d.value = layers_3d.value.filter(
      layer => layerIds.indexOf(layer.id) === -1
    )
  }

  function removeAllLayers() {
    layers.value = []
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

  function setIs3dActive(active: boolean) {
    is_3d_active.value = active
  }

  function setIs3dMesh(active: boolean) {
    is_3d_mesh.value = active
  }

  return {
    map,
    layers,
    layers_3d,
    is_3d_active,
    is_3d_mesh,
    bgLayer,
    addLayers,
    add3dLayers,
    removeLayers,
    removeAllLayers,
    reorderLayers,
    setLayerOpacity,
    setLayerTime,
    setBgLayer,
    setIs3dActive,
    setIs3dMesh,
    hasLayer,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
}
