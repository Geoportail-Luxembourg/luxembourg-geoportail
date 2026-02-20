f
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
const THUMBNAIL_MEASUREMENT_URL = import.meta.env.VITE_THUMBNAIL_MEASUREMENT_URL
const { t } = useTranslation()
const selectedMeasurement: Ref<FeatureMeasurement | undefined> = ref()
const viewMode = ref<'links' | 'thumbnails'>('links')

// Gestion de l'expansion hiérarchique
const expandedMeasurementNumbers = ref<Set<string>>(new Set())
const expandedTypes = ref<Map<string, Set<string>>>(new Map())

function toggleMeasurementNumber(measurementNumber: string) {
  if (expandedMeasurementNumbers.value.has(measurementNumber)) {
    expandedMeasurementNumbers.value.delete(measurementNumber)
  } else {
    expandedMeasurementNumbers.value.add(measurementNumber)
  }
}

function toggleMeasurementType(measurementNumber: string, description: string) {
  const key = `${measurementNumber}_${description}`
  if (!expandedTypes.value.has(measurementNumber)) {
    expandedTypes.value.set(measurementNumber, new Set())
  }
  const types = expandedTypes.value.get(measurementNumber)!
  if (types.has(key)) {
    types.delete(key)
  } else {
    types.add(key)
  }
}

function isMeasurementNumberExpanded(measurementNumber: string): boolean {
  return expandedMeasurementNumbers.value.has(measurementNumber)
}

function isMeasurementTypeExpanded(
  measurementNumber: string,
  description: string
): boolean {
  const key = `${measurementNumber}_${description}`
  const types = expandedTypes.value.get(measurementNumber)
  return types ? types.has(key) : false
}

function groupMeasurementsByHierarchy(measurements: FeatureMeasurement[]) {
  const grouped: Record<string, Record<string, FeatureMeasurement[]>> = {}

  measurements.forEach(measurement => {
    // Ignorer les documents sans measurementType
    if (!measurement.measurementType) {
      return
    }

    const measurementNumber = String(measurement.measurementNumber)
    const description = String(measurement.description)

    if (!grouped[measurementNumber]) {
      grouped[measurementNumber] = {}
    }
    if (!grouped[measurementNumber][description]) {
      grouped[measurementNumber][description] = []
    }
    grouped[measurementNumber][description].push(measurement)
  })

  return grouped
}

function openPreviewMesurage(measurement: FeatureMeasurement) {
  selectedMeasurement.value = measurement
}

