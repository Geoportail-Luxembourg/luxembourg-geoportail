import { ShallowRef } from 'vue'
import { Layer, LayerId } from '@/stores/map.store.model'

export interface LayerOperations {
  add(...newLayers: Layer[]): void
  remove(...ids: LayerId[]): void
  removeAll(): void
  setOpacity(id: LayerId, opacity: number): void
  has(id: LayerId): boolean
}

export function useLayerOperations(
  layers: ShallowRef<Layer[]>,
  hooks?: {
    afterAdd?: (newLayers: Layer[]) => void
    afterRemove?: (ids: LayerId[]) => void
  }
): LayerOperations {
  function add(...newLayers: Layer[]) {
    layers.value = [...new Set([...layers.value, ...newLayers])]
    hooks?.afterAdd?.(newLayers)
  }

  function remove(...ids: LayerId[]) {
    layers.value = layers.value.filter(l => !ids.includes(l.id))
    hooks?.afterRemove?.(ids)
  }

  function removeAll() {
    layers.value = []
  }

  function setOpacity(id: LayerId, opacity: number) {
    layers.value = layers.value.map(l =>
      l.id === id ? { ...l, opacity, previousOpacity: l.opacity } : l
    )
  }

  function has(id: LayerId): boolean {
    return layers.value.some(l => l.id === id)
  }

  return { add, remove, removeAll, setOpacity, has }
}
