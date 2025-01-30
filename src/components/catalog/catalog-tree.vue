<script setup lang="ts">
import { computed, ShallowRef, shallowRef, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

import useLayers from '@/composables/layers/layers.composable'
import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import LayerTreeNode from '@/components/layer-tree/layer-tree-node.vue'
import { themesToLayerTree } from '@/components/layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { layerTreeService } from '@/components/layer-tree/layer-tree.service'

const mapStore = useMapStore()
const themeStore = useThemeStore()
const layers = useLayers()
const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
const layerTree3d: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()
const showDefaultCatalog = computed(
  () => !mapStore.is3dActive || (mapStore.is3dActive && !mapStore.is3dMesh)
)

const { layerTrees_3d } = storeToRefs(themeStore)

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

watchEffect(() => {
  if (layerTrees_3d.value) {
    const treeModel = layerTree3d.value
      ? layerTree3d.value
      : themesToLayerTree(layerTrees_3d.value)
    layerTree3d.value = layerTreeService.updateLayers(
      treeModel,
      mapStore.layers3d
    )
  }
})

function toggleParent(node: LayerTreeNodeModel, is3d: boolean) {
  const rootTree = is3d ? layerTree3d : layerTree
  rootTree.value = layerTreeService.toggleNode(
    node.id,
    rootTree.value as LayerTreeNodeModel,
    'expanded'
  )
}

function toggleLayer(node: LayerTreeNodeModel, is3d: boolean) {
  layers.toggleLayer(+node.id, !node.checked, is3d, true)
}
</script>

<template>
  <div>
    <!-- 3D layers catalog, only displayed when 3D is active -->
    <div class="mb-7" v-if="layerTree3d && mapStore.is3dActive">
      <layer-tree-node
        :node="layerTree3d"
        :key="layerTree3d.id"
        @toggle-parent="node => toggleParent(node, true)"
        @toggle-layer="node => toggleLayer(node, true)"
      ></layer-tree-node>
    </div>

    <!-- Main catalog, displays by default and 3D terrain active -->
    <layer-tree-node
      v-if="layerTree && showDefaultCatalog"
      :node="layerTree"
      :key="layerTree.id"
      @toggle-parent="node => toggleParent(node, false)"
      @toggle-layer="node => toggleLayer(node, false)"
    ></layer-tree-node>
  </div>
</template>
