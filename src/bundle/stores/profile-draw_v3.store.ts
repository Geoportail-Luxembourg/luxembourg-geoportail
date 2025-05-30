import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Map } from 'ol'

import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { ProfileData } from '@/components/common/graph/elevation-profile'

/**
 * This store is a wrapper to use original <feature-elevation-profile> in v3.
 * This store is used by any drawn feature graph v4 component in the v3 drawing panel.
 *
 * @deprecated this store is meant to be removed when v4 is fully operational
 */
export const useProfileDrawv3Store = defineStore(
  'profile-draw-v3',
  () => {
    /**
     * Emulate a DrawnFeature with feature coming from v3
     * @deprecated this property is meant to be removed when Drawing and Measures in v4 are fully operational
     */
    const feature_v3: Ref<DrawnFeature | undefined> = ref(undefined)

    function setProfileData(
      map: Map,
      feature: DrawnFeature,
      profileData: ProfileData
    ) {
      feature_v3.value = undefined
      feature['map'] = map // Needed by CSV Exporter
      feature['label'] = feature['label'] ?? 'mnt' // Needed by CSV Exporter (= fileName)
      feature['getProfile'] = () => Promise.resolve(profileData)
      feature_v3.value = <DrawnFeature>feature
    }

    return {
      feature_v3,
      setProfileData,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useProfileDrawv3Store, import.meta.hot)
  )
}
