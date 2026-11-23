<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
import LuxElevationProfile from './elevation-profile.vue'
import {
  fetchProfile,
  extractLineParts,
  profileCsv,
  toProfileData,
} from './profile'
import type { ProfileData, ProfileJson } from './profile'
import { useProfileMapHover } from './profile-map-hover'
import type { FeatureJSON } from '../models'
import { injectLuxTplContext } from '../context'
import { useLuxTranslation } from '../i18n'

const props = defineProps<{ feature: FeatureJSON }>()

const { config, profileMapAdapter, exportFeature } = injectLuxTplContext()
const mapAdapter = profileMapAdapter!
const { t } = useLuxTranslation()
const lines = extractLineParts(props.feature.geometry)
const profileData = shallowRef<ProfileData>()
const message = ref<string>()
const { highlightDistance, onHover, onOut } = useProfileMapHover(
  mapAdapter,
  lines,
  profileData
)

onMounted(async () => {
  if (!lines.length || !config.profileUrl) {
    return
  }
  message.value = t('Please wait, the profile is loading.')
  const json: ProfileJson | undefined = await fetchProfile(config.profileUrl, {
    geom: JSON.stringify(
      lines.length === 1
        ? { type: 'LineString', coordinates: lines[0] }
        : { type: 'MultiLineString', coordinates: lines }
    ),
    id: props.feature.id,
  }).catch(() => undefined)
  if (json) {
    profileData.value = toProfileData(json)
  }
  message.value = undefined
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
    <div v-if="exportFeature">
      <button
        class="lux-feature-info-export"
        @click="exportFeature(feature, 'kml')"
      >
        {{ t('Exporter KMl') }}
      </button>
      <button
        class="lux-feature-info-export"
        @click="exportFeature(feature, 'gpx')"
      >
        {{ t('Exporter GPX') }}
      </button>
    </div>
  </div>
</template>
