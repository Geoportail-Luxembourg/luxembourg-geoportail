<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import { sanitizeUrl } from '@braintree/sanitize-url'
import ModalDialog from '@/components/common/modal-dialog.vue'
import { FeatureMeasurement } from '@/services/info/feature-info.model'

const props = defineProps<{
  measurement: FeatureMeasurement
}>()

const DOWNLOAD_PREVIEW_URL = import.meta.env.VITE_DOWNLOAD_PREVIEW_URL
const DOWNLOAD_MEASUREMENT_URL = import.meta.env.VITE_DOWNLOAD_MEASUREMENT_URL

const { t, i18next } = useTranslation()

const formats = computed<string[]>(
  () => (props.measurement.available_formats as unknown as string[]) ?? []
)

const hasPdfOrTiff = computed(() =>
  formats.value.some(
    f => f.toLowerCase() === 'pdf' || f.toLowerCase() === 'tiff'
  )
)

const previewUrl = computed(() => {
  if (!hasPdfOrTiff.value && formats.value.length > 0) {
    // Format directement affichable dans le navigateur (ex: png, jpeg…)
    // On utilise le endpoint de téléchargement en passant le format explicitement
    return sanitizeUrl(
      `${DOWNLOAD_MEASUREMENT_URL}?document_id=${props.measurement.document_id}&format=${formats.value[0]}`
    )
  }
  return sanitizeUrl(
    DOWNLOAD_PREVIEW_URL + '?document_id=' + props.measurement.document_id
  )
})
</script>

<template>
  <ModalDialog
    v-if="measurement"
    :footer="true"
    :max-height="true"
    :title="t('Prévisualisation du mesurage')"
    @close="$emit('close')"
  >
    <template v-slot:content>
      <p v-if="!measurement.isDownloadable" class="mt-2 mb-3">
        {{
          t(
            'Pour des raisons de protection de données, nous ne pouvons pas afficher les documents de la mensuration officielle en résolution complète, par contre vous avez la possibilité de les commander de manière individuelle et traçable'
          )
        }}
      </p>
      <img v-if="previewUrl" :src="previewUrl" />
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end">
        <button
          type="button"
          class="lux-btn"
          data-dismiss="modal"
          @click="$emit('close')"
        >
          {{ t('Annuler') }}
        </button>
        <a
          v-if="!measurement.is_downloadable"
          class="lux-btn ml-3"
          target="_blank"
          :href="`https://commande.geoportail.lu?&camefrom=mapv3&lang=${i18next.language}&documents=MESURAGE;EXTRAIT_MIXTE&ids=['${measurement.parcelId}']&remark=${measurement.description}`"
        >
          {{ t('Commander') }}
        </a>
        <a
          v-else
          class="lux-btn ml-3"
          target="_blank"
          :href="`${DOWNLOAD_MEASUREMENT_URL}?document_id=${measurement.document_id}&format=${formats[0]}`"
        >
          {{ t('Télécharger') }}
        </a>
      </div>
    </template>
  </ModalDialog>
</template>
