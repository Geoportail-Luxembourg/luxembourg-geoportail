<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { Ref, ref, computed } from 'vue'
import { FeatureInfoJSON, FeatureJSON } from '../../models'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useUserManagerStore } from '@/stores/user-manager.store'
import { storeToRefs } from 'pinia'
const { authenticated, currentUser } = storeToRefs(useUserManagerStore())

const props = defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const layers = props.layers

const { addNotification } = useAlertNotificationsStore()
const mail: Ref<string> = ref('')
const userMail = computed(() =>
  authenticated.value ? currentUser.value?.mail || '' : ''
)
mail.value = userMail.value

const { t } = useTranslation('tooltips')
const URL_FORAGE_VIRTUEL_PROD = import.meta.env.VITE_FORAGE_VIRTUEL_PROD_URL

async function generateRepport() {
  if (!mail.value && !/^\S+@\S+\.\S+$/.test(mail.value)) {
    addNotification(
      t('Veuillez saisir une adresse email valide'),
      AlertNotificationType.WARNING
    )
    return
  }

  const payload = new URLSearchParams({
    x: String(layers.features[0].geometry.coordinates[0]),
    y: String(layers.features[0].geometry.coordinates[1]),
    email: mail.value,
    staging: 'false', // Assuming staging is always false for this example
  })
  fetch(URL_FORAGE_VIRTUEL_PROD, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  })
  addNotification(
    t(
      "Votre rapport est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
      {
        email: mail.value,
        ns: 'app',
      }
    ),
    AlertNotificationType.INFO
  )
}
</script>

<template>
  <h1 class="lux-tpl-poi-title">
    {{ t(layers.layerLabel, { ns: 'layers' }) }}
  </h1>
  <div class="lux-tpl-feature-info">
    <div class="poi-feature">
      <label>{{
        t('Ici vous pouvez commander le rapport relatif au forage virtuel')
      }}</label>
      <br />
      <br />
      <div class="lux-tpl-forage-virtuel-form-container">
        <div class="lux-tpl-forage-virtuel-mail">
          <label>{{ t('Adresse Email') }}</label>
          <input type="text" v-model="mail" style="width: 165px" />
        </div>
      </div>
      <button class="lux-btn-grey" @click="generateRepport()" target="_blank">
        {{ t('Commander rapport') }}
      </button>
    </div>
  </div>
</template>
