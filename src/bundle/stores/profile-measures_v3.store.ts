import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Feature, Map } from 'ol'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import { ProfileData } from '@/components/common/graph/elevation-profile'

/**
 * This store is a wrapper to use original <feature-elevation-profile> in v3.
 * This store is used by the v4 profile elevation component in v3 Measure tool.
 *
 * @deprecated this store is meant to be removed when v4 is fully operational
 */
export const useProfileMeasuresv3Store = defineStore(
  'profile-measures-v3',
  () => {
    /**
     * Emulate closing event as it is impossible to attach onClose event on generated Custom Element with Vuejs
     * @deprecated this property is meant to be removed when Drawing and Measures in v4 are fully operational
     */
    const closeEvent_v3: Ref<number | undefined> = ref(undefined)

    /**
     * Emulate a DrawnFeature with feature coming from v3
     * @deprecated this property is meant to be removed when Drawing and Measures in v4 are fully operational
     */
    const feature_v3: Ref<DrawnFeature | undefined> = ref(undefined)

    function setProfileData(
      map: Map,
      feature: Feature & DrawnFeature,
      profileData: ProfileData
    ) {
      feature_v3.value = undefined
      feature['map'] = map // Needed by CSV Exporter
      feature['label'] = feature['label'] ?? 'mnt' // Needed by CSV Exporter (= fileName)
      feature['getProfile'] = () => Promise.resolve(profileData)
      feature_v3.value = <DrawnFeature>feature
    }

    return {
      closeEvent_v3,
      feature_v3,
      setProfileData,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useProfileMeasuresv3Store, import.meta.hot)
  )
}
