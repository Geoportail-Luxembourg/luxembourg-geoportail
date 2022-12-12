<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ShallowRef, shallowRef, watchEffect } from 'vue'
import { layersService } from '../../services/layers/layers.service'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { useThemeStore } from '../../stores/config.store'
import { useMapStore } from '../../stores/map.store'
import LayerTreeNode from '../layer-tree/layer-tree-node.vue'
import { themesToLayerTree } from '../layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { layerTreeService } from '../layer-tree/layer-tree.service'

const mapStore = useMapStore()
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { layers } = storeToRefs(mapStore)
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()

watchEffect(updateLayerTree)

function updateLayerTree() {
  if (theme.value && layers.value) {
    const treeModel =
      layerTree.value &&
      (layerTree.value.id as unknown as number) === theme.value?.id
        ? layerTree.value
        : themesToLayerTree(theme.value as ThemeNodeModel)

    layerTree.value = layerTreeService.updateLayers(
      treeModel as LayerTreeNodeModel,
      layers.value
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
  layersService.toggleLayer(node.id, !node.checked)
}
</script>

<template>
  <layer-tree-node
    v-if="layerTree"
    :node="layerTree"
    :key="layerTree.id"
    @toggle-parent="toggleParent"
    @toggle-layer="toggleLayer"
  ></layer-tree-node>
</template>
