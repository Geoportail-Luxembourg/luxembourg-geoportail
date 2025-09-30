import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { MyMap } from '@/stores/app.store.model'
import { useThemeStore } from '@/stores/config.store'
import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { fetchMyMap, updateMyMap } from '@/services/api/api-mymaps.service'
import useThemes from '@/composables/themes/themes.composable'
import useLayers from '@/composables/layers/layers.composable'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'

let watchersDefined = false

export default function useMyMaps() {
  const { t } = useTranslation()
  const appStore = useAppStore()
  const mapStore = useMapStore()
  const themeStore = useThemeStore()
  const { addNotification } = useAlertNotificationsStore()
  const { myMap, myMapId, myMapLayersChanged } = storeToRefs(appStore)
  const { layers, bgLayer } = storeToRefs(mapStore)
  const themes = useThemes()
  const { themeName } = storeToRefs(themeStore)
  const { initLayer } = useLayers()
  const { setBgLayer } = useBackgroundLayer()

  async function loadMyMap(uuid: string) {
    try {
      myMap.value = await fetchMyMap(uuid)
    } catch (e) {
      addNotification(
        t('Erreur inattendue lors du chargement de votre carte.'),
        AlertNotificationType.ERROR
      )
    }
  }

  function openMyMap(uuid: string) {
    myMapId.value = uuid
  }

  function closeMyMap() {
    myMapId.value = undefined
    myMap.value = undefined
  }

  /**
   * Update MyMap with (app) map content (apply changes on layers/bgLayer)
   */
  async function applyToMyMap() {
    if (myMap.value) {
      updateMyMap(
        myMap.value?.uuid,
        bgLayer.value?.name ?? '',
        1,
        layers.value.map(l => l.name).join(','),
        layers.value.map(l => l.opacity ?? '1').join(','),
        layers.value.map(() => '1').join(','),
        layers.value.map((l, i) => i).join(','), // layersVisibility: Is it usefull?
        themeName.value
      ).catch(() =>
        addNotification(
          t('Erreur inattendue lors de la mise à jour de votre carte.'),
          AlertNotificationType.ERROR
        )
      )
    }
  }

  /**
   * Update the (app) map with the MyMap content: layers and bgLayer
   */
  function resetFromMyMap() {
    // Set background layer, same as in MyMap definition
    setBgLayer(undefined, myMap.value?.bg_layer)

    // Load layers from MyMaps definition and set layers to the map
    const myOpacities = myMap.value?.layers_opacity
      ? myMap.value?.layers_opacity.split(',').map(o => parseInt(o, 10))
      : []
    const myVisibilities = myMap.value?.layers_visibility
      ? myMap.value?.layers_visibility.split(',').map(v => parseInt(v, 10))
      : []
    const myLayers: Layer[] = myMap.value?.layers
      ? myMap.value?.layers
          .split(',')
          .map((lName, index) => {
            const l = themes.findByName(lName.trim())

            if (l) {
              const layer = initLayer(l as unknown as Layer)

              layer.opacity =
                myVisibilities[index] ?? 1 === 1 ? myOpacities[index] : 0

              return layer
            }

            return undefined
          })
          .filter(l => l !== undefined)
      : []

    mapStore.removeAllLayers()
    mapStore.addLayers(...myLayers)
  }

  function init() {
    if (!watchersDefined) {
      // Populate MyMap object whenever MyMap uuid changes
      watch(myMapId, async uuid => uuid && loadMyMap(uuid), { immediate: true })

      // Check if MyMap content difers from Map store
      watch(
        [layers, bgLayer],
        ([layers, bgLayer]) =>
          myMap.value &&
          (myMapLayersChanged.value = myMapCompareLayers(
            myMap.value,
            layers,
            bgLayer
          )),
        { immediate: true }
      )

      watchersDefined = true
    }
  }

  return {
    init,
    loadMyMap,
    closeMyMap,
    openMyMap,
    applyToMyMap,
    resetFromMyMap,
  }
}

function myMapCompareLayers(
  myMap: MyMap,
  layers: Layer[],
  bgLayer: Layer | null | undefined
) {
  const selectedLayers = layers
    .map(l => l.name)
    .reverse()
    .join(',')
  const selectedOpacities = layers
    .map(l => l.opacity)
    .reverse()
    .join(',')

  if (
    selectedLayers !== (myMap.layers ?? '') ||
    selectedOpacities !== (myMap.layers_opacity ?? '')
  ) {
    return true
  }

  if (bgLayer?.name ?? null !== myMap.bg_layer) {
    return true
  }

  return false
}
