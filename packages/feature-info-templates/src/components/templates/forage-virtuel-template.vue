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
const URL_FORAGE_VIRTUEL_PROD = config.forageVirtuelUrl

async function generateRepport() {
  if (!mail.value && !/^\S+@\S+\.\S+$/.test(mail.value)) {
    notify(t('Veuillez saisir une adresse email valide'), 'warning')
    return
  }

  const payload = new URLSearchParams({
    x: String(layers.features[0].geometry.coordinates[0]),
    y: String(layers.features[0].geometry.coordinates[1]),
    email: mail.value,
    staging: 'false', // Assuming staging is always false for this example
  })
  fetch(URL_FORAGE_VIRTUEL_PROD ?? '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload,
  })
  notify(
    t(
      "Votre rapport est en train d'être généré. Un email vous sera envoyé à l'adresse {{email}} dès qu'il sera disponible",
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
