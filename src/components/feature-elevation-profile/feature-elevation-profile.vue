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
  watchEffect,
} from 'vue'
import { useTranslation } from 'i18next-vue'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import { transform } from 'ol/proj'

import ElevationProfile from '@/components/common/graph/elevation-profile.vue'
import { ProfileData } from '@/components/common/graph/elevation-profile'
import useProfilePosition from '@/composables/map/profile-position.composable'
import { useProfilePositionStore } from '@/stores/profile-position.store'
import { DrawnFeature } from '@/services/draw/drawn-feature'
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
const profileDataLength = computed(() => profileData.value?.length || 0)
const profileDataLastValue = computed(
  () => profileData.value && profileData.value[profileDataLength.value - 1]
)
const elevationGain = computed(() => profileDataLastValue.value?.elevationGain)
const elevationLoss = computed(() => profileDataLastValue.value?.elevationLoss)
const cumulativeElevation = computed(
  () => profileDataLastValue.value?.cumulativeElevation
)
const isLoading = computed(() => props.feature && !profileData.value)
const isDrawing = computed(() => !props.feature)

onMounted(() => {
  // Force get profile data when mounted (eg. when user click on a another drawn line, must populate data)
  props.feature &&
    props.feature.getProfile().then(data => (profileData.value = data))
})

onUnmounted(() => {
  profilePositionStore.setPosition(undefined, undefined)
})

watchEffect(() => {
  // Watch update of feature geom to trigger update the profile
  if (props.feature && !props.feature.profileData) {
    profileData.value = undefined // Force refresh the graph
    props.feature?.getProfile().then(data => (profileData.value = data))
  } else {
    profileData.value = undefined
  }
})

watch(
  profileData,
  profileData => (profilePosition.profileData.value = profileData)
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
  <div data-cy="featItemProfile" class="lux-profile relative">
    <!-- Top: elevation +- in meters, Export CSV button and close button -->
    <div class="flex justify-between w-full px-1 gap-3 whitespace-nowrap">
      <div class="grow cursor-default" data-cy="featItemProfileCumul">
        <template v-if="profileData">
          <span>
            &Delta;+<span v-format-measure.elevation="elevationGain"></span>
          </span>
          <span>
            &Delta;<span v-format-measure.elevation="elevationLoss"></span>
          </span>
          <span>
            &Delta;<span
              v-format-measure.elevation="cumulativeElevation"
            ></span>
          </span>
        </template>
      </div>

      <button
        data-cy="featItemProfileCSV"
        class="profile-export no-print text-secondary hover:underline"
        v-if="enableExportCSV && profileData"
        @click="() => exportCSV()"
      >
        {{ t('Export csv') }}
      </button>

      <!-- Display close button only if there is a listener "onClose" in the parent -->
      <button
        v-if="hasCloseListener"
        :aria-label="t('Close')"
        class="fa-solid fa-close text-secondary hover:text-tertiary"
        @click="$emit('close')"
      ></button>
    </div>

    <!-- Loading message -->
    <div v-if="isLoading || isDrawing" class="w-full absolute mt-2 text-center">
      <span class="text-gray-700 rounded p-2 bg-[rgba(120,120,120,0.5)]">{{
        isLoading
          ? t('Please wait, the profile is loading.')
          : isDrawing
          ? t('Draw a line on the map to display an elevation profile.')
          : ''
      }}</span>
    </div>

    <!-- Graph -->
    <elevation-profile
      :profileData="profileData"
      class="w-full"
      :highlightDistance="profilePosition.highlightDistance.value"
      @hover:profile="onHoverProfile"
      @out:profile="onOutProfile"
    />
  </div>
</template>
