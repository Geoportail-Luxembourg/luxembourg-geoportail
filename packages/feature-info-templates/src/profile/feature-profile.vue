<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import LuxElevationProfile from './elevation-profile.vue'
import {
  fetchProfile,
  extractLineParts,
  profileCsv,
  toProfileData,
} from './profile'
import type { ProfileData } from './profile'
import { useProfileMapHover } from './profile-map-hover'
import type { FeatureJSON } from '../models'
import { injectLuxTplContext } from '../context'
import { luxTplUrls } from '../env'
import { useLuxTranslation } from '../i18n'

const props = defineProps<{ feature: FeatureJSON }>()

const { geoportalUrl, profileMapAdapter, exportFeature } = injectLuxTplContext()
const urls = luxTplUrls(geoportalUrl)
const { t } = useLuxTranslation()
const lines = extractLineParts(props.feature.geometry)
const profileData = shallowRef<ProfileData>()
const message = ref<string>()
const { highlightDistance, onHover, onOut } = useProfileMapHover(
  profileMapAdapter,
  lines,
  profileData
)

const request = new AbortController()
onUnmounted(() => request.abort())

onMounted(async () => {
  if (!profileMapAdapter || !lines.length || !urls.profileUrl) {
    return
  }
  message.value = t('Please wait, the profile is loading.')
  try {
    const json = await fetchProfile(
      urls.profileUrl,
      {
        geom: JSON.stringify(
          lines.length === 1
            ? { type: 'LineString', coordinates: lines[0] }
            : { type: 'MultiLineString', coordinates: lines }
        ),
        id: props.feature.id,
      },
      { signal: request.signal }
    )
    profileData.value = toProfileData(json)
    message.value = undefined
  } catch {
    message.value = t('The profile could not be loaded.')
  }
})

function exportCsv() {
  if (!profileMapAdapter || !profileData.value) {
    return
  }
  const a = document.createElement('a')
  a.href = URL.createObjectURL(
    new Blob([profileCsv(profileData.value, profileMapAdapter.toLonLat)], {
      type: 'text/csv',
    })
  )
  a.download = `${props.feature.attributes?.name || 'mnt'}.csv`
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<template>
  <div v-if="lines.length">
    <LuxElevationProfile
      v-if="profileMapAdapter"
      data-cy="featItemProfile"
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
