<script setup lang="ts">
import { ref, Ref } from 'vue'
import i18next from 'i18next'
import { useTranslation } from 'i18next-vue'
import {
  FeatureInfoJSON,
  FeatureMeasurement,
} from '@/services/info/feature-info.model'
import { formatDate } from '@/services/common/formatting.utils'
import { isThemeAvailable, translateAndjoin } from './template-utilities'
import InfoFeatureLayout from '../info-feature-layout.vue'
import InfoFeatureMeasurementModale from '../info-feature-measurement-modale.vue'

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()

const DOWNLOAD_MEASUREMENT_URL = import.meta.env.VITE_DOWNLOAD_MEASUREMENT_URL
const { t } = useTranslation()
const selectedMeasurement: Ref<FeatureMeasurement | undefined> = ref()

function openPreviewMesurage(measurement: FeatureMeasurement) {
  selectedMeasurement.value = measurement
}

function closePreviewMesurage() {
  selectedMeasurement.value = undefined
}
</script>

<template>
  <InfoFeatureMeasurementModale
    v-if="selectedMeasurement"
    :measurement="selectedMeasurement"
    @close="closePreviewMesurage"
  />

  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h2>
        {{ feature.attributes.PF.mainNumber }}/{{
          feature.attributes.PF.additionalNumber
        }}
      </h2>
      <span>{{ t('Commune') }}</span> : {{ feature.attributes.PF.townName
      }}<br />
      <span>{{ t('Section') }}</span> :
      {{ feature.attributes.PF.sectionDesignation }}<br />
      <span>{{ t('Numero cadastral') }}</span> :
      {{ feature.attributes.PF.mainNumber }}/{{
        feature.attributes.PF.additionalNumber
      }}<br />
      <span>{{ t('Contenance') }}</span> : {{ feature.attributes.PF.capacity
      }}<br />
      <span>{{ t('Lieudit') }}</span> : {{ feature.attributes.PF.locality
      }}<br />
      <div
        v-if="
          feature.attributes.PF.farmingTypes &&
          Object.keys(feature.attributes.PF.farmingTypes).length > 0
        "
      >
        <span>{{ t('Nature') }}</span> :
        {{
          translateAndjoin(
            feature.attributes.PF.farmingTypes as string[],
            'pf'
          )
        }}<br />
      </div>
      <div
        v-if="
          feature.attributes.PF.occupations &&
          Object.keys(feature.attributes.PF.occupations).length > 0
        "
      >
        <span>{{ t('Occupation') }}</span> :
        {{
          translateAndjoin(feature.attributes.PF.occupations as string[], 'pf')
        }}<br />
      </div>
      <span>{{ t('Dernier mesurage') }}</span> :
      {{ feature.attributes.PF.measurementNumber }}<br />
      <div v-if="isThemeAvailable('go')">
        <a
          class="lux-btn"
          :href="`https://shop.geoportail.lu/Portail/express_mesurage/?ids=['${feature.attributes.textstring}']&camefrom=mapv3_go&lang=${i18next.language}`"
          target="_blank"
          >{{ t('Constitution de dossier de mesurage') }}</a
        ><br />
      </div>
      <div
        v-if="
          isThemeAvailable('go') ||
          isThemeAvailable('prof') ||
          isThemeAvailable('municipalities')
        "
      >
        <a
          class="lux-btn"
          :href="`https://xxpfo.intranet.etat.lu/xxpfoi/detail_parcelle.do?noParcelle=${feature.attributes.textstring}`"
          target="_blank"
          >{{ t('Ouvrir la PF') }}</a
        ><br />
      </div>
      <span>{{ t('Lien vers les mesurages') }}</span> :
      <ul class="list-disc pl-6">
        <template
          v-for="measurement in feature.attributes.measurements"
          :key="measurement.measurementNumber"
        >
          <li>
            <template v-if="measurement.document_id">
              <a
                class="cursor-pointer"
                target="_blank"
                @click="openPreviewMesurage(measurement)"
                >No {{ measurement.measurementNumber }}
                {{ t('MESURAGE_' + measurement.description) }}
                {{ formatDate(measurement.date_document) }}</a
              >
              <a
                v-if="measurement.is_downloadable"
                target="_blank"
                :href="`${DOWNLOAD_MEASUREMENT_URL}?document_id=${measurement.document_id}`"
              >
                <i class="fa fa-download" aria-hidden="true"></i
              ></a>
            </template>

            <template v-else>
              <span>{{ t('Mesurage non disponible') }}</span> :
              {{ measurement.measurementNumber }}
            </template>
          </li>
        </template>
      </ul>
      <br />
      <a
        class="lux-btn inline-block mb-1"
        :href="`https://historique.geoportail.lu/?id=${feature.attributes.textstring}`"
        target="_blank"
        >{{ t('Historique de la parcelle') }}</a
      ><br />
      <a
        class="lux-btn inline-block mb-1"
        :href="`https://commande.geoportail.lu/?ids=['${feature.attributes.textstring}']&camefrom=mapv3&lang=${i18next.language}`"
        target="_blank"
        >{{ t('Commander un extrait') }}</a
      >
    </template>
  </InfoFeatureLayout>
</template>
