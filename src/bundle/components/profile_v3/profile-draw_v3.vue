<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import { useProfileDrawv3Store } from '../../stores/profile-draw_v3.store'

const profilev3Store = useProfileDrawv3Store()
const { feature_v3 } = storeToRefs(profilev3Store)
const activateProfile = computed(
  () =>
    feature_v3.value &&
    feature_v3.value.getGeometry()?.getType() === 'LineString'
)

/**
 * This component is a wrapper to use original <feature-elevation-profile> in v3
 *
 * @deprecated this component is meant to be removed when v4 is fully operational
 */
</script>

<template>
  <feature-elevation-profile v-if="activateProfile" :feature="feature_v3" />
</template>
