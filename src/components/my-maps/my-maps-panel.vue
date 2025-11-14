<script setup lang="ts">
import { ref, shallowRef, watch, nextTick } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import DrawPanel from '@/components/draw/draw-panel.vue'
import FeaturesList from '@/components/draw/features-list.vue'
import useMyMaps from '@/composables/my-maps/my-maps.composable'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useDrawStore } from '@/stores/draw.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import {
  deleteMyMap,
  fetchMyMaps,
  MyMap,
  MyMapJson,
  MyMapSaveFeatureJson,
  saveMyMapFeature,
} from '@/services/api/api-mymaps.service'

import MyMapEditForm from './my-map-edit-form.vue'
import MyMapInfo from './my-map-info.vue'
import MyMapsOpenMap from './my-maps-open-map.vue'
import MyMapConfirm from './my-map-confirm.vue'
import { EditFormModeType } from './my-maps.model'
import { useMapStore } from '@/stores/map.store'

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const appStore = useAppStore()
const mapStore = useMapStore()
const { bgLayer } = storeToRefs(mapStore)
const myMapsHelper = useMyMaps()
const { toggleAuthFormOpen, toggleShareToolbarOpen } = appStore
const { myMap } = storeToRefs(appStore)
const { authenticated } = storeToRefs(useUserManagerStore())
const drawStore = useDrawStore()
const { drawnFeaturesMyMaps: features } = storeToRefs(drawStore)

const editFormModalState = ref<EditFormModeType | undefined>(undefined) // undefined => closed
const editFormModalMyMap = shallowRef<MyMap | undefined>(undefined) // Current MyMap opened in Edit form
const openMapModalState = ref(false) // false => closed
const confirmDeleteModalState = ref<'clear' | 'delete' | undefined>(undefined) // undefined => closed
const confirmDeleteModalMyMap = ref<MyMap | undefined>(undefined)

const myMaps = shallowRef<MyMapJson[]>([]) // All user's MyMaps

function checkAuth() {
  if (!authenticated.value) {
    addNotification(t("Veuillez vous identifier afin d'accéder à vos cartes"))
    toggleAuthFormOpen(true)
    return false
  }

  return true
}

async function refreshModale() {
  myMaps.value = await fetchMyMaps()

  if (!myMaps.value.length) {
    addNotification(
      t('You have no existing Maps, please create a New Map'),
      AlertNotificationType.WARNING
    )
    return
  }

  openMapModalState.value = true
}

async function openMap() {
  if (!checkAuth()) {
    return
  }

  await refreshModale()
}

function openEditFormModal(map: MyMap | undefined, mode: EditFormModeType) {
  if (!checkAuth()) {
    return
  }

  editFormModalMyMap.value = map
  editFormModalState.value = mode
}

async function onMapUpdated(uuid: string) {
  await myMapsHelper.loadMyMap(uuid)

  if (editFormModalState.value !== EditFormModeType.EDIT) {
    addNotification(t('Nouvelle carte créée'))
  }

  editFormModalState.value = undefined
}

async function onMapSelected(uuid: string) {
  myMapsHelper.openMyMap(uuid)
  openMapModalState.value = false
}

async function onMapDeleteOpenConfirm(map: MyMap) {
  openMapModalState.value = false
  openConfirmModal(map, 'delete')
}

async function onMapConfirmedDeletion(uuid: string) {
  myMaps.value = []
  await doDeleteMap(uuid)
  await refreshModale()
}

function onClearOpenConfirm(map: MyMap) {
  openConfirmModal(map, 'clear')
}

function openConfirmModal(
  map: MyMap | undefined,
  mode: 'clear' | 'delete' | undefined
) {
  confirmDeleteModalState.value = mode
  confirmDeleteModalMyMap.value = map
}

function onConfirmed(uuid: string, mode: 'clear' | 'delete') {
  if (mode === 'delete') {
    doDeleteMap(uuid)
  } else if (mode === 'clear') {
    doClearMap(uuid)
  }
}

/**
 * Call api to delete map with uuid, used in "Open map modale" and Drodown menu
 * If succeed, if the deleted map was the current opened map, reset current opened map.
 * @param uuid
 */
