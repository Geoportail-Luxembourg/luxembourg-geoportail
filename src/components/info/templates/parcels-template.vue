<script setup lang="ts">
import { ref, Ref, computed, watch } from 'vue'
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

const props = defineProps<{
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
const expandedAudiences = ref<Map<string, Set<string>>>(new Map())
const expandedDocumentTypes = ref<Map<string, Set<string>>>(new Map())

// Pure computed: derives grouped structure without side effects
const groupedMeasurements = computed(() => {
  const measurements = props.layers.features?.[0]?.attributes?.measurements
  if (!measurements) return {}
  return groupMeasurementsByHierarchy(measurements)
})

// Initialise expanded state whenever layers change (or on first mount)
watch(
  groupedMeasurements,
  grouped => {
    // Reset expansion state so stale entries from previous layers are cleared
    expandedMeasurementNumbers.value = new Set()
    expandedDocumentTypes.value = new Map()

    // Ouvrir automatiquement les mesurages qui ont des documents publics
    Object.entries(grouped).forEach(([measurementNumber, audiences]) => {
      if (audiences['public']) {
        expandedMeasurementNumbers.value.add(measurementNumber)

        // Ouvrir aussi les types de documents publics
        Object.keys(audiences['public']).forEach(description => {
          const key = `${measurementNumber}_public_${description}`
          if (!expandedDocumentTypes.value.has(measurementNumber)) {
            expandedDocumentTypes.value.set(measurementNumber, new Set())
          }
          expandedDocumentTypes.value.get(measurementNumber)!.add(key)
        })
      }
    })
  },
  { immediate: true }
)

function toggleMeasurementNumber(measurementNumber: string) {
  if (expandedMeasurementNumbers.value.has(measurementNumber)) {
    expandedMeasurementNumbers.value.delete(measurementNumber)
  } else {
    expandedMeasurementNumbers.value.add(measurementNumber)
  }
}

function toggleAudience(measurementNumber: string, audience: string) {
  const key = `${measurementNumber}_${audience}`
  if (!expandedAudiences.value.has(measurementNumber)) {
    expandedAudiences.value.set(measurementNumber, new Set())
  }
  const audiences = expandedAudiences.value.get(measurementNumber)!
  if (audiences.has(key)) {
    audiences.delete(key)
  } else {
    audiences.add(key)
  }
}

function toggleDocumentType(
  measurementNumber: string,
  audience: string,
  description: string
) {
  const key = `${measurementNumber}_${audience}_${description}`
  if (!expandedDocumentTypes.value.has(measurementNumber)) {
    expandedDocumentTypes.value.set(measurementNumber, new Set())
  }
  const types = expandedDocumentTypes.value.get(measurementNumber)!
  if (types.has(key)) {
    types.delete(key)
  } else {
    types.add(key)
  }
}

function isMeasurementNumberExpanded(measurementNumber: string): boolean {
  return expandedMeasurementNumbers.value.has(measurementNumber)
}

function isAudienceExpanded(
  measurementNumber: string,
  audience: string
): boolean {
  const key = `${measurementNumber}_${audience}`
  const audiences = expandedAudiences.value.get(measurementNumber)
  return audiences ? audiences.has(key) : false
}

function isDocumentTypeExpanded(
  measurementNumber: string,
  audience: string,
  description: string
): boolean {
  const key = `${measurementNumber}_${audience}_${description}`
  const types = expandedDocumentTypes.value.get(measurementNumber)
  return types ? types.has(key) : false
}

function groupMeasurementsByHierarchy(measurements: FeatureMeasurement[]) {
  const grouped: Record<
    string,
    Record<string, Record<string, FeatureMeasurement[]>>
  > = {}

  measurements.forEach(measurement => {
    // Ignorer les documents sans measurementType
    if (!measurement.measurementType) {
      return
    }

    const measurementNumber = String(measurement.measurementNumber)
    const targetAudience = String(measurement.target_audience || 'public')
    const description = String(measurement.description)

    if (!grouped[measurementNumber]) {
      grouped[measurementNumber] = {}
    }
    if (!grouped[measurementNumber][targetAudience]) {
      grouped[measurementNumber][targetAudience] = {}
    }
    if (!grouped[measurementNumber][targetAudience][description]) {
      grouped[measurementNumber][targetAudience][description] = []
    }
    grouped[measurementNumber][targetAudience][description].push(measurement)
  })

  return grouped
}

function getAudienceOrder(audiences: string[]): string[] {
  const order = ['public', 'GO', 'ACT']
  return audiences
    .filter(a => order.includes(a))
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
}

function generateFormatPlaceholder(formatLabel: string): string {
  const W = 96
  const H = 96
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, W, H)
  ctx.strokeStyle = '#cccccc'
  ctx.strokeRect(0.5, 0.5, W - 1, H - 1)
  ctx.fillStyle = '#555555'
  ctx.font = 'bold 13px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(formatLabel.toUpperCase(), W / 2, H / 2)
  return canvas.toDataURL('image/png')
}

