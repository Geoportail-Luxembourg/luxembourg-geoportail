<script setup lang="ts">
import { themesService } from '../services/themes/themes.service'
import { mapState } from '../states/map/map.state'
import { combineLatest, map } from 'rxjs'
import { themesToLayerTree } from '../components/layer-tree/layer-tree.mapper'
import { layerTreeService } from '../components/layer-tree/layer-tree.service'
import { ThemeNodeModel } from '../services/themes/themes.model'
import { LayerTreeNodeModel } from '../components/layer-tree/layer-tree.model'
import { computed, onMounted, ref } from 'vue'

const layers = ref({})

onMounted(() => {
  mapState.map$.pipe(map(mapContext => mapContext.layers ?? [])).subscribe(_layers => layers.value = _layers)
})
</script>

<template>
  <div class="mt-6">
    List of layers:
    <ul>
      <li v-for="layer in layers" :key="layer.id">
      {{ layer.name }}
      </li>
    </ul>
  </div>
</template>