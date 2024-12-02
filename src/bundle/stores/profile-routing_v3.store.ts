import { Ref, ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Map } from 'ol'

import { DrawnFeature } from '@/services/draw/drawn-feature'
import { ProfileData } from '@/components/common/graph/elevation-profile'

/**
 * This store is a wrapper to use original <feature-elevation-profile> in v3.
 * This store is used by any drawn feature graph v4 component in the v3 drawing panel.
 *
 * @deprecated this store is meant to be removed when v4 is fully operational
 */
export const useProfileRoutingv3Store = defineStore(
  'profile-routing-v3',
  () => {
    /**
     * Emulate a DrawnFeature with feature coming from v3
     * @deprecated this property is meant to be removed when Drawing and Measures in v4 are fully operational
     */
    const feature_v3: Ref<DrawnFeature | undefined> = ref(undefined)

    /**
     * Activate or deactivate positioning for routing, deactivation is need for eg.
     * when routing panel is closed but the routing features are still on the map,
     * in this case, we need to deactivate the geomarker (as we don't see the profile anymore)
     */
    const activePositioning_v3 = ref(true)

    function setProfileData(
      map: Map,
      feature: DrawnFeature,
      profileData: ProfileData
    ) {
      feature_v3.value = undefined
      feature['map'] = map // Needed by CSV Exporter
      feature['label'] = feature['label'] ?? 'mnt' // Needed by CSV Exporter (= fileName)
      feature['getProfile'] = () => Promise.resolve(profileData)
      feature_v3.value = feature
    }

    return {
      feature_v3,
      activePositioning_v3,
      setProfileData,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useProfileRoutingv3Store, import.meta.hot)
  )
}
