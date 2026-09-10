import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, Ref, ShallowRef, shallowRef } from 'vue'

import useLayers from '@/composables/layers/layers.composable'
import { dateToISOString } from '@/services/time.utils'
import { LayerId, Layer, MapContext } from './map.store.model'

export const useMapStore = defineStore('map', () => {
  const layersService = useLayers()
  const map: Ref<MapContext> = ref({})
  const layers: ShallowRef<Layer[]> = shallowRef([])
  const drawLayers: ShallowRef<Layer[]> = shallowRef([])
  const layers3d: ShallowRef<Layer[]> = shallowRef([])
  const layerOrder: Ref<LayerId[]> = ref([])
  const is3dActive: Ref<boolean> = ref(false)
  const is3dMesh: Ref<boolean> = ref(false)
  const bgLayer: Ref<Layer | undefined | null> = ref(undefined) // undefined => at start app | null => blank bgLayer
  const minZoom: Ref<number | undefined> = ref(undefined)
  const maxZoom: Ref<number | undefined> = ref(undefined)
  const x = ref<number | undefined | null>(undefined)
  const y = ref<number | undefined | null>(undefined)
  const zoom = ref<number | undefined | null>(undefined)
  const rotation = ref<number | undefined | null>(undefined)

  function addToLayerOrder(layerId: LayerId) {
    if (!layerOrder.value.includes(layerId)) {
      layerOrder.value = [...layerOrder.value, layerId]
    }
  }

  function removeFromLayerOrder(layerId: LayerId) {
    layerOrder.value = layerOrder.value.filter(id => id !== layerId)
  }

  const allLayers = computed(() => {
    const allLayersMap = new Map<LayerId, Layer>()
    layers.value.forEach(l => allLayersMap.set(l.id, l))
    drawLayers.value.forEach(l => allLayersMap.set(l.id, l))
    return layerOrder.value
      .map(id => allLayersMap.get(id))
      .filter((l): l is Layer => !!l)
  })

  function setBgLayer(layer: Layer | null) {
    bgLayer.value = layer
  }

  function addLayers(...newLayers: Layer[]) {
    layers.value = [...new Set([...layers.value, ...newLayers])]
    newLayers.forEach(l => addToLayerOrder(l.id))
  }

  function addDrawLayers(...newLayers: Layer[]) {
    drawLayers.value = [...new Set([...drawLayers.value, ...newLayers])]
    newLayers.forEach(l => addToLayerOrder(l.id))
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
    layerIds.forEach(id => removeFromLayerOrder(id))
  }

  function removeDrawLayers(...layerIds: LayerId[]) {
    drawLayers.value = drawLayers.value.filter(
      layer => layerIds.indexOf(layer.id) === -1
    )
    layerIds.forEach(id => removeFromLayerOrder(id))
  }

  function removeAllLayers() {
    layers.value = []
  }

  function removeAllDrawLayers() {
    drawLayers.value = []
  }

  function hasLayer(layerId: LayerId) {
    return !!layers.value?.find(layer => layer.id === layerId)
  }

  function hasDrawLayer(layerId: LayerId) {
    return !!drawLayers.value?.find(layer => layer.id === layerId)
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

  function reorderDrawLayers(layersId: LayerId[]) {
    drawLayers.value = [
      ...(drawLayers.value?.sort(
        (a, b) => layersId.indexOf(a.id) - layersId.indexOf(b.id)
      ) || []),
    ]
  }

  function reorderAllLayers(order: LayerId[]) {
    layerOrder.value = order
  }

  function setLayerOpacity(layerId: LayerId, opacity: number) {
    layers.value = layers.value.map(elt => {
      if (elt.id === layerId) {
        return { ...elt, opacity: opacity, previousOpacity: elt.opacity }
      }
      return elt
    })
  }

  function setDrawLayerOpacity(layerId: LayerId, opacity: number) {
    drawLayers.value = drawLayers.value.map(elt => {
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
    drawLayers,
    allLayers,
    layers3d,
    layerOrder,
    is3dActive,
    is3dMesh,
    bgLayer,
    minZoom,
    maxZoom,
    x,
    y,
    zoom,
    rotation,
    addLayers,
    addDrawLayers,
    add3dLayers,
    removeLayers,
    removeDrawLayers,
    removeAllLayers,
    removeAllDrawLayers,
    reorderLayers,
    reorderDrawLayers,
    reorderAllLayers,
    setLayerOpacity,
    setDrawLayerOpacity,
    setLayerTime,
    setBgLayer,
    setIs3dActive,
    setIs3dMesh,
    hasLayer,
    hasDrawLayer,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
}