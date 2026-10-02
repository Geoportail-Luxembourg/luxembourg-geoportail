import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useMapStore } from '@/stores/map.store'
import { fitExtentToView } from '@/composables/map/fit-extent'
import {
  fetchMyMapsLayer,
  myMapsFeaturesExtent,
} from '@/services/my-maps/my-maps-layer.service'
import { MyMapFetchFeaturesJson } from '@/services/api/api-mymaps.service'

/**
 * Read-only MyMaps as a regular map layer.
 * Editable MyMap session lives in my-maps.composable.ts.
 */
export default function useMyMapsLayer() {
  const { t } = useTranslation()
  const appStore = useAppStore()
  const mapStore = useMapStore()
  const { addNotification } = useAlertNotificationsStore()
  const { myMapIsLoading } = storeToRefs(appStore)

  async function openMyMapsLayer(uuid: string) {
    myMapIsLoading.value = true
    try {
      const layer = await fetchMyMapsLayer(uuid)
      mapStore.upsertLayers(layer)

      if (layer.geojson) {
        fitExtentToView(
          myMapsFeaturesExtent(
            JSON.parse(layer.geojson) as MyMapFetchFeaturesJson
          )
        )
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('[MyMaps] openMyMapsLayer() - ERROR', e)
      addNotification(
        t('Erreur inattendue lors du chargement de votre carte.'),
        AlertNotificationType.ERROR
      )
    } finally {
      myMapIsLoading.value = false
    }
  }

  return {
    openMyMapsLayer,
  }
}
