import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, Ref, ShallowRef, shallowRef } from 'vue'

import useLayers from '@/composables/layers/layers.composable'
import { dateToISOString } from '@/services/time.utils'
import { LayerId, Layer, MapContext } from './map.store.model'
import { Coordinate } from 'ol/coordinate'

export const useMapStore = defineStore('map', () => {
  const layersService = useLayers()
  const map: Ref<MapContext> = ref({})
  const layers: ShallowRef<Layer[]> = shallowRef([])
  const layers3d: ShallowRef<Layer[]> = shallowRef([])
  const is3dActive: Ref<boolean> = ref(false)
  const is3dMesh: Ref<boolean> = ref(false)
  const bgLayer: Ref<Layer | undefined | null> = ref(undefined) // undefined => at start app | null => blank bgLayer
  const minZoom: Ref<number | undefined> = ref(undefined)
  const maxZoom: Ref<number | undefined> = ref(undefined)
  const locationInfo: Ref<Coordinate | undefined> = ref(undefined)

  function setBgLayer(layer: Layer | null) {
    bgLayer.value = layer
  }

  function addLayers(...newLayers: Layer[]) {
    layers.value = [...new Set([...layers.value, ...newLayers])]
  }

  function add3dLayers(...newLayers: Layer[]) {
    layers3d.value = [...new Set([...layers3d.value, ...newLayers])]
  }

  function removeLayers(...layerIds: LayerId[]) {
    layers.value = layers.value.filter(
      layer => layerIds.indexOf(layer.id) === -1
    )
    layers3d.value = layers3d.value.filter(
      layer => layerIds.indexOf(layer.id) === -1
    )
  }

  function removeAllLayers() {
    layers.value = []
  }

  function hasLayer(layerId: LayerId) {
    return !!layers.value?.find(layer => layer.id === layerId)
  }

  function reorderLayers(layersId: LayerId[], is3d = false) {
    // TODO: When 3D feat. done, improve mapStores, use composable/inheritance to avoid
    // duplicate functionnality like add/removing/reordering layers/3d layers
    const layersRef = is3d ? layers3d : layers

    layersRef.value = [
      ...(layersRef.value?.sort(
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
        const layer = {
          ...elt,
          ...{
            currentTimeMinValue: dateStart
              ? dateToISOString(dateStart)
              : undefined,
            currentTimeMaxValue: dateEnd ? dateToISOString(dateEnd) : undefined,
          },
        }

        if (layer.type === 'WMTS') {
          // Force update layer name to update wmts requests
          // /!\ do it here, after setting time values 'currentTimeMinValue' and 'currentTimeMaxValue'
          layer.name = layersService.getLayerCurrentLabel(layer)
        }

        return layer
      }
      return elt
    })
  }

  function setIs3dActive(active: boolean) {
    is3dActive.value = active
  }

  function setIs3dMesh(active: boolean) {
    is3dMesh.value = active
  }

  return {
    map,
    layers,
    layers3d,
    is3dActive,
    is3dMesh,
    bgLayer,
    minZoom,
    maxZoom,
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
    locationInfo,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
}