async function doDeleteMap(uuid: string) {
  const deleted = await deleteMyMap(uuid)

  if (deleted) {
    confirmDeleteModalState.value = undefined

    if (uuid === myMap.value?.uuid) {
      myMapsHelper.closeMyMap()
    }

    addNotification(t('MyMap successfully deleted.'))
  } else {
    addNotification(t('Unable to delete MyMap.'), AlertNotificationType.ERROR)
  }
}

async function doClearMap(uuid: string) {
  const cleared = await myMapsHelper.clearMyMap(uuid)

  if (cleared) {
    confirmDeleteModalState.value = undefined
    drawStore.removeMyMapsFeature(uuid)
  } else {
    addNotification(t('Unable to clear MyMap.'), AlertNotificationType.ERROR)
  }
}

watch(
  editFormModalState,
  state => state === undefined && (editFormModalMyMap.value = undefined)
)

watch(
  confirmDeleteModalState,
  state => state === undefined && (confirmDeleteModalMyMap.value = undefined)
)

// Clear MyMap features on the map when the map does not exists
watch(
  myMap,
  (map, mapPrevious) =>
    !map && mapPrevious && drawStore.removeMyMapsFeature(mapPrevious.uuid)
)

watch(
  features,
  async (features, featuresOld) => {
    if (myMap.value) {
      const mapUuid = myMap.value.uuid
      const featureIds = new Set(featuresOld.map(f => f.id))
      const featuresAdded = features.filter(f => !featureIds.has(f.id))

      for (const f of featuresAdded) {
        const resp = await saveMyMapFeature(mapUuid, f.toGeoJSONString()).catch(
          e =>
            addNotification(
              t(
                'Erreur inattendue lors de la sauvegarde de votre modification.'
              ),
              AlertNotificationType.ERROR
            )
        )
        f.id = (<MyMapSaveFeatureJson>resp).id!
      }
    }
  },
  { deep: true }
)
</script>

<template>
  <SidePanelLayout
    :data-cy-value="'myMapsPanel'"
    :close-fn="() => appStore.toggleMyMapsOpen(false)"
  >
    <template v-slot:header>
      <h1>
        {{ t('My Maps', { ns: 'client' }) }}
      </h1>
    </template>

    <template v-slot:content>
      <!-- a MyMap is selected -->
      <div v-if="myMap">
        <MyMapInfo
          :myMap="myMap"
          @close="myMapsHelper.closeMyMap"
          @delete="onMapDeleteOpenConfirm"
          @clear="onClearOpenConfirm"
          @copy="map => openEditFormModal(map, EditFormModeType.COPY)"
          @edit="map => openEditFormModal(map, EditFormModeType.EDIT)"
          @new="() => openEditFormModal(undefined, EditFormModeType.CREATE)"
          @open="openMap"
          @share="() => toggleShareToolbarOpen(true)"
          @resetLayers="myMapsHelper.resetFromMyMap"
          @saveLayers="myMapsHelper.applyToMyMap"
        />
        <FeaturesList :features="features" />
      </div>
      <!-- No MyMap selected, display button to create or select one in popups -->
      <template v-else>
        <div class="text-white">
          {{ t('Create, save and share your own maps.', { ns: 'client' }) }}
        </div>

        <div class="flex justify-center flex-col items-center">
          <button class="lux-btn mt-3" @click="openMap">
            {{ t('Ouvrir une carte', { ns: 'client' }) }}
          </button>
          <button
            class="lux-btn mt-3"
            @click="openEditFormModal(undefined, EditFormModeType.CREATE)"
          >
            {{ t('Créer une nouvelle carte', { ns: 'client' }) }}
          </button>
        </div>
      </template>

      <DrawPanel />
    </template>
  </SidePanelLayout>

  <!-- Modales -->
  <MyMapConfirm
    v-if="confirmDeleteModalMyMap && confirmDeleteModalState"
    :mode="confirmDeleteModalState"
    :map="confirmDeleteModalMyMap"
    @cancel="confirmDeleteModalState = undefined"
    @confirm="onConfirmed"
  ></MyMapConfirm>

  <MyMapEditForm
    v-if="editFormModalState"
    :mode="editFormModalState"
    :map="editFormModalMyMap"
    @cancel="editFormModalState = undefined"
    @confirm="onMapUpdated"
  ></MyMapEditForm>

  <MyMapsOpenMap
    :maps="myMaps"
    v-if="openMapModalState"
    @cancel="openMapModalState = false"
    @select="onMapSelected"
    @delete="onMapConfirmedDeletion"
  ></MyMapsOpenMap>
</template>
