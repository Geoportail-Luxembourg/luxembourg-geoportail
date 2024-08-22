<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { select, Selection } from 'd3-selection'

import D3GraphElevation from './d3-graph-elevation'

const d3 = { select }
const graph = ref()

let profile: any, elevationData: any, poiData: any
let selection: Selection<any, unknown, null, undefined>

onMounted(() => {
  selection = d3.select(graph.value)
  profile = D3GraphElevation({})
  refreshData()
})

function refreshData() {
  if (profile !== undefined) {
    selection.datum(elevationData).call(profile)
    if (elevationData !== undefined) {
      profile.showPois(poiData)
    }
  }
}
</script>

<template>
  <div ref="graph"></div>
  <small class="text-red-600">ze graph TODO</small>
</template>
