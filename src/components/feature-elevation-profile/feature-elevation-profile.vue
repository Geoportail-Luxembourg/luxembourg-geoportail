<script setup lang="ts">
/**
 * Display an elevation graph according to a given feature. If feature is undefined,
 * a default image of a graph is displayed in place of the graph.
 * This component may be used in Draw components, Measure Profile component, and Infos component.
 */
import {
  computed,
  getCurrentInstance,
  onMounted,
  ShallowRef,
  shallowRef,
  watch,
} from 'vue'
import { useTranslation } from 'i18next-vue'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import GeoJSON from 'ol/format/GeoJSON'

import {
  LuxElevationProfile,
  extractLineParts,
  useProfileMapHover,
  type ProfileData,
} from '@geoportallux/feature-info-templates'
import useLuxTplProfileMapAdapter from '@/composables/info/lux-tpl-profile-map-adapter.composable'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import {
  exportFeatureService,
  FeatExport,
} from '@/services/export-feature/export-feature.service'

const CSV_DEFAULT_FILENAME = 'mnt'

defineEmits<{
  (e: 'close'): void
}>()

const props = withDefaults(
  defineProps<{
    feature: DrawnFeature | undefined
    enableExportCSV?: boolean
    activatePositioning?: boolean
  }>(),
  {
    enableExportCSV: true,
    activatePositioning: true,
  }
)

const { t } = useTranslation()
const map = useMap().getOlMap()

const hasCloseListener = computed(
  () => getCurrentInstance()?.vnode?.props?.onClose
) // NB. useAttrs() not working as close event is defined with "emit"
const profileData: ShallowRef<ProfileData | undefined> = shallowRef(undefined)
const isLoading = computed(() => props.feature && !profileData.value)
const isDrawing = computed(() => !props.feature)
const { highlightDistance, onHover, onOut } = useProfileMapHover(
  useLuxTplProfileMapAdapter(() => props.activatePositioning),
  // Re-read on each new profile: editing the line resets it.
  () => (profileData.value ? featureLines() : []),
  profileData
)

/** The feature's line parts in EPSG:2169, like the profile. */
function featureLines() {
  const geometry = props.feature?.getGeometry()
  return geometry
    ? extractLineParts(
        new GeoJSON().writeGeometryObject(geometry, {
          dataProjection: PROJECTION_LUX,
          featureProjection: map.getView().getProjection(),
        })
      )
    : []
}

async function loadProfile() {
  if (!props.feature) {
    return
  }

  try {
    const data = await props.feature.getProfile()
    profileData.value = data
  } catch (error) {
    profileData.value = undefined
  }
}

onMounted(() => {
  // Force get profile data when mounted (eg. when user click on a another drawn line, must populate data)
  loadProfile()
})

// watchEffect(() => {
//   // Watch update of feature geom to trigger update the profile
//   if (props.feature && !props.feature.profileData) {
//     profileData.value = undefined // Force refresh the graph
//     props.feature?.getProfile().then(data => (profileData.value = data))
//   } else {
//     profileData.value = undefined
//   }
// })

watch(
  () => props.feature,
  (newFeature, oldFeature) => {
    if (newFeature !== oldFeature) {
      if (props.feature && !props.feature.profileData) {
        profileData.value = undefined // Force refresh the graph
        loadProfile()
      } else {
        profileData.value = undefined
      }
    }
  }
)

watch(
  () => props.feature?.profileData,
  (newProfileData, oldProfileData) => {
    if (newProfileData !== oldProfileData) {
      if (props.feature && !props.feature.profileData) {
        profileData.value = undefined // Force refresh the graph
        loadProfile()
      } else {
        profileData.value = undefined
      }
    }
  }
)

function exportCSV() {
  props.feature &&
    exportFeatureService.export(
      props.feature?.map,
      'csv',
      <FeatExport>(<Feature<Geometry>>props.feature),
      props.feature.label || CSV_DEFAULT_FILENAME
    )
}
</script>

<template>
  <lux-elevation-profile
    data-cy="featItemProfile"
    :profileData="profileData"
    :highlightDistance="highlightDistance"
    :enableExportCSV="enableExportCSV"
    :message="
      isLoading
        ? t('Please wait, the profile is loading.')
        : isDrawing
          ? t('Draw a line on the map to display an elevation profile.')
          : undefined
    "
    @hover:profile="onHover"
    @out:profile="onOut"
    @csv="exportCSV"
  >
    <!-- Display close button only if there is a listener "onClose" in the parent -->
    <button
      v-if="hasCloseListener"
      :aria-label="t('Close')"
      class="fa-solid fa-close text-secondary hover:text-tertiary"
      @click="$emit('close')"
    ></button>
  </lux-elevation-profile>
</template>
