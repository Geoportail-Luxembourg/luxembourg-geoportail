import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'
import { Layer } from './map.store.model'

export const useMetadataStore = defineStore(
  'metadata',
  () => {
    const metadataLayer: ShallowRef<Layer | undefined> = shallowRef()

    function setMetadataLayer(layer: Layer) {
      metadataLayer.value = layer
    }

    function clearMetadataLayer() {
      metadataLayer.value = undefined
    }

    return {
      metadataLayer,
      setMetadataLayer,
      clearMetadataLayer,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMetadataStore, import.meta.hot))
}
