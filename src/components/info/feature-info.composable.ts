import { useAppStore } from '@/stores/app.store'
import useMap from '@/composables/map/map.composable'
import { listen } from 'ol/events'
import { FeatureInfoService } from './feature-info.service'
import { useFeatureInfoStore } from '@/stores/feature-info.store'
import { FeatureInfo } from './feature-info.model'
import { MapBrowserEvent } from 'ol'

export default function useFeatureInfo() {
  const map = useMap().getOlMap()
  const { toggleInfoOpen } = useAppStore()
  const { setContent } = useFeatureInfoStore()

  function init() {
    const featureInfoService = new FeatureInfoService(map)

    listen(map, 'pointerup', event => {
      ;(async () => {
        const mapBrowserEvent = event as MapBrowserEvent<any>
        const content: FeatureInfo[] | undefined =
          await featureInfoService.singleclickEvent(mapBrowserEvent, false)
        if (content) {
          setContent(content)
          toggleInfoOpen(true)
        }
      })()
    })
  }

  return { init }
}
