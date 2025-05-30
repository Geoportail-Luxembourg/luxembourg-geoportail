import { ref } from 'vue'
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
export const useProfileInfosv3Store = defineStore(
  'profile-infos-v3',
  () => {
    /**
     * Emulate a DrawnFeature with feature coming from v3
     * @deprecated this property is meant to be removed when Drawing and Measures in v4 are fully operational
     */
    //const feature_v3: Ref<DrawnFeature | undefined> = ref(undefined)
    const features_v3 = ref<{ [id: string]: DrawnFeature }>({})

    /**
     * Activate or deactivate positioning for infos, deactivation is need for eg.
     * when infos panel is closed but the features are still on the map,
     * in this case, we need to deactivate the geomarker (as we don't see the profile anymore)
     */
    const activePositioning_v3 = ref(true)

    function setProfileData(
      map: Map,
      feature: DrawnFeature,
      profileData: ProfileData,
      id: string
    ) {
      feature['map'] = map // Needed by CSV Exporter
      feature['label'] = feature['label'] ?? 'mnt' // Needed by CSV Exporter (= fileName)
      feature['getProfile'] = () => Promise.resolve(profileData)
      features_v3.value[id] = feature
    }

    /**
     * Add a feature.
     */
    const addFeature = (feature: DrawnFeature, id: string | undefined) => {
      if (id !== undefined) {
        features_v3.value[id] = feature
      }
    }

    /**
     * get a specific feature.
     */
    const getFeature = (id: string | undefined): DrawnFeature | undefined => {
      return id !== undefined ? features_v3.value[id] : undefined
    }

    /**
     * Remove a feature.
     */
    const removeFeature = (id: string | undefined) => {
      if (id !== undefined) {
        delete features_v3.value[id]
      }
    }

    return {
      features_v3,
      activePositioning_v3,
      setProfileData,
      addFeature,
      removeFeature,
      getFeature,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useProfileInfosv3Store, import.meta.hot)
  )
}
