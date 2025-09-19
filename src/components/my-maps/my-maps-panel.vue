<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import DrawPanel from '@/components/draw/draw-panel.vue'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useUserManagerStore } from '@/stores/user-manager.store'
import {
  fetchMyMap,
  fetchMyMaps,
  MyMap,
} from '@/services/api/api-mymaps.service'

import MyMapEditForm from './my-map-edit-form.vue'
import MyMapInfo from './my-map-info.vue'

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const appStore = useAppStore()
const { toggleAuthFormOpen } = appStore
const { authenticated } = storeToRefs(useUserManagerStore())
const myMapsEditFormModalOpened = ref(false)
const currentMyMapUuid = ref<string | undefined>(undefined)
const currentMyMap = shallowRef<MyMap | undefined>(undefined)

async function clickOpenMap() {
  if (!checkAuth()) {
    return
  }

  const mymaps = await fetchMyMaps()

  if (!mymaps.length) {
    addNotification(
      t('You have no existing Maps, please create a New Map'),
      AlertNotificationType.WARNING
    )
    return
  }
}

function clickCreateNewMap() {
  if (!checkAuth()) {
    return
  }

  myMapsEditFormModalOpened.value = true
}

function checkAuth() {
  if (!authenticated.value) {
    addNotification(t("Veuillez vous identifier afin d'accéder à vos cartes"))
    toggleAuthFormOpen(true)
    return false
  }

  return true
}

function onMapCreated(uuid: string) {
  addNotification(t('Nouvelle carte créée'))
  myMapsEditFormModalOpened.value = false
  currentMyMapUuid.value = uuid
}

watch(currentMyMapUuid, async uuid => {
  if (!uuid) {
    currentMyMap.value = undefined
    return
  }

  currentMyMap.value = await fetchMyMap(uuid)
})
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
      <MyMapInfo
        v-if="currentMyMapUuid && currentMyMap"
        :myMap="currentMyMap"
        @close="currentMyMapUuid = undefined"
      />
      <!-- No MyMap selected, display button to create or select one in popups -->
      <template v-else>
        <div class="text-white">
          {{ t('Create, save and share your own maps.', { ns: 'client' }) }}
        </div>

        <div class="flex justify-center flex-col items-center">
          <button class="lux-btn mt-3" @click="clickOpenMap">
            {{ t('Ouvrir une carte', { ns: 'client' }) }}
          </button>
          <button class="lux-btn mt-3" @click="clickCreateNewMap">
            {{ t('Créer une nouvelle carte', { ns: 'client' }) }}
          </button>
        </div>
      </template>

      <DrawPanel />
    </template>
  </SidePanelLayout>

  <!-- Modales -->
  <MyMapEditForm
    v-if="myMapsEditFormModalOpened"
    @cancel="() => (myMapsEditFormModalOpened = false)"
    @confirm="onMapCreated"
  ></MyMapEditForm>
</template>
