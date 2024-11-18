import { FeatureInfo } from '@/components/info/feature-info.model'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, ShallowRef } from 'vue'

export const useFeatureInfoStore = defineStore(
  'featureInfo',
  () => {
    const content: ShallowRef<FeatureInfo[] | undefined> = shallowRef()
    const fid: ShallowRef<string | undefined> = shallowRef()

    function setContent(value: FeatureInfo[]) {
      if (!value || value.length === 0) {
        content.value = undefined
      } else {
        content.value = [...value]
      }
    }

    function clearContent() {
      content.value = undefined
    }

    function setFid(value: string) {
      fid.value = value
    }

    return {
      content,
      fid,
      setContent,
      setFid,
      clearContent,
    }
  },
  {}
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFeatureInfoStore, import.meta.hot))
}
