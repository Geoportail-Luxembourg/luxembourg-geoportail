<script setup lang="ts">
import { useLuxTranslation } from '../../i18n'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { FeatureInfoJSON, FeatureJSON } from '../../models'
import { useLuxTplContext } from '../../context'

const props = defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const layers = props.layers

const { config, user, notify } = useLuxTplContext()
const mail: Ref<string> = ref('')
const userMail = computed(() => user.value?.mail || '')
mail.value = userMail.value

const { t } = useLuxTranslation('tooltips')
const URL_PDS_PROD = config.pdsUrl

function joinAttributes(features: any, attr: string, sep: string) {
  return features
    .map(function (feature: any) {
      return feature.attributes[attr]
    })
    .join(sep)
}

async function generateRepport() {
  if (!mail.value && !/^\S+@\S+\.\S+$/.test(mail.value)) {
    notify(t('Veuillez saisir une adresse email valide'), 'warning')
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
  notify(
    t(
      "Votre attestation est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
      {
        email: mail.value,
        ns: 'app',
      }
    ),
    'info'
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
        t(
          'Ici vous pouvez commander l\'attestation "plans directeurs sectoriels" par rapport au terrain séctionné'
        )
      }}</label>
      <br />
      <br />
      <div class="lux-tpl-pds-form-container">
        <div class="lux-tpl-pds-mail">
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
