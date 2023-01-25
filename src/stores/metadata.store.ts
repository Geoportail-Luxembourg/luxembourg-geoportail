import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerMetadataService } from '@/composables/layer-metadata/layer-metadata.service'
import { LayerMetadataModel } from '@/composables/layer-metadata/layer-metadata.model'

export const useMetadataStore = defineStore(
  'metadata',
  () => {
    const layerMetadata: Ref<LayerMetadataModel | undefined> = ref()
    const currentMetadataNode: Ref<LayerTreeNodeModel | undefined> = ref()

    async function setMetadata(node: LayerTreeNodeModel, lang: string) {
      layerMetadata.value = await layerMetadataService.getLayerMetadata(
        node,
        lang
      )
      currentMetadataNode.value = node
    }

    function clearMetadata() {
      layerMetadata.value = undefined
    }

    return { layerMetadata, currentMetadataNode, setMetadata, clearMetadata }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMetadataStore, import.meta.hot))
}
