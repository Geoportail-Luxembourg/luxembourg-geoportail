<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import LuxElevationProfile from './elevation-profile.vue'
import {
  findClosestPoint,
  extractLineParts,
  profileCsv,
  toProfileData,
  addLengthAlongLine,
} from './profile'
import type { ProfileData, ProfileDataEntry, ProfileJson } from './profile'
import type { FeatureJSON } from '../models'
import { injectLuxTplContext } from '../context'
import { useLuxTranslation } from '../i18n'

const props = defineProps<{ feature: FeatureJSON }>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()

const { config, profileMapAdapter } = injectLuxTplContext()
const mapAdapter = profileMapAdapter!
const { t } = useLuxTranslation()
const lines = extractLineParts(props.feature.geometry)
const line = addLengthAlongLine(lines)
const profileData = shallowRef<ProfileData>()
const message = ref<string>()
const highlightDistance = ref<number>()
let sampleLengths: number[] = []
let mapPoint: number[] | undefined

onMounted(async () => {
  if (!lines.length || !config.profileUrl) {
    return
  }
  message.value = t('Please wait, the profile is loading.')
  const json: ProfileJson | undefined = await fetch(config.profileUrl, {
    method: 'POST',
    body: new URLSearchParams({
      geom: JSON.stringify(
        lines.length === 1
          ? { type: 'LineString', coordinates: lines[0] }
          : { type: 'MultiLineString', coordinates: lines }
      ),
      nbPoints: '100',
      layers: 'dhm',
      id: String(props.feature.id),
    }),
  })
    .then(r => (r.ok ? r.json() : undefined))
    .catch(() => undefined)
  if (json) {
    profileData.value = toProfileData(json)
    sampleLengths = profileData.value.map(
      p => findClosestPoint(line, [p.x, p.y]).point[2]
    )
  }
  message.value = undefined
})

function onHover(point: ProfileDataEntry) {
  mapAdapter.setPosition(mapPoint ?? [point.x, point.y])
  mapPoint = undefined
}

function onOut() {
  mapAdapter.setPosition()
}

const unlisten = mapAdapter.onPointerMove((xy, resolution) => {
  if (!profileData.value) {
    return
  }
  const { point, sqDist } = findClosestPoint(line, xy)
  if (sqDist < (8 * resolution) ** 2) {
    mapPoint = point.slice(0, 2)
    const data = profileData.value
    const i = sampleLengths.findIndex(along => along >= point[2])
    highlightDistance.value = data[i < 0 ? data.length - 1 : i].dist
    mapAdapter.setPosition(mapPoint)
  } else if (highlightDistance.value !== undefined) {
    highlightDistance.value = undefined
    onOut()
  }
})
onUnmounted(() => {
  unlisten()
  onOut()
})

function exportCsv() {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(
    new Blob([profileCsv(profileData.value!, mapAdapter.toLonLat)], {
      type: 'text/csv',
    })
  )
  a.download = `${props.feature.attributes?.name || 'mnt'}.csv`
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<template>
  <div v-if="lines.length" data-cy="featItemProfile">
    <LuxElevationProfile
      :profileData="profileData"
      :message="message"
      :highlightDistance="highlightDistance"
      @hover:profile="onHover"
      @out:profile="onOut"
      @csv="exportCsv"
    />
    <div>
      <button
        class="lux-feature-info-export"
        @click="$emit('export', { feature, format: 'kml' })"
      >
        {{ t('Exporter KMl') }}
      </button>
      <button
        class="lux-feature-info-export"
        @click="$emit('export', { feature, format: 'gpx' })"
      >
        {{ t('Exporter GPX') }}
      </button>
    </div>
  </div>
</template>
