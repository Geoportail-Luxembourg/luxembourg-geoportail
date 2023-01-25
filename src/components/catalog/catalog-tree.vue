<script setup lang="ts">
import { ShallowRef, shallowRef, watchEffect } from 'vue'

import useLayers from '@/composables/layers/layers.composable'
import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import { themesToLayerTree } from '@/components/layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerTreeService } from '@/components/layer-tree/layer-tree.service'
import useLayerMetadata from '@/composables/layer-metadata/layer-metadata.composable'
import LayerMetadata from '../layer-metadata/layer-metadata.vue'
import { LayerMetadataModel } from '@/composables/layer-metadata/layer-metadata.model'

const mapStore = useMapStore()
const themeStore = useThemeStore()
const layers = useLayers()
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
const { metadata, displayLayerMetadata, closeLayerMetadata } =
  useLayerMetadata()

watchEffect(updateLayerTree)

function updateLayerTree() {
  if (themeStore.theme && mapStore.layers) {
    const treeModel =
      layerTree.value &&
      (layerTree.value.id as unknown as number) === themeStore.theme?.id
        ? layerTree.value
        : themesToLayerTree(themeStore.theme as ThemeNodeModel)

    layerTree.value = layerTreeService.updateLayers(
      treeModel as LayerTreeNodeModel,
      mapStore.layers
    )
  }
}

function toggleParent(node: LayerTreeNodeModel) {
  layerTree.value = layerTreeService.toggleNode(
    node.id,
    layerTree.value as LayerTreeNodeModel,
    'expanded'
  )
}

function toggleLayer(node: LayerTreeNodeModel) {
  layers.toggleLayer(parseInt(node.id, 10), !node.checked)
}
</script>

<template>
  <layer-metadata
    v-if="metadata"
    :layer-metadata="(metadata as LayerMetadataModel)"
    @close-layer-metadata="closeLayerMetadata"
  ></layer-metadata>
  <layer-tree-node
    v-if="layerTree"
    :node="layerTree"
    :key="layerTree.id"
    @display-layer-metadata="displayLayerMetadata"
    @toggle-parent="toggleParent"
    @toggle-layer="toggleLayer"
  ></layer-tree-node>
</template>
