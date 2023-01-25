import { Ref, ref, onMounted } from 'vue'
import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { useTranslation } from 'i18next-vue'
import { LayerMetadataModel } from './layer-metadata.model'
import { layerMetadataService } from './layer-metadata.service'

export default function useLayerMetadata() {
  const { i18next } = useTranslation()
  const metadata: Ref<LayerMetadataModel | undefined> = ref()
  const displayedMetadataNode: Ref<LayerTreeNodeModel | undefined> = ref()
  async function displayLayerMetadata(node: LayerTreeNodeModel) {
    metadata.value = await layerMetadataService.getLayerMetadata(node, i18next)
    displayedMetadataNode.value = node
  }
  onMounted(() => {
    i18next.on('languageChanged', () => {
      if (displayedMetadataNode.value)
        displayLayerMetadata(displayedMetadataNode.value)
    })
  })
  function closeLayerMetadata() {
    metadata.value = undefined
  }
  return {
    metadata,
    displayLayerMetadata,
    closeLayerMetadata,
  }
}