function closePreviewMesurage() {
  selectedMeasurement.value = undefined
}
</script>
<style scoped>
h2 {
  font-size: 40px;
  line-height: 1;
  padding: 12px 0 12px 12px;
  margin: 0;
  text-transform: uppercase;
  color: #fff;
}
</style>
<template>
  <InfoFeatureMeasurementModale
    v-if="selectedMeasurement"
    :measurement="selectedMeasurement"
    @close="closePreviewMesurage"
  />

  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <div v-if="!feature.attributes.PF">
        {{ t('No parcel data available') }}
      </div>
      <template v-else>
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
          class="flex"
        >
          <span>{{ t('Nature') }}</span> :
          {{
            translateAndjoin(
              feature.attributes.PF.farmingTypes as string[],
              'pf'
            )
          }}
        </div>
        <div
          v-if="
            feature.attributes.PF.occupations &&
            Object.keys(feature.attributes.PF.occupations).length > 0
          "
          class="flex"
        >
          <span>{{ t('Occupation') }}</span> :
          {{
            translateAndjoin(
              feature.attributes.PF.occupations as string[],
              'pf'
            )
          }}
        </div>
        <div class="flex">
          <span>{{ t('Dernier mesurage') }}</span> :
          {{ feature.attributes.PF.measurementNumber }}
        </div>
        <div v-if="isThemeAvailable('go')">
          <a
            class="lux-btn inline-block mb-1"
            :href="`https://shop.geoportail.lu/Portail/express_mesurage/?ids=['${feature.attributes.textstring}']&camefrom=mapv3_go&lang=${i18next.language}`"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('Constitution de dossier de mesurage') }}</a
          >
        </div>
        <div
          v-if="
            isThemeAvailable('go') ||
            isThemeAvailable('prof') ||
            isThemeAvailable('municipalities')
          "
        >
          <a
            class="lux-btn inline-block mb-1"
            :href="`https://xxpfo.intranet.etat.lu/xxpfoi/detail_parcelle.do?noParcelle=${feature.attributes.textstring}`"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('Ouvrir la PF') }}</a
          >
        </div>
        <div class="mt-1 mb-1">
          <span>{{ t('Lien vers les mesurages') }}</span> :
          <div
            class="flex rounded overflow-hidden border border-gray-300 text-sm mt-1"
            role="group"
            :aria-label="t('Mode d\'affichage des mesurages')"
          >
            <button
              class="flex flex-col items-center px-3 py-1 transition-colors"
              :class="
                viewMode === 'links'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              "
              :aria-pressed="viewMode === 'links'"
              :aria-label="t('Afficher les liens')"
              @click="viewMode = 'links'"
            >
              <i class="fa fa-list" aria-hidden="true"></i>
              <span class="text-xs mt-0.5">{{ t('Liens') }}</span>
            </button>
            <button
              class="flex flex-col items-center px-3 py-1 transition-colors border-l border-gray-300"
              :class="
                viewMode === 'thumbnails'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              "
              :aria-pressed="viewMode === 'thumbnails'"
              :aria-label="t('Afficher les aperçus')"
              @click="viewMode = 'thumbnails'"
            >
              <i class="fa fa-th-large" aria-hidden="true"></i>
              <span class="text-xs mt-0.5">{{ t('Aperçus') }}</span>
            </button>
          </div>
        </div>
        <div class="measurement-hierarchy">
          <template
            v-for="(
              typesByDescription, measurementNumber
            ) in groupMeasurementsByHierarchy(feature.attributes.measurements)"
            :key="measurementNumber"
          >
            <!-- Niveau 1: Numéro de mesurage -->
            <div class="measurement-number-group">
              <button
                class="measurement-number-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded"
                :aria-expanded="isMeasurementNumberExpanded(measurementNumber)"
                @click="toggleMeasurementNumber(measurementNumber)"
              >
                <i
                  class="fa fa-sharp fa-solid mr-2 text-sm"
                  :class="
                    isMeasurementNumberExpanded(measurementNumber)
                      ? 'fa-caret-up'
                      : 'fa-caret-down'
                  "
                  aria-hidden="true"
                ></i>
                <span>{{ t('No') }} {{ measurementNumber }}</span>
              </button>

              <!-- Niveau 2: Types de mesurages -->
              <div
                v-if="isMeasurementNumberExpanded(measurementNumber)"
                class="pl-6"
              >
                <template
                  v-for="(documents, description) in typesByDescription"
                  :key="description"
                >
                  <div class="measurement-type-group">
                    <button
                      class="measurement-type-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded"
                      :aria-expanded="
                        isMeasurementTypeExpanded(
                          measurementNumber,
                          description
                        )
                      "
                      @click="
                        toggleMeasurementType(measurementNumber, description)
                      "
                    >
                      <i
                        class="fa fa-sharp fa-solid mr-2 text-sm"
                        :class="
                          isMeasurementTypeExpanded(
                            measurementNumber,
                            description
                          )
                            ? 'fa-caret-up'
                            : 'fa-caret-down'
                        "
                        aria-hidden="true"
                      ></i>
                      <span>{{ t('MESURAGE_' + description) }}</span>
                    </button>

                    <!-- Niveau 3 mode liens : liste avec dates -->
                    <ul
                      v-if="
                        viewMode === 'links' &&
                        isMeasurementTypeExpanded(
                          measurementNumber,
                          description
                        )
                      "
                      class="list-disc pl-10 mt-0"
                    >
                      <template
                        v-for="document in documents"
                        :key="document.document_id"
                      >
                        <li>
                          <template v-if="document.document_id">
                            <button
                              class="cursor-pointer text-blue-600 hover:underline"
                              @click="openPreviewMesurage(document)"
                            >
                              {{
                                formatDate(
                                  document.date_document,
                                  'fr-FR',
                                  false
                                )
                              }}
                            </button>
                            <a
                              v-if="document.is_downloadable"
                              class="ml-2"
                              target="_blank"
                              rel="noopener noreferrer"
                              :href="`${DOWNLOAD_MEASUREMENT_URL}?document_id=${document.document_id}`"
                              :aria-label="
                                t('Télécharger le mesurage du') +
                                ' ' +
                                formatDate(
                                  document.date_document,
                                  'fr-FR',
                                  false
                                )
                              "
                            >
                              <i class="fa fa-download" aria-hidden="true"></i
                            ></a>
                          </template>
                          <template v-else>
                            <span class="text-gray-500">{{
                              t('Mesurage non disponible')
                            }}</span>
                          </template>
                        </li>
                      </template>
                    </ul>

                    <!-- Niveau 3 mode miniatures : grille d'images -->
                    <div
                      v-if="
                        viewMode === 'thumbnails' &&
                        isMeasurementTypeExpanded(
                          measurementNumber,
                          description
                        )
                      "
                      class="flex flex-wrap gap-2 pl-4 mt-1"
                    >
                      <template
                        v-for="document in documents"
                        :key="document.document_id"
                      >
                        <div
                          v-if="document.document_id"
                          class="flex flex-col items-center"
                        >
                          <button
                            class="border border-gray-300 rounded overflow-hidden hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            :aria-label="
                              t('Prévisualiser le mesurage du') +
                              ' ' +
                              formatDate(document.date_document, 'fr-FR', false)
                            "
                            @click="openPreviewMesurage(document)"
                          >
                            <img
                              :src="`${THUMBNAIL_MEASUREMENT_URL}?document_id=${document.document_id}`"
                              :alt="
                                t('Aperçu mesurage du') +
                                ' ' +
                                formatDate(
                                  document.date_document,
                                  'fr-FR',
                                  false
                                )
                              "
                              class="w-24 h-24 object-cover"
                              loading="lazy"
                            />
                          </button>
                          <span class="text-xs text-gray-600 mt-0.5">{{
                            formatDate(document.date_document, 'fr-FR', false)
                          }}</span>
                        </div>
                        <div v-else class="flex items-center">
                          <span class="text-gray-500 text-sm">{{
                            t('Mesurage non disponible')
                          }}</span>
                        </div>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
        <a
          class="lux-btn inline-block mb-1"
          :href="`https://historique.geoportail.lu/?id=${feature.attributes.textstring}`"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t('Historique de la parcelle') }}</a
        >
        <a
          class="lux-btn inline-block mb-1"
          :href="`https://commande.geoportail.lu/?ids=['${feature.attributes.textstring}']&camefrom=mapv3&lang=${i18next.language}`"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t('Commander un extrait') }}</a
        >
      </template>
    </template>
  </InfoFeatureLayout>
</template>
