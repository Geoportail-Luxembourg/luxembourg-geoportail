import { FeatureInfoJSON } from '@/components/info/feature-info.model'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'

export const useFeatureInfoStore = defineStore(
  'featureInfo',
  () => {
    const content: ShallowRef<FeatureInfoJSON[] | undefined> = shallowRef()
    const fid: ShallowRef<string | undefined> = shallowRef()
    const isLoading: ShallowRef<boolean> = shallowRef(false)
    const infoPanelHidden: ShallowRef<boolean> = shallowRef(false)

    function setContent(value: FeatureInfoJSON[]) {
      if (!value || value.length === 0) {
        content.value = undefined
      } else {
        content.value = [...value]
        isLoading.value = false
      }
    }

    function clearContent() {
      content.value = undefined
      isLoading.value = false
    }

    function setFid(value: string) {
      fid.value = value
    }

    function setLoading(value: boolean) {
      isLoading.value = value
    }

    function setInfoPanelHidden(value: boolean) {
      infoPanelHidden.value = value
    }

    return {
      content,
      fid,
      isLoading,
      infoPanelHidden,
      setContent,
      clearContent,
      setFid,
      setLoading,
      setInfoPanelHidden,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFeatureInfoStore, import.meta.hot))
}