function getThumbnailUrl(document: FeatureMeasurement): string {
  const formats: string[] =
    (document.available_formats as unknown as string[]) ?? []
  const hasPdfOrTiff = formats.some(
    f => f.toLowerCase() === 'pdf' || f.toLowerCase() === 'tiff'
  )
  if (!hasPdfOrTiff && formats.length > 0) {
    return generateFormatPlaceholder(formats[0])
  }
  return `${THUMBNAIL_MEASUREMENT_URL}?document_id=${document.document_id}`
}

function hasPdfOrTiffFormat(document: FeatureMeasurement): boolean {
  const formats: string[] =
    (document.available_formats as unknown as string[]) ?? []
  return formats.some(
    f => f.toLowerCase() === 'pdf' || f.toLowerCase() === 'tiff'
  )
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
        >
          <span>{{ t('Occupation') }}</span> :
          {{
            translateAndjoin(
              feature.attributes.PF.occupations as string[],
              'pf'
            )
          }}
        </div>
        <div>
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
            class="flex rounded overflow-hidden text-sm mt-1"
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
            v-for="[measurementNumber, documentsByAudience] in Object.entries(
              groupedMeasurements
            ).sort((a, b) => Number(b[0]) - Number(a[0]))"
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

              <!-- Niveau 2: Audiences -->
              <div
                v-if="isMeasurementNumberExpanded(measurementNumber)"
                class="pl-6"
              >
                <template
                  v-for="audience in getAudienceOrder(
                    Object.keys(documentsByAudience)
                  )"
                  :key="audience"
                >
                  <!-- Si l'audience est "public", afficher directement les types de documents sans le header audience -->
                  <template v-if="audience === 'public'">
                    <template
                      v-for="(documents, description) in documentsByAudience[
                        audience
                      ]"
                      :key="description"
                    >
                      <div class="measurement-type-group pl-0">
                        <button
                          class="measurement-type-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded"
                          :aria-expanded="
                            isDocumentTypeExpanded(
                              measurementNumber,
                              audience,
                              description
                            )
                          "
                          @click="
                            toggleDocumentType(
                              measurementNumber,
                              audience,
                              description
                            )
                          "
                        >
                          <i
                            class="fa fa-sharp fa-solid mr-2 text-sm"
                            :class="
                              isDocumentTypeExpanded(
                                measurementNumber,
                                audience,
                                description
                              )
                                ? 'fa-caret-up'
                                : 'fa-caret-down'
                            "
                            aria-hidden="true"
                          ></i>
                          <span>{{
                            t('MESURAGE_' + description, { ns: 'layers' })
                          }}</span>
                        </button>

                        <!-- Niveau 4: Documents (mode liens) -->
                        <ul
                          v-if="
                            viewMode === 'links' &&
                            isDocumentTypeExpanded(
                              measurementNumber,
                              audience,
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
                                <!-- PDF/TIFF : ouvrir la modale de prévisualisation -->
                                <button
                                  v-if="hasPdfOrTiffFormat(document)"
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
                                <!-- Autre format : texte non cliquable -->
                                <span v-else class="text-gray-700">
                                  {{
                                    formatDate(
                                      document.date_document,
                                      'fr-FR',
                                      false
                                    )
                                  }}
                                  <span
                                    >({{
                                      (
                                        document.available_formats as unknown as string[]
                                      )[0].toUpperCase()
                                    }})</span
                                  >
                                </span>
                                <a
                                  v-if="document.is_downloadable"
                                  class="ml-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  :href="`${DOWNLOAD_MEASUREMENT_URL}?document_id=${document.document_id}&format=${(document.available_formats as unknown as string[])[0]}`"
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
                                  <i
                                    class="fa fa-download"
                                    aria-hidden="true"
                                  ></i
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

                        <!-- Niveau 4: Documents (mode miniatures) -->
                        <div
                          v-if="
                            viewMode === 'thumbnails' &&
                            isDocumentTypeExpanded(
                              measurementNumber,
                              audience,
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
                              <!-- PDF/TIFF : ouvrir la modale -->
                              <button
                                v-if="hasPdfOrTiffFormat(document)"
                                class="border border-gray-300 rounded overflow-hidden hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                :aria-label="
                                  t('Prévisualiser le mesurage du') +
                                  ' ' +
                                  formatDate(
                                    document.date_document,
                                    'fr-FR',
                                    false
                                  )
                                "
                                @click="openPreviewMesurage(document)"
                              >
                                <img
                                  :src="getThumbnailUrl(document)"
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
                              <!-- Autre format : placeholder non cliquable -->
                              <div
                                v-else
                                class="border border-gray-300 rounded overflow-hidden"
                              >
                                <img
                                  :src="getThumbnailUrl(document)"
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
                              </div>
                              <span class="text-xs text-gray-600 mt-0.5">{{
                                formatDate(
                                  document.date_document,
                                  'fr-FR',
                                  false
                                )
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
                  </template>

                  <!-- Si l'audience n'est pas "public", afficher avec le header audience -->
                  <template v-else>
                    <div class="measurement-audience-group">
                      <button
                        class="measurement-audience-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded"
                        :aria-expanded="
                          isAudienceExpanded(measurementNumber, audience)
                        "
                        @click="toggleAudience(measurementNumber, audience)"
                      >
                        <i
                          class="fa fa-sharp fa-solid mr-2 text-sm"
                          :class="
                            isAudienceExpanded(measurementNumber, audience)
                              ? 'fa-caret-up'
                              : 'fa-caret-down'
                          "
                          aria-hidden="true"
                        ></i>
                        <span>{{
                          t(`target_audience_${audience}`, audience)
                        }}</span>
                      </button>

                      <!-- Niveau 3: Types de documents -->
                      <div
                        v-if="isAudienceExpanded(measurementNumber, audience)"
                        class="pl-6"
                      >
                        <template
                          v-for="(
                            documents, description
                          ) in documentsByAudience[audience]"
                          :key="description"
                        >
                          <div class="measurement-type-group">
                            <button
                              class="measurement-type-header w-full text-left cursor-pointer hover:bg-gray-100 py-0 px-2 rounded"
                              :aria-expanded="
                                isDocumentTypeExpanded(
                                  measurementNumber,
                                  audience,
                                  description
                                )
                              "
                              @click="
                                toggleDocumentType(
                                  measurementNumber,
                                  audience,
                                  description
                                )
                              "
                            >
                              <i
                                class="fa fa-sharp fa-solid mr-2 text-sm"
                                :class="
                                  isDocumentTypeExpanded(
                                    measurementNumber,
                                    audience,
                                    description
                                  )
                                    ? 'fa-caret-up'
                                    : 'fa-caret-down'
                                "
                                aria-hidden="true"
                              ></i>
                              <span>{{
                                t('MESURAGE_' + description, { ns: 'layers' })
                              }}</span>
                            </button>

                            <!-- Niveau 4: Documents (mode liens) -->
                            <ul
                              v-if="
                                viewMode === 'links' &&
                                isDocumentTypeExpanded(
                                  measurementNumber,
                                  audience,
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
                                    <!-- PDF/TIFF : ouvrir la modale de prévisualisation -->
                                    <button
                                      v-if="hasPdfOrTiffFormat(document)"
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
                                    <!-- Autre format : texte non cliquable -->
                                    <span v-else class="text-gray-700">
                                      {{
                                        formatDate(
                                          document.date_document,
                                          'fr-FR',
                                          false
                                        )
                                      }}
                                      <span
                                        >({{
                                          (
                                            document.available_formats as unknown as string[]
                                          )[0].toUpperCase()
                                        }})</span
                                      >
                                    </span>
                                    <a
                                      v-if="document.is_downloadable"
                                      class="ml-2"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      :href="`${DOWNLOAD_MEASUREMENT_URL}?document_id=${document.document_id}&format=${(document.available_formats as unknown as string[])[0]}`"
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
                                      <i
                                        class="fa fa-download"
                                        aria-hidden="true"
                                      ></i
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

                            <!-- Niveau 4: Documents (mode miniatures) -->
                            <div
                              v-if="
                                viewMode === 'thumbnails' &&
                                isDocumentTypeExpanded(
                                  measurementNumber,
                                  audience,
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
                                  <!-- PDF/TIFF : ouvrir la modale -->
                                  <button
                                    v-if="hasPdfOrTiffFormat(document)"
                                    class="border border-gray-300 rounded overflow-hidden hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    :aria-label="
                                      t('Prévisualiser le mesurage du') +
                                      ' ' +
                                      formatDate(
                                        document.date_document,
                                        'fr-FR',
                                        false
                                      )
                                    "
                                    @click="openPreviewMesurage(document)"
                                  >
                                    <img
                                      :src="getThumbnailUrl(document)"
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
                                  <!-- Autre format : placeholder non cliquable -->
                                  <div
                                    v-else
                                    class="border border-gray-300 rounded overflow-hidden"
                                  >
                                    <img
                                      :src="getThumbnailUrl(document)"
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
                                  </div>
                                  <span class="text-xs text-gray-600 mt-0.5">{{
                                    formatDate(
                                      document.date_document,
                                      'fr-FR',
                                      false
                                    )
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
