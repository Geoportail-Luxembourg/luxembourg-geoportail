<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { select as d3Select, Selection as d3Selection } from 'd3-selection'
import * as olEvents from 'ol/events'

import { debounce } from '@/services/utils'
import D3GraphElevation from './d3-graph-elevation'
import { Elevations, Profile, ProfileOptions } from './d3-graph-elevation.d'
import { ProfileData } from './elevation-profile'
// import { dataset } from '@/__fixtures__/d3-graph-elevation.fixtures' // Use these fixtures instead of api if needed (for dev debug only)

const emit = defineEmits<{
  (e: 'hover:profile', point: any, dist: number, elevations: Elevations): void
  (e: 'out:profile'): void
}>()
const props = withDefaults(
  defineProps<{
    showTooltip?: boolean
    dataset?: ProfileData
    highlightDistance?: number
    labelXFormatter: (factor: number) => string
    labelYFormatter: () => string
    xFormatter: (val: number) => string
    yFormatter: (val: number) => string
  }>(),
  {
    showTooltip: true,
  }
)
const graphElement = ref()
let profile: Profile, elevationData: any, poiData: any
let selection: d3Selection<any, unknown, null, undefined>
let hoverCallback = (point: any, dist: number, elevations: Elevations) =>
  emit('hover:profile', point, dist, elevations)

onMounted(() => {
  selection = d3Select(graphElement.value)
  profile = D3GraphElevation(getProfileOptions())

  refreshData()
})

watch(
  () => props.highlightDistance,
  dist => {
    if (dist && dist > 0) {
      profile.highlight(dist)
    } else {
      profile.clearHighlight()
    }
  }
)

olEvents.listen(window, 'resize', debounce(refreshData, 50))

function refreshData() {
  if (profile !== undefined) {
    selection.datum(props.dataset).call(profile)
    if (elevationData !== undefined) {
      profile.showPois(poiData)
    }
  }
}

function getProfileOptions() {
  return <ProfileOptions>{
    linesConfiguration: {
      line1: {
        zExtractor: item => parseFloat(item?.values?.dhm?.toPrecision(5)) || 0,
      },
    },
    distanceExtractor: item => item.dist ?? 0,
    hoverCallback,
    outCallback: () => emit('out:profile'),
    formatter: {
      xhover: props.xFormatter,
      yhover: props.yFormatter,
      xlabel: props.labelXFormatter,
      ylabel: props.labelYFormatter,
    },
  }
}
</script>

<template>
  <div class="h-[250px]" ref="graphElement"></div>
</template>
