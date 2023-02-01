import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'

export const useMetadataStore = defineStore(
  'metadata',
  () => {
    const metadataTreeNode: Ref<LayerTreeNodeModel | undefined> = ref()

    function setMetadataTreeNode(node: LayerTreeNodeModel) {
      metadataTreeNode.value = node
    }

    function clearMetadataTreeNode() {
      metadataTreeNode.value = undefined
    }

    return {
      metadataTreeNode,
      setMetadataTreeNode,
      clearMetadataTreeNode,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMetadataStore, import.meta.hot))
}
