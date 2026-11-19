<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import { select } from 'd3-selection'
import D3GraphElevation from './d3-graph-elevation'
import type { Profile, ProfileOptions } from './d3-graph-elevation.d'
import { formatElevation, formatLength } from './profile'
import type { ProfileData, ProfileDataEntry } from './profile'
import { useLuxTranslation } from '../i18n'

const props = defineProps<{
  profileData?: ProfileData
  highlightDistance?: number
}>()
const emit = defineEmits<{
  (e: 'hover:profile', point: ProfileDataEntry, dist: number): void
  (e: 'out:profile'): void
}>()

const { t } = useLuxTranslation()
const placeholder = new URL('../assets/profile.png', import.meta.url).href
const graph = ref<HTMLElement>()
let profile: Profile | undefined
let drawnIn: HTMLElement | undefined
let resizeTimer: ReturnType<typeof setTimeout> | undefined

function draw() {
  if (!graph.value || !props.profileData) {
    return
  }
  if (drawnIn !== graph.value) {
    drawnIn = graph.value
    profile = D3GraphElevation(<ProfileOptions>{
      linesConfiguration: {
        line1: {
          zExtractor: (item: ProfileDataEntry) =>
            parseFloat(item?.values?.dhm?.toPrecision(5)) || 0,
        },
      },
      distanceExtractor: (item: ProfileDataEntry) => item.dist ?? 0,
      hoverCallback: (point: ProfileDataEntry, dist: number) =>
        emit('hover:profile', point, dist),
      outCallback: () => emit('out:profile'),
      formatter: {
        xhover: (value: number) => formatLength(value, 2),
        yhover: (value: number) => formatElevation(value, 1),
        xlabel: (factor: number) =>
          `${t('Distance')} [${factor === 1 ? 'm' : 'km'}]`,
        ylabel: () => `${t('Elevation')} [m]`,
      },
    })
  }
  select(graph.value)
    .datum(props.profileData)
    .call(<never>profile)
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(draw, 50)
}

watch([graph, () => props.profileData], draw, { flush: 'post' })
watch(
  () => props.highlightDistance,
  dist =>
    dist && dist > 0 ? profile?.highlight(dist) : profile?.clearHighlight()
)
window.addEventListener('resize', onResize)
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <div v-if="profileData" class="h-[250px]" ref="graph"></div>
  <div class="text-center" v-else>
    <img class="inline-block min-h-64 p-1" :src="placeholder" alt="" />
  </div>
</template>
