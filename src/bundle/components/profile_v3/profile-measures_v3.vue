<script setup lang="ts">
import { storeToRefs } from 'pinia'

import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import { useProfileMeasuresv3Store } from '../../stores/profile-measures_v3.store'

const profilev3Store = useProfileMeasuresv3Store()
const { closeEvent_v3, feature_v3 } = storeToRefs(profilev3Store)

function onClose() {
  closeEvent_v3.value = Date.now()
  feature_v3.value = undefined // Reset profile data and graph when closing profile measures
}

/**
 * This component is a wrapper to use original <feature-elevation-profile> in v3
 *
 * @deprecated this component is meant to be removed when v4 is fully operational
 */
</script>

<template>
  <feature-elevation-profile :feature="feature_v3" @close="onClose" />
</template>
