<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const { t } = useTranslation()
const { addNotification } = useAlertNotificationsStore()
const mail: Ref<string> = ref('')

function generateRepport() {
  if (!mail.value && !/^\S+@\S+\.\S+$/.test(mail.value)) {
    addNotification(
      t('Veuillez saisir une adresse email valide'),
      AlertNotificationType.WARNING
    )

    return
  }

  // TODO:
  // this.$http_.post(
  //   this.pdsUrl_ +
  //     '/report/' +
  //     this['ids'] +
  //     '.pdf?email=' +
  //     this.mail_ +
  //     '&staging=' +
  //     this['staging'],
  //   {}
  // )

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

<template>
  <label>{{
    t(
      'Ici vous pouvez commander l\'attestation "plans directeurs sectoriels" par rapport au terrain séctionné'
    )
  }}</label>

  <br />
  <br />
  <table>
    <tbody>
      <tr>
        <td width="20px"></td>
        <td colspan="2">
          <label>{{ t('Adresse Email') }}</label>
          <input type="text" v-model="mail" style="width: 165px" />
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <button class="lux-btn-grey" @click="generateRepport">
    {{ t('Commander rapport') }}
  </button>
</template>
