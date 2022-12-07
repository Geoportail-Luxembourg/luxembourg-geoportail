import { defineStore, acceptHMRUpdate } from 'pinia'
import { Ref, ShallowRef, shallowRef } from 'vue'
import { ref } from 'vue'
import type { Layer, MapContext } from '../states/map/map.state.model'
import { LayerId } from '../states/map/map.state.model'

export const useMapStore = defineStore('map', () => {
  const map: Ref<MapContext> = ref({})
  const layers: ShallowRef<Layer[]> = shallowRef([])
  const bgLayer: Ref<Layer | null> = ref(null)

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

  function reorderLayers(layersId: LayerId[]) {
    layers.value = layers.value?.sort(
      (a, b) => layersId.indexOf(a.id) - layersId.indexOf(b.id)
    )
  }

  function setLayerOpacity(layerId: number, opacity: number) {
    layers.value = layers.value.map(elt => {
      if (elt.id === layerId) {
        return { ...elt, opacity: opacity, previousOpacity: elt.opacity }
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
    setBgLayer,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
}
