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

const isChecked: Ref<boolean> = ref(false)
const { t } = useLuxTranslation('tooltips')
const URL_PAG_PROD = config.pagUrl

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
  if (!isChecked.value) {
    notify(t('Veuillez accepter les termes du rapport'), 'warning')
    return
  }

  const payload = new URLSearchParams({
    email: mail.value,
    staging: 'true',
  })

  fetch(
    URL_PAG_PROD +
      '/report/' +
      joinAttributes(layers.features, 'OBJECTID', ',') +
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
        t(
          'Ici vous pouvez commander le rapport relatif aux règles urbanistiques applicables au terrain séctionné'
        )
      }}</label>
      <br />
      <br />
      <div class="lux-tpl-pag-form-container">
        <div class="lux-tpl-pag-mail">
          <label>{{ t('Adresse Email') }}</label>
          <input type="text" v-model="mail" style="width: 165px" />
        </div>
        <div class="lux-tpl-pag-checkbox">
          <input type="checkbox" v-model="isChecked" id="terms" />
          <!-- eslint-disable vue/no-v-html -- developer-authored translated
               string carrying target="_blank"; DOMPurify's default ALLOWED_ATTR
               would strip it and navigate the SPA away. -->
          <label
            for="terms"
            v-html="
              t(
                'En cochant cette case, l\'utilisateur déclare avoir lu, compris et accepté les <a target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://files.geoportail.lu/pag/Disclaimer.pdf\'>conditions générales d\'utilisation </a>de ce site web'
              )
            "
          ></label>
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
      <button class="lux-btn-grey" @click="generateRepport()" target="_blank">
        {{ t('Commander rapport') }}
      </button>
    </div>
  </div>
</template>
