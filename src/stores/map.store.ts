import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref, Ref, ShallowRef, shallowRef } from 'vue'

import useLayers from '@/composables/layers/layers.composable'
import { useLayerOperations } from '@/composables/layers/layers-operations.composable'
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
    if (layerOrder.value.length === 0) {
      return [...layers.value, ...drawLayers.value]
    }
    return layerOrder.value
      .map(id => allLayersMap.get(id))
      .filter((l): l is Layer => !!l)
  })

  function setBgLayer(layer: Layer | null) {
    bgLayer.value = layer
  }

  // Shared layer operations
  const catalogOps = useLayerOperations(layers, {
    afterAdd: newLayers => newLayers.forEach(l => addToLayerOrder(l.id)),
    afterRemove: ids => {
      layers3d.value = layers3d.value.filter(l => !ids.includes(l.id))
      ids.forEach(id => removeFromLayerOrder(id))
    },
  })

  const drawOps = useLayerOperations(drawLayers, {
    afterAdd: newLayers => newLayers.forEach(l => addToLayerOrder(l.id)),
    afterRemove: ids => {
      ids.forEach(id => removeFromLayerOrder(id))
    },
  })

  // Top-level wrappers for Pinia action compatibility (testable via createTestingPinia)
  function addCatalogLayers(...newLayers: Layer[]) {
    catalogOps.add(...newLayers)
  }

  function removeCatalogLayers(...ids: LayerId[]) {
    catalogOps.remove(...ids)
  }

  function removeAllCatalogLayers() {
    catalogOps.removeAll()
  }

  function setCatalogLayerOpacity(id: LayerId, opacity: number) {
    catalogOps.setOpacity(id, opacity)
  }

  function hasCatalogLayer(id: LayerId): boolean {
    return catalogOps.has(id)
  }

  function addDrawLayers(...newLayers: Layer[]) {
    drawOps.add(...newLayers)
  }

  function removeDrawLayers(...ids: LayerId[]) {
    drawOps.remove(...ids)
  }

  function removeAllDrawLayers() {
    drawOps.removeAll()
  }

  function setDrawLayerOpacity(id: LayerId, opacity: number) {
    drawOps.setOpacity(id, opacity)
  }

  function hasDrawLayer(id: LayerId): boolean {
    return drawOps.has(id)
  }

  // Convenience accessors that delegate to the operations
  const catalog = {
    add: catalogOps.add,
    remove: catalogOps.remove,
    removeAll: catalogOps.removeAll,
    setOpacity: catalogOps.setOpacity,
    has: catalogOps.has,
  }

  const draw = {
    add: drawOps.add,
    remove: drawOps.remove,
    removeAll: drawOps.removeAll,
    setOpacity: drawOps.setOpacity,
    has: drawOps.has,
  }

  function add3dLayers(...newLayers: Layer[]) {
    layers3d.value = [...new Set([...layers3d.value, ...newLayers])]
  }

  function reorderAllLayers(order: LayerId[]) {
    layerOrder.value = order
  }

  function reorder3dLayers(layersId: LayerId[]) {
    layers3d.value = [
      ...(layers3d.value?.sort(
        (a, b) => layersId.indexOf(a.id) - layersId.indexOf(b.id)
      ) || []),
    ]
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
    catalog,
    draw,
    addCatalogLayers,
    removeCatalogLayers,
    removeAllCatalogLayers,
    setCatalogLayerOpacity,
    hasCatalogLayer,
    addDrawLayers,
    removeDrawLayers,
    removeAllDrawLayers,
    setDrawLayerOpacity,
    hasDrawLayer,
    add3dLayers,
    reorderAllLayers,
    reorder3dLayers,
    setLayerTime,
    setBgLayer,
    setIs3dActive,
    setIs3dMesh,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
}
