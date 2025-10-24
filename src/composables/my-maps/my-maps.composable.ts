import { computed, watch } from 'vue'
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
import { useUserManagerStore } from '@/stores/user-manager.store'
import { useDrawStore } from '@/stores/draw.store'

let watchersDefined = false

export default function useMyMaps() {
  const { t } = useTranslation()
  const appStore = useAppStore()
  const mapStore = useMapStore()
  const themeStore = useThemeStore()
  const { addNotification } = useAlertNotificationsStore()
  const { authenticated } = storeToRefs(useUserManagerStore())
  const { myMap, myMapId, myMapLayersChanged } = storeToRefs(appStore)
  const { layers, bgLayer } = storeToRefs(mapStore)
  const themes = useThemes()
  const { themeName } = storeToRefs(themeStore)
  const { initLayer } = useLayers()
  const { setBgLayer } = useBackgroundLayer()
  const drawStore = useDrawStore()
  const isMyMapEditable = computed(() =>
    myMap.value?.is_editable && authenticated.value
      ? myMap.value.uuid
      : undefined
  )

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
    // Also clear MyMap features on the map
    myMapId.value && drawStore.removeMyMapsFeature(myMapId.value)

    myMapId.value = undefined
    myMap.value = undefined
  }

  /**
   * Update MyMap with (app) map content (apply changes on layers/bgLayer)
   * and save MyMap changes to api
   */
  async function applyToMyMap() {
    if (myMap.value) {
      const layersToSave = layers.value.reverse()
      myMap.value.bg_layer = bgLayer.value?.name ?? 'blank'
      myMap.value.bg_opacity = 1
      myMap.value.layers = layersToSave.map(l => l.name).join(',')
      myMap.value.layers_opacity = layersToSave
        .map(l => l.opacity ?? '1')
        .join(',')
      myMap.value.layers_visibility = layersToSave.map(() => 'true').join(',') // layersVisibility: Is it usefull?
      myMap.value.layers_indices = layersToSave.map((l, i) => i).join(',')

      updateMyMap(
        myMap.value.uuid,
        myMap.value.bg_layer,
        myMap.value.bg_opacity,
        myMap.value.layers,
        myMap.value.layers_opacity,
        myMap.value.layers_visibility,
        myMap.value.layers_indices,
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
      ? myMap.value?.layers_visibility
          .split(',')
          .map(v => (v === 'false' ? false : true))
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

      // Populate map (app map) content when MyMap is loaded
      watch(myMap, myMap => myMap && resetFromMyMap())

      // Check if MyMap content differs from Map store
      watch(
        [layers, bgLayer, myMap],
        ([layers, bgLayer, myMap]) =>
          (myMapLayersChanged.value = myMap
            ? myMapCompareLayers(myMap, layers, bgLayer)
            : false),
        { immediate: true, deep: true }
      )

      watchersDefined = true
    }
  }

  return {
    isMyMapEditable,
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
  const selectedLayers = layers.map(l => l.name).join(',')
  const selectedOpacities = layers.map(l => l.opacity).join(',')

  if (
    selectedLayers !== (myMap.layers ?? '') ||
    selectedOpacities !== (myMap.layers_opacity ?? '')
  ) {
    return true
  }

  if ((bgLayer?.name ?? 'blank') !== (myMap.bg_layer ?? 'blank')) {
    // NB. myMap.bg_layer ?? 'blank' => consider "null" or "undefined" as 'blank' bg
    return true
  }

  return false
}
