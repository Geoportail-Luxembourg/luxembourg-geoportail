<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import FeatureElevationProfile from '@/components/feature-elevation-profile/feature-elevation-profile.vue'
import { useProfileInfosv3Store } from '@/bundle/stores/profile-infos_v3.store'

const props = defineProps({
  featureid: {
    type: String,
    default: '',
  },
})

const profilev3Store = useProfileInfosv3Store()
const { activePositioning_v3 } = storeToRefs(profilev3Store)
const { getFeature } = profilev3Store

const activateProfile = computed(() => {
  return (
    props.featureid &&
    getFeature(props.featureid) &&
    (getFeature(props.featureid)?.getGeometry()?.getType() === 'LineString' ||
      getFeature(props.featureid)?.getGeometry()?.getType() ===
        'MultiLineString')
  )
})

/**
 * This component is a wrapper to use original <feature-elevation-profile> in v3
 *
 * @deprecated this component is meant to be removed when v4 is fully operational
 */
</script>

<template>
  <feature-elevation-profile
    v-if="activateProfile"
    :feature="getFeature(props.featureid)"
    :enableExportCSV="true"
    :activatePositioning="activePositioning_v3"
  />
</template>
