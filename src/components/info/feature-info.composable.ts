import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { FeatureInfoService } from './feature-info.service'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { FeatureInfoJSON } from './feature-info.model'
import { MapBrowserEvent } from 'ol'
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

export default function useFeatureInfo() {
  const map = useMap().getOlMap()
  const { setContent } = useFeatureInfoStore()
  const { fid } = storeToRefs(useFeatureInfoStore())

  function init() {
    const featureInfoService = new FeatureInfoService(map)

    listen(map, 'pointerup', event => {
      ;(async () => {
        const mapBrowserEvent = event as MapBrowserEvent<any>
        const content: FeatureInfoJSON[] | undefined =
          await featureInfoService.singleclickEvent(mapBrowserEvent, false)
        if (content) {
          setContent(content)
        }
      })()
    })

    watchEffect(() => {
      if (fid.value) {
        ;(async () => {
          const content: FeatureInfoJSON[] | undefined =
            await featureInfoService.getFeatureInfoById(fid.value as string)
          if (content) {
            setContent(content)
          }
        })()
      }
    })
  }

  return { init }
}
