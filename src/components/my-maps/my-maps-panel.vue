<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from 'i18next-vue'
import { storeToRefs } from 'pinia'

import SidePanelLayout from '@/components/common/side-panel-layout.vue'
import DrawPanel from '@/components/draw/draw-panel.vue'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useAppStore } from '@/stores/app.store'
import { useUserManagerStore } from '@/stores/user-manager.store'

import MyMapsEditForm from './my-map-edit-form.vue'

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const appStore = useAppStore()
const { toggleAuthFormOpen } = appStore
const { authenticated } = storeToRefs(useUserManagerStore())
const myMapsEditFormModalOpened = ref(false)

function clickOpenMap() {
  if (!checkAuth()) {
    return
  }

  alert('TODO call api')

  addNotification(
    t('You have no existing Maps, please create a New Map'),
    AlertNotificationType.WARNING
  )
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

      <DrawPanel />
    </template>
  </SidePanelLayout>

  <!-- Modales -->
  <MyMapsEditForm :modalOpened="myMapsEditFormModalOpened"></MyMapsEditForm>
</template>
