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
  onUnmounted,
  ShallowRef,
  shallowRef,
  watch,
} from 'vue'
import { useTranslation } from 'i18next-vue'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { transform } from 'ol/proj'

import {
  LuxElevationProfile,
  type ProfileData,
} from '@geoportallux/feature-info-templates'
import useProfilePosition from '@/composables/map/profile-position.composable'
import { useProfilePositionStore } from '@/stores/profile-position.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import {
  exportFeatureService,
  FeatExport,
} from '@/services/export-feature/export-feature.service'
import { PROJECTION_LUX } from '@/composables/map/map.composable'

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

const profilePosition = useProfilePosition(
  undefined,
  () => props.activatePositioning
)
const profilePositionStore = useProfilePositionStore()
const { t } = useTranslation()

const hasCloseListener = computed(
  () => getCurrentInstance()?.vnode?.props?.onClose
) // NB. useAttrs() not working as close event is defined with "emit"
const profileData: ShallowRef<ProfileData | undefined> = shallowRef(undefined)
const isLoading = computed(() => props.feature && !profileData.value)
const isDrawing = computed(() => !props.feature)

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

onUnmounted(() => {
  profilePositionStore.setPosition(undefined, undefined)
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

watch(profileData, profileData => {
  profilePosition.profileData.value = profileData
})

function exportCSV() {
  props.feature &&
    exportFeatureService.export(
      props.feature?.map,
      'csv',
      <FeatExport>(<Feature<Geometry>>props.feature),
      props.feature.label || CSV_DEFAULT_FILENAME
    )
}

function onHoverProfile<T extends { x: number; y: number }>(point: T) {
  const coords = transform(
    [point.x, point.y],
    PROJECTION_LUX,
    props.feature?.map.getView().getProjection()
  )

  profilePositionStore.setPosition(coords[0], coords[1])
}

function onOutProfile() {
  profilePositionStore.setPosition(undefined, undefined)
}
</script>

<template>
  <lux-elevation-profile
    data-cy="featItemProfile"
    :profileData="profileData"
    :highlightDistance="profilePosition.highlightDistance.value"
    :enableExportCSV="enableExportCSV"
    :message="
      isLoading
        ? t('Please wait, the profile is loading.')
        : isDrawing
          ? t('Draw a line on the map to display an elevation profile.')
          : undefined
    "
    @hover:profile="onHoverProfile"
    @out:profile="onOutProfile"
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
