<script setup lang="ts">
import type { ShallowRef } from 'vue'
import { combineLatest, map } from 'rxjs'
import { Ref, ref, shallowRef } from 'vue'
import { layersService } from '../../services/layers/layers.service'
import { ThemeNodeModel } from '../../services/themes/themes.model'
import { themesService } from '../../services/themes/themes.service'
import { mapState } from '../../states/map/map.state'
import LayerTreeNode from '../layer-tree/layer-tree-node.vue'

import { themesToLayerTree } from '../layer-tree/layer-tree.mapper'
import type { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import { layerTreeService } from '../layer-tree/layer-tree.service'

const layerTree: ShallowRef<LayerTreeNodeModel | undefined> = shallowRef()

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

combineLatest([themesService.theme$, mapState.map$])
  .pipe(
    map(([theme, mapContext]) => {
      const tree =
        layerTree.value &&
        (layerTree.value.id as unknown as number) === theme?.id
          ? layerTree.value
          : themesToLayerTree(theme as ThemeNodeModel)

      return layerTreeService.updateLayers(
        tree as LayerTreeNodeModel,
        mapContext.layers
      )
    })
  )
  .subscribe((tree) => (layerTree.value = tree))
</script>

<template>
  <layer-tree-node
    :node="layerTree"
    @toggle-parent="toggleParent"
    @toggle-layer="toggleLayer"
  ></layer-tree-node>
</template>
