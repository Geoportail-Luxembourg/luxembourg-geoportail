<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { Ref, ref, computed } from 'vue'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
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

const { t } = useTranslation()
const URL_PDS_PROD = import.meta.env.VITE_PDS_PROD_URL

function joinAttributes(features: any, attr: string, sep: string) {
  return features
    .map(function (feature: any) {
      return feature.attributes[attr]
    })
    .join(sep)
}

async function generateRepport() {
  if (!mail.value && !/^\S+@\S+\.\S+$/.test(mail.value)) {
    addNotification(
      t('Veuillez saisir une adresse email valide'),
      AlertNotificationType.WARNING
    )
    return
  }

  const payload = new URLSearchParams({
    email: mail.value,
    staging: 'false', // Assuming staging is always false for this example
  })

  fetch(
    URL_PDS_PROD +
      '/report/' +
      joinAttributes(layers.features, 'textstring', ',') +
      '.pdf',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload,
    }
  )
  addNotification(
    t(
      "Votre attestation est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
      {
        email: mail.value,
        ns: 'client',
      }
    ),
    AlertNotificationType.INFO
  )
}
</script>
<style scoped>
.pds-form-container {
  margin-left: 20px;
}
.pds-form-container label {
  display: inline;
}
.pds-mail {
  margin-bottom: 10px;
}
</style>
<template>
  <h1 class="lux-poi-title">
    {{ t(layers.layerLabel) }}
  </h1>
  <div class="lux-feature-info">
    <div class="poi-feature">
      <label>{{
        t(
          'Ici vous pouvez commander l\'attestation "plans directeurs sectoriels" par rapport au terrain séctionné'
        )
      }}</label>
      <br />
      <br />
      <div class="pds-form-container">
        <div class="pds-mail">
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
