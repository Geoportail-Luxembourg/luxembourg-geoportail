import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { LayerId } from './map.store.model'

export const useMetadataStore = defineStore(
  'metadata',
  () => {
    const metadataId: Ref<LayerId | undefined> = ref()

    function setMetadataId(id: LayerId) {
      metadataId.value = id
    }

    function clearMetadataId() {
      metadataId.value = undefined
    }

    return {
      metadataId,
      setMetadataId,
      clearMetadataId,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMetadataStore, import.meta.hot))
}
