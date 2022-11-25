<script setup lang="ts">
import TreeItem from './TreeItem.vue'
import { themesService } from '../services/themes/themes.service'
import { layersService } from '../services/layers/layers.service'
import { mapState } from '../states/map/map.state'
import { combineLatest, map } from 'rxjs'
import { themesToLayerTree } from '../components/layer-tree/layer-tree.mapper'
import { layerTreeService } from '../components/layer-tree/layer-tree.service'
import { ThemeNodeModel } from '../services/themes/themes.model'
import { LayerTreeNodeModel } from '../components/layer-tree/layer-tree.model'
import { onMounted, ref } from 'vue'

const treeData1 = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}

const treeData = ref({})

onMounted(() => {
  console.log(`the component is now mounted.`)


  const layerTree$ = combineLatest([
        themesService.theme$,
        mapState.map$,
  ]).pipe(
    map(([theme, mapContext]) => {
      const layerTree =
      treeData.value &&
        (treeData.value as unknown as number) === theme?.id
          ? treeData
          : themesToLayerTree(theme as ThemeNodeModel)

        console.log(layerTree)

      return layerTreeService.updateLayers(
        layerTree as LayerTreeNodeModel,
        mapContext.layers
      )
    })
  ).subscribe(layerTree => treeData.value = layerTree)
})

const addmap = (id) => {
  console.log("addmap" + id)

  layersService.toggleLayer(id, true)
}
</script>

<template>
  <ul class="bg-primary">
    <TreeItem 
      class="item"
      @addmap="addmap"
      :model="treeData"></TreeItem>
  </ul>
</template>