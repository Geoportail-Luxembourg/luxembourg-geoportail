import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, Ref } from 'vue'

export const useMetadataStore = defineStore(
  'metadata',
  () => {
    const metadataId: Ref<string | number | undefined> = ref()

    function setMetadataId(id: string | number) {
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
