<script setup lang="ts">
import { combineLatest, map } from 'rxjs'
import type { ShallowRef } from 'vue'
import { computed, shallowRef, watch } from 'vue'
import { layersService } from '../../services/layers/layers.service'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { themesService } from '../../services/themes/themes.service'
import { mapState } from '../../states/map/map.state'
import { useThemeStore } from '../../stores/config.store'
import { useMapStore } from '../../stores/map.store'
import LayerTreeNode from '../layer-tree/layer-tree-node.vue'

import { themesToLayerTree } from '../layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { layerTreeService } from '../layer-tree/layer-tree.service'

const mapStore = useMapStore()
const themeStore = useThemeStore()

const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()

watch([() => themeStore.theme, () => mapStore.layers], ([theme, layers]) => {
  if (!theme || !layers) return
  const treeModel =
    layerTree.value && (layerTree.value.id as unknown as number) === theme?.id
      ? layerTree.value
      : themesToLayerTree(theme as ThemeNodeModel)
  layerTree.value = layerTreeService.updateLayers(
    treeModel as LayerTreeNodeModel,
    layers
  )
})

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
